import { describe, expect, it } from "bun:test";
import { helloHuman } from "../src/hello-funcs";
import type { Human } from "../src/types";

describe("helloHuman", () => {
    const validHuman: Human = {
        firstname: "John",
        lastname: "Doe",
        birthyear: 1990
    };

    it("should return a valid greeting with age for a valid Human", () => {
        const currentYear = new Date().getFullYear();
        const expectedAge = currentYear - 1990;
        expect(helloHuman(validHuman)).toBe(`Hello, John Doe! You are ${expectedAge} years old.`);
    });

    it("should return an error if firstname is empty", () => {
        const invalidHuman = { ...validHuman, firstname: "" };
        expect(helloHuman(invalidHuman)).toBe("Erreur: Le prénom doit être une chaîne de caractères non vide.");
    });

    it("should return an error if lastname is empty", () => {
        const invalidHuman = { ...validHuman, lastname: "" };
        expect(helloHuman(invalidHuman)).toBe("Erreur: Le nom de famille doit être une chaîne de caractères non vide.");
    });

    it("should return an error if birthyear is invalid", () => {
        const invalidHuman = { ...validHuman, birthyear: 3000 };
        expect(helloHuman(invalidHuman)).toBe("Erreur: L'année de naissance est invalide. Elle doit être un nombre entre 1900 et l'année actuelle.");
    });
});