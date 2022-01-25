const prompt = require('prompt-sync')();


let numero1 = +prompt("Digite um número: ");
let numero2 = +prompt("Digite outro número: ");

let resultado = numero1 / numero2;
let resto = resultado % 2;

if (resto == 0) {
    console.log("Os números ",numero1,"e", numero2, "são múltiplos:")
} else {
    console.log("Os números ",numero1,"e", numero2, "não são múltiplos:")
}