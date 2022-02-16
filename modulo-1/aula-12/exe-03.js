const prompt = require("prompt-sync")();

function area(l, c){
    let res = l * c;
    console.log();
    console.log(`O terreno possui ${res} metros quadrados.`);
}

let largura = +prompt("Digite a largura do terreno: ");
let comprimento = +prompt("Digite o comprimento do terreno: ");

area(largura, comprimento);