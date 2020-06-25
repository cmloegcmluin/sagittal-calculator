const {presentLevelAnalysis} = require("../../../../../src/scripts/analyzeBounds/present/levelAnalysis")

describe("presentLevelAnalysis", () => {
    it("gives an explanation per level of what bounds have what ranks there -- both purely within the level, and though all levels up to that point", () => {
        const level = "ULTRA"
        const levelBestHistoryRanks = [18, 23, 13]
        const levelBestCumulativeHistoryRanks = [18, 17, 15]

        const result = presentLevelAnalysis(level, levelBestHistoryRanks, levelBestCumulativeHistoryRanks)

        expect(result).toBe([
            "Ultra            \there\tcmltv",
            "INA midpoint       \t 18\t 18".brightBlue,
            "comma mean         \t 23\t 17".cyan,
            "size category bound\t 13\t 15".green,
        ].join("\n"))
    })
})
