console.clear();
const prompt = require("prompt-sync")();

console.log(`
                            -------Jokenpô-------

    O Jokenpô ou "Pedra, papel e tesoura", é um jogo muito simples, você tem 
    3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
    Você jogará contra o computador, onde a máquina escolherá uma das 3 opções de forma
    aleatória.
    * Pedra ganha da tesoura, mas perde para o papel;
    * Tesoura ganha do papel, mas perde para a pedra;
    * Papel ganha da pedra, mas perde para a tesoura.
`)
let play = "";
let jogarDeNovo = "";
let iNome = 0;
let nome = "";
function jogarFunction(){
    play = prompt("Vamos jogar? Responda -- S -- para SIM ou -- N -- para NÃO: ").toUpperCase();
}
jogarFunction();

do {
    while(play !== 'S' && play !== 'N') {
        console.log("Digite um valor válido.");
        jogarFunction();
    }
    //Loop em que roda o jogo todo
    loopGame: while(play == 'S' || play == 'N') {

        let rodadas = 0;
        let elementosJogo = ["PEDRA", "PAPEL", "TESOURA"];
        let escolhaElementoJogador = 0;
        let escolhaJogador = "";
        let escolhaPc = "";
        let vtPc = 0;
        let vtJogador = 0;
        let empate = 0;
        

        function escolhaElementoJogadorFunction() {
            escolhaElementoJogador = +prompt("Digite -- 1 -- para escolher PEDRA, -- 2 -- para PAPEL, -- 3 -- para TESOURA: ");
        }
        
        if (play == 'S') {
            if (iNome == 0) {
                let nomeD = prompt("Antes de começar, digite seu nome: ");
                nome = nomeD[0].toUpperCase() + nomeD.substr(1);
                console.log()
                iNome++;
            }
            function rodadasFunction() {
                rodadas = +prompt("Quantas rodadas você quer jogar? ");
            }
            rodadasFunction();
            while(isNaN(rodadas) || rodadas < 1 || rodadas > 100) {
                if (rodadas < 1 || rodadas > 100) {
                    console.log("Você só pode jogar de 1 a 100 rodadas.")
                }
                if (isNaN(rodadas)){
                    console.log("Por favor, digite um número de 1 a 100 para escolher quantas rodadas jogar.")
                }
                rodadasFunction();
            }
            
            for(let i = 0; i < rodadas; i++){ //Loop de Rodadas
                console.log();
                escolhaElementoJogadorFunction();
                while(escolhaElementoJogador !== 1 && escolhaElementoJogador !== 2 && escolhaElementoJogador !== 3) {
                    console.log("Você precisa escolher uma das opções.")
                    escolhaElementoJogadorFunction();
                }
                escolhaJogador = elementosJogo[escolhaElementoJogador - 1];
                console.log(`Você escolheu ${escolhaJogador}`);

                escolhaPc = elementosJogo[Math.floor(Math.random() * 3)];
                console.log(`O computador escolheu ${escolhaPc}`);

                if  (escolhaJogador == elementosJogo[0] && escolhaPc == elementosJogo[2] || 
                     escolhaJogador == elementosJogo[1] && escolhaPc == elementosJogo[0] ||
                     escolhaJogador == elementosJogo[2] && escolhaPc == elementosJogo[1]) {
                        console.log("Você venceu essa rodada.");
                        vtJogador++;
                }
                else if  (escolhaPc == elementosJogo[0] && escolhaJogador == elementosJogo[2] || 
                          escolhaPc == elementosJogo[1] && escolhaJogador == elementosJogo[0] ||
                          escolhaPc == elementosJogo[2] && escolhaJogador == elementosJogo[1]) {
                             console.log("O computador venceu essa rodada.");
                             vtPc++;
                }
                else {
                    console.log("Vocês empataram nessa rodada.");
                    empate++
                }
            }

            console.log();

            if (vtJogador > vtPc) {
                if (vtJogador > 1 && vtPc > 1) {
                    console.log(`${nome} você venceu ${vtJogador} vezes e o computador venceu ${vtPc} vezes.`);
                } else if (vtJogador == 1 && vtPc == 0) {
                    console.log(`${nome} você venceu ${vtJogador} vez e o computador nenhuma.`);
                } else if (vtJogador > 1 && vtPc == 0) {
                    console.log(`${nome} você venceu ${vtJogador} vezes e o computador nenhuma.`);
                } else if (vtJogador > 1 && vtPc == 1) {
                    console.log(`${nome} você venceu ${vtJogador} vezes e o computador venceu ${vtPc} vez.`);
                } 
                console.log("Você é o campeão, parabéns!")

            } else if (vtPc > vtJogador) {
                if (vtPc > 1 && vtJogador > 1) {
                    console.log(`${nome} você venceu ${vtJogador} vezes e o computador venceu ${vtPc} vezes.`);
                } else if (vtPc == 1 && vtJogador == 0) {
                    console.log(`${nome} o computador venceu ${vtPc} vez e você nenhuma.`);
                } else if (vtPc > 1 && vtJogador == 0) {
                    console.log(`${nome} o computador venceu ${vtPc} vezes e você nenhuma.`);
                } else if (vtPc > 1 && vtJogador == 1) {
                    console.log(`${nome} você venceu ${vtJogador} vez e o computador venceu ${vtPc} vezes.`);
                }
                console.log("O computador é o campeão!")

            } else {
                if (vtJogador > 1 && vtPc > 1 || vtJogador == 1 && vtPc == 1) {
                    if (vtJogador > 1 && vtPc > 1) {
                        console.log(`${nome} você venceu ${vtJogador} vezes e o computador venceu ${vtPc} vezes.`);
                    } else if (vtJogador == 1 && vtPc == 1) {
                        console.log(`${nome} você venceu ${vtJogador} vez e o computador venceu ${vtPc} vez.`);
                    }
                }
                console.log("Você ficou no empate com o computador.")
            }

            console.log();

            function jogarDeNovoFunction(){
                jogarDeNovo = prompt("Vamos Jogar de novo? Responda -- S -- para SIM ou -- N -- para NÃO: ").toUpperCase();
            }
            jogarDeNovoFunction();
            while(jogarDeNovo != 'S' && jogarDeNovo != 'N') {
                console.log("Digite um valor válido.");
                jogarDeNovoFunction();
            }
            if (jogarDeNovo == 'N') {
                console.log("Ok, tudo bem.");
                break loopGame;
            }

        } else {
            console.log("Ok, tudo bem.");
            break;
        } 
    }
} while (jogarDeNovo == 'S');





