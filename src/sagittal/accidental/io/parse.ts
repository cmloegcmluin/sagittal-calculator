import {BLANK, Char, Count, increment, isEmpty, shallowClone} from "../../../general"
import {Accent, Flag} from "../flacco"
import {ABSENCE_OF_A_SYMBOL, Aim, Shafts, Symbol} from "../symbol"
import {PARENTHETICAL_NATURAL_ASCII} from "./constants"
import {Ascii} from "./types"

const parseAscii = (ascii: Ascii): Symbol => {
    if (ascii === PARENTHETICAL_NATURAL_ASCII) return ABSENCE_OF_A_SYMBOL

    const aim = ascii.match(/[Y!]/g) ? Aim.DOWN : Aim.UP

    let pastShaft = false

    const symbol = {} as Symbol

    let shaftCount = 0 as Count

    const accents = [] as Accent[]
    const left = [] as Flag[]
    const right = [] as Flag[]

    let symbolText = shallowClone(ascii)
    if (symbolText.match("``")) {
        accents.push(Accent.BIRD_WITH)
        symbolText = symbolText.replace("``", "") as Ascii
    }
    if (symbolText.match(",,")) {
        accents.push(Accent.BIRD_AGAINST)
        symbolText = symbolText.replace(",,", "") as Ascii
    }

    const symbolChars = symbolText.split(BLANK) as Char[]
    symbolChars.forEach((symbolChar: Char): void => {
        console.log("here's a char", symbolChar)
        if (symbolChar === "`") {
            accents.push(Accent.WING_WITH)
        } else if (symbolChar === ",") {
            accents.push(Accent.WING_AGAINST)
        } else if (symbolChar === "'") {
            accents.push(Accent.TICK_WITH)
        } else if (symbolChar === ".") {
            accents.push(Accent.TICK_AGAINST)
        } else if (symbolChar === "/") {
            aim === Aim.UP ?
                left.push(Flag.BARB) :
                right.push(Flag.BARB)
        } else if (symbolChar === "\\") {
            aim === Aim.UP ?
                right.push(Flag.BARB) :
                left.push(Flag.BARB)
        } else if (symbolChar === ")") {
            aim === Aim.UP ?
                pastShaft ? right.push(Flag.ARC) : left.push(Flag.SCROLL) :
                pastShaft ? right.push(Flag.SCROLL) : left.push(Flag.ARC)
        } else if (symbolChar === "(") {
            aim === Aim.UP ?
                pastShaft ? right.push(Flag.SCROLL) : left.push(Flag.ARC) :
                pastShaft ? right.push(Flag.ARC) : left.push(Flag.SCROLL)
        } else if (symbolChar === "~") {
            pastShaft ?
                right.push(Flag.BOATHOOK) :
                left.push(Flag.BOATHOOK)
        } else if (symbolChar === "!" || symbolChar === "|") {
            pastShaft = true
            shaftCount = increment(shaftCount)
        } else if (symbolChar === "X" || symbolChar === "Y") {
            pastShaft = true
            shaftCount = 4 as Count
        }
    })

    const shafts = shaftCount === 1 ?
        Shafts.SINGLE :
        shaftCount === 2 ?
            Shafts.DOUBLE :
            shaftCount === 3 ?
                Shafts.TRIPLE :
                Shafts.EX
    symbol.core = {aim, shafts}
    if (!isEmpty(accents)) symbol.accents = accents
    if (!isEmpty(left)) symbol.core.left = left
    if (!isEmpty(right)) symbol.core.right = right

    return symbol
}

export {
    parseAscii,
}
