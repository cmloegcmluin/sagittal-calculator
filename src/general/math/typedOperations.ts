import { isUndefined, Precision } from "../code"
import { Addend, Count, Divisor, Multiplier, Product, Subtrahend, Sum } from "../types"
import {
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS,
} from "./constants"
import { Decimal } from "./num"
import { IntegerDecimal, RationalDecimal } from "./rational"
import { Abs, Avg, Base, Exponent, Max, Min, Power } from "./types"

const count = <T>(array: T[]): Count<T> => {
    return array.length as Count<T>
}

const sum = <T extends number>(...addends: T[]): Sum<T> =>
    addends.reduce(
        (total: Sum<T>, addend: T): Sum<T> => total + addend as Sum<T>,
        ADDITIVE_IDENTITY as Sum<T>,
    )

const product = <T extends number>(...factors: T[]): Product<T> =>
    factors.reduce(
        (total: Product<T>, factor: T): Product<T> => total * factor as Product<T>,
        MULTIPLICATIVE_IDENTITY as Product<T>,
    )

const add = <T extends number>(augend: T, addend: Addend<T> | T): T =>
    augend + addend as T                    // Sum

const subtract = <T extends number>(minuend: T, subtrahend: Subtrahend<T> | T): T =>
    minuend - subtrahend as T               // Difference

const multiply = <T extends number>(multiplicand: T, multiplier: Multiplier<T> | T): T => {
    return multiplicand * multiplier as T   // Product
}

const divide = <T extends number>(dividend: T, divisor: Divisor<T> | T): T => {
    return dividend / divisor as T          // Quotient
}

const mod = <T extends number>(dividend: T, divisor: T): Omit<T, "_IntegerBrand"> =>
    dividend % divisor as unknown as Omit<T, "_IntegerBrand">

// TODO: use the technique I used elsewhere to prevent this from borking types that aren't integer already; 
//  Oh, actually that's just what I did for sqrt below
const reciprocal = <T extends number>(number: T): Omit<T, "_IntegerBrand"> =>
    1 / number as unknown as Omit<T, "_IntegerBrand">

const negative = <T extends number>(number: T): T =>
    number === 0 ? 0 as T : -number as T

const round = <T extends number>(number: T, precision?: Precision): T => {
    if (isUndefined(precision)) {
        return Math.round(number) as T & IntegerDecimal
    }

    if (abs(number) < VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS) {
        return 0 as T
    }

    return +(Math.round(`${String(number)}e+${String(precision)}` as unknown as number) + "e-" + String(precision)) as T
}

const abs = <T extends number>(number: T): Abs<T> =>
    Math.abs(number) as Abs<T>

// TODO: And anything like that using rational/integer should live in num/
//  Although I'm actually thinking in this case what we're looking for is in num/, a generic root helper
//  And here, it should be more like pow, log, etc. where there should be a ... well it should return a Power<T>
//  And that's really all...
const sqrt: {
    <T extends IntegerDecimal>(integerDecimal: T): Decimal,
    <T extends RationalDecimal>(rationalDecimal: T): Decimal,
    <T extends Decimal>(decimal: T): Decimal,
} = <T extends Decimal>(decimal: T): any =>
    Math.sqrt(decimal)

const cubeRoot: {
    <T extends IntegerDecimal>(integerDecimal: T): Decimal,
    <T extends RationalDecimal>(rationalDecimal: T): Decimal,
    <T extends Decimal>(decimal: T): Decimal,
} = <T extends Decimal>(decimal: T): any =>
    Math.cbrt(decimal) as unknown as Omit<T, "_IntegerBrand">

const max = <T extends number>(...numbers: T[]): Max<T> =>
    Math.max(...numbers) as Max<T>

const min = <T extends number>(...numbers: T[]): Min<T> =>
    Math.min(...numbers) as Min<T>

const pow = <T extends number>(base: Base<T> | T, exponent: Exponent<T> | T): Power<T> =>
    Math.pow(base, exponent) as Power<T>

const log = <T extends number>(power: Power<T> | T, base: Base<T> | T = Math.E as Base<T>): Exponent<T> =>
    Math.log(power) / Math.log(base) as Exponent<T>

const avg = <T extends number>(...numbers: T[]): Avg<T> =>
    sum(...numbers) / count(numbers) as Avg<T>

export {
    sum,
    product,
    add,
    subtract,
    multiply,
    divide,
    mod,
    reciprocal,
    negative,
    round,
    abs,
    sqrt,
    cubeRoot,
    max,
    min,
    pow,
    log,
    count,
    avg,
}
