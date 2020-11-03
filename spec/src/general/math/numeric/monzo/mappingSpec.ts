import {Monzo, Step} from "../../../../../../src/general"
import {computeMonzoMapping, Val} from "../../../../../../src/general/math/numeric/monzo"
import {INSANE_ZETA_PEAK_VAL} from "../../../../../../src/sagittal/notations/ji/zetaPeakVals"

describe("computeMonzoMapping", (): void => {
    it("given a val mapping, returns the number of steps that would represent the given monzo", (): void => {
        const val: Val = [8539, 13534, 19827, 23972, 29540, 31598] as Val
        const monzo = [5, -3, 1, -1, -1, 1] as Monzo

        const actual = computeMonzoMapping(monzo, val)

        const expected = 6 as Step
        expect(actual).toBe(expected)
    })

    it("checkin' 77/185n maps to 0 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const monzo = [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Monzo

        const actual = computeMonzoMapping(monzo, INSANE_ZETA_PEAK_VAL)

        const expected = 0 as Step
        expect(actual).toBe(expected)
    })

    it("maps 143/1715n to 7 steps under zeta peak EDO for Insane precision level JI notation", (): void => {
        const monzo = [2, 1, -1, -3, 1, 1] as Monzo

        const actual = computeMonzoMapping(monzo, INSANE_ZETA_PEAK_VAL)

        const expected = 7 as Step
        expect(actual).toBe(expected)
    })
})
