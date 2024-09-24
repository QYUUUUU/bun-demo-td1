import { describe, expect, it } from "bun:test";
import { helloYou } from "../src/hello-funcs";

describe("helloYou", () => {
    it("should return a valid greeting for a valid name", () => {
        expect(helloYou("Alice")).toBe("Hello, Alice!");
    });

    it("should return an error for an empty string", () => {
        expect(helloYou("")).toBe("Erreur: Le nom fourni doit être une chaîne de caractères non vide.");
    });

    it("should return an error for non-string input", () => {
        expect(helloYou(123 as any)).toBe("Erreur: Le nom fourni doit être une chaîne de caractères non vide.");
    });
});