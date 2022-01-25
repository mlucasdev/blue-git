console.clear();
const prompt = require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * 10 );

let numUsuario = +prompt("Escolha um número de 0 a 10: ");

if (numUsuario === numeroAleatorio) {
  console.log("Parabéns você acertou!");
} else {
  console.log("Que pena, você não acertou.");
}

console.log(numeroAleatorio);
