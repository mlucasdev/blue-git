const prompt = require("prompt-sync")();

let carros = ["Fusion", "Camaro", "Gol", "Civic", "Jetta"];
let consumoPorLitro = [8.3, 4, 16, 9.2, 7.6,];
let eco = 0;
let modeloEco = "";
let num = 0;

for(let i of consumoPorLitro) {
    if (i > eco) {
        eco = i;
        num++;
        modeloEco = carros[num];
    }
}

for(let i = 0; i < carros.length; i++) {
    let x = 1000 / consumoPorLitro[i];
    let y = x * 5.50;
    console.log(`${carros[i]} em 1000km vai consumir ${x.toFixed(2)} litros de gasolina `);
    console.log(`E gastará R$${y.toFixed(2)}`);
    console.log();
}




console.log(`O modelo mais ecônomico é o ${modeloEco} que faz ${eco}km/l.`);