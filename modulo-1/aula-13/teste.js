const pessoa = { Nome: 'Gabriel', Idade: 20, Cidade: 'Londrina' };
const pessoaChaves = Object.entries(pessoa);

console.log(pessoaChaves);
console.log();



const pessoaChaves2 = Object.keys(pessoa);
const pessoaChave3 = Object.values(pessoa);

for(let i = 0; i < pessoaChaves.length; i++) {
    console.log(`${pessoaChaves2[i]}: ${pessoaChave3[i]}`);

}

console.log();

for (let i = 0; i < pessoaChaves.length; i++) {
    console.log(`${pessoaChaves[i][0]}: ${pessoaChaves[i][1]}`);
}


