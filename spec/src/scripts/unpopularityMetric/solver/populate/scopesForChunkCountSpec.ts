import { Count, deepEquals } from "../../../../../../src/general"
import { arraysHaveSameContents } from "../../../../../../src/general/code/arraysHaveSameContents"
import { Chunk, Scope, status } from "../../../../../../src/scripts/unpopularityMetric/solver"
import { scopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/globals"
import {
    INITIAL_PARAMETER_SCOPES,
    SUBMETRIC_CHUNKS,
} from "../../../../../../src/scripts/unpopularityMetric/solver/populate/constants"
import { populateScopesForChunkCount } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scopesForChunkCount"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("populateScopesForChunkCount", () => {
    let originalJasmineTimeoutInterval: number
    beforeEach(() => {
        originalJasmineTimeoutInterval = jasmine.DEFAULT_TIMEOUT_INTERVAL

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 12000
    })

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeoutInterval
    })

    it("given a chunk count, populates all possible distributions of all possible combinations of parameter chunks across bins corresponding to all possible combinations of submetric chunks - works for 1, where each possibility is just a single submetric chunk", async () => {
        const chunkCount = 1 as Count<Chunk>
        status.populatingChunkCount = chunkCount
        scopesForChunkCount[ chunkCount ] = []

        await populateScopesForChunkCount()

        expect(scopesForChunkCount[ chunkCount ]).toEqual(jasmine.arrayWithExactContents(SUBMETRIC_CHUNKS.map(chunk => [chunk])))
    })

    fit("given a chunk count, populates all possible combinations of those parameters - works for 2", async () => {
        const chunkCount = 2 as Count<Chunk>
        status.populatingChunkCount = chunkCount
        scopesForChunkCount[ chunkCount ] = []

        await populateScopesForChunkCount()

        const expectedResult = [
            // 6
            [ // with repetitions is not useful when the chunk count for submetrics is more than 1 more than the chunk count for parameters (because then you're inevitably going to end up with two submetric scopes that are identical) (and wait no, it's even more complicated than that, because if you had 3 submetric chunks you could have 2 of them repeat and the 3rd was different, so just 1 parameter would be enough to differentiate the 2 same submetrics), but due to the complications that would arise from caching those separately I am just not going to deal with it
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
            ],
            [
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                { // SOAPFAR
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                },
            ],

            // 5
            [
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
            ],
            [
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                { // SOAPF
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                },
            ],

            // 4
            [
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                { // COAPFAR
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                },
            ],

            // 3
            [
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                { // COAPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                },
            ],

            // 2
            [
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
            ],
            [
                { // GPF
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                },
            ],

            // 1
            [
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                },
                { // LOG BASE A OF N
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                },
            ],

            // SOAPFAR (14)
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // SOAPF (14)
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // COAPFAR (14)
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // COAPF (14)
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // GPF (14)
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // LOG BASE A OF N (14)
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.K ]: INITIAL_PARAMETER_SCOPES[ Parameter.K ],
                    [ Parameter.K_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.J ]: INITIAL_PARAMETER_SCOPES[ Parameter.J ],
                    [ Parameter.J_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_EXPONENT ]: true,
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.W ]: INITIAL_PARAMETER_SCOPES[ Parameter.W ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.Y ]: INITIAL_PARAMETER_SCOPES[ Parameter.Y ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.USE_NUMINATOR ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_NUMINATOR ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.USE_PRIME_INDEX ]: INITIAL_PARAMETER_SCOPES[ Parameter.USE_PRIME_INDEX ],
                },
            ],
            [
                {
                    [ Parameter.SUM ]: INITIAL_PARAMETER_SCOPES[ Parameter.SUM ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_BASE ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_BASE ],
                    [ Parameter.MODIFIED_COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.MODIFIED_COUNT ],
                },
            ],

            // and the remaining 84 would be copies of the 84 previous here...
            // it's just too complex to deal with filtering those out
            // it happens whenever there is only a single submetric chunk...
            // the "all" bin of course only maps to the 1 bin
            // so it's redundant
        ] as Scope[]

        const result: Scope[] = scopesForChunkCount[ chunkCount ]

        // 189 =
        //      ((2+6-1)!)/((2!)((6-1)!)) * ((0+14-1)!)/((0!)((14-1)!)) * 3^0 = 21 * 1 * 1 = 21
        //      +
        //      ((1+6-1)!)/((1!)((6-1)!)) * ((1+14-1)!)/((1!)((14-1)!)) * 2^1 = 6 * 14 * 2 = 168
        expect(result.length).toEqual(189)
        expectedResult.forEach(expectedResultElement => {
            expect(result.some(resultElement => {
                return deepEquals(resultElement, expectedResultElement)
            })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
        })
    })

    it("given a chunk count, populates all possible combinations of those parameters - works for 3", async () => {
        const chunkCount = 3 as Count<Chunk>
        status.populatingChunkCount = chunkCount
        scopesForChunkCount[ chunkCount ] = []

        await populateScopesForChunkCount()

        const result: Scope[] = scopesForChunkCount[ chunkCount ]

        expect(result.length).toEqual( // 1274
            56 + // all combinations of 3 submetrics = 6 choose 3 w/re = ((3+6-1)!)/((3!)((6-1)!)) = 56, but that times all combinations of 0 parameters = 14 choose 0 w/re = ((0+14-1)!)/((0!)((14-1)!)) =   1, so 56 *  1 =  56, but then that times 1 bc for each one you can distribute the parameters across the submetrics 4^0 ways, so 56  * 1 =   56
            882 +         // all combinations of 2 submetrics = 6 choose 2 w/re = ((2+6-1)!)/((2!)((6-1)!)) = 21, but that times all combinations of 1 parameters = 14 choose 1 w/re = ((1+14-1)!)/((1!)((14-1)!)) =  14, so 21 * 14 = 294, but then that times 2 bc for each one you can distribute the parameters across the submetrics 3^1 ways, so 294 * 3 =  882
            2520,         // all combinations of 1 submetric  = 6 choose 1 w/re = ((1+6-1)!)/((1!)((6-1)!)) =  6, but that times all combinations of 2 parameters = 14 choose 2 w/re = ((2+14-1)!)/((2!)((14-1)!)) = 105, so 6 * 105 = 630, but then that times 1 bc for each one you can distribute the parameters across the submetrics 2^2 ways, so 630 * 4 = 2520
        )
        const exampleResultElements = [
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_EXPONENT ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                },
            ],
            [
                {
                    [ Parameter.WITHOUT_REPETITION ]: INITIAL_PARAMETER_SCOPES[ Parameter.WITHOUT_REPETITION ],
                    [ Parameter.MAX ]: INITIAL_PARAMETER_SCOPES[ Parameter.MAX ],
                },
                {
                    [ Parameter.COUNT ]: INITIAL_PARAMETER_SCOPES[ Parameter.COUNT ],
                    [ Parameter.A ]: INITIAL_PARAMETER_SCOPES[ Parameter.A ],
                    [ Parameter.A_IS_EXPONENT ]: INITIAL_PARAMETER_SCOPES[ Parameter.A_IS_EXPONENT ],
                },
            ],
        ]
        exampleResultElements.forEach(expectedResultElement => {
            expect(result.some(resultElement => {
                return arraysHaveSameContents(resultElement, expectedResultElement)
            })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
        })
    })

    it("given a chunk count, populates all possible combinations of those parameters - works for 4", async () => {
        const chunkCount = 4 as Count<Chunk>
        status.populatingChunkCount = chunkCount
        scopesForChunkCount[ chunkCount ] = []

        await populateScopesForChunkCount()

        const result: Scope[] = scopesForChunkCount[ chunkCount ]

        expect(result.length).toEqual( // 14658
            126 + // all combinations of 4 submetrics = 6 choose 4 w/re = ((4+6-1)!)/((4!)((6-1)!)) = 126, but that times all combinations of 0 parameters = 14 choose 0 w/re = ((0+14-1)!)/((0!)((14-1)!)) =   1, so 126 *  1 =  126, but then that times 1 bc for each one you can distribute the parameters across the submetrics 5^0 ways, so  126 * 1 =   126
            3136 +         // all combinations of 3 submetrics = 6 choose 3 w/re = ((3+6-1)!)/((3!)((6-1)!)) =  56, but that times all combinations of 1 parameters = 14 choose 1 w/re = ((1+14-1)!)/((1!)((14-1)!)) =  14, so 56  * 14 =  784, but then that times 3 bc for each one you can distribute the parameters across the submetrics 4^1 ways, so  784 * 4 =  3136
            19845 +        // all combinations of 2 submetrics = 6 choose 2 w/re = ((2+6-1)!)/((2!)((6-1)!)) =  21, but that times all combinations of 2 parameters = 14 choose 2 w/re = ((2+14-1)!)/((2!)((14-1)!)) = 105, so 21 * 105 = 2205, but then that times 4 bc for each one you can distribute the parameters across the submetrics 3^2 ways, so 2205 * 9 = 19845
            26880,         // all combinations of 1 submetric  = 6 choose 1 w/re = ((1+6-1)!)/((1!)((6-1)!)) =   6, but that times all combinations of 3 parameters = 14 choose 3 w/re = ((3+14-1)!)/((3!)((14-1)!)) = 560, so 6  * 560 = 3360, but then that times 1 bc for each one you can distribute the parameters across the submetrics 2^3 ways, so 3360 * 8 = 26880
        )
    })
})
