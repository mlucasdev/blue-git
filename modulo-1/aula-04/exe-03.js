console.clear();

const prompt = require("prompt-sync")();

let valorSaque = 0;

do {
    valorSaque = +prompt("Digite o valor que você quer sacar: ");
    if (valorSaque < 10 || valorSaque > 600) {
        console.log("Impossível realizar essa operação.");
        console.log("Você precisa digitar um valor entre R$ 10,00 e R$ 600,00")
    }
} while(valorSaque < 10 || valorSaque > 600);


let notas100 = Math.trunc(valorSaque / 100);
let notas50 = Math.trunc((valorSaque - (notas100 * 100)) / 50);
let notas10 = Math.trunc((valorSaque - (notas100 * 100) - (notas50 * 50)) / 10);
let notas5 = Math.trunc((valorSaque - (notas100 * 100) - (notas50 * 50) - (notas10 * 10)) / 5);
let notas1 = Math.trunc((valorSaque - (notas100 * 100) - (notas50 * 50) - (notas10 * 10)) - (notas5 * 5) / 1);


console.log(`O valor do saque será de R$ ${valorSaque.toFixed(2)}`)

if (notas100 === 1) {
    console.log(`Você sacará ${notas100} nota de R$ 100,00`);
} else if (notas100 > 1) {
    console.log(`Você sacará ${notas100} notas de R$ 100,00`);
}

if (notas50 === 1) {
    console.log(`Você sacará ${notas50} nota de R$ 50,00`);
} else if (notas50 > 1) {
    console.log(`Você sacará ${notas50} notas de R$ 50,00`);
}

if (notas10 === 1) {
    console.log(`Você sacará ${notas10} nota de R$ 10,00`);
} else if (notas10 > 1) {
    console.log(`Você sacará ${notas10} notas de R$ 10,00`);
}

if (notas5 === 1) {
    console.log(`Você sacará ${notas5} nota de R$ 5,00`);
} else if (notas5 > 1) {
    console.log(`Você sacará ${notas5} notas de R$ 5,00`);
}


if (notas1 === 1) {
    console.log(`Você sacará ${notas1} nota de R$ 1,00`);
} else if (notas1 > 1) {
    console.log(`Você sacará ${notas1} notas de R$ 1,00`);
}