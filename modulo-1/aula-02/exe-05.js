const prompt = require("prompt-sync")();


console.log("Qual o seu sexo?")
console.log("1) Masculino");
console.log("2) Feminino");
console.log("3) Outro");


let resposta = +prompt("Responda 1 para MASCULINO, 2 para FEMININO ou 3 para OUTRO: ");

if (resposta === 1) {
    console.log("Você escolheu Masculino.");
} else if (resposta === 2) {
    console.log("Você escolheu Feminino.");
} else if (resposta === 3) {
    console.log("Você escolheu Outro.")
}