import {Maybe} from "../../../../../src/general/code"
import {Aim, Compatible, computeCoreUnicode} from "../../../../../src/sagittal/accidental"
import {Accent, HeadId, Orientation} from "../../../../../src/sagittal/accidental/flacco"
import {
    computeCompatibleAscii,
    computeCompatibleSmiley,
    computeCompatibleUnicode,
    computeCoreAscii,
    computeCoreSmiley,
    computeOrientedAccentAscii,
    computeOrientedAccentSmiley,
    computeOrientedAccentUnicode,
} from "../../../../../src/sagittal/accidental/glyph"
import {getCore, Shafts} from "../../../../../src/sagittal/accidental/sagittal"
import {GlyphExpectation} from "./types"

const computeCoreGlyphExpectation = (headId: HeadId, shafts: Shafts, aim: Aim): Maybe<GlyphExpectation> => {
    try {
        const core = getCore(headId, shafts, aim)

        return {
            ascii: computeCoreAscii(core),
            unicode: computeCoreUnicode(core),
            smiley: computeCoreSmiley(core),
        }
    } catch (e) {
        return undefined
    }
}

const computeAccentGlyphExpectation = (accent: Accent, orientation: Orientation, aim: Aim): GlyphExpectation =>
    ({
        ascii: computeOrientedAccentAscii({accent, orientation}, aim),
        unicode: computeOrientedAccentUnicode({accent, orientation}, aim),
        smiley: computeOrientedAccentSmiley({accent, orientation}, aim),
    })

const computeCompatibleGlyphExpectation = (compatible: Compatible): GlyphExpectation =>
    ({
        ascii: computeCompatibleAscii(compatible),
        unicode: computeCompatibleUnicode(compatible),
        smiley: computeCompatibleSmiley(compatible),
    })

export {
    computeCoreGlyphExpectation,
    computeAccentGlyphExpectation,
    computeCompatibleGlyphExpectation,
}
