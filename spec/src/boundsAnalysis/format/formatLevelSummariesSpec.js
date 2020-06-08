const {formatLevelSummaries} = require("../../../../src/boundsAnalysis/format/formatLevelSummaries")
const {LEVELS} = require("../../../../src/boundsAnalysis/data/levels")
const {levelsBestHistoryRanks} = require("../../../../src/boundsAnalysis/analyzeHistories/levelSummary")

describe("formatLevelSummary", () => {
    beforeEach(() => {
        levelsBestHistoryRanks["MEDIUM"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["HIGH"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["VERY_HIGH"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["EXTREME"] = {1: 18, 2: 23, 3: 1, 7: 13}
        levelsBestHistoryRanks["INSANE"] = {1: 18, 2: 23, 3: 1, 7: 13}
    })

    it("does not mutate LEVELS", () => {
        const formerLevels = LEVELS.slice()

        formatLevelSummaries()

        expect(formerLevels).toEqual(LEVELS)
    })

    it("prints the levels in order from highest to lowest", () => {
        const result = formatLevelSummaries()

        expect(result.indexOf("Insane")).toBeLessThan(result.indexOf("Extreme"))
        expect(result.indexOf("Extreme")).toBeLessThan(result.indexOf("Very High"))
        expect(result.indexOf("Very High")).toBeLessThan(result.indexOf("High"))
        expect(result.indexOf("High")).toBeLessThan(result.indexOf("Medium"))
    })
})
