const prompt = require("prompt-sync")();


let valorRefeição = +prompt("Qual foi o valor da refeição do cliente? ");
let taxaDeServiço = 10 / 100;

let valorGorjeta = valorRefeição * taxaDeServiço;
let totalConta = valorRefeição + valorGorjeta;

console.log(`O valor da refeição foi de R$ ${valorRefeição.toFixed(2)}`)
console.log(`A gorgeta é de R$ ${valorGorjeta.toFixed(2)}`)
console.log(`E a conta ficou em R$ ${totalConta.toFixed(2)}`)
