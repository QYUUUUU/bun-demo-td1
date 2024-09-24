import { describe, expect, it } from "bun:test";
import { helloWorld } from "../src/hello-funcs";

describe("helloWorld", () => {
    it("should return 'Hello, world!'", () => {
        expect(helloWorld()).toBe("Hello, world !");
    });
});