import { sqrt } from "../../../../../src/general/math"
import { computeNumSqrt, divideNums } from "../../../../../src/general/math/num"
import { Decimal } from "../../../../../src/general/math/num/decimal"
import { Monzo } from "../../../../../src/general/math/num/monzo"
import { Quotient } from "../../../../../src/general/math/num/quotient"

describe("divideNums", (): void => {
    it("works for a monzo-based num by a monzo-based num", (): void => {
        const numA = { monzo: [0, 0, 1] as Monzo }
        const numB = { monzo: [-2, 0, 0, 1] as Monzo }

        const actual = divideNums(numA, numB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based num by a quotient-based num", (): void => {
        const numA = { monzo: [0, 0, 1] as Monzo }
        const numB = { quotient: [7, 4] as Quotient }

        const actual = divideNums(numA, numB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based num by a decimal-based num", (): void => {
        const numA = { monzo: [0, 0, 1] as Monzo }
        const numB = { decimal: 1.75 as Decimal }

        const actual = divideNums(numA, numB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based num by a direct decimal", (): void => {
        const numA = { monzo: [0, 0, 1] as Monzo }
        const decimalB = 1.75 as Decimal

        const actual = divideNums(numA, decimalB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })
})

describe("computeNumSqrt", (): void => {
    it("includes all representations for nums", (): void => {
        const num = {
            monzo: [-11, 7] as Monzo,
            quotient: [3, 2] as Quotient,
            decimal: 1.5 as Decimal,
        }

        const actual = computeNumSqrt(num)

        const expected = {
            monzo: [-5.5, 3.5] as Monzo,
            quotient: [Math.sqrt(3), Math.sqrt(2)] as Quotient,
            decimal: Math.sqrt(1.5) as Decimal,
        }
        expect(actual).toEqual(expected)
    })

    it("works for a direct decimal", (): void => {
        const decimal = 1.5

        const actual = computeNumSqrt(decimal)

        const expected = Math.sqrt(1.5)
        expect(actual).toBeCloseTo(expected)
    })
})
