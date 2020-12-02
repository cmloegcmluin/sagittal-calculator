import {program} from "commander"
import {Abs, Max, Min, Prime, Scamon} from "../../../general"
import {ApotomeSlope, Ate, JiPitchAnalysis, N2D3P9} from "../../../sagittal"
import {DEFAULT_FIND_COMMAS_SETTINGS} from "./constants"
import {FindCommasSettings} from "./types"

const computeFindCommasSettings = (
    defaultOverrides: Partial<FindCommasSettings> = {},
): FindCommasSettings => {
    const max23FreeSopfr = program.max23FreeSopfr ||
        defaultOverrides.max23FreeSopfr ||
        DEFAULT_FIND_COMMAS_SETTINGS.max23FreeSopfr
    const max23FreeCopfr = program.max23FreeCopfr ||
        defaultOverrides.max23FreeCopfr ||
        DEFAULT_FIND_COMMAS_SETTINGS.max23FreeCopfr
    const maxPrimeLimit: Max<Max<Prime>> = program.maxPrimeLimit ||
        defaultOverrides.maxPrimeLimit ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxPrimeLimit
    const maxN2D3P9: Max<N2D3P9> = program.maxN2d3p9 ||
        defaultOverrides.maxN2D3P9 ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxN2D3P9
    const lowerBound: Min<Scamon> = program.lowerBound ||
        defaultOverrides.lowerBound ||
        DEFAULT_FIND_COMMAS_SETTINGS.lowerBound
    const upperBound: Max<Scamon> = program.upperBound ||
        defaultOverrides.upperBound ||
        DEFAULT_FIND_COMMAS_SETTINGS.upperBound
    const maxAas: Max<Abs<ApotomeSlope>> = program.maxAas ||
        defaultOverrides.maxAas ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxAas
    const maxAte: Max<Ate> = program.maxAte ||
        defaultOverrides.maxAte ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxAte
    const inclusive: boolean = program.inclusive ||
        defaultOverrides.inclusive ||
        DEFAULT_FIND_COMMAS_SETTINGS.inclusive

    return {max23FreeSopfr, max23FreeCopfr, maxPrimeLimit, maxN2D3P9, lowerBound, upperBound, maxAas, maxAte, inclusive}
}

const computeFindNotatingCommasSettings = ({ate, aas, two3FreeClassAnalysis}: JiPitchAnalysis): FindCommasSettings => {
    const findCommasSettings = computeFindCommasSettings()

    if (aas > findCommasSettings.maxAas) {
        findCommasSettings.maxAas = aas as Max<Abs<ApotomeSlope>>
    }

    if (ate > findCommasSettings.maxAte) {
        findCommasSettings.maxAte = ate as Max<Ate>
    }

    const {n2d3p9} = two3FreeClassAnalysis
    if (n2d3p9 > findCommasSettings.maxN2D3P9) {
        findCommasSettings.maxN2D3P9 = n2d3p9 as Max<N2D3P9>
    }

    return findCommasSettings
}

export {
    computeFindCommasSettings,
    computeFindNotatingCommasSettings,
}
