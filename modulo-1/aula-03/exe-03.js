const prompt = require('prompt-sync')();


let numero = +prompt("Digite um número: ");
let resto = numero % 2;

if (resto == 0) {
    console.log("O número " + numero + " é par!");
} else {
    console.log("O número " + numero + " é impar!");
}