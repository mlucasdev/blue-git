const prompt = require("prompt-sync")();

function calcD(i, f, d) {
    let distancia = (f - i);
    let passos = Math.ceil(distancia / d);
    return passos;
}

let inicio = +prompt("Digite sua posição inicial: ");
let final = +prompt("Digite a distância até o final: ");
let passo = +prompt("Digite a distância de cada passo: ");

let totalPassos = calcD(inicio, final, passo);

console.log(`Você precisa dar ${totalPassos} passos para chegar do outro lado.`);