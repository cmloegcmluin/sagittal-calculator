import { Decimal, Name, Rank } from "../../../general"
import { Bound, BoundType, JiNotationLevel } from "../../../sagittal"
import { BoundEvent } from "../histories"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../history"

interface BoundEventConsolidation extends BoundEvent {
    exact: boolean,
    isBestPossibleBoundHistoryMember: boolean,
    isPossibleBoundHistoryMember: boolean,
    nextBoundEvents: Name<Bound>[],
    rankOfBestRankedEventInAnyMemberHistory: Decimal<{ integer: true }> & Rank<BoundType>,
    rankOfBestRankedMemberHistory: Decimal<{ integer: true }> & Rank<BoundType>,
}

type BoundHistoryConsolidation = Partial<Record<JiNotationLevel, BoundEventConsolidation[]>>

interface UpdateEventConsolidationOptions {
    boundEventAnalysis: BoundEventAnalysis
    boundHistoryAnalysis: BoundHistoryAnalysis,
    bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis,
    nextBoundEventAnalysis?: BoundEventAnalysis,
}

export {
    BoundEventConsolidation,
    BoundHistoryConsolidation,
    UpdateEventConsolidationOptions,
}
