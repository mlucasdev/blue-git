const prompt = require("prompt-sync")();


function data(a) {
    let dataString = a.split('/');
    let dia = dataString[0];
    let mes = dataString[1];
    let ano = dataString[2];
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    console.log(`Dia ${dia} do mês de ${meses[mes - 1]} do ano de ${ano}`);
}



let dataUser = prompt("Digite sua data de nascimento: ");

data(dataUser);