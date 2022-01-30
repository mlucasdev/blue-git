let numerosSorteados = [];

for(let i = 0; i < 20; i++) {
    numeroAleatorio = Math.floor(Math.random() * 100);
    numerosSorteados.push(numeroAleatorio);
}
numerosSorteados.sort((a, b) => a - b);

console.log(numerosSorteados);