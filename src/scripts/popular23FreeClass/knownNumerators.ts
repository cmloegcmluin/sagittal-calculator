import {
    compute23FreeClass,
    computeScamonFromQuotient,
    Denominator,
    Filename,
    isLowestTerms,
    max,
    Max,
    NEWLINE,
    Quotient,
    QuotientPart,
    readLines,
} from "../../general"
import {analyze23FreeClass, N2D3P9} from "../../sagittal"
import {computePopular23FreeClass} from "./popular23FreeClass"
import {KnownNumerator, Popular23FreeClass} from "./types"

const computePopular23FreeClassFromRationalQuotient = (
    rationalQuotient: Quotient<{rational: true}>,
): Popular23FreeClass => {
    const rationalScamon = computeScamonFromQuotient(rationalQuotient)
    const two3FreeClass = compute23FreeClass(rationalScamon)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    return computePopular23FreeClass(two3FreeClassAnalysis)
}

const computePopular23FreeClassesFromKnownNumerators = (maxN2D3P9: Max<N2D3P9>): Popular23FreeClass[] => {
    const knownNumerators: KnownNumerator[] = JSON.parse(
        readLines("src/scripts/popular23FreeClass/input/knownNumerators.txt" as Filename).join(NEWLINE),
    )

    const popular23FreeClasses = [
        computePopular23FreeClassFromRationalQuotient([1, 1] as Quotient<{rational: true}>),
    ] as Popular23FreeClass[]

    for (const [knownNumeratorIndex, knownNumerator] of knownNumerators.entries()) {
        const possibleDenominators = knownNumerators.slice(0, knownNumeratorIndex)

        for (const [possibleDenominatorIndex, possibleDenominator] of possibleDenominators.entries()) {
            // TODO: this could really be cleaned up
            const n2d3p9 = knownNumerator.numerator * possibleDenominator.numerator *
                2 ** -knownNumerator.copfr * 3 ** -possibleDenominator.copfr *
                max(knownNumerator.gpf, possibleDenominator.gpf) / 9

            if (n2d3p9 <= maxN2D3P9) {
                const rationalQuotient = [
                    knownNumerator.numerator,
                    possibleDenominator.numerator as QuotientPart as Denominator,
                ] as Quotient<{rational: true}>
                if (!isLowestTerms(rationalQuotient)) continue
                popular23FreeClasses.push(computePopular23FreeClassFromRationalQuotient(rationalQuotient))
            } else if (possibleDenominatorIndex === 0) {
                break
            }
        }
    }

    return popular23FreeClasses
}

export {
    computePopular23FreeClassesFromKnownNumerators,
}
