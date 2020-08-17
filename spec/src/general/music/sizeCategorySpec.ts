import { Cents } from "../../../../src/general"
import { computeSizeCategory } from "../../../../src/general/music/sizeCategory"

describe("computeSizeCategory", () => {
    it("returns the correct size category per the amount of cents", () => {
        expect(computeSizeCategory(0 as Cents)).toBe("u")
        expect(computeSizeCategory(1 as Cents)).toBe("n")
        expect(computeSizeCategory(2 as Cents)).toBe("s")
        expect(computeSizeCategory(10 as Cents)).toBe("k")
        expect(computeSizeCategory(20 as Cents)).toBe("C")
        expect(computeSizeCategory(40 as Cents)).toBe("S")
        expect(computeSizeCategory(50 as Cents)).toBe("M")
        expect(computeSizeCategory(60 as Cents)).toBe("L")
        expect(computeSizeCategory(80 as Cents)).toBe("SS")
        expect(computeSizeCategory(100 as Cents)).toBe("MS")
        expect(computeSizeCategory(110 as Cents)).toBe("LS")
        expect(computeSizeCategory(115 as Cents)).toBe("A")
        expect(computeSizeCategory(117 as Cents)).toBe("s+A")
        expect(computeSizeCategory(120 as Cents)).toBe("k+A")
        expect(computeSizeCategory(135 as Cents)).toBe("C+A")
        expect(computeSizeCategory(155 as Cents)).toBe("S+A")
        expect(computeSizeCategory(165 as Cents)).toBe("M+A")
        expect(computeSizeCategory(175 as Cents)).toBe("L+A")
        expect(computeSizeCategory(190 as Cents)).toBe("SS+A")
        expect(computeSizeCategory(200 as Cents)).toBe("MS+A")
        expect(computeSizeCategory(220 as Cents)).toBe("LS+A")
        expect(computeSizeCategory(230 as Cents)).toBe("A+A")
    })

    it("works when not abbreviated", () => {
        expect(computeSizeCategory(0 as Cents, { abbreviated: false })).toBe("unison")
        expect(computeSizeCategory(1 as Cents, { abbreviated: false })).toBe("schismina")
        expect(computeSizeCategory(2 as Cents, { abbreviated: false })).toBe("schisma")
        expect(computeSizeCategory(10 as Cents, { abbreviated: false })).toBe("kleisma")
        expect(computeSizeCategory(20 as Cents, { abbreviated: false })).toBe("Comma")
        expect(computeSizeCategory(40 as Cents, { abbreviated: false })).toBe("Small-Diesis")
        expect(computeSizeCategory(50 as Cents, { abbreviated: false })).toBe("Medium-Diesis")
        expect(computeSizeCategory(60 as Cents, { abbreviated: false })).toBe("Large-Diesis")
        expect(computeSizeCategory(80 as Cents, { abbreviated: false })).toBe("Small-Semitone")
        expect(computeSizeCategory(100 as Cents, { abbreviated: false })).toBe("Medium-Semitone")
        expect(computeSizeCategory(110 as Cents, { abbreviated: false })).toBe("Large-Semitone")
        expect(computeSizeCategory(115 as Cents, { abbreviated: false })).toBe("Apotome")
        expect(computeSizeCategory(117 as Cents, { abbreviated: false })).toBe("schisma-plus-Apotome")
        expect(computeSizeCategory(120 as Cents, { abbreviated: false })).toBe("kleisma-plus-Apotome")
        expect(computeSizeCategory(135 as Cents, { abbreviated: false })).toBe("Comma-plus-Apotome")
        expect(computeSizeCategory(155 as Cents, { abbreviated: false })).toBe("Small-Diesis-plus-Apotome")
        expect(computeSizeCategory(165 as Cents, { abbreviated: false })).toBe("Medium-Diesis-plus-Apotome")
        expect(computeSizeCategory(175 as Cents, { abbreviated: false })).toBe("Large-Diesis-plus-Apotome")
        expect(computeSizeCategory(190 as Cents, { abbreviated: false })).toBe("Small-Semitone-plus-Apotome")
        expect(computeSizeCategory(200 as Cents, { abbreviated: false })).toBe("Medium-Semitone-plus-Apotome")
        expect(computeSizeCategory(220 as Cents, { abbreviated: false })).toBe("Large-Semitone-plus-Apotome")
        expect(computeSizeCategory(230 as Cents, { abbreviated: false })).toBe("double-Apotome")
    })

    it("works when the size is huge", () => {
        expect(computeSizeCategory(999999 as Cents)).toBe("A+A")
    })
})
