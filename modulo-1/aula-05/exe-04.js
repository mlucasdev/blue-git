const prompt = require("prompt-sync")();
let numeroAleatorio = 0;
let numeroUsuario = 0;
let palpite = 0;

do {
    numeroAleatorio = Math.floor(Math.random() * 10);
    numeroUsuario = +prompt("Digite um número de 0 a 10: ");
    palpite++
    if (numeroUsuario === numeroAleatorio) {
        console.log(`Parabéns você acertou!`);
        console.log(`Você precisou de ${palpite} palpites para acertar.`)
    } else {
        if (numeroUsuario < numeroAleatorio) {
            console.log("Você digitou um número menor do que a máquina pensou.")
        } else {
            console.log("Você digitou um número maior do que a máquina pensou.")
        }
    }
    console.log(numeroAleatorio);
} while (numeroAleatorio !== numeroUsuario)