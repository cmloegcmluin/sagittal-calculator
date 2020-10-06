import {
    Abs,
    Copfr,
    Decimal,
    Direction,
    Exponent,
    Max,
    Monzo,
    Name,
    Pitch,
    Quotient,
    Two3FreeClass,
} from "../../../../../src/general"
import { Prime, Sopfr } from "../../../../../src/general/math"
import { Cents } from "../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9, Two3FreeClassAnalysis } from "../../../../../src/sagittal/ji"
import { two3FreeClassFixture } from "../../general/music/fixtures"

const two3FreeClassAnalysisFixture: Two3FreeClassAnalysis = {
    ...two3FreeClassFixture,
    name: "" as Name<Two3FreeClass>,
    two3FreePrimeLimit: 1 as Max<Prime<{ rough: 5 }>>,
    two3FreeCopfr: 0 as Copfr<{ rough: 5 }>,
    two3FreeSopfr: 0 as Sopfr<{ rough: 5 }>,
    n2d3p9: 1 as N2D3P9,
    monzo: [] as unknown[] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
}

const jiPitchFixture = {
    monzo: [] as unknown[] as Monzo<{ rational: true }>,
} as Pitch<{ rational: true }>

const jiPitchAnalysisFixture: JiPitchAnalysis = {
    ...jiPitchFixture,
    cents: 0 as Cents,
    decimal: 1 as Decimal<{ rational: true }>,
    monzo: [] as unknown[] as Monzo<{ rational: true }>,
    quotient: [1, 1] as Quotient<{ rational: true }>,
    apotomeSlope: 0 as ApotomeSlope,
    aas: 0 as Abs<ApotomeSlope>,
    ate: 0 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
    two3FreeClassAnalysis: two3FreeClassAnalysisFixture,
}

export {
    jiPitchFixture,
    jiPitchAnalysisFixture,
    two3FreeClassAnalysisFixture,
}
