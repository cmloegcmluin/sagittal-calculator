import { Cents, computeCentsFromPitch, computeNumberFromCents, Id, indexOfFinalElement, Name } from "../../../general"
import {
    CommaMean,
    getPrimaryComma,
    getRepresentativeSymbol,
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    SymbolClass,
    SymbolLongAscii,
} from "../../../sagittal"

const getJiNotationSymbolCents = (symbolClassId: Id<SymbolClass>): Cents => {
    const primaryComma = getPrimaryComma(symbolClassId)

    return computeCentsFromPitch(primaryComma)
}

const getJiNotationSymbolAscii = (symbolClassId: Id<SymbolClass>): SymbolLongAscii => {
    const representativeSymbol = getRepresentativeSymbol(symbolClassId)

    return representativeSymbol.revoAscii
}

const computeJiNotationLevelCommaMeans = (jiNotationLevel: JiNotationLevel): CommaMean[] => {
    const jiNotationLevelSymbolClassIds = JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ jiNotationLevel ]

    const jiNotationLevelSymbolClassIdsExcludingTheFinalSymbolClass =
        jiNotationLevelSymbolClassIds.slice(0, indexOfFinalElement(jiNotationLevelSymbolClassIds))

    return jiNotationLevelSymbolClassIdsExcludingTheFinalSymbolClass
        .map((symbolClassId: Id<SymbolClass>, index: number): CommaMean => {
            const nextSymbolClassId = jiNotationLevelSymbolClassIds[ index + 1 ]

            // TODO: NUM SQRT HELPER
            //  Combine the nums, then take their sqrt, that's what you should do here.
            //  Although maybe it should just be an average nums helper.
            const cents = (
                getJiNotationSymbolCents(symbolClassId) + getJiNotationSymbolCents(nextSymbolClassId)
            ) / 2 as Cents
            const number = computeNumberFromCents(cents)
            const name = [
                getJiNotationSymbolAscii(symbolClassId),
                getJiNotationSymbolAscii(nextSymbolClassId),
            ].join(" ") as Name<CommaMean>

            return {
                decimal: number,
                name,
            }
        })
}

export {
    computeJiNotationLevelCommaMeans,
}
