const prompt = require("prompt-sync")();

let numEleitores = +prompt("Qual o número total de eleitore? ");
let votos = [];
let votosLula = 0;
let votosBolsonaro = 0;
let votosDoria = 0;
let votosNulos = 0;

for (let i = 0; i < numEleitores; i++){
    console.log("Para votar no Lula digite -- 13 --");
    console.log("Para votar no Bolsonaro digite -- 17 --");
    console.log("Para votar no Doria digite -- 45 --");
    console.log();
    let voto = +prompt("Digite seu voto: ");

    if (voto == 13) {
        console.log("Você votou no Lula!");
        votos.push(voto);
    } else if(voto == 17) {
        console.log("Você votou no Bolsonaro!");
        votos.push(voto);
    } else if(voto == 45) {
        console.log("Você votou no Dória!");
        votos.push(voto);
    } else {
        console.log("Você anulou seu voto.");
        votos.push(voto);
    }
    console.log();
}

let x = 0;
for(let i of votos) {
    if(i == 13){
        votosLula++;
    } else if(i == 17) {
        votosBolsonaro++;
    } else if(i == 45){
        votosDoria++;
    } else {
        votosNulos++;
    }
}
if(votosBolsonaro > votosDoria && votosBolsonaro > votosLula) {
    console.log("Bolsonaro foi o vencedor!");
} else if (votosDoria > votosBolsonaro && votosDoria > votosLula) {
    console.log("Doria foi o vencedor!");
} else if (votosLula > votosBolsonaro && votosLula > votosDoria) {
    console.log("Lula foi o vencedor!")
}


console.log(`Lula recebeu ${votosLula} votos.`);
console.log(`Bolsonaro recebeu ${votosBolsonaro} votos.`);
console.log(`Dória recebeu ${votosDoria} votos.`);
console.log(`Total de votos nulos foi de ${votosNulos} votos.`);

