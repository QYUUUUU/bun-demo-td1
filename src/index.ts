import { helloHuman, helloWorld, helloYou, repeatHelloYou } from "./hello-funcs";
import type { Human } from "./types";

let message = helloWorld()
console.log(message);
console.log("\n");


try {
  let messageName = helloYou("John");
  console.log(messageName);
} catch (error) {
  console.log(error);
}

try {
  const person: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980
  };
  console.log(helloHuman(person));
} catch (error) {
  console.log(error);
}


try {
  console.log(repeatHelloYou(3, "Jhon"));
} catch (error) {
  console.log(error);
  
}

