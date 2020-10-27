import {ColorMethod, Maybe} from "../../../../../general"
import {JiNotationLevelId} from "../../../../../sagittal"
import {jiNotationLevelsBestHistoryRanks} from "../../../globals"
import {RANK_COLOR_METHODS} from "../rankColors"

const computeJiNotationLevelAnalysisRowColors = (jiNotationLevel: JiNotationLevelId): Array<Maybe<ColorMethod>> => {
    const colors = [] as ColorMethod[]

    const jiNotationLevelsBestHistoryRanksValues =
        Object.keys(jiNotationLevelsBestHistoryRanks[jiNotationLevel]) as unknown[] as number[]

    jiNotationLevelsBestHistoryRanksValues.forEach((rankIndex: number): void => {
        const color = RANK_COLOR_METHODS[rankIndex]
        colors.push(color)
    })

    return colors
}

export {
    computeJiNotationLevelAnalysisRowColors,
}
