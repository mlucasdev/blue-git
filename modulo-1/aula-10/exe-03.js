const prompt = require("prompt-sync")();

let paisA = [];
let paisB = [];

let digPopulacaoA = +prompt("Digite a população do País A: ");
let crescPaisA = +prompt(`Digite o crescimento populacional do País A em porcentagem é: `);
paisA.push(digPopulacaoA);
paisA.push(crescPaisA);

let digPopulacaoB = +prompt("Digite a população do País B: ");
let crescPaisB = +prompt(`Digite o crescimento populacional do País B em porcentagem é: `);
paisB.push(digPopulacaoB);
paisB.push(crescPaisB);


let crescPorAnoA = paisA[0] * (paisA[1] / 100);
let crescPorAnoB = paisB[0] * (paisB[1] / 100);


let anos = 0;
while(paisB[0] >= paisA[0]) {
    paisA[0] = paisA[0] + crescPorAnoA;
    paisB[0] = paisB[0] + crescPorAnoB;
    anos++
}
if (paisA[0] == paisB[0]) {
    console.log(`Em ${anos} anos o País A terá uma população igual a do país B.`);
} else if (paisA[0] > paisB[0]) {
    console.log(`Em ${anos} anos o País A terá uma população maior que a do país B.`);
} else {
    console.log("País A nunca acançará País B");
}



