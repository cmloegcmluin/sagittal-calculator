import { computeDeepClone } from "../../../../src/general"
import { fractionallyRank, Rank } from "../../../../src/general/code"

// TODO: probably it would be better if this was just a general ranking function
//  which took fractional ranking as an option, along with the other ranking strategies listed on Wikipedia
describe("fractionallyRank", () => {
    const arrayOfObjects: Array<{ [index: string]: number }> = [
        { a: 1, b: 1 },
        { a: 4, b: 3 },
        { a: 2, b: 2 },
        { a: 4, b: 2 },
        { a: 1, b: 2 },
    ]

    it("takes the existing array of objects, sorts and ranks it by the requested field, and adds a rank field", () => {
        const result = fractionallyRank(arrayOfObjects, "a")

        expect(result).toEqual([
            { a: 1, b: 1, fractionalRank: 1.5 as Rank<{ [index: string]: number }> },
            { a: 1, b: 2, fractionalRank: 1.5 as Rank<{ [index: string]: number }> },
            { a: 2, b: 2, fractionalRank: 3 as Rank<{ [index: string]: number }> },
            { a: 4, b: 3, fractionalRank: 4.5 as Rank<{ [index: string]: number }> },
            { a: 4, b: 2, fractionalRank: 4.5 as Rank<{ [index: string]: number }> },
        ])
    })

    it("another example", () => {
        const result = fractionallyRank(arrayOfObjects, "b")

        console.log(result)

        expect(result).toEqual([
            { a: 1, b: 1, fractionalRank: 1 as Rank<{ [index: string]: number }> },
            { a: 2, b: 2, fractionalRank: 3 as Rank<{ [index: string]: number }> },
            { a: 4, b: 2, fractionalRank: 3 as Rank<{ [index: string]: number }> },
            { a: 1, b: 2, fractionalRank: 3 as Rank<{ [index: string]: number }> },
            { a: 4, b: 3, fractionalRank: 5 as Rank<{ [index: string]: number }> },
        ])
    })

    it("does not mutate the original array", () => {
        const originalArrayOfObjects = computeDeepClone(arrayOfObjects)

        fractionallyRank(arrayOfObjects, "b")

        expect(arrayOfObjects).toEqual(originalArrayOfObjects)
    })
})
