const prompt = require("prompt-sync")();

let numero = +prompt("Digite um número para saber sua tabuada: ");
let numerosTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultado = 0;

while(isNaN(numero)) {
    console.log("Por favor digete um número");
    numero = +prompt("Digite um número para saber sua tabuada: ");
}
for(i of numerosTabuada) {
    resultado = numero * i;
    console.log(`${numero} * ${i} = ${resultado}`);
}