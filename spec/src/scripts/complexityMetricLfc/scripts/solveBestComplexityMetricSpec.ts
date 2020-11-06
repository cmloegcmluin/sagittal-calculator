import {Io} from "../../../../../src/general/io"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("solve-best-complexity-metric", (): void => {
    it("finds, for each tina up to 9, the top 20% candidate commas, sorted in descending order by their occurrence counts as metacommas between the best commas per semitina zone up to the half-apotome, plus the candidate commas for the semitina, also top 20% sorted descending by occam, but this time the metacommas are between consecutive semitinas of the best commas per semitina zone up to the half-apotome", (): void => {
        onlyRunInCi()

        const script = `npm run solve-best-complexity-metric -- --complexity-search-ed 3 --log-targets final` as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            `Complexity parameter sets for complexity metric family lee which minimize its metric score, all bringing it to 25 (count of ties 1): [{"sE":0.001,"tE":0.001}]`,
            `Complexity parameter sets for complexity metric family ree which minimize its metric score, all bringing it to 82 (count of ties 1): [{"a":0,"sE":0.001,"tE":0.001}]`,
            `Complexity parameter sets for complexity metric family lpe which minimize its metric score, all bringing it to 29 (count of ties 1): [{"b":1,"sP":0,"tE":0.001}]`,
            `Complexity parameter sets for complexity metric family rpe which minimize its metric score, all bringing it to 71 (count of ties 1): [{"a":0,"b":1,"sP":0,"tE":0.001}]`,
            `Complexity parameter sets for complexity metric family lep which minimize its metric score, all bringing it to 25 (count of ties 1): [{"sE":0.001,"c":1,"tP":0}]`,
            `Complexity parameter sets for complexity metric family rep which minimize its metric score, all bringing it to 84 (count of ties 1): [{"a":0,"sE":0.001,"c":1,"tP":0}]`,
            `Complexity parameter sets for complexity metric family lpp which minimize its metric score, all bringing it to 42 (count of ties 1): [{"b":1,"sP":0,"c":1,"tP":0}]`,
            `Complexity parameter sets for complexity metric family rpp which minimize its metric score, all bringing it to 0 (count of ties 1): [{"a":0,"b":1,"sP":0,"c":1,"tP":0}]`,
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
