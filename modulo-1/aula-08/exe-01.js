const prompt = require("prompt-sync")();

let colunas = +prompt("Digite o número de colunas: ");
let linhas = +prompt("Digite o número de linhas: ");
let lista = [];
let a = 0;

for(let i = 0; i < linhas; i++) {
    for(let i = a; i < colunas + a; i++) {
        lista.push(i);
    }
    console.log(lista);
    lista = [];
    a++
}

