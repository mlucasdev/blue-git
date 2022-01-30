const prompt = require("prompt-sync")();


let numeroInteiro = +prompt("Digite um número inteiro: ");
let todosOsNumeros = [];

for(let i = 0; i <= numeroInteiro ; i++) {
    todosOsNumeros.push(i);
}

let numerosPares = [];
let numerosImpares = [];

for(let i of todosOsNumeros) {
    let resto = i % 2;

    if (resto == 0) {
        numerosPares.push(i);
    } else {
        numerosImpares.push(i);
    }
}
console.log(`Os números pares são ${numerosPares}`);
console.log(`Os números impares são ${numerosImpares}`);


