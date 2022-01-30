const prompt = require("prompt-sync")();

let altura = [];
let idade = [];
let num = 0;

while (num < 5) {
    let digaAltura = +prompt("Digite sua altura: ");
    let digaIdade = +prompt("Digite sua idade: ")

    altura.push(digaAltura);
    idade.push(digaIdade);

    num++
}

let mediaAltura = ((altura[0] + altura[1] + altura[2] + altura[3] + altura[4]) / (altura.length));
let mediaIdade = ((idade[0] + idade[1] + idade[2] + idade[3] + idade[4]) / (idade.length));

console.log("Média de Altura é:",mediaAltura);
console.log("Média de Idade é:",mediaIdade);
