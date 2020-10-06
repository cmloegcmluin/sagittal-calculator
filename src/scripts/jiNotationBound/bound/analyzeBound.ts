import { computeCentsFromPitch, count, Multiplier } from "../../../general"
import { JiNotationBound, Tina, TINA } from "../../../sagittal"
import { consolidateBoundHistories } from "../consolidateHistories"
import { BoundHistory } from "../histories"
import { analyzeHistory, BoundHistoryAnalysis } from "../history"
import { computeBestPossibleBoundHistoryAnalysis } from "./bestPossibleHistory"
import { computeInitialPosition } from "./initialPosition"
import { updateJiNotationLevelAnalysis } from "./levels"
import { updateRankAnalysis } from "./ranks"
import { JiNotationBoundAnalysis } from "./types"

const analyzeJiNotationBound = (
    boundHistories: BoundHistory[],
    jiNotationBound: JiNotationBound,
): JiNotationBoundAnalysis => {
    const initialPosition = computeInitialPosition(jiNotationBound)
    const boundHistoryAnalyses = boundHistories.map((boundHistory: BoundHistory): BoundHistoryAnalysis => {
        return analyzeHistory(boundHistory, jiNotationBound, initialPosition)
    })

    const possibleBoundHistories = boundHistoryAnalyses
        .filter((boundHistoryAnalysis: BoundHistoryAnalysis): boolean => boundHistoryAnalysis.possible)
    const possibleBoundHistoryCount = count(possibleBoundHistories)
    const bestPossibleBoundHistoryAnalysis = computeBestPossibleBoundHistoryAnalysis(possibleBoundHistories)
    const bestRank = bestPossibleBoundHistoryAnalysis.rank
    const bestPossibleBoundHistoryTotalDistance = bestPossibleBoundHistoryAnalysis.totalDistance
    const bestPossibleBoundHistoryTotalInaDistance = bestPossibleBoundHistoryAnalysis.totalInaDistance

    const initialPositionTinaDistance =
        (computeCentsFromPitch(jiNotationBound.pitch) - initialPosition) / TINA as Multiplier<Tina>

    updateRankAnalysis(bestRank, jiNotationBound.id)
    updateJiNotationLevelAnalysis(bestPossibleBoundHistoryAnalysis)

    const boundHistoryConsolidation = consolidateBoundHistories(boundHistoryAnalyses, bestPossibleBoundHistoryAnalysis)

    return {
        initialPosition,
        possibleBoundHistoryCount,
        bestPossibleBoundHistoryAnalysis,
        bestRank,
        bestPossibleBoundHistoryTotalDistance,
        bestPossibleBoundHistoryTotalInaDistance,
        initialPositionTinaDistance,
        boundHistoryConsolidation,
    }
}

export {
    analyzeJiNotationBound,
}
