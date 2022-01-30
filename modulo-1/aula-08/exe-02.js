const prompt = require("prompt-sync")();

let numero = +prompt("Digite o número que você quer saber o fatorial: ");
let fatorial = 1;

for(let i = 0; i < numero; i++){
    fatorial = fatorial * (numero - i);
}
console.log(fatorial);