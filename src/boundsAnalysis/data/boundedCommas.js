const {calculateBoundedCommaPositions} = require("./calculateBoundedCommaPositions")
const {calculateCommaFromPosition} = require("./calculateCommaFromPosition")
const {BOUNDS} = require("./bounds")

const calculateBoundedCommas = bound => {
    const {position, levels} = bound

    return levels.reduce(
        (levels, level) => {
            const levelBoundedCommas = calculateBoundedCommaPositions(position, level).map(position => calculateCommaFromPosition(position))
            const levelBoundedCommasWithDistance = levelBoundedCommas.map(comma => comma && ({
                ...comma,
                distance: Math.abs(position - comma.position),
            }))

            return {
                ...levels,
                [level]: levelBoundedCommasWithDistance,
            }
        },
        {},
    )
}

const BOUNDED_COMMAS = BOUNDS.map((bound, boundIndex) => calculateBoundedCommas(bound))

module.exports = {
    calculateBoundedCommas,
    BOUNDED_COMMAS,
}
