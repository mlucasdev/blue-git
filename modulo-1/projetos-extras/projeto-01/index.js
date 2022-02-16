const prompt = require("prompt-sync")();
console.clear();

function temEleitor() {
    console.log("Tem alguém para votar?");
    let digEleitor = +prompt("Responda -- 1 para Sim -- ou -- 2 para Não --:  ");
    while(digEleitor != 1 && digEleitor != 2) {
        console.log("Digite um valor válido.");
        digEleitor = temEleitor();
    }
    return digEleitor;
}

function autorizaVoto() {
    let anoDeNascimento = +prompt("Qual o ano de nascimento do eleitor: ");
    while(isNaN(anoDeNascimento) || (anoDeNascimento < 1900 || anoDeNascimento >= 2022)) {
        console.log("Digite um valor válido.");
        anoDeNascimento = +prompt("Qual o ano de nascimento do eleitor: ");
    }
    if(anoDeNascimento < 1952 || (anoDeNascimento > 2004 && anoDeNascimento <= 2006)) {
        return 'Opcional';
    } else if (anoDeNascimento > 2006) {
        return 'Negado';
    } else {
        return 'Obrigatório';
    }
}

function votacao(autorizado){
    if(autorizado == 'Opcional') {
        console.log();
        console.log("Nesta idade o voto é opcional. Quer votar?")
        let opcional = +prompt("Digite -- 1 -- para SIM ou -- 2 -- para NÃO: ");
        while(opcional != 1 && opcional != 2) {
            console.log("Digite um valor válido.");
            opcional = +prompt("Digite -- 1 -- para SIM ou -- 2 -- para NÃO: ");
        }
        if(opcional == 1) {
            voto(candidatos);
        } else {
            return;
        }
        console.log();
    } else if(autorizado == 'Obrigatório') {
        voto(candidatos);
    } else {
        console.log("Você não pode votar.")
    }
}

function voto(cand) {
    console.log("Escolha um candidato para votar:");
    let x = 1;
    for(let i of cand){
        console.log(`${x}: ${i}`);
        x++
        console.log();
    }
    let dgVoto = +prompt("Escolha uma das opções a cima: ");
    while(dgVoto != 1 && dgVoto != 2 && dgVoto != 3 && dgVoto != 4 && dgVoto != 5) {
        console.log("Digite um valor válido.");
        dgVoto = +prompt("Escolha uma das opções a cima: ");
    }
    console.log(`Seu voto foi: ${cand[dgVoto - 1]}`)
    if(dgVoto == 1) {
        qtVotosLula++;
    } else if (dgVoto == 2) {
        qtVotosBolsonaro++;
    } else if (dgVoto == 3) {
        qtVotosDoria++;
    } else if (dgVoto == 4) {
        qtVotosNulos++;
    } else {
        qtVotosBranco;
    }
}

function exibirResultado(){
    console.log(`Lula teve ${qtVotosLula} votos.`);
    console.log(`Bolsonaro teve ${qtVotosBolsonaro} votos.`);
    console.log(`Dória teve ${qtVotosDoria} votos.`);
    console.log(`Foram ${qtVotosNulos} votos Nulos.`);
    console.log(`Foram ${qtVotosBranco} votos em Branco.`);

    if (qtVotosLula > qtVotosBolsonaro && qtVotosLula > qtVotosDoria) {
        console.log("Lula foi o vencedor.");
    } else if (qtVotosBolsonaro > qtVotosLula && qtVotosBolsonaro > qtVotosDoria) {
        console.log("Bolsanaro foi o vencedor.");
    } else if (qtVotosDoria > qtVotosLula && qtVotosDoria > qtVotosBolsonaro) {
        console.log("Dória foi o vencedor");
    } else {
        console.log("Ouve empate e teremos segundo turno");
    }
}

let candidatos = ["Lula", "Bolsonaro", "Dória", "Voto Nulo", "Voto em Branco"];
let digEleitor = temEleitor();
let qtVotosLula = 0;
let qtVotosBolsonaro = 0;
let qtVotosDoria = 0;
let qtVotosNulos = 0;
let qtVotosBranco = 0

while(digEleitor == 1){
    let autorizado = autorizaVoto();
    votacao(autorizado);
    
    digEleitor = temEleitor();
}

exibirResultado();

