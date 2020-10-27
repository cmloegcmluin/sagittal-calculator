import { BoundType, JiNotationLevelId } from "../../../../../src/sagittal/notations/ji"
import { BoundEventAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { computeScore } from "../../../../../src/scripts/jiNotationBoundClass/history/score"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import { boundEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeScore", (): void => {
    it("scores histories with worse ranks worse", (): void => {
        const expectedWorseScoreHistories: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
        ]
        const expectedBetterScoreHistories: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("if two histories have the same total ranks but one incurs a worse rank at an earlier JI notation level, it gets a lesser score", (): void => {
        const expectedWorseScoreHistories = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.HIGH,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
        ]
        const expectedBetterScoreHistories = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.HIGH,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a bound class history with the lowest event rank must get the lesser score, even in the most case leaning as much as possible in favor of otherwise", (): void => {
        const expectedWorseScoreHistories = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.HIGH,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.ULTRA,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.EXTREME,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.INSANE,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            },
        ]
        const expectedBetterScoreHistories = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.HIGH,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.ULTRA,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.EXTREME,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.INSANE,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            },
        ]

        const expectedWorseResult = computeScore(expectedWorseScoreHistories)
        const expectedBetterResult = computeScore(expectedBetterScoreHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
