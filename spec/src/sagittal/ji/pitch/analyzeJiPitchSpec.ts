import {
    Abs,
    Cents,
    Copfr,
    Direction,
    Exponent,
    IntegerDecimal, Max, Name,
    Prime,
    RationalDecimal,
    RationalMonzo,
    RationalQuotient,
    Sopfr, Two3FreeClass,
} from "../../../../../src/general"
import { ApotomeSlope, N2D3P9, Two3FreeClassAnalysis } from "../../../../../src/sagittal"
import { analyzeJiPitch } from "../../../../../src/sagittal/ji"

describe("analyzeJiPitch", (): void => {
    it("returns an analysis of a JI pitch, given its monzo", (): void => {
        const jiPitch = { monzo: [-7, -6, 3, 5, -1] as RationalMonzo }

        const actual = analyzeJiPitch(jiPitch)

        const expected = {
            cents: 1240.022726 as Cents,
            monzo: [-7, -6, 3, 5, -1] as RationalMonzo,
            quotient: [2100875, 1026432] as RationalQuotient,
            decimal: 2.046775 as RationalDecimal,
            apotomeSlope: -82.352717 as ApotomeSlope,
            ate: 6 as Abs<IntegerDecimal & Exponent<3 & Prime>>,
            aas: 82.352717 as Abs<ApotomeSlope>,
            two3FreeClassAnalysis: {
                name: "2100875/11₋₂₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                monzo: [0, 0, 3, 5, -1] as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                two3FreeCopfr: 9 as Copfr<{ rough: 5 }>,
                two3FreeSopfr: 61 as Sopfr<{ rough: 5 }>,
                n2d3p9: 36777.470341 as N2D3P9,
            } as Two3FreeClassAnalysis,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
