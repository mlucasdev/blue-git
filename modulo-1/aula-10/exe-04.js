const prompt = require("prompt-sync")();

let linhasEColunas = [
   [ [], [], [] ],
   [ [], [], [] ],
   [ [], [], [] ]
];

function usuario1() {
        let dgLinha = +prompt("Escolha uma linha para inserir o - X -:");
        let dgColuna = +prompt(`Digite a coluna da linha ${dgLinha} você quer marcar - X -:`);
        linhasEColunas[dgLinha - 1][dgColuna - 1].push('X');
        
}
function usuario2() {
    let dgLinha = +prompt("Escolha uma linha para inserir o - O -:");
    let dgColuna = +prompt(`Digite a coluna da linha ${dgLinha} você quer marcar - O -:`);
    linhasEColunas[dgLinha - 1][dgColuna - 1].push('O');

}

let qtVJogador1 = 0;
do {
    usuario1();
    if (linhasEColunas[0][0] == 'X' && linhasEColunas[0][1] == 'X' && linhasEColunas[0][2] == 'X') {
        qtVJogador1++;
        console.log("Jogador 1 Ganhou!");
    }

    usuario2();
    console.log(linhasEColunas[0]);
    console.log(linhasEColunas[1]);
    console.log(linhasEColunas[2]);

    if (linhasEColunas[0][0] == 'X' && linhasEColunas[0][1] == 'X' && linhasEColunas[0][2] == 'X') {
        qtVJogador1++;
        console.log("Jogador 1 Ganhou!");
    } else if (linhasEColunas[1][0] == 'X' && linhasEColunas[1][1] == 'X' && linhasEColunas[1][2] == 'X') {
        qtVJogador1++;
        console.log("Jogador 1 Ganhou!");
    } else if (linhasEColunas[2][0] == 'X' && linhasEColunas[2][1] == 'X' && linhasEColunas[2][2] == 'X') {
        qtVJogador1++;
        console.log("Jogador 1 Ganhou!");
    } else if (linhasEColunas[0][0] == 'X' && linhasEColunas[1][0] == 'X' && linhasEColunas[2][0] == 'X') {
        qtVJogador1++;
        console.log("Jogador 1 Ganhou!");
    }
    
} while(qtVJogador1 == 0);



