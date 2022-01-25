const prompt = require("prompt-sync")();


let idadeEmDias = +prompt("Quantos dias você viveu? ");

let idadeEmAnos = Math.trunc(idadeEmDias / 365);

let restoEmDias = idadeEmDias % 365;

let meses = Math.trunc(restoEmDias / 30);

let restoEmDias2 = restoEmDias % 30;

console.log(idadeEmAnos);
console.log(meses);
console.log(restoEmDias2);