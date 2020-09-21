import { Name } from "../../../general"
import { BoundType, JiNotationLevel } from "../../../sagittal"
import { BoundedSymbolClassPositions } from "../boundedPositions"
import { BOUND_POSITIONS_BY_BOUND_TYPE } from "./boundPositions"
import { BoundEvent, BoundPosition } from "./types"

const computeBoundEvents = (
    jiNotationLevel: JiNotationLevel,
    [lesserBoundedSymbolPosition, greaterBoundedSymbolPosition]: BoundedSymbolClassPositions,
    boundType: BoundType,
): BoundEvent[] => {
    const boundEvent: BoundEvent[] = []

    const boundPositions = BOUND_POSITIONS_BY_BOUND_TYPE[ boundType ][ jiNotationLevel ]

    boundPositions.forEach((boundPosition: BoundPosition): void => {
        if (
            (!lesserBoundedSymbolPosition || boundPosition.cents > lesserBoundedSymbolPosition) &&
            (!greaterBoundedSymbolPosition || boundPosition.cents < greaterBoundedSymbolPosition)
        ) {
            boundEvent.push({
                jiNotationLevel,
                boundType: boundType,
                name: boundPosition.name || "" as Name<BoundPosition>,
                cents: boundPosition.cents,
            })
        }
    })

    return boundEvent
}

export {
    computeBoundEvents,
}
