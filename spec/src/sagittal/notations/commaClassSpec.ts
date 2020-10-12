import { Id, Monzo } from "../../../../src/general"
import { CommaClass, getCommaClass } from "../../../../src/sagittal/notations"

describe("getCommaClass", (): void => {
    it("given a comma class ID, returns the full comma class", (): void => {
        const commaClassId = 55 as Id<CommaClass>

        const actual: CommaClass = getCommaClass(commaClassId)

        const expected: CommaClass = {
            id: 55 as Id<CommaClass>,
            monzo: [-11, 3, 0, 1, 1] as Monzo<{ rational: true }>,
        } as CommaClass
        expect(actual).toEqual(expected)
    })
})
