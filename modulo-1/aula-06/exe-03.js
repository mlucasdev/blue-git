const prompt = require("prompt-sync")();


let totalAlunos = +prompt("Quantos alunos você quer cadastrar? ");
let num = 0;
let nomeAluno = [];
let notaAluno = [];

while (num < totalAlunos) {
    let digNomeAluno = prompt("Qual o nome do(a) aluno(a)? ");
    let digNotaAluno = +prompt(`Qual a nota de ${digNomeAluno}: `);

    nomeAluno.push(digNomeAluno);
    notaAluno.push(digNotaAluno);

    num++
}


for (let i = 0; i < notaAluno.length ; i++) {
    

    console.log(`${nomeAluno[i]} tirou nota ${notaAluno[i]}`);
}


let somaNotas = 0;
for (let i of notaAluno) {
    somaNotas = somaNotas + i; 
}

let mediaNotas = somaNotas / notaAluno.length;
console.log(`A média de todas as notas foi ${mediaNotas.toFixed(1)}`);





