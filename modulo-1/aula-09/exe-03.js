const prompt = require("prompt-sync")();

let notas = +prompt("Quantas notas você quer adicionar? ");
let cdNota = 0;
let tdNotas = [];

for(let i = 1; i <= notas; i++) {
    cdNota = +prompt(`Digite o valor da nota ${i}:  `);
    tdNotas.push(cdNota);
}

let maior = 0;
let menor = tdNotas[0];
let soma = 0;
for(let i of tdNotas) {
    if(i > maior) {
        maior = i;
    }
    if(i < menor) {
        menor = i;
    }
    soma = soma + i;
}


console.log(`A maior nota foi ${maior}`);
console.log(`A menor nota foi ${menor}`);
console.log(`A resultado da soma de todas as notas foi ${soma}`);
console.log(`A resultado da soma da maior e menor nota é ${maior + menor}`);

