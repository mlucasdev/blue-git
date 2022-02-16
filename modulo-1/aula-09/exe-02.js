const prompt = require("prompt-sync")();

let numero = +prompt("Digite um número: ");

for(let i = 0; i < numero; i++) {
    let resto = i % 2;
    if(resto != 0) {
        console.log(i);
    }
}
let resto = 0;
resto = numero % 2;
if(resto != 0) {
    console.log(numero);
}