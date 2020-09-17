import { Id, Io, Row, splitColumnTitlesIntoRowsBySpaces, TwoThreeFreeClass } from "../../../general"
import { CommaAnalysis, JiPitchAnalysis, SymbolClass } from "../../../sagittal"

const JI_PITCH_COLUMN_TITLES = [
    "ratio",
    "monzo",
    "cents",
    "apotome slope",
] as Io[]

const TWO_THREE_FREE_CLASS_COLUMN_TITLES = [
    "prime limit",
    "name",
    "SoPFR",
    "N2D3P9",
] as Io[]

const NOTATING_COMMAS_WITH_MAYBE_SAGITTAL_SYMBOL_CLASSES_COLUMN_TITLES = [
    "symbol class",
    "comma name",
    ...JI_PITCH_COLUMN_TITLES,
] as Io[]

const FIND_COMMAS_COLUMN_TITLES = [
    ...NOTATING_COMMAS_WITH_MAYBE_SAGITTAL_SYMBOL_CLASSES_COLUMN_TITLES,
    // Same as TWO_THREE_FREE_CLASS_COLUMN_TITLES, 
    // but here we can't assume the "2,3-free class" part b/c there's no 2,3-free class title just above
    "prime limit",
    "2,3-free class name",
    "2,3-free class SoPFR",
    "2,3-free class N2D3P9",
] as Io[]

const computeJiPitchHeaderRows = (): Array<Row<{ of: JiPitchAnalysis, header: true }>> =>
    splitColumnTitlesIntoRowsBySpaces(JI_PITCH_COLUMN_TITLES)

const compute23FreeClassHeaderRows = (): Array<Row<{ of: TwoThreeFreeClass, header: true }>> =>
    splitColumnTitlesIntoRowsBySpaces(TWO_THREE_FREE_CLASS_COLUMN_TITLES)

const computeNotatingCommasWithMaybeSagittalSymbolClassesHeaderRows =
    (): Array<Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> }, header: true }>> =>
        splitColumnTitlesIntoRowsBySpaces(NOTATING_COMMAS_WITH_MAYBE_SAGITTAL_SYMBOL_CLASSES_COLUMN_TITLES)

const computeFindCommasHeaderRows =
    (): Array<Row<{ of: CommaAnalysis & { symbolClassId?: Id<SymbolClass> }, header: true }>> =>
        splitColumnTitlesIntoRowsBySpaces(FIND_COMMAS_COLUMN_TITLES)

export {
    computeJiPitchHeaderRows,
    compute23FreeClassHeaderRows,
    computeNotatingCommasWithMaybeSagittalSymbolClassesHeaderRows,
    computeFindCommasHeaderRows,
}
