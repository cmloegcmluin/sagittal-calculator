import {Io, Row, splitFieldTitlesIntoRowsBySpaces} from "../../../../../src/general"

describe("splitFieldTitlesIntoRowsBySpaces", (): void => {
    const titles: Io[] = [
        "2,3- free class",
        "N2D3P9 rank",
        "best notating comma cents",
        "best notating comma monzo",
        "best notating comma sagittal",
    ] as Io[]

    it("splits the field titles into rows by spaces", (): void => {
        const actual = splitFieldTitlesIntoRowsBySpaces(titles)

        const expected = [
            ["", "", "best", "best", "best"],
            ["2,3-", "", "notating", "notating", "notating"],
            ["free", "N2D3P9", "comma", "comma", "comma"],
            ["class", "rank", "cents", "monzo", "sagittal"],
        ] as Array<Row<{header: true}>>
        expect(actual).toEqual(expected)
    })

    it("can include a spacer row", (): void => {
        const actual = splitFieldTitlesIntoRowsBySpaces(titles, {includeSpacerRow: true})

        const expected = [
            ["", "", "best", "best", "best"],
            ["2,3-", "", "notating", "notating", "notating"],
            ["free", "N2D3P9", "comma", "comma", "comma"],
            ["class", "rank", "cents", "monzo", "sagittal"],
            ["", "", "", "", ""],
        ] as Array<Row<{header: true}>>
        expect(actual).toEqual(expected)
    })
})
