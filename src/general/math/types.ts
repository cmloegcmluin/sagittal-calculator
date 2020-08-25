type Numerator = Integer & { _NumeratorBrand: "Numerator" }
type Denominator = Integer & { _DenominatorBrand: "Denominator" }
type Ratio = [Numerator, Denominator]

type Combination<T> = T[] & { _CombinationBrand: "Combination" }
type Combinations<T> = Array<Combination<T>> & { _CombinationsBrand: "Combinations" }

type DistributionBin<T> = Combination<T> & { _DistributionBinBrand: "DistributionBin" }
type Distribution<T> = Array<DistributionBin<T>> & { _DistributionBrand: "Distribution" }

// Numeric types where parameter is also numeric
type Exponent<T extends number | void = void> = number & { _ExponentBrand: "Exponent" } & (T extends void ? {} : { _ExponentOfBrand: T })
type Base<T extends number | void = void> = number & { _BaseBrand: "Base" } & (T extends void ? {} : { _BaseOfBrand: T })
type Power<T extends number | void = void> = number & { _PowerBrand: "Power" } & (T extends void ? {} : { _PowerOfBrand: T })
type Integer<T extends number | void = void> = number & { _IntegerBrand: "Integer" } & (T extends void ? {} : { _IntegerOfBrand: T })

enum FractionalPart {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

export {
    Ratio,
    Numerator,
    Denominator,
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
    FractionalPart,
    Exponent,
    Base,
    Power,
    Integer,
}
