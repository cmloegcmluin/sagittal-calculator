import {computeRationalDecimalCopf, Decimal} from "../../../../../../src/general"
import {Copf} from "../../../../../../src/general/math/rational/types"

describe("computeRationalDecimalCopf", (): void => {
    it("returns the count of prime factors (without repetition)", (): void => {
        const rationalDecimal = 275 as Decimal<{rational: true}>      // 5 * 5 * 11

        const actual = computeRationalDecimalCopf(rationalDecimal)

        const expected = 2 as Copf      // 5 & 11
        expect(actual).toBe(expected)
    })
})
