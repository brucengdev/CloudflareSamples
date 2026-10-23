import { describe, expect, it } from "vitest";
import { buildParams } from "../src/utils"

describe("buildParams", () => {
    it(" returns empty object if no params", () => {
        let result = buildParams("https://example.com")
        expect(result).toStrictEqual({})

        result = buildParams("https://example.com?")
        expect(result).toStrictEqual({})
    })

    it(" returns single param", () => {
        const result = buildParams("https://example.com?name=Tom")
        expect(result).toStrictEqual({ name: "Tom" })
    })
})