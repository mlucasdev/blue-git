const prompt = require("prompt-sync")();

let funcionarios = [
    {nome: "Lucas",
     cargo: "Programador", 
     salario: 3297},
    {nome: "Pedro", cargo: "Professor", salario: 4140},
    {nome: "Julio", cargo: "Programador", salario: 3931},
    {nome: "Mario", cargo: "Vendedor", salario: 2529},
    {nome: "João", cargo: "Professor", salario: 5420}

];
let x = 0
function aumentoS(b, a) {
    if(b == 'Professor') {
        for(let i of funcionarios) {
            nomeCargo = i.cargo;
            if(nomeCargo == 'Professor'){
                i.cargo.salario = x + (funcionarios[x].salario + funcionarios[x].salario * (a / 100));
            }
            x ++
        }
        console.log(funcionarios);
    }   


    // for(let i of funcionarios){
    //     let aumento = i.salario + (i.salario * (a / 100));
    //     console.log(aumento);
    // }
}


    let cargoAumento = prompt("Qual cargo deseja dar aumento? ");
    let aumentoSalario = +prompt("Qual a porcentagem de aumento? ");

aumentoS(cargoAumento, aumentoSalario);
