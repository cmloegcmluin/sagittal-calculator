import { program } from "commander"
import {
    alignTable,
    computeMonzoFromRatio,
    formatMonzo,
    formatNumber,
    formatRatio,
    Id,
    parseMonzo,
    parseRatio,
} from "../../../general"
import { computeNotatingJiSymbolIds, getJiSymbol, getSagittalComma, JiSymbol } from "../../../notations"

// TODO: you should extract this shared between this and analyze-comma script for receiving input of a monzo or ratio
//  (or name ... you should also make it accept -n name!

// TODO: it might be nice to share the logic from formatSymbolAscii
//  for centering symbols on shafts, ratios on slash, and monzos on terms
//  into the alignTable method

program
    .option("-m, --monzo <monzo>", "monzo", parseMonzo)
    .option("-r, --ratio <ratio>", "ratio", parseRatio)
    .parse(process.argv)

const comma = program.args[ 0 ]

let monzo
if (comma) {
    if (comma.includes("/")) {
        monzo = computeMonzoFromRatio(parseRatio(comma))
    }
    if (comma.includes("[") || comma.includes("|") || comma.includes(">") || comma.includes("⟩") || comma.includes("]")) {
        monzo = parseMonzo(comma)
    }
} else if (program.monzo) {
    monzo = program.monzo
} else if (program.ratio) {
    monzo = computeMonzoFromRatio(program.ratio)
}

if (!monzo) {
    throw new Error("Unable to determine monzo for comma.")
}

const notatingSymbolIds = computeNotatingJiSymbolIds(monzo)

const notatingSymbolTableData = notatingSymbolIds.map((jiSymbolId: Id<JiSymbol>) => {
    const { primaryCommaId, ascii: symbol } = getJiSymbol(jiSymbolId)
    const { name, monzo, cents, ratio } = getSagittalComma(primaryCommaId)

    const formattedRatio = formatRatio(ratio)
    const formattedMonzo = formatMonzo(monzo)
    const formattedCents = formatNumber(cents)

    return `${symbol}\t${name}\t${formattedRatio}\t${formattedMonzo}\t${formattedCents}`
})

const NOTATING_SYMBOLS_HEADER_ROW = ["symbol", "name", "ratio", "monzo", "cents"].join("\t")
notatingSymbolTableData.unshift(NOTATING_SYMBOLS_HEADER_ROW)

console.log(alignTable(notatingSymbolTableData).join("\n"))
