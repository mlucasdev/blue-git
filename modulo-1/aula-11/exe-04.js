const prompt = require("prompt-sync")();

function calculando(a, b) {
    let valorPorParcela = 0;
    if (a == 1) {
        let desconto = valorGasto * (10/100);
        b = valorGasto - desconto;
        console.log(`A vista: R$ ${b.toFixed(2)}`);
        todosOsValores.push(b);
    } else if (a == 2) {
        valorPorParcela = valorGasto / 2;
        b = valorGasto;
        console.log(`Em duas vezes de R$ ${valorPorParcela.toFixed(2)} cada, totalizando R$ ${b.toFixed(2)}.`);
        todosOsValores.push(b);
    }
}
let todosOsValores = [];
let opcao = 0;
let valorGasto = +prompt("Quanto o cliente gastou? ");
let valorTotal = 0;

while (valorGasto > 0) {
    console.log();
    console.log("Opções de pagamento:");
    console.log("1. A vista com 10% de desconto.");
    console.log("2. Em duas vezes (preço da etiqueta).");
    console.log("3. De 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).")
    console.log();
    opcao = +prompt("Escolha uma das opções acima: ");
    if(valorGasto > 100 & opcao == 3) {
        let qtParcelas = +prompt("Em quantas parcelas deseja fazer? ");
        let jurosPorParcela =  valorGasto * (3/100);
        let jurosTotais = jurosPorParcela * qtParcelas;
        valorTotal = jurosTotais + valorGasto;
        let cdParcela = valorTotal / qtParcelas;
        todosOsValores.push(valorTotal);
        console.log(`Parcelado em ${qtParcelas} vezes de R$ ${cdParcela.toFixed(2)} totalizando R$ ${valorTotal.toFixed(2)}`);
    } else {
        calculando(opcao, valorTotal);
    }
    valorGasto = +prompt("Quanto o novo cliente gastou? ");
}

console.log(todosOsValores);