const prompt = require("prompt-sync")();


let num = 0;
let numeroAleatorio = [];
let numeroPar = [];
let numeroImpar = [];
let todosOsNumeros = [];

while (num < 20) {
    numeroAleatorio = +prompt("Digite um número: ")
    resto = numeroAleatorio % 2;
    todosOsNumeros.push(numeroAleatorio);
    if (resto == 0) {
        numeroPar.push(numeroAleatorio);
    } else {
        numeroImpar.push(numeroAleatorio);
    }
    num++
}

console.log("Todos os números",todosOsNumeros);
console.log("Números pares:",numeroPar);
console.log("Números impáres:",numeroImpar);