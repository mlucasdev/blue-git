const prompt = require("prompt-sync")();

let qtNotas = +prompt("Quantos alunos você quer adicionar? ");
let nomeAluno = [];
let notaAluno = [];


for(let i = 0; i < qtNotas; i++) {
    digNomeAluno = prompt("Qual o nome do(a) aluno(a)? ");
    digNotaAluno = +prompt(`Qual a nota de ${digNomeAluno}? `);

    nomeAluno.push(digNomeAluno);
    notaAluno.push(digNotaAluno);
}

console.log(nomeAluno);
console.log(notaAluno);

let notaAlunosAprovados = [];
let notaAlunosRecuperacao = [];
let notaAlunosReprovados = [];
let nomeAlunosAprovados = [];
let nomeAlunosRecuperacao = [];
let nomeAlunosReprovados = [];

for (let i = 0; i < nomeAluno.length; i++ ) {
    if (notaAluno[i] >= 7) {
        notaAlunosAprovados.push(notaAluno[i]);
        nomeAlunosAprovados.push(nomeAluno[i]);
        console.log(`${nomeAluno[i]} foi aprovado(a) e sua nota foi ${notaAluno[i]}`);
    } else if (notaAluno[i] > 5 && notaAluno[i] < 7) {
        notaAlunosRecuperacao.push(notaAluno[i]);
        nomeAlunosRecuperacao.push(nomeAluno[i]);
        console.log(`${nomeAluno[i]} está em recuperação e sua nota foi ${notaAluno[i]}`);
    } else {
        notaAlunosReprovados.push(notaAluno[i]);
        nomeAlunosReprovados.push(nomeAluno[i]);
        console.log(`${nomeAluno[i]} foi reprovado(a) e sua nota foi ${notaAluno[i]}`);
    }
}

console.log(`${nomeAlunosAprovados.length} alunos foram aprovados.`);
console.log(`${nomeAlunosRecuperacao.length} alunos estão em recuperação.`);
console.log(`${nomeAlunosReprovados.length} alunos fora reprovados.`);


