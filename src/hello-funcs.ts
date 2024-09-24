import type { Human } from "./types";

export function helloWorld(): string{
    return "Hello, world !"
}

export function helloYou(name:string): string{
    if (typeof name !== 'string' || name.trim() === "") {
        return "Erreur: Le nom fourni doit être une chaîne de caractères non vide.";
    }
    return "Hello, " + name+"!";
}

export function helloHuman(human:Human): string{
    const date = new Date();  // Creates a new Date object with the current date and time
    const year = date.getFullYear();

     // Vérification si human a les propriétés requises et si elles sont valides
     if (typeof human.firstname !== 'string' || human.firstname.trim() === "") {
        return "Erreur: Le prénom doit être une chaîne de caractères non vide.";
    }

    if (typeof human.lastname !== 'string' || human.lastname.trim() === "") {
        return "Erreur: Le nom de famille doit être une chaîne de caractères non vide.";
    }

    if (typeof human.birthyear !== 'number' || human.birthyear > year || human.birthyear < 1900) {
        return "Erreur: L'année de naissance est invalide. Elle doit être un nombre entre 1900 et l'année actuelle.";
    }

    let age = year - human.birthyear;
    return "Hello, " + human.firstname+" "+human.lastname+"! You are "+age+ " years old.";
}

export function repeatHelloYou(n:number, name:string): string{
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return "Erreur: Le nombre de répétitions doit être un entier positif.";
    }

    if(typeof name !== "string" || name.length ==0){
        return "Erreur: Le nom fourni doit être une chaîne de caractères non vide.";
    }
    
    let wholeMessage ="";
    for (let i = 0; i < n; i++) {
        wholeMessage += helloYou(name)+"\n";
    }
  return wholeMessage;
}
