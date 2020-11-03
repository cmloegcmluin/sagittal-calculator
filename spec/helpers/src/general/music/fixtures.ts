import {Direction, Monzo} from "../../../../../src/general/math/numeric"
import {Two3FreeClass} from "../../../../../src/general/music/ji"

const two3FreeClassFixture: Two3FreeClass = {
    monzo: [1, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
} as Two3FreeClass

export {
    two3FreeClassFixture,
}
