const prompt = require("prompt-sync")();
console.clear();

let pessoa = {
    nome: "Lucas",
    idade: 10,
    peso: 60,
    altura: 175,
    engordar: function(newAge){
        if (this.idade <= 21){
            for(let i = this.idade; i < newAge; i++) {
                this.peso += 2;
            }
        } else if (this.idade > 21 && this.idade <= 30){
            for(let i = this.idade; i < newAge; i++) {
                this.peso++;
            }
        } else {
            for(let i = this.idade; i < newAge; i++) {
                this.peso += 0.5;
            }
        }
        console.log(this.peso);
    },
    emagrecer: function(newPeso){
        if(newPeso == 'SIM') {
            this.peso -= 5;
        }
        console.log(this.peso);
    },
    crescer: function(newAge) {
        if(newAge <= 21) {
            for(let i = this.idade; i <= newAge; i++){
                this.altura += 0.5
            }
        } else {
            for(let i = this.idade; i <= 21; i++){
                this.altura += 0.5
            }
        }
        console.log(this.altura);
    },
    getNome: function(){
        return this.nome;
    },
    envelhecer: function(newAge){
        while(this.idade < newAge){
            this.idade++;
        }
        console.log(this.idade);
    }
}

let newAge = +prompt(`Qual a idade que ${pessoa.getNome()} tem?  `);
let newPeso = prompt(`${pessoa.getNome()} fez dieta para emagrecer?  `).toUpperCase();


if(newPeso == 'SIM') {
    pessoa.engordar(newAge);
    pessoa.emagrecer(newPeso);
} else {
    pessoa.engordar(newAge);
}
pessoa.crescer(newAge);
pessoa.envelhecer(newAge);



