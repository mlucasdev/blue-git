const prompt = require("prompt-sync")();

function calc(a, b, c) {
    let calculo = 0;
    if(a == '-') {
        calculo = b - c;
        console.log(`${b} - ${c} = ${calculo}`);
    } else if (a == '+') {
        calculo = b + c;
        console.log(`${b} + ${c} = ${calculo}`);
    } else if (a == '/') {
        calculo = b / c;
        console.log(`${b} / ${c} = ${calculo}`);
    } else {
        calculo = b * c;
        console.log(`${b} * ${c} = ${calculo}`);
    }
    
}

let operador = prompt("Digite o operador matemático: ");
let valor1 = +prompt("Digite o primeiro valor: ");
let valor2 = +prompt("Digite o segundo valor: ");



calc(operador, valor1, valor2);
