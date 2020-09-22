import * as fs from "fs"
import { NEWLINE } from "../constants"
import { removeColor } from "../removeColor"
import { Filename, Io } from "../types"
import { BOM } from "./constants"
import { LogTarget } from "./types"

const write = (message: Io, target: LogTarget, scriptGroup: Filename, filenameOverride?: Filename): void => {
    fs.existsSync("dist") || fs.mkdirSync("dist")
    fs.existsSync(`dist/${scriptGroup}`) || fs.mkdirSync(`dist/${scriptGroup}`)

    const file = `dist/${filenameOverride || `${scriptGroup}/${target}.txt`}`

    if (!fs.existsSync(file)) {
        // http://forum.sagittal.org/viewtopic.php?p=2410#p2410
        // https://stackoverflow.com/a/27975629/6998322
        fs.appendFileSync(file, BOM, { encoding: "utf8" })
        // This is to prevent Excel from dropping columns of real data
        // because it seems to base things on the first row of the file
        // even if the table proper doesn't come for a few lines
        // based on how I've designed the output of the scripts to be more than mere tables
        fs.appendFileSync(file, " \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t \t", { encoding: "utf8" })
    }

    fs.appendFileSync(file, `${removeColor(message)}` + NEWLINE, { encoding: "utf8" })
}

export {
    write,
}
