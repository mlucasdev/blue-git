const prompt = require("prompt-sync")();


let camisetas = +prompt("Quantas camisetas você vai querer? ");
let blusas = +prompt("Quantas blusas você vai querer? ");

let valorCamiseta = 39.90;
let valorBlusa = 49.90;

let resultadoCamisetas = valorCamiseta * camisetas;
let resultadoBlusas = valorBlusa * blusas;

let resultadoTotal = resultadoBlusas + resultadoCamisetas;

console.log(`Você escolheu ${camisetas} camisetas e ${blusas} blusas.`);
console.log(`Cada camiseta custou R$ ${valorCamiseta.toFixed(2)} somando assim R$ ${resultadoCamisetas.toFixed(2)}`);
console.log(`Cada blusa custou R$ ${valorBlusa.toFixed(2)} somando assim R$ ${resultadoBlusas.toFixed(2)}`);
console.log(`O total de sua compra foi de R$ ${resultadoTotal.toFixed(2)}`);

