const prompt = require("prompt-sync")();

let vidaDoBoss = "";
let dano = "";

do {
    vidaDoBoss = +prompt("Escolha o valor da vida do Boss entre 10 e 50: ");
} while(vidaDoBoss < 10 || vidaDoBoss > 50);

do {
    dano = +prompt("Escolha o dano entre 5 e 10: ");
} while(dano < 5 || dano > 10);


let turnos = Math.ceil(vidaDoBoss / dano);


console.log(`O jogador irá derrotar o Boss em ${turnos} turnos.`);