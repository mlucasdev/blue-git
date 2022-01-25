const prompt = require("prompt-sync")();

let A = +prompt("Digite o valor do lado 1: ");
let B = +prompt("Digite o valor do lado 2: ");
let C = +prompt("Digite o valor do lado 3: ");
let X = 0;

if (A < B) {
  X = A;
  A = B;
  B = X;
}
if (B < C) {
  X = B;
  B = C;
  C = X;
}
if (A < B) {
    X = A;
    A = B;
    B = X;
}

console.log(A);
console.log(B);
console.log(C);

if (A >= B + C) {
    console.log("Não forma um triângulo.");
}
if (A * A === (B * B + C * C)) {
    console.log("Triângulo retângulo.");
}
if (A * A > (B * B + C * C)) {
    console.log("Triângulo obtusângulo.");
}
if (A * A < (B * B + C * C)) {
    console.log("Triângulo acutângulo.");
}
if (A === B && B === C) {
    console.log("Triângulo equilátero.");
}
if ((A === B && A !== C) || (C === B && C !== A) || (A === C && A !== B)) {
    console.log("Triângulo isósceles");
}