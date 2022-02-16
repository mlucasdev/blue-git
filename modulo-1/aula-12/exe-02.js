const prompt = require("prompt-sync")();

function calc(a) {
    let resto = a % 3;
    if(resto == 0) {
        console.log(`${a} é divisível por 3.`)
    } else {
        console.log(`${a} não é divisível por 3.`)
    }
    
}

let num = +prompt("Digite um número para saber se ele é divísivel por 3: ");

calc(num);