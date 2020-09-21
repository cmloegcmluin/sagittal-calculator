import { BLANK, Cents, formatNumber, Formatted, indexOfFinalElement, Multiplier } from "../../../../../general"
import { Ina, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../history"

const extractJiNotationLevelDistances = (
    boundHistoryAnalysis: BoundHistoryAnalysis,
    { ina = false }: { ina?: boolean } = {},
): Array<Formatted<Multiplier<Ina> | Cents>> => {
    const boundEventAnalyses = boundHistoryAnalysis.boundEventAnalyses

    return JI_NOTATION_LEVELS.slice(0, indexOfFinalElement(JI_NOTATION_LEVELS))
        .map((jiNotationLevel: JiNotationLevel): Formatted<Multiplier<Ina> | Cents> => {
            const previousEventIndex = boundEventAnalyses
                .findIndex((boundEventAnalysis: BoundEventAnalysis): boolean => {
                    return boundEventAnalysis.jiNotationLevel === jiNotationLevel
                })
            if (previousEventIndex === -1) {
                return BLANK as Formatted<Multiplier<Ina> | Cents>
            }
            const jiNotationLevelEventAnalysis: BoundEventAnalysis = boundEventAnalyses[ previousEventIndex + 1 ]

            return formatNumber(
                ina ? jiNotationLevelEventAnalysis.inaDistance : jiNotationLevelEventAnalysis.distance,
            ) as Formatted<Multiplier<Ina> | Cents>
        })
}

export {
    extractJiNotationLevelDistances,
}
