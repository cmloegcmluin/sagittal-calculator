import { EnumHash } from "../../../general"

enum DebugTarget {
    ALL = "all",
    ANTIVOTES = "antivotes",
    UNPOPULARITIES = "unpopularities",
    SEARCH = "search",
    POPULATE = "populate",
    NEW_BEST_METRIC = "newBestMetric",
    SUM_OF_SQUARES = "sumOfSquares",
    ERRORS = "errors",
    NONE = "none",
    FINAL_SOLVER_RESULTS = "finalSolverResults",
    PERFECT = "perfect",
    FINAL_PERFECTER_RESULTS = "finalPerfecterResults",
    POPULAR_RATIOS = "popularRatios",
}

type DebugTargets = EnumHash<DebugTarget, boolean>

export {
    DebugTargets,
    DebugTarget,
}
