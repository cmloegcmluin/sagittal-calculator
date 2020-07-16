import { Combination, Ratio } from "../../../../general"
import { debug } from "../../debug"
import { Submetric } from "../../types"
import { Antivotes } from "../types"
import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"

const computeAntivotes = (fiveRoughRatio: Ratio, submetrics: Combination<Submetric>): Antivotes =>
    submetrics.reduce(
        (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
            const weightedSubmetricAntivotes: Antivotes = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

            if (debug.all || debug.submetricAntivotes) {
                console.log(`${JSON.stringify(submetric)}: ${weightedSubmetricAntivotes}`)
            }

            return totalAntivotes + weightedSubmetricAntivotes as Antivotes
        },
        0 as Antivotes,
    )

export {
    computeAntivotes,
}
