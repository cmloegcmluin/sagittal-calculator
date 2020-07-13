import {
    DynamicParameterValue,
    Parameter, ParameterValue,
    Submetric,
    SubmetricScope, SubmetricType,
} from "../../../../../../../src/scripts/unpopularityMetric/types"
import { Index, Resolution, Span, Unit } from "../../../../../../../src/utilities/types"
import {
    DynamicParameter,
    SamplePoint,
} from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/types"
import { computeNextScopes } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/bestMetric/nextScopes"

describe("computeNextScopes", () => {
    it("given a sample point (which has been identified as a local minimum) and the dynamic parameters, is able to tell you what the next scopes should be to delve deeper in that vicinity", () => {
        const samplePoint = [1, 0, 3] as SamplePoint
        const dynamicParameters: DynamicParameter[] = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.J,
                values: [0, 0.1, 0.2, 0.3, 0.4, 0.5] as DynamicParameterValue[],
                unit: 0.1 as Unit<DynamicParameterValue>,
            },
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.W,
                values: [0, 0.5, 1] as DynamicParameterValue[],
                unit: 0.5 as Unit<DynamicParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [2, 2.02, 2.04, 2.06, 2.08, 2.1] as DynamicParameterValue[],
                unit: 0.02 as Unit<DynamicParameterValue>,
            },
        ]
        const submetricScopes: SubmetricScope[] = [
            {
                [ Parameter.J ]: {
                    center: 0.1 as DynamicParameterValue,
                    span: 0.05 as Span<DynamicParameterValue>,
                    resolution: 5 as Resolution<DynamicParameterValue>,
                }, // haha... it just doesn't care what your previous resolution was. well, that's why I had the top-level script point to the same constant that this module uses, to generally prevent that.
                [ Parameter.W ]: {
                    center: 0 as DynamicParameterValue,
                    span: 0.25 as Span<DynamicParameterValue>,
                    resolution: 5 as Resolution<DynamicParameterValue>,
                },
                [ Parameter.A ]: 2 as ParameterValue,
            },
            {
                [ Parameter.Y ]: {
                    center: 2.06 as DynamicParameterValue,
                    span: 0.01 as Span<DynamicParameterValue>,
                    resolution: 5 as Resolution<DynamicParameterValue>,
                },
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            },
        ]

        const result = computeNextScopes(samplePoint, dynamicParameters, submetricScopes)

        expect(result).toEqual([
            {
                [ Parameter.J ]: { center: 0.1, span: 0.06666666666666667, resolution: 7 },
                [ Parameter.W ]: { center: 0, span: 0.3333333333333333, resolution: 34 },
                [ Parameter.A ]: 2,
            },
            {
                [ Parameter.Y ]: { center: 2.06, span: 0.013333333333333332, resolution: 2 },
                [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            },
        ])
    })
})
