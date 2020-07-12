import "colors"
import { program } from "commander"
import { recursivelyFindUnpopularityMetric } from "../automator/recursivelyFind"
import { computeConfigsForChunkCount } from "../automator/configsForChunkCount"
import { Chunk } from "../automator/types"
import { Count } from "../../../utilities/types"

program
    .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
    .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
    .option("-d, --debug", "debug")
    .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
const upperBoundChunkCount = program.upperBoundChunkCount || 8
const debug = !!program.debug

for (let chunkCount = lowerBoundChunkCount; chunkCount < upperBoundChunkCount; chunkCount = chunkCount + 1 as Count<Chunk>) {
    const configsForChunkCount = computeConfigsForChunkCount(chunkCount)
    console.log(`investigating chunk count ${chunkCount} which has ${configsForChunkCount.length} configs to check`)

    let bestMetric = { sumOfSquares: Infinity }
    configsForChunkCount.forEach((configForChunkCount, index) => {
        try {
            if (debug) console.log(JSON.stringify(configForChunkCount))
            const bestMetricForConfig = recursivelyFindUnpopularityMetric(configForChunkCount, { debug })

            if (bestMetricForConfig.sumOfSquares < bestMetric.sumOfSquares) {
                bestMetric = bestMetricForConfig
            }
        } catch (e) {
            // bad configs are still being computed... may not be a simple matter to not calculate them in the first place, so for now, just don't worry about them
        }

        if (debug && index > 0 && index % 100 === 0) console.log(`${index}/${configsForChunkCount.length} (${100 * index / configsForChunkCount.length}%)`[ "blue" ])
    })
    console.log("best metric was", bestMetric)
}
