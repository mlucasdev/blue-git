const prompt = require("prompt-sync")();

console.clear();

function perguntaVoto() {
    console.log("Tem alguém para votar?")
    let pVoto = prompt("Responda -- SIM -- ou -- NÃO --:  ").toUpperCase();
    
    while(pVoto != 'SIM' && pVoto != 'NÃO' && pVoto != 'NAO') {
        console.log();
        console.log("Por favor digite um valor válido.")
        console.log();
        console.log("Tem alguém para votar?")
        pVoto = prompt("Responda -- SIM -- ou -- NÃO --:  ").toUpperCase();
    }

    return pVoto;
}

function anoNascimento() {
    console.log();
    let anoN = +prompt("Digite o ano de Nascimento do eleitor:  ");
    while(isNaN(anoN)) {
        console.log();
        console.log("Por favor digite um valor válido.");
        console.log();
        anoN = +prompt("Digite o ano de Nascimento do eleitor:  ");
    }

    while(anoN < 1902 || anoN > 2022) {
        console.log();
        console.log("Idade inválida.")
        console.log();
        console.log("Por favor digite um valor válido.");
        console.log();

        anoN = +prompt("Digite o ano de Nascimento do eleitor:  ");

        while(isNaN(anoN)) {
            console.log();
            console.log("Por favor digite um valor válido.");
            console.log();

            anoN = +prompt("Digite o ano de nascimento do eleitor:  ");
        }
    }

    return anoN;
}

function autorizaVoto(anoN) {

    let resultado = 2022 - anoN;

    if(resultado < 16 ) {
        return 'Negado';
    } else if ((resultado >= 16 && resultado < 18) || (resultado > 70)) {
        return 'Opcional';
    } else {
        return 'Obrigatório';
    }
}

function votacao(aut) {
    console.log();
    if(aut == 'Obrigatório') {
        voto();
    } else if (aut == 'Opcional') {
        console.log();
        console.log("Seu voto não é obrigatório.");
        let votar = prompt("Desejar mesmo assim votar?  ").toUpperCase();

        while(votar != 'SIM' && votar != 'NÃO' && votar != 'NAO') {
            console.log();
            console.log("Por favor digite SIM ou NÃO.")
            console.log();
            console.log("Seu voto não é obrigatório.");
            votar = prompt("Desejar mesmo assim votar?  ").toUpperCase();
        }
        if(votar == 'SIM') {
            voto();
        } else {
            return;
        }
    } else {
        console.log("O eleitor tem menos de 16 anos. Ainda não pode votar.");
        console.log();
        return;
    }
}

function voto() {
    console.log();
    console.log("Candidatos para votar:")
    console.log(
    `
    1 = Lula
    2 = Bolsonaro
    3 = Sérgio Moro
    4 = Voto Nulo
    5 = Voto em Branco
    `
    )
    
    let escolhaCand = prompt("Escolha um dos candidatos:  "); 

    if (escolhaCand === "" || escolhaCand == "5") {
        console.log();
        console.log("Você votou em branco.");
        console.log();
        qtBranco++;
    } else if (escolhaCand != "1" && escolhaCand != "2" && escolhaCand != "3") {
        console.log();
        console.log("Você anulou seu voto.")
        console.log();
        qtNulo++;
    } else if (escolhaCand == "1") {
        console.log();
        console.log("Você votou no Lula.")
        console.log();
        qtLula++;
    } else if (escolhaCand == "2") {
        console.log();
        console.log("Você votou no Bolsonaro.")
        console.log();
        qtBolsonaro++;
    } else if (escolhaCand == "3") {
        console.log();
        console.log("Você votou no Sérgio Moro.")
        console.log();
        qtMoro++;
    }
}

function exibeResultado() {
    console.log(`Lula teve ${qtLula} votos.`);
    console.log();
    console.log(`Bolsonaro teve ${qtBolsonaro} votos.`);
    console.log();
    console.log(`Sérgio Moro teve ${qtMoro} votos.`);
    console.log();
    console.log(`Foram ${qtNulo} votos nulos.`);
    console.log();
    console.log(`E ${qtBranco} votos em branco.`);
    console.log();
    if(qtLula > qtBolsonaro && qtLula > qtMoro) {
        console.log(`Com ${qtLula} votos, Lula é o vencedor.`);
    } else if(qtBolsonaro > qtLula && qtBolsonaro > qtMoro) {
        console.log(`Com ${qtBolsonaro} votos, Bolsonaro é o vencedor.`);
    } else if(qtMoro > qtLula && qtMoro > qtBolsonaro) {
        console.log(`Com ${qtMoro} votos, Moro é o vencedor.`);
    } else if(qtBolsonaro == qtLula && qtBolsonaro > qtMoro) {
        console.log(`Bolsonaro e Lula empataram em votos e teremos o segundo turno.`);
    } else if(qtBolsonaro == qtMoro && qtBolsonaro > qtLula) {
        console.log("Bolsonaro e Sérgio Moro empataram em votos e teremos o segundo turno.");
    } else if(qtLula == qtMoro && qtLula > qtBolsonaro) {
        console.log("Lula e Sérgio Moro empataram em votos e teremos o segundo turno.");
    } else if(qtBolsonaro == 0 && qtLula == 0 && qtMoro == 0) {
        console.log("Deveremos ter uma nova eleição, pois nenhum dos candidatos recebeu voto.");
    }
    console.log();
}

let qtLula = 0;
let qtBolsonaro = 0;
let qtMoro = 0;
let qtNulo = 0;
let qtBranco = 0;


let perguntaVt = perguntaVoto();

while(perguntaVt == 'SIM') {

    votacao(autorizaVoto(anoNascimento()));

    perguntaVt = perguntaVoto();
    console.clear();
}

exibeResultado();