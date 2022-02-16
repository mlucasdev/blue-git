const prompt = require("prompt-sync")();

let qtNomes = +prompt("Quantos nomes você quer inserir? ");
let nomes = [];

for(let i = 0; i < qtNomes; i++) {
    let nome = prompt("Digite o nome: ");
    nomes.push(nome);
}

let maiorNomeNum = 0;
let maiorNome = [];
let menorNomeNum = nomes[0].length;
let menorNome = [];


for(let i of nomes) {
    if (i.length > maiorNomeNum) {
        maiorNomeNum = i.length;
        maiorNome.push(i);
    }
    if (i.length < menorNomeNum) {
        menorNomeNum = i.length;
        menorNome.push(i)
    }    
}



console.log(nomes);
console.log(`Os maiores nomes são ${maiorNome.toString()}.`);
console.log(`Os menores nomes são ${menorNome.toString()}.`);
