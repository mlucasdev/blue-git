const prompt = require('prompt-sync')();


let nota1 = +prompt("Qual foi a nota do aluno em Matemática? ");
let nota2 = +prompt("Qual foi a nota do aluno em Português? ");
let nota3 = +prompt("Qual foi a nota do aluno em Inglês? ");
let nota4 = +prompt("Qual foi a nota do aluno em Física? ");

let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(2);

if (media >= 7) {
    console.log("Parabéns, você foi aprovado e sua nota foi: ",media);
} else if (media >= 5) {
    console.log("Você está em recuperação e sua nota foi: ",media);
} else {
    console.log("Você foi reprovado, sua nota foi: ",media);
} 