import { isUndefined } from "../code"
import { formatNum } from "../io"
import { computeDecimalFromMonzo, computeDecimalFromRatio } from "./rational"
import { DecimalNotDefaultingToPotentiallyIrrational, Num, NumTypeParameters } from "./types"

const computeDecimalFromNum = <T extends NumTypeParameters>(
    num: Num<T>,
): DecimalNotDefaultingToPotentiallyIrrational<T> => {
    if (!isUndefined(num.decimal)) {
        return num.decimal
    } else if (!isUndefined(num.ratio)) {
        return computeDecimalFromRatio(num.ratio)
    } else if (!isUndefined(num.monzo)) {
        return computeDecimalFromMonzo(num.monzo)
    }

    throw new Error(`Tried to compute decimal from num ${formatNum(num, { align: false })} but no numeric representations were found.`)
}

export {
    computeDecimalFromNum,
}
