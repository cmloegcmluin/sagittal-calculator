import { JI_SYMBOLS, JiSymbol } from "./ji"

const unicodeFromAscii: (ascii: string) => string =
    (ascii: string): string => {
        const symbol: JiSymbol | undefined = JI_SYMBOLS.find(symbol => symbol.ascii === ascii)

        if (!symbol) {
            throw new Error(`No symbol found with ascii ${ascii}`)
        }

        return symbol.unicode
    }

export {
    unicodeFromAscii,
}
