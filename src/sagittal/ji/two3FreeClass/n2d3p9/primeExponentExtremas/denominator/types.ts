import { Decimal, Denominator, Exponent, Max, Prime } from "../../../../../../general"
import { SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 } from "./sortedNumeratorPossibilities"

interface D39ForCandidateMaxDenominatorPrimeExponentOptions {
    denominatorPrime: Denominator & Prime,
    candidateMaxDenominatorPrimeExponentGivenMaxN2D3P9: Max<Denominator & Decimal<{ integer: true }> & Exponent<Prime>>,
}

interface MinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options
    extends D39ForCandidateMaxDenominatorPrimeExponentOptions {
    sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9:
        SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
}

type D39 = number & { _D39Brand: boolean }

export {
    MinN2PForCandidateMaxDenominatorPrimeExponentGivenMaxN2D3P9Options,
    D39ForCandidateMaxDenominatorPrimeExponentOptions,
    D39,
}
