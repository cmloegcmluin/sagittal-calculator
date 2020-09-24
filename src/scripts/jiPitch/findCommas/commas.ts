import { Comma, computeSuperPitch, equalPitches, formatPitch, Monzo, pitchIsHigher } from "../../../general"
import {
    computeCommasFrom23FreeMonzo,
    DEFAULT_LOWER_BOUND,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_UPPER_BOUND,
    MAX_SIZE_CATEGORY_BOUND,
} from "../../../sagittal"
import { compute23FreeMonzosToCheck } from "./twoThreeFreeMonzosToCheck"
import { CommasOptions } from "./types"

const computeCommas = (options: CommasOptions): Comma[] => {
    const {
        lowerBound = DEFAULT_LOWER_BOUND,
        upperBound = DEFAULT_UPPER_BOUND,
        max23FreeSopfr,
        max23FreeCopfr,
        maxAte = DEFAULT_MAX_ATE,
        maxPrimeLimit,
        maxAas = DEFAULT_MAX_AAS,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
    } = options

    if (pitchIsHigher(lowerBound, upperBound) || equalPitches(lowerBound, upperBound)) {
        throw new Error(`Lower bound is not less than upper bound; range was ${formatPitch(lowerBound, { align: false })} - ${formatPitch(upperBound, { align: false })}.`)
    }

    if (
        pitchIsHigher(computeSuperPitch(upperBound), MAX_SIZE_CATEGORY_BOUND) ||
        pitchIsHigher(computeSuperPitch(lowerBound), MAX_SIZE_CATEGORY_BOUND)
    ) {
        throw new Error(`Search range must be within comma size category bounds (±227.370¢); range was ${formatPitch(lowerBound, { align: false })} - ${formatPitch(upperBound, { align: false })}.`)
    }

    let commas: Comma[] = []

    const twoThreeFreeMonzosToCheck: Array<Monzo<{ rough: 5 }>> = compute23FreeMonzosToCheck({
        maxPrimeLimit,
        max23FreeSopfr,
        max23FreeCopfr,
    })

    twoThreeFreeMonzosToCheck.forEach((twoThreeFreeMonzoToCheck: Monzo<{ rough: 5 }>): void => {
        commas = commas.concat(
            computeCommasFrom23FreeMonzo(
                twoThreeFreeMonzoToCheck,
                {
                    lowerBound,
                    upperBound,
                    maxAas,
                    maxAte,
                    maxN2D3P9,
                },
            ),
        )
    })

    return commas
}

export {
    computeCommas,
}
