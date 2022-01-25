const prompt = require('prompt-sync')();

console.clear();

let nome = prompt('Qual o nome do(a) colaborador(a) que ganhará aumento? ');
let salario = +prompt(`Qual o valor do salário de ${nome}?: `);
let totalPorcentagem = 100;


if (salario <= 280)
{
    let aumento = salario * (20/100);
    let novoSalario = salario + aumento;
    let porcentagemAumento = (aumento * totalPorcentagem) / salario;

    console.log(`O salário de ${nome} era de R$ ${salario.toFixed(2)}`);
    console.log(`${nome} recebeu um aumento de ${porcentagemAumento.toFixed()}%`);
    console.log(`Então ganhará mais R$ ${aumento.toFixed(2)} por mês`);
    console.log(`E seu novo salário é de R$ ${novoSalario.toFixed(2)}`);
}
else if (salario > 280 && salario <= 700)
{
    let aumento = salario * (15/100);
    let novoSalario = salario + aumento;
    let porcentagemAumento = (aumento * totalPorcentagem) / salario;

    console.log(`O salário de ${nome} era de R$ ${salario.toFixed(2)}`);
    console.log(`${nome} recebeu um aumento de ${porcentagemAumento.toFixed()}%`);
    console.log(`Então ganhará mais R$ ${aumento.toFixed(2)} por mês`);
    console.log(`E seu novo salário é de R$ ${novoSalario.toFixed(2)}`);
}
else if (salario > 700 && salario <= 1500 )
{
    let aumento = salario * (10/100);
    let novoSalario = salario + aumento;
    let porcentagemAumento = (aumento * totalPorcentagem) / salario;

    console.log(`O salário de ${nome} era de R$ ${salario.toFixed(2)}`);
    console.log(`${nome} recebeu um aumento de ${porcentagemAumento.toFixed()}%`);
    console.log(`Então ganhará mais R$ ${aumento.toFixed(2)} por mês`);
    console.log(`E seu novo salário é de R$ ${novoSalario.toFixed(2)}`);
}
else
{
    let aumento = salario * (5/100);
    let novoSalario = salario + aumento;
    let porcentagemAumento = (aumento * totalPorcentagem) / salario;

    console.log(`O salário de ${nome} era de R$ ${salario.toFixed(2)}`);
    console.log(`${nome} recebeu um aumento de ${porcentagemAumento.toFixed()}%`);
    console.log(`Então ganhará mais R$ ${aumento.toFixed(2)} por mês`);
    console.log(`E seu novo salário é de R$ ${novoSalario.toFixed(2)}`);
}
