const prompt = require("prompt-sync")();

console.clear();

function play() {
    console.log();
    let jogar = prompt("Digite -- SIM -- ou -- NÃO --:  ").toUpperCase();
    while(jogar != "SIM" && jogar != "NÃO" && jogar != "NAO") {
        console.log();
        console.log("Por favor, digite um valor válido.");
        console.log();
        console.log("Vamos jogar?")
        jogar = prompt("Digite -- SIM -- ou -- NÃO --:  ").toUpperCase();
    }
    return jogar;
}

function numJogadores() {
    console.log();
    let numJgd = +prompt("Quantos jogadores vão jogar?  ");
    while(isNaN(numJgd)) {
        console.log();
        console.log("Digite um valor válido.");
        console.log();
        numJgd = +prompt("Quantos jogadores vão jogar?  ");
    }
    return numJgd;
}

function jogadores() {
    let numJgd = numJogadores();

    while(numJgd < 2 || numJgd > 10) {
        if(numJgd < 2) {
            console.log("Para jogar, é necessário no mínimo 2 jogadores.");
            numJgd = numJogadores();
        } else if (numJgd > 10) {
            console.log("São permitidos no máximo 10 jogadores.")
            numJgd = numJogadores();
        }
    }
    return numJgd;
}

function nomeJogador(a) {
    for(let i = 1; i <= a; i++) {
        console.log();
        let nameJg = prompt(`Digite o nome do jogador ${i}:  `);
        while(nameJg.length < 3) {
            console.log();
            console.log("Por favor digite um nome válido.");
            console.log();
            nameJg = prompt(`Digite o nome do jogador ${i}:  `);
        }
        let nameJgM = nameJg[0].toUpperCase() + nameJg.substr(1);

        let pessoa = {nome: "", valor: 0, rodada: 0,}
        pessoa.nome = nameJgM;

        dadosJogadores.push(pessoa);
    }
}

function numRodadas() {
    console.log();
    let numRdds = +prompt("Quantas rodadas vão jogar?  ");
    while(isNaN(numRdds)) {
        console.log();
        console.log("Digite um valor válido.");
        console.log();
        numRdds = +prompt("Quantas rodadas vão jogar?  ");
    }
    return numRdds;
}

function rodadas() {
    let numRdds = numRodadas();

    while(numRdds < 1 || numRdds > 100) {
        if(numRdds < 1) {
            console.log("Para jogar, é necessário no mínimo uma rodada.");
            numRdds = numRodadas();
        } else if (numRdds > 100) {
            console.log("Cem é o número máximo de rodadas permitido.")
            numRdds = numRodadas();
        }
    }
    return numRdds;
}

function valorDadoJogador(y) {
    console.log();
    let jgDado = +prompt(`${dadosJogadores[y].nome}, digite -- 1 -- para jogar o dado:   `);
    while(jgDado != 1) {
        console.log();
        console.log("Digite um valor válido.");
        console.log();
        jgDado = +prompt(`${dadosJogadores[y].nome}, digite -- 1 -- para jogar o dado:   `);
    }

    let dadoJogador = (Math.floor(Math.random() * (7 - 1)) + 1);
    return dadoJogador;
}


function game() {
    console.log();
    let players = jogadores();

    nomeJogador(players);

    let numRodadas = rodadas();
    console.clear();

    let rdd = [];
    for(let i = 0; i < numRodadas; i++) {

        let valorDadoJg = [];
        let xx = 0;
        for(let x = 0; x < players; x++) {
            let dadoJg = valorDadoJogador(xx);
            dadosJogadores[x].valor = dadoJg;

            valorDadoJg.push(dadoJg);

            console.log(`${dadosJogadores[x].nome} tirou ${dadoJg} no dado.`);
            xx++;
        }
        valorDadoJg.sort((a, b) => b-a);
        let y = 0;
        for(let i of dadosJogadores) {
            if(i.valor == valorDadoJg[0]) {
                console.log();
                console.log(`O jogador que ganhou a rodada foi ${i.nome}`);
                dadosJogadores[y].rodada += 1;
            }
            y++;
        }
    }
    
    for(let i of dadosJogadores) {
        rdd.push(i.rodada);
    }
    rdd.sort((a, b) => b-a);

    if (rdd[0] == rdd[1]) {
        console.log(`Ouve um empate entre os jogadores com maiores pontos.`);
    } else {
        for(let i of dadosJogadores) {
            console.log();
            console.log(`${i.nome} ganhou ${i.rodada} rodadas.`);
        }
        for(let i of dadosJogadores) {
            if(i.rodada == rdd[0]) {
                console.log();
                console.log(`O Campeão da partida foi ${i.nome}`);
                console.log();
            }
        }
    }
}






let dadosJogadores = [];




console.log("Esse é um jogo de dados.");
console.log();
console.log("Vamos jogar?");
let jogar = play();

while(jogar == "SIM") {
    console.clear();

    
    game();

    console.log("Vamos jogar de novo? ");
    jogar = play();

    dadosJogadores = [];
}