import { Abs, Cents, Decimal, Exponent, Monzo, NumericProperties, Pitch, Prime, Quotient } from "../../../general"
import { Two3FreeClassAnalysis } from "../two3FreeClass"

interface JiPitchAnalysisProperties<T extends NumericProperties = {}> {
    apotomeSlope: ApotomeSlope,
    ate: Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
    aas: Abs<ApotomeSlope>,
    monzo: Monzo<T & { rational: true }>,
    quotient: Quotient<T & { rational: true }>,
    decimal: Decimal<T & { rational: true }>,
    cents: Cents,
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
}

type JiPitchAnalysis<T extends NumericProperties = {}> = Pitch<T & { rational: true }> & JiPitchAnalysisProperties<T>

type ApotomeSlope = number & { _ApotomeSlopeBrand: boolean }

export {
    ApotomeSlope,
    JiPitchAnalysisProperties,
    JiPitchAnalysis,
}
