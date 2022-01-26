const prompt = require("prompt-sync")();


let num = 0;
let numerosAleatorios = 0;

while (num > 20) {
    numerosAleatorios = +prompt("Digite um número");
    num++
    console.log(numerosAleatorios);
    console.log(num);
}





