import {describe, expect, test} from "@jest/globals"
import { crossSum } from "./cross-sum"

describe("cross-sum", () => {

    test("single digit", () => {
        expect(crossSum(1)).toEqual(1)
    })

    test("double digit", () => {
        expect(crossSum(15)).toEqual(6)
    })
})