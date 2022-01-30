const prompt = require("prompt-sync")();

let usuario = prompt("Digite o nome de usuário: ");
let senha = [];
const regex = /[0-9][!@#$%^&*-+\|]/;

function digiteSenha(){
    promptSenha = prompt("Digite sua senha: ");
}
digiteSenha();
senha.push(promptSenha);

console.log(senha[0].length);

while(senha[0].length < 8 || !regex.test(senha[0])) {
    console.log("Senha tem menos que 8 carácteres.")
    digiteSenha();
    senha.splice(0, 1, promptSenha);
}

console.log(senha[0].length);
console.log(senha);