const prompt = require("prompt-sync")();


let notaA = +prompt("Digite a nota de matemática do aluno: ");
let notaB = +prompt("Digite a nota de português do aluno: ");

let pesoNotaA = 4;
let pesoNotaB = 6;

let resultado = (notaA * pesoNotaA) + (notaB * pesoNotaB);
let media = resultado / (pesoNotaA + pesoNotaB);

console.log(`A média foi ${media}`);