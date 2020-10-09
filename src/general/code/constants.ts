import { Precision } from "./types"

const DEFAULT_PRECISION = 5 as Precision
const MAX_JS_PRECISION = 15 as Precision

const ARRAY_EXTENSION_BASE: unknown[] = []
const OBJECT_EXTENSION_BASE: Object = {}

const ZERO_ONE_INDEX_DIFF = 1

const MAX_JS_INTEGER_VALUE = 9007199254740991

const NOT_FOUND = -1

export {
    ARRAY_EXTENSION_BASE,
    OBJECT_EXTENSION_BASE,
    DEFAULT_PRECISION,
    ZERO_ONE_INDEX_DIFF,
    MAX_JS_INTEGER_VALUE,
    MAX_JS_PRECISION,
    NOT_FOUND,
}
