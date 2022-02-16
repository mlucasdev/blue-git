const prompt = require("prompt-sync")();

let numero = +prompt("Digite um número: ");
let divisores = 0;

for(let i = 0; i <= numero; i++){
    if(numero % i == 0){
        divisores++;
    }
}
if(divisores == 2) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}
