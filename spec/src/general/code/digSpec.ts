import {dig, KeyPath, Obj} from "../../../../src/general"

describe("dig", (): void => {
    it("returns the value within the object following the path", (): void => {
        const path = ["a", "b"] as KeyPath
        const object = {a: {b: 3}} as Obj

        const actual = dig(object, path)

        const expected = 3
        expect(actual).toBe(expected)
    })

    it("also works for nested arrays", (): void => {
        const path = [2, 1] as KeyPath
        const object = [
            [],
            [],
            [
                0,
                3,
            ],
        ] as Obj

        const actual = dig(object, path)

        const expected = 3
        expect(actual).toBe(expected)
    })

    it("works when the path is a single number (not in an array)", (): void => {
        const path = 1 as KeyPath
        const object = ["a", "b", "c"] as Obj

        const actual = dig(object, path)

        const expected = "b"
        expect(actual).toBe(expected)
    })

    it("works when the path is a single string (not in an array)", (): void => {
        const path = "b" as KeyPath
        const object = {a: 0, b: 1, c: 2} as Obj

        const actual = dig(object, path)

        const expected = 1
        expect(actual).toBe(expected)
    })

    it("works with the parents option which allows it to make parent objects as it goes if undefined", (): void => {
        const path = ["a", 2, "c"] as KeyPath
        const object = {} as Obj

        const actual = dig(object, path, {parents: true})

        const expected = (object as Record<"a", Record<2, Record<"c", unknown>>>)["a"][2]["c"]
        expect(actual).toBe(expected)
    })

    it("throws an error if strict is true, parents is not provided, and the path does not exist on the object            ", (): void => {
        const path = ["a", "c"] as KeyPath
        const object = {a: {b: 3}} as Obj

        expect((): void => {
            dig(object, path, {strict: true})
        }).toThrowError(`Failed to dig value at ["a","c"] of {"a":{"b":3}}.`)
    })

    it("throws an error if strict is true, parents is not provided, the path is only one-deep, and the path does not exist on the object", (): void => {
        const path = "c" as KeyPath
        const object = {a: {b: 3}} as Obj

        expect((): void => {
            dig(object, path, {strict: true})
        }).toThrowError(`Failed to dig value at "c" of {"a":{"b":3}}.`)
    })

    it("does not throw an error if strict is not true, parents is not provided, the path does not exist on the object              ", (): void => {
        const path = ["a", "c"] as KeyPath
        const object = {a: {b: 3}} as Obj

        const actual = dig(object, path)

        const expected = undefined
        expect(actual).toBe(expected)
    })

    it("does not throw an error if strict is not true, parents is not provided, the path is only one-deep, and does not exist on the object", (): void => {
        const path = "c" as KeyPath
        const object = {a: {b: 3}} as Obj

        const actual = dig(object, path)

        const expected = undefined
        expect(actual).toBe(expected)
    })

    it("does not throw an error if strict is true but parents is provided, and the path does not exist on the object          ", (): void => {
        const path = ["a", "c"] as KeyPath
        const object = {a: {b: 3}} as Obj

        const actual = dig(object, path, {strict: true, parents: {}})

        const expected = (object as Record<"a", Record<"c", unknown>>)["a"]["c"]
        expect(actual).toBe(expected)
    })

    it("does not throw an error if strict is true but parents is provided, the path is only one-deep, and does not exist on the object", (): void => {
        const path = "c" as KeyPath
        const object = {a: {b: 3}} as Obj

        const actual = dig(object, path, {strict: true, parents: {}})

        const expected = (object as Record<"c", unknown>)["c"]
        expect(actual).toBe(expected)
    })

    it("when using the parents option, creates the key even if it is only one deep", (): void => {
        const path = "a" as KeyPath
        const object = {} as Obj

        const actual = dig(object, path, {parents: true})

        const expected = (object as Record<"a", unknown>)["a"]
        expect(actual).toBe(expected)
    })
})
