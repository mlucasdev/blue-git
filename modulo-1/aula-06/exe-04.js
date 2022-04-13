const prompt = require("prompt-sync")();

let vezesLançadas = +prompt("Quantas vezes você quer lançar o dado? ");
let ladoDado = [];
for (let i = 0; i < vezesLançadas; i++) {
  let ladoAleatorio = Math.floor(Math.random() * 6) + 1;

  ladoDado.push(ladoAleatorio);
}

let lado1 = [];
let lado2 = [];
let lado3 = [];
let lado4 = [];
let lado5 = [];
let lado6 = [];

for (let i of ladoDado) {
  if (i == 1) {
    lado1.push(i);
  }
  if (i == 2) {
    lado2.push(i);
  }
  if (i == 3) {
    lado3.push(i);
  }
  if (i == 4) {
    lado4.push(i);
  }
  if (i == 5) {
    lado5.push(i);
  }
  if (i == 6) {
    lado6.push(i);
  }
}

console.log(`O lado 1 apareceu ${lado1.length} vezez`);
console.log(`O lado 2 apareceu ${lado2.length} vezez`);
console.log(`O lado 3 apareceu ${lado3.length} vezez`);
console.log(`O lado 4 apareceu ${lado4.length} vezez`);
console.log(`O lado 5 apareceu ${lado5.length} vezez`);
console.log(`O lado 6 apareceu ${lado6.length} vezez`);
