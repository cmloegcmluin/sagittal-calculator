import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeDecimalFromMonzo,
    computeQuotientFromMonzo,
    Scamon,
} from "../../../general"
import {computeAas, computeApotomeSlope, computeAte} from "../badness"
import {analyze23FreeClass} from "./two3FreeClass"
import {JiPitchAnalysis} from "./types"

const analyzeJiPitch = (jiPitch: Scamon<{rational: true}>): JiPitchAnalysis => {
    const monzo = jiPitch.monzo
    const quotient = computeQuotientFromMonzo(monzo)
    const decimal = computeDecimalFromMonzo(monzo)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const two3FreeClass = compute23FreeClass(jiPitch)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    // TODO: include LPE cmplxty and LPEI badness
    //  Although to be safe wait until the forum conversation is resolved re: these

    return {
        pitch: jiPitch,
        monzo,
        quotient,
        cents,
        decimal,
        two3FreeClassAnalysis,
        apotomeSlope,
        aas,
        ate,
    }
}

export {
    analyzeJiPitch,
}
