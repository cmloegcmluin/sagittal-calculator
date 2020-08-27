import { Id } from "../../../../src/general"
import { SagittalComma, SymbolLongAscii } from "../../../../src/notations"
import { JiSymbol, Level, Mina } from "../../../../src/notations/ji"
import { computeSecondaryCommaZone } from "../../../../src/notations/ji/secondaryCommaZone"
import { SecondaryCommaZone } from "../../../../src/notations/ji/types"
import { SymbolSet, SymbolUnicode } from "../../../../src/notations/types"

describe("secondaryCommaZone", () => {
    it("returns the min and max cents of where secondary commas are represented by the given symbol, i.e. its capture zone at its introducing level", () => {
        const symbol: JiSymbol = {
            id: 82 as Id<JiSymbol>,
            ascii: "/|~" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.HIGH,
            lowestSymbolSet: SymbolSet.PROMETHEAN,
            mina: 78 as Mina,
            primaryCommaId: 82 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            37.30947973834720,
            38.06194034977850,
        ] as SecondaryCommaZone
        expect(actual).toEqual(expected)
    })

    it("another example, at the Extreme level", () => {
        const symbol: JiSymbol = {
            id: 83 as Id<JiSymbol>,
            ascii: ",,(|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.EXTREME,
            lowestSymbolSet: SymbolSet.OLYMPIAN,
            mina: 78.39014554523920 as Mina,
            primaryCommaId: 83 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            38.06194034977850,
            38.29315717024330,
        ] as SecondaryCommaZone
        expect(actual).toEqual(expected)
    })

    it("another example, at the Medium level", () => {
        const symbol: JiSymbol = {
            id: 85 as Id<JiSymbol>,
            ascii: "(|(" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            lowestSymbolSet: SymbolSet.ATHENIAN,
            mina: 80 as Mina,
            primaryCommaId: 85 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            35.11809146436650,
            40.26051203403560,
        ] as SecondaryCommaZone
        expect(actual).toEqual(expected)
    })

    it("works for the initial symbol", () => {
        const symbol: JiSymbol = {
            id: 0 as Id<JiSymbol>,
            ascii: "|" as SymbolLongAscii,
            unicode: "" as SymbolUnicode,
            introducingLevel: Level.MEDIUM,
            mina: 0 as Mina,
            lowestSymbolSet: SymbolSet.SPARTAN,
            primaryCommaId: 0 as Id<SagittalComma>,
            elements: [],
        }

        const actual = computeSecondaryCommaZone(symbol)

        const expected = [
            0,
            2.74024427456787,
        ] as SecondaryCommaZone
        expect(actual).toEqual(expected)
    })
})
