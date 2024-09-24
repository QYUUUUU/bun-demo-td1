import { describe, expect, it } from "bun:test";
import { repeatHelloYou } from "../src/hello-funcs";

describe("repeatHelloYou", () => {
    it("should repeat hello n times for valid input", () => {
        expect(repeatHelloYou(3, "Bob")).toBe("Hello, Bob!\nHello, Bob!\nHello, Bob!\n");
    });

    it("should return an error if n is not a positive integer", () => {
        expect(repeatHelloYou(0, "Bob")).toBe("Erreur: Le nombre de répétitions doit être un entier positif.");
        expect(repeatHelloYou(-1, "Bob")).toBe("Erreur: Le nombre de répétitions doit être un entier positif.");
    });

    it("should return an error if name is invalid", () => {
        expect(repeatHelloYou(3, "")).toBe("Erreur: Le nom fourni doit être une chaîne de caractères non vide.");
    });
});