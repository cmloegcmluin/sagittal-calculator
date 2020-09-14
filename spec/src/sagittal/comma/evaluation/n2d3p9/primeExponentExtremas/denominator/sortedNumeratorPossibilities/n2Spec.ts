import { Numerator } from "../../../../../../../../../src/general/math/ratio"
import { computeN2 } from "../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/n2"
import { N2 } from "../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/types"

describe("computeN2", (): void => {
    it(
        "returns the N2 part of the N2D3P9 formula, or in other words the part that the numerator contributes",
        (): void => {
            const numerator = 35 as Numerator

            const actual = computeN2(numerator)

            const expected = 35 / 2 ** 2 as N2
            expect(actual).toBe(expected)
        },
    )
})
