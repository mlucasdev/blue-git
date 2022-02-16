const prompt = require("prompt-sync")();

function calculadora(a,b,c){
    let resultado
    if(c == '+'){
        resultado = a + b;
    } else if(c == '-'){
        resultado = a - b;
    } else if(c == '*'){
        resultado = a * b;
    } if(c == '/'){
        resultado = a / b;
    }
    console.log(resultado)
}
let num1 = +prompt('Digite o 1º número: ');
let num2 = +prompt('Digite o 2º número: ');
let sinal = prompt('Digite qual operação deseja: ');
calculadora(num1,num2,sinal);