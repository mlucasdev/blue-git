const prompt = require('prompt-sync')();



let numero1 = +prompt("Digite um número ");
let numero2 = +prompt("Digite outro número ");


if (numero1 > numero2){
    console.log("O número maior é o " + numero1)
} else if (numero2 > numero1) {
    console.log("O número maior é o " + numero2)
} else {
    console.log("Os números são iguais!");
}




