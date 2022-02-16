const prompt = require("prompt-sync")();
let novoFuncionario = "";
let funcionariosTotal = [];
do {
    console.log();
    let funcionarios = {};
    funcionarios.nome = prompt("Qual o nome do funcionário? ");
    funcionarios.idade = prompt("Qual a idade do funcionário? ");
    funcionarios.cargo = prompt("Qual o cargo do funcinário? ");
    funcionarios.salario = prompt("Qual o salário do funcionário? ");

    funcionariosTotal.push(funcionarios);

    console.log();
    novoFuncionario = prompt("Deseja cadastrar um novo funcionário? ").toLocaleUpperCase();
} while(novoFuncionario == 'S');

console.log(funcionariosTotal);
console.log();
let professores = [];
let programadores = [];
let outrosCargos = [];
let qtProfessores = 0;
let qtProgamadores = 0;
let qtOutrosCargos = 0;
for(let i of funcionariosTotal) {
    if (i.cargo == 'professor') {
        professores.push(i.nome);
        qtProfessores++;
    } else if (i.cargo == 'programador') {
        programadores.push(i.nome);
        qtProgamadores++;
    } else {
        outrosCargos.push(i.nome);
        qtOutrosCargos++;
    }
}
console.log(`Trabalham conosco ${qtProfessores} professores, são eles:`);
for(let i of professores) {
    console.log(i);
}
console.log();
console.log(`Trabalham conosco ${qtProgamadores} programadores, são eles:`);
for(let i of programadores) {
    console.log(i);
}
console.log();

console.log(`Trabalham conosco ${qtOutrosCargos} pessoas em outros cargos, são eles:`);
for(let i of outrosCargos) {
    console.log(i);
}
console.log();





