import { Cents, Comma, Id, Monzo, Name, Prime, Ratio, Row, Sopfr, TwoThreeFreeClass } from "../../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, SymbolClass } from "../../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeNotatingCommasRow } from "../../../../../../src/scripts/jiPitch/io/row"

describe("computeNotatingCommasRow", (): void => {
    // This comma is made up and internally inconsistent.
    // Only the name is important as it is used to find the symbol.
    const commaAnalysisWithMaybeSagittalSymbolClassId: CommaAnalysis & { symbolClassId?: Id<SymbolClass> } = {
        symbolClassId: 44 as Id<SymbolClass>,
        cents: 11.2 as Cents,
        monzo: [0, -1, 1] as Monzo,
        ratio: [5, 4] as Ratio,
        name: "1/5C" as Name<Comma>,
        primeLimit: 14 as Prime,
        apotomeSlope: 8.2 as ApotomeSlope,
        twoThreeFreeSopfr: 13 as Sopfr<{ rough: 5 }>,
        twoThreeFreeClass: { monzo: [0, 0, 1] } as TwoThreeFreeClass,
        n2d3p9: 18.4567 as N2D3P9,
    } as CommaAnalysis & { symbolClassId?: Id<SymbolClass> }

    it("takes the properties of the comma and puts them in order in a row", (): void => {
        const actual = computeNotatingCommasRow(commaAnalysisWithMaybeSagittalSymbolClassId)

        const expected = [
            "    /|  ",         // symbol class
            "1/5C",             // comma name
            "5/4",              // ratio
            "[   0  -1   1 ⟩",  // monzo
            " 11.200",          // cents
            "  8.200",          // apotome slope
        ] as Row<{ of: CommaAnalysis }>
        expect(actual).toEqual(expected)
    })
})
