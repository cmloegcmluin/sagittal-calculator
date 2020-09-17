import { formatInteger, formatNumber, Io, NEWLINE } from "../../../general"
import { FindCommasOptions } from "../types"

const JI_PITCH_TITLE = "   --- JI pitch ---\n\n" as Io

const TWO_THREE_FREE_CLASS_TITLE = "   --- 2,3-free class ---\n\n" as Io

const NOTATING_COMMAS_TITLE = "   --- notating commas ---\n\n" as Io

const computeFindCommasTitle = (
    { max23FreeSopfr, max23FreeCopfr, maxPrimeLimit, maxN2D3P9, minCents, maxCents, maxAte, maxAas }: FindCommasOptions,
): Io => {
    return [
        "",
        `cents range:       \t${formatNumber(minCents)} - ${formatNumber(maxCents)}`,
        `max ATE:           \t${formatInteger(maxAte)}`,
        `max AAS:           \t${formatNumber(maxAas)}`,
        `max N2D3P9:        \t${formatNumber(maxN2D3P9)}`,
        `max 2,3-free sopfr:\t${formatInteger(max23FreeSopfr)}`,
        `max 2,3-free copfr:\t${formatInteger(max23FreeCopfr)}`,
        `max prime limit:   \t${formatInteger(maxPrimeLimit)}`,
        "",
    ].join(NEWLINE) + NEWLINE as Io
}

export {
    JI_PITCH_TITLE,
    TWO_THREE_FREE_CLASS_TITLE,
    NOTATING_COMMAS_TITLE,
    computeFindCommasTitle,
}
