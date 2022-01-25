const prompt = require("prompt-sync")();

let real = +prompt("Digite o valor em Real: ");
let dolar = 5.46;

let convert = real / dolar;

console.log(`${real.toFixed(2)} reais compram ${convert.toFixed(2)} dólares.`)