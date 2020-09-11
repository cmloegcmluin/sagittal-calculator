import { Comma, Formatted, isUndefined, Maybe, Name, parseRatio, Ratio, TwoThreeFreeClass } from "../../../general"
import { SIZE_CATEGORIES } from "./sizeCategories"
import { SizeCategoryName } from "./types"

// TODO: this ratio does not stipulate being super, which is maybe an argument for it not being directed after all...
//  i.e. that if the comma name parsed into its 2,3-free class, that might be nice. 
//  do we know whether it's possible for in a size category to have both a e.g. 1/5 and a 5/1, though? if so, this 
//  wouldn't work, or in other words, this could not get away with being a 2,3-free class, and so shouldn't try to be
const parseCommaName = (
    commaName: Name<Comma>
): { twoThreeFreeRatio: Ratio<{ rough: 5 }>, sizeCategoryName: SizeCategoryName } => {
    const twoThreeFreeClassPartOfCommaName = commaName.replace(/[a-zA-Z+\-]/g, "") as Formatted<TwoThreeFreeClass>
    const sizeCategoryPartOfCommaName = commaName.replace(twoThreeFreeClassPartOfCommaName, "").replace(/-/, "")

    const twoThreeFreeRatio = 
        parseRatio(twoThreeFreeClassPartOfCommaName as Formatted as Formatted<Ratio<{ rough: 5 }>>)

    let maybeSizeCategoryName: Maybe<SizeCategoryName> = undefined

    for (const sizeCategory of SIZE_CATEGORIES) {
        if (
            sizeCategoryPartOfCommaName === sizeCategory.name ||
            sizeCategoryPartOfCommaName === sizeCategory.abbreviation
        ) {
            maybeSizeCategoryName = sizeCategory.name
        }
    }

    if (isUndefined(maybeSizeCategoryName)) {
        throw new Error(`No size category found for comma name ${commaName}.`)
    }

    return { twoThreeFreeRatio, sizeCategoryName: maybeSizeCategoryName }
}

export {
    parseCommaName,
}
