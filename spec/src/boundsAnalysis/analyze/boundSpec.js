const {analyzeBound} = require("../../../../src/boundsAnalysis/analyze/bound")
const rankAnalysis = require("../../../../src/boundsAnalysis/analyze/ranks")
const levelAnalysis = require("../../../../src/boundsAnalysis/analyze/levels")

describe("analyzeBound", () => {
    const notBestHistory = [
        {
            level: "INITIAL",
            type: "INITIAL",
            name: "INITIAL",
            position: 23.2,
        },
        {
            level: "VERY_HIGH",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
        },
        {
            level: "EXTREME",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
        },
        {
            level: "INSANE",
            type: "EDA",
            name: "164.5/809",
            position: 23.116419649559468,
            // this one gets rank: 4
        },
    ]
    const bestHistory = [
        {
            level: "INITIAL",
            type: "INITIAL",
            name: "INITIAL",
            position: 23.2,
        },
        {
            level: "VERY_HIGH",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
        },
        {
            level: "EXTREME",
            type: "EDA",
            name: "47.5/233",
            position: 23.15,
        },
        {
            level: "INSANE",
            type: "EDA",
            name: "164.5/809",
            position: 23.116419649559468,
            // this one gets rank 1
        },
    ]
    const histories = [
        notBestHistory,
        bestHistory,
    ]
    const bound = {
        position: 23.1164196495597,
        levels: ["VERY_HIGH", "EXTREME", "INSANE"],
    }
    const expectedBestHistoryEvents = [
        {
            level: "INITIAL",
            type: "INITIAL",
            name: "INITIAL",
            position: 23.2,
            rank: 0,
        },
        {
            level: "VERY_HIGH",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
            rank: 2,
        },
        {
            level: "EXTREME",
            type: "EDA",
            name: "47.5/233",
            position: 23.15,
            rank: 1,
        },
        {
            level: "INSANE",
            type: "EDA",
            name: "164.5/809",
            position: 23.116419649559468,
            rank: 1,
        },
    ]
    const expecteBestPossibleHistory = {
        events: expectedBestHistoryEvents,
        position: 23.116419649559468,
        rank: 2,
        score: 132,
        possible: true,
        tinaError: 0,
        initialPositionTinaDifference: -0.5613173198970488,
    }

    it("returns an analysis of the bound using its histories, including a structured presentation of said histories, and its best possible history, and the difference between the bound and its initial position", () => {
        const boundIndex = 47

        const result = analyzeBound(histories, bound, boundIndex)

        expect(result).toEqual({
            bestRank: 2,
            initialPosition: 23.195298960947348,
            initialPositionTinaDifference: -0.5613173198954056,
            possibleHistoryCount: 2,
            bestPossibleHistory: {
                events: expectedBestHistoryEvents,
                position: 23.116419649559468,
                rank: 2,
                score: 132,
                possible: true,
                tinaError: 0,
                initialPositionTinaDifference: -0.5613173198970488,
            },
            structuredHistories: {
                INITIAL: [
                    {
                        level: "INITIAL",
                        type: "INITIAL",
                        name: "INITIAL",
                        position: 23.2,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 0,
                        rankOfBestRankedMemberHistory: 2,
                        nextEvents: [
                            ".)/| '/|",
                        ],
                    },
                ],
                VERY_HIGH: [
                    {
                        level: "VERY_HIGH",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 2,
                        rankOfBestRankedMemberHistory: 2,
                        nextEvents: [
                            ".)/| '/|",
                            "47.5/233",
                        ],
                    },
                ],
                EXTREME: [
                    {
                        level: "EXTREME",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: false,
                        rankOfBestRankedEventInAnyMemberHistory: 2,
                        rankOfBestRankedMemberHistory: 4,
                        nextEvents: [
                            "164.5/809",
                        ],
                    },
                    {
                        level: "EXTREME",
                        type: "EDA",
                        name: "47.5/233",
                        position: 23.15,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 1,
                        rankOfBestRankedMemberHistory: 2,
                        nextEvents: [
                            "164.5/809",
                        ],
                    },
                ],
                INSANE: [
                    {
                        level: "INSANE",
                        type: "EDA",
                        name: "164.5/809",
                        position: 23.116419649559468,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 1,
                        rankOfBestRankedMemberHistory: 2,
                        nextEvents: [],
                    },
                ],
            },
        })
    })

    it("updates the rank analysis", () => {
        const boundIndex = 88

        spyOn(rankAnalysis, "updateRankAnalysis")

        analyzeBound(histories, bound, boundIndex)

        const expectedBestHistoryRank = 2
        expect(rankAnalysis.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, boundIndex)
    })

    it("updates the level analysis", () => {
        const boundIndex = 88

        spyOn(levelAnalysis, "updateLevelAnalysis")

        analyzeBound(histories, bound, boundIndex)

        expect(levelAnalysis.updateLevelAnalysis).toHaveBeenCalledWith(expecteBestPossibleHistory)
    })
})
