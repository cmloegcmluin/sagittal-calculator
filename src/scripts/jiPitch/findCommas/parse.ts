import { program } from "commander"
import { Abs, Decimal, Exponent, Max, Min, Pitch, Prime } from "../../../general"
import { ApotomeSlope, N2D3P9 } from "../../../sagittal"
import { DEFAULT_FIND_COMMAS_SETTINGS } from "./constants"
import { FindCommasSettings } from "./types"

const parseFindCommasSettings = (
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
    const lowerBound: Min<Pitch> = program.lowerBound ||
        defaultOverrides.lowerBound ||
        DEFAULT_FIND_COMMAS_SETTINGS.lowerBound
    const upperBound: Max<Pitch> = program.upperBound ||
        defaultOverrides.upperBound ||
        DEFAULT_FIND_COMMAS_SETTINGS.upperBound
    const maxAas: Max<Abs<ApotomeSlope>> = program.maxAas ||
        defaultOverrides.maxAas ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxAas
    const maxAte: Max<Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>> = program.maxAte ||
        defaultOverrides.maxAte ||
        DEFAULT_FIND_COMMAS_SETTINGS.maxAte

    return { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit, maxN2D3P9, lowerBound, upperBound, maxAas, maxAte }
}

export {
    parseFindCommasSettings,
}
