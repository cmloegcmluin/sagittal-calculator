import {Precision} from "../code"
import {LogTargets} from "./log"
import {TableFormat} from "./table"
import {Char, Io, IoSettings} from "./types"

const IO_PRECISION = 3 as Precision

const IDENTIFYING_MONZO_CHARS = /[\[\]⟩|>]/
const IDENTIFYING_COMMA_NAME_CHARS = /[unskCSMLA]/
const IDENTIFYING_CENTS_CHARS = /[c¢]/
const IDENTIFYING_QUOTIENT_CHARS = /[\/:]/
const IDENTIFYING_ACCIDENTAL_CHARS = /[()~|!\\`,.']/
const NUMERIC_CHARS = /[0123456789]/

const SUPERSCRIPT_NUMBERS: Char[] = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"] as Char[]
const SUBSCRIPT_NUMBERS: Char[] = ["₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"] as Char[]

const NEWLINE = "\n" as Io
const WINDOWS_CARRIAGE_RETURN = "\r" as Io
const SPACE = " " as Io
const BLANK = "" as Io
const TAB = "\t" as Io
const COMMA = "," as Io

const INITIAL_IO_SETTINGS: IoSettings = {
    noWrite: false,
    tableFormat: TableFormat.TERMINAL,
    logTargets: {} as LogTargets,
    disableColors: false,
    // @ts-ignore
    scriptGroup: undefined,
}

export {
    IO_PRECISION,
    IDENTIFYING_MONZO_CHARS,
    SUPERSCRIPT_NUMBERS,
    NEWLINE,
    SPACE,
    BLANK,
    TAB,
    COMMA,
    IDENTIFYING_COMMA_NAME_CHARS,
    IDENTIFYING_CENTS_CHARS,
    IDENTIFYING_QUOTIENT_CHARS,
    IDENTIFYING_ACCIDENTAL_CHARS,
    INITIAL_IO_SETTINGS,
    NUMERIC_CHARS,
    WINDOWS_CARRIAGE_RETURN,
}
