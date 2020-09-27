import { RationalMonzo } from "../../../../../src/general"
import { ApotomeSlope } from "../../../../../src/sagittal"
import { computeApotomeSlope } from "../../../../../src/sagittal/ji/pitch"

describe("computeApotomeSlope", (): void => {
    it("gives the amount that the comma changes by when tempering the apotome", (): void => {
        const jiPitch = { monzo: [-15, 8, 1] as RationalMonzo }

        const actual = computeApotomeSlope(jiPitch)

        const expected = 7.879702 as ApotomeSlope
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for monzos without three exponents", (): void => {
        const jiPitch = { monzo: [] as RationalMonzo }

        const actual = computeApotomeSlope(jiPitch)

        const expected = 0 as ApotomeSlope
        expect(actual).toBeCloseToTyped(expected)
    })
})
