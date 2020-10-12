import { computeRationalScamonGeometricMean, Id, indexOfFinalElement, Name } from "../../../general"
import {
    CommaClass,
    CommaMean,
    getCommaClass,
    getRepresentativeSymbol,
    JiNotationLevel,
    JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "../../../sagittal"

const computeJiNotationLevelCommaMeans = (jiNotationLevel: JiNotationLevel): CommaMean[] => {
    const jiNotationLevelCommaClassIds = JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelCommaClassIdsExcludingTheFinalCommaClass =
        jiNotationLevelCommaClassIds.slice(0, indexOfFinalElement(jiNotationLevelCommaClassIds))

    return jiNotationLevelCommaClassIdsExcludingTheFinalCommaClass
        .map((commaClassId: Id<CommaClass>, index: number): CommaMean => {
            const nextCommaClassId = jiNotationLevelCommaClassIds[ index + 1 ]

            const commaClass = getCommaClass(commaClassId)
            const nextCommaClass = getCommaClass(nextCommaClassId)

            const name = [
                getRepresentativeSymbol(commaClassId),
                getRepresentativeSymbol(nextCommaClassId),
            ].join(" ") as Name<CommaMean>

            return {
                pitch: computeRationalScamonGeometricMean(commaClass, nextCommaClass),
                name,
            }
        })
}

export {
    computeJiNotationLevelCommaMeans,
}
