const {calculateImpossibleEvent} = require("../../../../src/boundsAnalysis/calculateHistories/calculateImpossibleEvent")

describe("calculateImpossibleEvent", () => {
    it("returns an event stating that the history became impossible for this position at this level", () => {
        const result = calculateImpossibleEvent(57.4999779541197, "VERY_HIGH", [58.0356258736789, 59.57953862346640])

        expect(result).toEqual({
            level: "VERY_HIGH",
            type: "IMPOSSIBLE",
            name: "not between ,.(|) @58.036 and `|\\) @59.580 at the VERY_HIGH level",
            position: 57.4999779541197,
        })
    })

    it("formats correctly when the upper bound undefined (representing the maximum position)", () => {
        const result = calculateImpossibleEvent(57.4999779541197, "VERY_HIGH", [58.0356258736789, undefined])

        expect(result).toEqual({
            level: "VERY_HIGH",
            type: "IMPOSSIBLE",
            name: "not between ,.(|) @58.036 and the maximum position @68.573 at the VERY_HIGH level",
            position: 57.4999779541197,
        })
    })

    it("formats correctly when the lower bound undefined (representing the minimum position)", () => {
        const result = calculateImpossibleEvent(1.4242979405308, "VERY_HIGH", [0, 0.83252420410159])

        expect(result).toEqual({
            level: "VERY_HIGH",
            type: "IMPOSSIBLE",
            name: "not between the minimum position @0.000 and ``| @0.833 at the VERY_HIGH level",
            position: 1.4242979405308,
        })
    })
})
