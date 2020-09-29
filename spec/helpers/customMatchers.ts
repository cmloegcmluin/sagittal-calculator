// tslint:disable max-line-length

import {
    ACCURACY_THRESHOLD,
    deepEquals,
    equalNums,
    Io,
    isCloseTo,
    isUndefined,
    Num,
    stringify,
} from "../../src/general"
import { Precision } from "../../src/general/code"
import CustomEqualityTester = jasmine.CustomEqualityTester
import CustomMatcher = jasmine.CustomMatcher
import CustomMatcherFactories = jasmine.CustomMatcherFactories
import CustomMatcherResult = jasmine.CustomMatcherResult
import MatchersUtil = jasmine.MatchersUtil

const precisionMessage = (precision: Precision): string =>
    isUndefined(precision) ? "" : `, with precision ${precision}`

const failWith = (message: Io): CustomMatcherResult => ({
    message,
    pass: false,
})

const doAssertions = (logicFunc: () => void): CustomMatcherResult => {
    try {
        logicFunc()

        return { pass: true }
    } catch (e) {
        return failWith(e.toString())
    }
}

const assert = (condition: boolean, message: Io): void => {
    if (condition) {
        return
    }
    throw message
}

const testEqualNum = <T extends Num>(actual: T, expected: T, precision: Precision, negate?: boolean, message?: Io): void => {
    assert(
        equalNums(actual, expected, precision),
        message || `Expected num ${stringify(actual)} to equal num ${stringify(expected)}.` as Io,
    )
}

const testIsCloseTo = <T extends number>(actual: T, expected: T, precision: Precision, negate?: boolean, message?: Io): void => {
    const isClose: boolean = isCloseTo(actual, expected, precision)

    if (negate) {
        assert(
            !isClose,
            message ||
            `Expected ${stringify(actual, { multiline: true })} not to be close to ${stringify(expected, { multiline: true })}${precisionMessage(precision)}.` as Io,
        )
    } else {
        assert(
            isClose,
            message || `Expected ${stringify(actual, { multiline: true })} to be close to ${stringify(expected, { multiline: true })}${precisionMessage(precision)}.` as Io,
        )
    }
}

const arraysHaveSameContents = <T>(arrayA: T[], arrayB: T[]): boolean => {
    if (arrayA.length !== arrayB.length) {
        return false
    }

    return arrayA.every((elementA: T): boolean =>
        arrayB.some((elementB: T): boolean =>
            deepEquals(elementA, elementB)))
}

const arraysAreCloseUpThroughExpected = <T extends number>(expected: T[], actual: T[], precision: Precision, negate?: boolean, message?: Io): void => {
    expected.forEach((expectedElement: T, index: number): void => {
        const actualElement: T = actual[ index ]

        testIsCloseTo(actualElement, expectedElement, precision, negate, message)
    })
}

const eachExpectedElementIsCloseToSomeActualElement = <T>(expectedElements: T[], actual: T[], precision: Precision, message?: Io): void => {
    expectedElements.forEach((expectedElement: T): void => {
        assert(
            actual.some((actualElement: T): boolean => {
                return deepEquals(actualElement, expectedElement, precision)
            }),
            message || `This expected element did not find an element close to it: ${stringify(expectedElement, { multiline: true })}.` as Io,
        )
    })
}

const eachExpectedElementDeepEqualsSomeActualElement = <T>(expectedElements: T[], actual: T[], message?: Io): void => {
    expectedElements.forEach((expectedElement: T): void => {
        assert(
            actual.some((actualElement: T): boolean => {
                return deepEquals(actualElement, expectedElement)
            }),
            message || `This expected element was not found: ${stringify(expectedElement, { multiline: true })}.` as Io,
        )
    })
}

const eachExpectedElementHasSameContentsAsSomeActualElement = <T>(expectedElements: T[][], actual: T[][], message?: Io): void => {
    expectedElements.forEach((expectedElement: T[]): void => {
        assert(
            actual.some((actualElement: T[]): boolean => {
                return arraysHaveSameContents(actualElement, expectedElement)
            }),
            message || `This expected element was not found: ${stringify(expectedElement, { multiline: true })}` as Io,
        )
    })
}

const customMatchers: CustomMatcherFactories = {
    toEqualNum: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends Num>(actual: T, expected: T, precision: Precision = ACCURACY_THRESHOLD, negate?: boolean, message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                testEqualNum(actual, expected, precision, negate, message)
            }),
    }),
    toBeCloseToTyped: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T, expected: T, precision: Precision = ACCURACY_THRESHOLD, negate?: boolean, message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                testIsCloseTo(actual, expected, precision, negate, message)
            }),
    }),
    toBeCloseToArray: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], precision: Precision = ACCURACY_THRESHOLD, negate?: boolean, message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    actual.length === expected.length,
                    message || `Expected actual's length to be ${expected.length}. It was ${actual.length} instead.` as Io,
                )

                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message)
            }),
    }),
    toBeArrayWithDeepCloseContents: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[], expected: T[], precision: Precision = ACCURACY_THRESHOLD, message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                assert(actual.length === expected.length, `Arrays did not have the same length (expected: ${expected.length}; actual: ${actual.length}), so there is no way they could have the same members (closely).` as Io)
                eachExpectedElementIsCloseToSomeActualElement(expected, actual, precision, message)
            }),
    }),
    toBeCloseToObject: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], precision: Precision = ACCURACY_THRESHOLD, negate?: boolean, message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    deepEquals(actual, expected, precision),
                    message || `Expected ${stringify(actual, { multiline: true })} to deep equal ${stringify(expected, { multiline: true })} with numbers within decimal precision ${precision}.` as Io,
                )
            }),
    }),
    toBeCloseSoFar: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T extends number>(actual: T[], expected: T[], precision: Precision = ACCURACY_THRESHOLD, negate?: boolean, message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message)
            }),
    }),
    // Depth 1: any order, thenceforth: enforced order (deep equal)
    toBeArrayWithDeepEqualContents: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[], expected: T[], message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                assert(actual.length === expected.length, `Arrays did not have the same length (expected: ${expected.length}; actual: ${actual.length}), so there is no way they could have the same members.` as Io)
                eachExpectedElementDeepEqualsSomeActualElement(expected, actual, message)
            }),
    }),
    // Depth 1: any order, depth 2: any order, thenceforth: enforced order (deep equal)
    toBeSameCombinationsAs: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[][], expected: T[][], message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                assert(actual.length === expected.length, `Arrays did not have the same length (expected: ${expected.length}; actual: ${actual.length}), so there is no way they could have the same members.` as Io)
                eachExpectedElementHasSameContentsAsSomeActualElement(expected, actual, message)
            }),
    }),
    // Depth 1: any order, depth 2: enforced order, depth 3: any order, thenceforth: enforced order (deep equal)
    toBeSameDistributionsAs: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[][][], expected: T[][][], message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                assert(actual.length === expected.length, `Arrays did not have the same length (expected: ${expected.length}; actual: ${actual.length}), so there is no way they could have the same members.` as Io)
                expected.forEach((expectedElement: T[][]): void => {
                    assert(
                        actual.some((actualElement: T[][]): boolean => {
                            return actualElement.every((actualElementElement: T[], index: number): boolean => {
                                return arraysHaveSameContents(actualElementElement, expectedElement[ index ])
                            })
                        }),
                        message || `This expected element was not found: ${stringify(expectedElement, { multiline: true })}` as Io,
                    )
                })
            }),
    }),
    // Same as toBeArrayWithDeepEqualContents, but without the length match
    toBeArrayIncludingDeepEqual: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[], expected: T[], message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                eachExpectedElementDeepEqualsSomeActualElement(expected, actual, message)
            }),
    }),
    // Same as toBeSameCombinationsAs, but without the length match
    toBeArrayIncludingCombinations: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <T>(actual: T[][], expected: T[][], message?: Io): CustomMatcherResult =>
            doAssertions((): void => {
                eachExpectedElementHasSameContentsAsSomeActualElement(expected, actual, message)
            }),
    }),
}

beforeAll((): void => {
    jasmine.addMatchers(customMatchers)
})
