import { EnumHash } from "../../../general"
import { ColorMethod } from "../../../types"
import { DebugTarget } from "./types"

const targetColors: EnumHash<DebugTarget, ColorMethod> = {
    [ DebugTarget.ALL ]: "green",
    [ DebugTarget.ANTIVOTES ]: "white",
    [ DebugTarget.UNPOPULARITIES ]: "white",
    [ DebugTarget.SEARCH ]: "yellow",
    [ DebugTarget.POPULATE ]: "cyan",
    [ DebugTarget.NEW_BEST_METRIC ]: "green",
    [ DebugTarget.SUM_OF_SQUARES ]: "white",
    [ DebugTarget.ERRORS ]: "red",
    [ DebugTarget.NONE ]: "white",
    [ DebugTarget.FINAL_SOLVER_RESULTS ]: "green",
    [ DebugTarget.PERFECT ]: "magenta",
}

export {
    targetColors,
}
