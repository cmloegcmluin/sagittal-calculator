import { Count } from "../../../../../src/general"
import { cleanArray } from "../../../../../src/general/code/cleanArray"
import { Chunk } from "../../../../../src/scripts/unpopularityMetric/solver"
import {
    bestMetricsForChunkCount,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    populatedsForChunkCount,
    scopesForChunkCount,
    searchedsForChunkCount,
    status,
} from "../../../../../src/scripts/unpopularityMetric/solver/globals"

afterEach(() => {
    cleanArray(populatedsForChunkCount)
    cleanArray(searchedsForChunkCount)
    cleanArray(scopesForChunkCount)
    cleanArray(bestMetricsForChunkCount)
    cleanArray(memoizedSubmetricChunkCombinations)
    cleanArray(memoizedParameterChunkCombinations)

    status.finishedPopulating = false
    status.populatingChunkCount = 0 as Count<Chunk>
    status.upperBoundChunkCount = 0 as Count<Chunk>
    status.searchingChunkCount = 0 as Count<Chunk>
})
