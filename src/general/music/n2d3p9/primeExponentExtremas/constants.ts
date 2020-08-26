import { Exponent, Prime } from "../../../math"
import { Extrema } from "../../../types"

const EMPTY_PRIME_EXPONENT_EXTREMA = [0, 0] as Extrema<Exponent<Prime>>

const INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE = [
    EMPTY_PRIME_EXPONENT_EXTREMA,
    EMPTY_PRIME_EXPONENT_EXTREMA,
] as Array<Extrema<Exponent<Prime>>>

export {
    EMPTY_PRIME_EXPONENT_EXTREMA,
    INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE,
}
