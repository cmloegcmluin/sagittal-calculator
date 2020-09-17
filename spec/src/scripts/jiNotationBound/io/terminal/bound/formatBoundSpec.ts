import { Cents, Id, Integer, Rank } from "../../../../../../../src/general"
import { JiNotationBound } from "../../../../../../../src/sagittal/notations/ji"
import { JiNotationBoundAnalysis } from "../../../../../../../src/scripts/jiNotationBound/bound"
import { EventAnalysis } from "../../../../../../../src/scripts/jiNotationBound/history"
import { formatJiNotationBound } from "../../../../../../../src/scripts/jiNotationBound/io"
import {
    jiNotationBoundAnalysisFixture,
    jiNotationBoundFixture,
} from "../../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("formatJiNotationBound", (): void => {
    it("returns a string which is a multi-line, properly indented rendition of the JI notation bound analysis, as well as identifying information for the JI notation bound", (): void => {
        const jiNotationBound = {
            ...jiNotationBoundFixture,
            cents: 5.447635 as Cents,
            id: 10 as Id<JiNotationBound>,
        }
        const jiNotationBoundAnalysis: JiNotationBoundAnalysis = {
            ...jiNotationBoundAnalysisFixture,
            bestRank: 2 as Integer & Rank<EventAnalysis>,
        }

        const actual = formatJiNotationBound(jiNotationBoundAnalysis, { jiNotationBound })

        const expected = [
            `{`,
            `    "extremeLevelLesserBoundedSymbolClass": ",,|(",`,
            `    "extremeLevelGreaterBoundedSymbolClass": ",|(",`,
            `    "cents": 5.447635,`,
            `    "boundedSymbolClassAnalyses": {`,
            `        "id": 10,`,
            `        "extreme": [`,
            `            {`,
            `                "id": 10,`,
            `                "distance": 0.20389718131741752,`,
            `                "inaDistance": 0.417891900562867,`,
            `                "smallestSymbolSubset": "olympian",`,
            `                "elements": [`,
            `                    ",,|",`,
            `                    "|("`,
            `                ],`,
            `                "minaName": "10",`,
            `                "ascii": ",,|(",`,
            `                "unicode": "",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "primaryCommaAnalysis": {`,
            `                    "id": 10,`,
            `                    "monzo": [`,
            `                        5,`,
            `                        -3,`,
            `                        0,`,
            `                        0,`,
            `                        1,`,
            `                        -1`,
            `                    ],`,
            `                    "ratio": [`,
            `                        352,`,
            `                        351`,
            `                    ],`,
            `                    "cents": 4.925277999283972,`,
            `                    "primeLimit": 13,`,
            `                    "apotomeSlope": -3.3032673101806025,`,
            `                    "twoThreeFreeClass": {`,
            `                        "monzo": [`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            1`,
            `                        ]`,
            `                    },`,
            `                    "twoThreeFreeSopfr": 24,`,
            `                    "n2d3p9": 34.425925925925924,`,
            `                    "name": "11/13k"`,
            `                }`,
            `            },`,
            `            {`,
            `                "id": 11,`,
            `                "distance": 0.3184601112166945,`,
            `                "inaDistance": 0.6526912254006633,`,
            `                "smallestSymbolSubset": "olympian",`,
            `                "elements": [`,
            `                    ",|",`,
            `                    "|("`,
            `                ],`,
            `                "minaName": "11",`,
            `                "ascii": ",|(",`,
            `                "unicode": "",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "primaryCommaAnalysis": {`,
            `                    "id": 11,`,
            `                    "monzo": [`,
            `                        -11,`,
            `                        6,`,
            `                        0,`,
            `                        0,`,
            `                        -1,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        1`,
            `                    ],`,
            `                    "ratio": [`,
            `                        22599,`,
            `                        22528`,
            `                    ],`,
            `                    "cents": 5.447635291818084,`,
            `                    "primeLimit": 31,`,
            `                    "apotomeSlope": 5.664569248266845,`,
            `                    "twoThreeFreeClass": {`,
            `                        "monzo": [`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            1`,
            `                        ]`,
            `                    },`,
            `                    "twoThreeFreeSopfr": 42,`,
            `                    "n2d3p9": 195.75925925925924,`,
            `                    "name": "31/11k"`,
            `                }`,
            `            }`,
            `        ],`,
            `        "insane": [`,
            `            {`,
            `                "id": 10,`,
            `                "distance": 0.20389718131741752,`,
            `                "inaDistance": 1.4509637234135597,`,
            `                "smallestSymbolSubset": "olympian",`,
            `                "elements": [`,
            `                    ",,|",`,
            `                    "|("`,
            `                ],`,
            `                "minaName": "10",`,
            `                "ascii": ",,|(",`,
            `                "unicode": "",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "primaryCommaAnalysis": {`,
            `                    "id": 10,`,
            `                    "monzo": [`,
            `                        5,`,
            `                        -3,`,
            `                        0,`,
            `                        0,`,
            `                        1,`,
            `                        -1`,
            `                    ],`,
            `                    "ratio": [`,
            `                        352,`,
            `                        351`,
            `                    ],`,
            `                    "cents": 4.925277999283972,`,
            `                    "primeLimit": 13,`,
            `                    "apotomeSlope": -3.3032673101806025,`,
            `                    "twoThreeFreeClass": {`,
            `                        "monzo": [`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            1`,
            `                        ]`,
            `                    },`,
            `                    "twoThreeFreeSopfr": 24,`,
            `                    "n2d3p9": 34.425925925925924,`,
            `                    "name": "11/13k"`,
            `                }`,
            `            },`,
            `            {`,
            `                "id": 11,`,
            `                "distance": 0.3184601112166945,`,
            `                "inaDistance": 2.2662111645885687,`,
            `                "smallestSymbolSubset": "olympian",`,
            `                "elements": [`,
            `                    ",|",`,
            `                    "|("`,
            `                ],`,
            `                "minaName": "11",`,
            `                "ascii": ",|(",`,
            `                "unicode": "",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "primaryCommaAnalysis": {`,
            `                    "id": 11,`,
            `                    "monzo": [`,
            `                        -11,`,
            `                        6,`,
            `                        0,`,
            `                        0,`,
            `                        -1,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        0,`,
            `                        1`,
            `                    ],`,
            `                    "ratio": [`,
            `                        22599,`,
            `                        22528`,
            `                    ],`,
            `                    "cents": 5.447635291818084,`,
            `                    "primeLimit": 31,`,
            `                    "apotomeSlope": 5.664569248266845,`,
            `                    "twoThreeFreeClass": {`,
            `                        "monzo": [`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            1`,
            `                        ]`,
            `                    },`,
            `                    "twoThreeFreeSopfr": 42,`,
            `                    "n2d3p9": 195.75925925925924,`,
            `                    "name": "31/11k"`,
            `                }`,
            `            }`,
            `        ]`,
            `    },`,
            `    "lesserBoundedMinaName": "10",`,
            `    "greaterBoundedMinaName": "11"`,
            `}`,
            `{`,
            `    "bestPossibleHistory": {`,
            `        "eventAnalyses": [],`,
            `        "cents": 0,`,
            `        "rank": 0,`,
            `        "score": 0,`,
            `        "totalDistance": 0,`,
            `        "exact": false,`,
            `        "totalInaDistance": 0,`,
            `        "possible": false,`,
            `        "tinaError": 0,`,
            `        "initialPositionTinaDistance": 0`,
            `    },`,
            `    "bestRank": 2,`,
            `    "initialPosition": 0,`,
            `    "initialPositionTinaDistance": 0,`,
            `    "bestPossibleHistoryTotalDistance": 0,`,
            `    "bestPossibleHistoryTotalInaDistance": 0,`,
            `    "historyConsolidation": {},`,
            `    "possibleHistoryCount": 0`,
            `}`,
        ].join("\n")

        // console.log("actual", actual)
        // console.log("expected", expected)

        expect(actual).toEqual(expected)
    })
})
