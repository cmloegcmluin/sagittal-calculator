import { isRationalDecimal } from "../../../../../../../src/general/math/rational/num/decimal"

describe("isRationalDecimal", (): void => {
    it("returns true only if it equals itself rounded to the default accuracy (157934/100000, weird, but safe, since largest supported prime is 8368819)", (): void => {
        const candidateRationalDecimal = 1.57934

        const actual = isRationalDecimal(candidateRationalDecimal)

        expect(actual).toBeTruthy()
    })

    it("returns false for decimals that are more complex than the default precision", (): void => {
        const candidateRationalDecimal = 1.579349

        const actual = isRationalDecimal(candidateRationalDecimal)

        expect(actual).toBeFalsy()
    })

    it("returns false even for 4/3 because... well, what can you do. important not to get false positive ratios-by-decimal, though", (): void => {
        const candidateRationalDecimal = 1.333333333333333

        const actual = isRationalDecimal(candidateRationalDecimal)

        expect(actual).toBeFalsy()
    })
})
