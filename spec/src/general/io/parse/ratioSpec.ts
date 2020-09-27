import { Formatted, parseRatio, RationalRatio } from "../../../../../src/general"

describe("parseRatio", (): void => {
    it("works for directed ratios", (): void => {
        const ratio = "5/4" as Formatted<RationalRatio>

        const actual = parseRatio(ratio)

        const expected = [5, 4] as RationalRatio
        expect(actual).toEqual(expected)
    })

    it("works for directed ratios", (): void => {
        const ratio = "5:4" as Formatted<RationalRatio>

        const actual = parseRatio(ratio)

        const expected = [4, 5] as RationalRatio
        expect(actual).toEqual(expected)
    })

    it("works for ratios which are implictly over 1", (): void => {
        const ratio = "275" as Formatted<RationalRatio>

        const actual = parseRatio(ratio)

        const expected = [275, 1] as RationalRatio
        expect(actual).toEqual(expected)
    })

    it("works for factored ratios", (): void => {
        const ratio = "5².11" as Formatted<RationalRatio>

        const actual = parseRatio(ratio)

        const expected = [275, 1] as RationalRatio
        expect(actual).toEqual(expected)
    })

    it("does not do the work of reducing ratios", (): void => {
        const ratio = "25/20" as Formatted<RationalRatio>

        const actual = parseRatio(ratio)

        const expected = [25, 20] as RationalRatio
        expect(actual).toEqual(expected)
    })
})
