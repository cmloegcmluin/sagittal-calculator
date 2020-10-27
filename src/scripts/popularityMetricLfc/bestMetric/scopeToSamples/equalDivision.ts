import {ceil, Ed, Window} from "../../../../general"
import {Parameter} from "../../../types"
import {popularityMetricLfcScriptGroupSettings} from "../../globals"

const computeEqualDivision = (window: Window<Parameter>): Ed<Parameter> => {
    const maxUnit = popularityMetricLfcScriptGroupSettings.maxUnit

    const equalDivision = ceil(window / maxUnit as Ed<Parameter>)

    return equalDivision > 1 ?
        equalDivision as Ed<Parameter> :
        2 as Ed<Parameter>
}

export {
    computeEqualDivision,
}
