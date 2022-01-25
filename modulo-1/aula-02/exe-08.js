const prompt = require("prompt-sync")();

let valorCompra = +prompt("Valor da compra: ");
let valorPago = +prompt("Valor pago: ");

let troco = valorPago - valorCompra;

console.log(`O troco é de R$ ${troco.toFixed(2)}`);

