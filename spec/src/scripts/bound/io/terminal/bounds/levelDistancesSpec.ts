import { Multiplier } from "../../../../../../../src/general"
import { Formatted } from "../../../../../../../src/general/io"
import { Cents } from "../../../../../../../src/general/music"
import { Ina, Level } from "../../../../../../../src/sagittal/notations/ji"
import { AnalyzedHistory } from "../../../../../../../src/scripts/bound/analyzedHistory"
import { extractLevelDistances } from "../../../../../../../src/scripts/bound/io/terminal/bounds/levelDistances"
import { analyzedEventFixture, analyzedHistoryFixture } from "../../../../../../helpers/src/scripts/bound/fixtures"

describe("extractLevelDistances", () => {
    it("returns an array of the distances of each event (from the previous event)", () => {
        const analyzedHistory: AnalyzedHistory = {
            ...analyzedHistoryFixture,
            events: [
                { ...analyzedEventFixture, level: Level.MEDIUM, distance: 0.00000 as Cents },
                { ...analyzedEventFixture, level: Level.HIGH, distance: 4.44444444 as Cents },
                { ...analyzedEventFixture, level: Level.ULTRA, distance: 3.33333333 as Cents },
                { ...analyzedEventFixture, level: Level.EXTREME, distance: 2.222222 as Cents },
                { ...analyzedEventFixture, level: Level.INSANE, distance: 1.111111 as Cents },
            ],
        }

        const actual = extractLevelDistances(analyzedHistory)

        const expected = [
            "  4.444",
            "  3.333",
            "  2.222",
            "  1.111",
        ] as Array<Formatted<Cents>>
        expect(actual).toEqual(expected)
    })

    it("works when a level is skipped", () => {
        const analyzedHistory = {
            ...analyzedHistoryFixture,
            events: [
                { ...analyzedEventFixture, level: Level.MEDIUM, distance: 0.00000 as Cents },
                { ...analyzedEventFixture, level: Level.HIGH, distance: 4.44444444 as Cents },
                { ...analyzedEventFixture, level: Level.EXTREME, distance: 2.222222 as Cents },
                { ...analyzedEventFixture, level: Level.INSANE, distance: 1.111111 as Cents },
            ],
        }

        const actual = extractLevelDistances(analyzedHistory)

        const expected = [
            "  4.444",
            "  2.222",
            "",
            "  1.111",
        ] as Array<Formatted<Cents>>
        expect(actual).toEqual(expected)
    })

    describe("ina distances", () => {
        it("returns an array of the ina-distances of each event (from the previous event)", () => {
            const analyzedHistory: AnalyzedHistory = {
                ...analyzedHistoryFixture,
                events: [
                    { ...analyzedEventFixture, level: Level.MEDIUM, inaDistance: 0.00000 as Multiplier<Ina> },
                    { ...analyzedEventFixture, level: Level.HIGH, inaDistance: 4.44444444 as Multiplier<Ina> },
                    { ...analyzedEventFixture, level: Level.ULTRA, inaDistance: 3.33333333 as Multiplier<Ina> },
                    { ...analyzedEventFixture, level: Level.EXTREME, inaDistance: 2.222222 as Multiplier<Ina> },
                    { ...analyzedEventFixture, level: Level.INSANE, inaDistance: 1.111111 as Multiplier<Ina> },
                ],
            }

            const actual = extractLevelDistances(analyzedHistory, { ina: true })

            const expected = [
                "  4.444",
                "  3.333",
                "  2.222",
                "  1.111",
            ] as Array<Formatted<Multiplier<Ina>>>
            expect(actual).toEqual(expected)
        })

        it("works when a level is skipped", () => {
            const analyzedHistory: AnalyzedHistory = {
                ...analyzedHistoryFixture,
                events: [
                    { ...analyzedEventFixture, level: Level.MEDIUM, inaDistance: 0.00000 as Multiplier<Ina> },
                    { ...analyzedEventFixture, level: Level.HIGH, inaDistance: 4.44444444 as Multiplier<Ina> },
                    { ...analyzedEventFixture, level: Level.EXTREME, inaDistance: 2.222222 as Multiplier<Ina> },
                    { ...analyzedEventFixture, level: Level.INSANE, inaDistance: 1.111111 as Multiplier<Ina> },
                ],
            }

            const actual = extractLevelDistances(analyzedHistory, { ina: true })

            const expected = [
                "  4.444",
                "  2.222",
                "",
                "  1.111",
            ] as Array<Formatted<Multiplier<Ina>>>
            expect(actual).toEqual(expected)
        })
    })
})
