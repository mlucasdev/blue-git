const prompt = require("prompt-sync")();

let anos = +prompt("Quantos anos você tem? ");
let meses = +prompt("Quantos meses? ");
let dias = +prompt("Quantos dias? ");

let anosEmDias = anos * 365;
let mesesEmDias = meses * 30;

let resultado = anosEmDias + mesesEmDias + dias;

console.log(`Você viveu ${resultado} dias`);