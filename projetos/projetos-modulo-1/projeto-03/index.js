const prompt = require("prompt-sync")();
console.clear();

///////////////////////FUNÇÕES DE AÇÕES\\\\\\\\\\\\\\\\\\\\\\\\\\

////////PRIMEIRA AÇÃO\\\\\\\\\
function decisao1(){    
    tempo.getTempo();
    console.log("Frank Jr. decide falsificar seu primeiro chegue, alterando seu nome e a data de nascimento.")
    console.log(`Ele está em dúvida entre trocar um cheque de R$ 300,00 que garantiria duas semanas de hotel e comida
ou um menor, de R$ 100,00 que não levantaria suspeita.`);
    console.log("Ele vai até o banco para descontar.");

    verificaBanco();
    console.log();
    console.log("Qual valor ele deve escolher?");
    console.log();
    let resposta = +prompt("● Trocar um cheque de 100 dólares ou de 300:  ");
    while(resposta != 100 && resposta != 300) {
        console.log();
        console.log("Por favor digite uma resposta válida");
        resposta = +prompt("● Trocar um cheque de 100 dólares ou de 300:  ");
    }
    console.clear();
    console.log();
    if(status.chanceCheque(resposta)) {
        console.log("Frank Jr pergunta para a atendente se podem descontar um cheque de 100 Dólares.");
        console.log("A mulher diz que sim.")
        console.log();
        status.upDolares(resposta);
        console.log();
        status.upConfianca(0.8);
        console.log();
        status.upSerPreso(0.2);
        console.log();
        tempo.alteraTempo(10, 1, 0, 0, 0);
    } else {
        console.log("Frank Jr. pede para uma senhora que trabalha ali descontar o cheque.");
        console.log("Ela olha para o valor, desconfia e diz que não descontam cheques de outros bancos.")
        console.log();
        status.getDolares();
        console.log();
        status.downConfianca(0.4);
        console.log();
        status.upSerPreso(0.7);
        console.log();
        tempo.alteraTempo(10, 1, 0, 0, 0);
    }
}

////////SEGUNDA AÇÃO\\\\\\\\\\
function chequeNovoBanco(){
    while(ctt <= 1) {
        console.log();
        console.log();
        verificaBanco();
        if(tmp <= 1){
            console.log("Frank Jr vai até outro banco para descontar um novo cheque.");
            console.log();
            console.log("Qual valor vai ser esse cheque?");
            console.log("Cuidado com valores muito altos, a dificuldade de passar será maior.")
            console.log();
            let valor = +prompt("● R$ 50, R$ 100, R$ 200, R$ 300 ou R$ 1000:  ");
            while(valor != 50 && valor != 100 && valor != 200 && valor != 300 && valor != 1000) {
                console.log();
                console.log("Por favor digite uma resposta válida");
                valor = +prompt("● 50, 100, 200, 300 ou 1000:  ");
            }
            console.log();
            console.clear();
            if(status.chanceCheque(valor)) {
                console.log();
                console.log(`Frank Jr consegue passar um cheque de R$ ${valor.toFixed(2)}.`);
                console.log();
                status.upDolares(valor);
                console.log();
                if (valor == 50) {
                    status.upConfianca(0.2);
                    console.log();
                    status.upSerPreso(0.3);
                } else if (valor == 100){
                    status.upConfianca(0.4);
                    console.log();
                    status.upSerPreso(0.5);
                } else if (valor >= 200 && valor < 500) {
                    status.upConfianca(0.6);
                    console.log();
                    status.upSerPreso(0.8);
                } else {
                    status.upConfianca(0.8);
                    console.log();
                    status.upSerPreso(1);
                }
            } else {
                console.log("Frank Jr. não consegue descontar o cheque.");
                console.log();
                status.getDolares();
                console.log();
                status.downConfianca(0.3);
                console.log();
                status.upSerPreso(0.6);
            }
            console.log();
            tempo.alteraTempo(10, 1, 0, 0, 0);

            ctt++;
            if (ctt <= 1){
                console.log();
                console.log();
                console.log();
                console.log("Deseja tentar descontar outro cheque em um novo banco?");
                console.log("Pode ser uma chance de ganhar uma grana.");
                console.log();
                let tentar = +prompt("● Digite -- 1 -- para SIM ou -- 2 -- para NÃO:  ");
                while(tentar != 1 && tentar != 2) {
                    console.log();
                    console.log("Por favor digite uma resposta válida");
                    tentar = +prompt("● Digite -- 1 -- para SIM ou -- 2 -- para NÃO:  ");
                }
                if(tentar == 2){
                    ctt += 2;
                }
                console.log();
            } 
        }
    }
    
}

////////////FUNÇÃO PARA COMPRAR UMA ROUPA\\\\\\\\\\\\\\\
function comprarRoupa(){
    console.log();
    console.log();
    console.log("Que tal comprar umas roupas novas?");
    console.log("Roupas novas podem aumentar a confiança de Frank Jr.");
    console.log("Com a confiança mais alta será mais fácil passar seus cheques falsos.");
    console.log();
    let sim = prompt("● Responda -- SIM -- para ir para loja:  ").toUpperCase();
    while(sim != 'SIM') {
        console.log();
        console.log("Por favor digite uma resposta válida");
        sim = prompt("● Responda -- SIM -- para ir para loja:  ").toUpperCase();
    }
    console.clear();
    let ctR = 1;
    for(let i of lojaDeRoupas){
        console.log(`${ctR}: ${i.roupa},  Valor: R$ ${i.valor.toFixed(2)}`);
        ctR++
    }
    console.log();
    console.log("Lembre-se, quanto melhor sua roupa, mais alta será a confiança Frank.");
    console.log();
    status.getDolares();
    console.log();
    console.log("Qual delas escolher?");
    let qtRoupas = [];
    for(let i in lojaDeRoupas) {
        let y = parseInt(i)
        let x = y + 1;
        qtRoupas.push(x);
    }
    let roupa = +prompt("● Escolha uma das peças acima digitando o número dela:  ");
    while(roupa != qtRoupas[0] && roupa != qtRoupas[1] && roupa != qtRoupas[2] && roupa != qtRoupas[3] && roupa != qtRoupas[4] && roupa != qtRoupas[5]) {
        console.log();
        console.log("Por favor digite uma resposta válida");
        roupa = +prompt("● Escolha uma das peças acima digitando o número dela:  ");
    }
    let dol = status.getDolares2();
    while(lojaDeRoupas[roupa - 1].valor > dol) {
        console.log();
        status.getDolares();
        console.log("Ele não tem dinheiro suficiente para comprar essa peça.");
        console.log();
        roupa = +prompt("● Digite 1, 2, 3, 4 ou 5 para escolher uma das peças:  ");
        while(roupa != qtRoupas[0] && roupa != qtRoupas[1] && roupa != qtRoupas[2] && roupa != qtRoupas[3] && roupa != qtRoupas[4] && roupa != qtRoupas[5]) {
            console.log();
            console.log("Por favor digite uma resposta válida");
            roupa = +prompt("● Digite 1, 2, 3, 4 ou 5 para escolher uma das peças:  ");
        }
    }
    console.clear();
    
    console.log(`Frank Jr comprou: ${lojaDeRoupas[roupa - 1].roupa}`);
    console.log();
    status.downDolares(lojaDeRoupas[roupa - 1].valor);
    console.log();
    for(let i in lojaDeRoupas){
        if(roupa - 1 == i) {
            let conf = lojaDeRoupas[i].qtConf;
            status.upConfianca(conf);
        }
    }

    console.log();
    tempo.alteraTempo(40, 4, 0, 0, 0)
}

////////////FUNÇÃO PARA LEILÃO DE MÁQUINA DE CHEQUE\\\\\\\\\\\\\\
function leilao() {
    console.log();
    console.log();
    console.log();
    console.log("Frank descobre um leilão de artigos antigos, entre eles uma máquina usada para produzir cheques.");
    console.log("É uma ótima oportunidade de aumentar a qualidade dos seus cheques.");
    console.log();
    let entrarLeilao = +prompt("● Digite -- 1 -- para participar do leilão ou -- 2 -- para sair fora:  ");
    while(entrarLeilao != 1 && entrarLeilao != 2) {
        console.log();
        console.log("Por favor digite uma resposta válida");
        entrarLeilao = +prompt("● Digite -- 1 -- para participar do leilão ou -- 2 -- para sair fora:  ");
    }
    console.clear();
    if(entrarLeilao == 1){
        console.log();
        console.log("Os lances para arrematar a máquina começam em R$ 40,00");
        console.log();
        let lance = prompt("● Dar um lance? Digite -- SIM -- ou -- NÃO --:  ").toUpperCase();
        while(lance != 'SIM' && lance != 'NAO' && lance != 'NÃO') {
            console.log();
            console.log("Por favor digite uma resposta válida.");
            lance = prompt("● Dar um lance? Digite -- SIM -- ou -- NÃO --:  ").toUpperCase();
        }
        if(lance == 'SIM') {
            console.log();
            console.log();
            status.getDolares();
            console.log();
            console.log();

            validaLance();
            
        }
    } else {
        return;
    }
}


/* 
                    ╔═════════════════════════════════════════════╗
                    ║               ATENÇÃO PROFESSOR             ║
                    ╚═════════════════════════════════════════════╝
    SEI QUE ESSA FUNÇÃO A BAIXO PODERIA SER MAIS OTIMIZADA CRIANDO OUTRAS FUNÇÕES E NÃO REPETINDO TANTO CÓDIGO.
    EU TENTEI FAZER ASSIM, MAS TAVA QUEBRANDO MUITO A CABEÇA,
    PORQUE PRECISEI FAZER MUITAS VERIFICAÇÕES EM CADA RESPOSTA
    E COMO O TEMPO TÁ CURTO E HOJE É O ÚLTIMO DIA, TIVE QUE FAZER ASSIM MESMO, POIS ACHEI MAIS FÁCIL.
*/


///////////////FUNÇÃO QUE PERGUNTA SOBRE O VALOR DO LANCE E VALIDA\\\\\\\\\\\\\\\\\
function validaLance(){
    console.log();
    let valorLance = +prompt("● Qual valor de lance deseja dar?  ");
    while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
        console.log();
        console.log("Por favor digite um valor válido.");
        valorLance = +prompt("● Qual valor de lance deseja dar?  ");
    }

    while(valorLance < 40) {
        console.log();
        console.log("O valor mínimo de lance é de R$ 40,00");
        valorLance = +prompt("● Qual valor de lance deseja dar?  ");
        
        while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
            console.log();
            console.log("Por favor digite um valor válido.");
            valorLance = +prompt("● Qual valor de lance deseja dar?  ");
        }
        
    }

    while(valorLance > status.getDolares2()){ //Verifico se o lance é maior que o saldo
        console.log();
        status.getDolares();
        console.log("Ele não tem dinheiro suficiente para dar esse lance.");
        console.log("Dê um lance menor.");
        console.log();
        let desistir = prompt("Quer desistir do leilão? -- SIM -- ou -- NÃO --:  ").toUpperCase();
        while(desistir != 'SIM' && desistir != 'NAO' && desistir != 'NÃO') {
            console.log();
            console.log("Por favor digite uma resposta válida.");
            desistir = prompt("Quer desistir do leilão? -- SIM -- ou -- NÃO --:  ").toUpperCase();
        }
        if(desistir == 'SIM') {
            console.log();
            console.log("Tudo bem, você está saindo do leilão.");
            console.log();
            status.downConfianca(1);
            return;
        }
        console.log();
        valorLance = +prompt("● Qual valor de lance deseja dar?  ");
        yy++;
        while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
            console.log();
            console.log("Por favor digite um valor válido.");
            valorLance = +prompt("● Qual valor de lance deseja dar?  ");
        }

        while(valorLance < 40) {
            console.log();
            console.log("O valor mínimo de lance é de R$ 40,00");
            valorLance = +prompt("● Qual valor de lance deseja dar?  ");
            
            while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
                console.log();
                console.log("Por favor digite um valor válido.");
                valorLance = +prompt("● Qual valor de lance deseja dar?  ");
            }
        }

        if(yy == 2){
            console.log();
            console.log("Você está saindo do leilão por não ter como dar um lance nesse valor.")
            return;
        }
    }
    yy = 0;


    console.log();
    let lancePc = valorLance + (valorLance * ((Math.floor(Math.random() * (16 - 10)) + 10)/100));
    console.log(`Outra pessoa deu um lance de R$ ${lancePc.toFixed(2)}`);
    console.log();


    while(arrematou < 1){
        console.log();
        let newLance = prompt("Deseja dar outro lance? -- SIM -- ou -- NÃO --:  ").toUpperCase();
        while(newLance != 'SIM' && newLance != 'NAO' && newLance != 'NÃO') {
            console.log();
            console.log("Por favor digite uma resposta válida.");
            newLance = prompt("Desaja dar outro lance? -- SIM -- ou -- NÃO --:  ").toUpperCase();
        }
        console.clear();
        console.log(`Último lance foi de R$ ${lancePc.toFixed(2)}`);
        console.log();
        if(newLance == 'SIM') {
            valorLance = +prompt("● Qual valor de lance deseja dar?  ");
            /////VERIFICAÇÕES {
            while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
                console.log();
                console.log("Por favor digite um valor válido.");
                valorLance = +prompt("● Qual valor de lance deseja dar?  ");
            }

            while(valorLance < lancePc){
                console.log();
                console.log(`O último lance foi de R$ ${lancePc.toFixed(2)}`);
                console.log("Dê um lance maior.");
                console.log();
                valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
                    console.log();
                    console.log("Por favor digite um valor válido.");
                    valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                }
            }

            while(valorLance > status.getDolares2()){ //Verifico se o lance é maior que o saldo
                console.log();
                status.getDolares();
                console.log("Ele não tem dinheiro suficiente para dar esse lance.");
                console.log("Dê um lance menor.");
                console.log();
                let desistir = prompt("Quer desistir do leilão? -- SIM -- ou -- NÃO --:  ").toUpperCase();
                while(desistir != 'SIM' && desistir != 'NAO' && desistir != 'NÃO') {
                    console.log();
                    console.log("Por favor digite uma resposta válida.");
                    desistir = prompt("Quer desistir do leilão? -- SIM -- ou -- NÃO --:  ").toUpperCase();
                }
                if(desistir == 'SIM') {
                    console.log();
                    console.log("Tudo bem, você está saindo do leilão.");
                    console.log();
                    status.downConfianca(1);
                    return;
                }
                console.log();
                valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                yy++;
                while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
                    console.log();
                    console.log("Por favor digite um valor válido.");
                    valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                }
        
                while(valorLance < lancePc){
                    console.log();
                    console.log(`O último lance foi de R$ ${lancePc.toFixed(2)}`);
                    console.log("Dê um lance maior.");
                    console.log();
                    valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                    while(isNaN(valorLance)){ //verifica se é um número
                        console.log();
                        console.log("Por favor digite um valor válido.");
                        valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                    }
                }

                if(yy == 2){
                    console.log();
                    console.log("Você está saindo do leilão por não ter como dar um lance nesse valor.")
                    return;
                }
            }
            yy = 0;

            while(valorLance < (lancePc + (lancePc * (10/100)))){ //verifica se o lance é > 10% do último lance
                console.log();
                console.log("Seu lance precisa ser pelo menos 10% maior que o anterior.")
                console.log();
                valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                
                while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
                    console.log();
                    console.log("Por favor digite um valor válido.");
                    valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                }
    
                while(valorLance < lancePc){
                    console.log();
                    console.log(`O último lance foi de R$ ${lancePc.toFixed(2)}`);
                    console.log("Dê um lance maior.");
                    console.log();
                    valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                    while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
                        console.log();
                        console.log("Por favor digite um valor válido.");
                        valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                    }
                }
    
                while(valorLance > status.getDolares2()){ //Verifico se o lance é maior que o saldo
                    console.log();
                    status.getDolares();
                    console.log("Ele não tem dinheiro suficiente para dar esse lance.");
                    console.log("Dê um lance menor.");
                    console.log();
                    let desistir = prompt("Quer desistir do leilão? -- SIM -- ou -- NÃO --:  ").toUpperCase();
                    while(desistir != 'SIM' && desistir != 'NAO' && desistir != 'NÃO') {
                        console.log();
                        console.log("Por favor digite uma resposta válida.");
                        desistir = prompt("Quer desistir do leilão? -- SIM -- ou -- NÃO --:  ").toUpperCase();
                    }
                    if(desistir == 'SIM') {
                        console.log();
                        console.log("Tudo bem, você está saindo do leilão.");
                        console.log();
                        status.downConfianca(1);
                        return;
                    }
                    console.log();
                    valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                    yy++;
                    while(isNaN(valorLance)){ //Verifica se valorLance armazena um número
                        console.log();
                        console.log("Por favor digite um valor válido.");
                        valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                    }
            
                    while(valorLance < lancePc){
                        console.log();
                        console.log(`O último lance foi de R$ ${lancePc.toFixed(2)}`);
                        console.log("Dê um lance maior.");
                        console.log();
                        valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                        while(isNaN(valorLance)){ //verifica se é um número
                            console.log();
                            console.log("Por favor digite um valor válido.");
                            valorLance = +prompt("● Qual valor de lance deseja dar?  ");
                        }
                    }
    
                    if(yy == 2){
                        console.log();
                        console.log("Você está saindo do leilão por não ter como dar um lance nesse valor.")
                        return;
                    }
                }
                yy = 0;
            }
            
            if(valorLance > 600) {
                console.log();
                console.log(`Você conseguiu arrematar com um lance de R$ ${valorLance.toFixed(2)}`);
                arrematou++;
                status.downDolares(valorLance);
                console.log();
                status.upQlCheques(7);
                console.log();
                status.upConfianca(0.1)
                return;
            }

            let martelo = (Math.floor(Math.random() * 11));

            if(martelo > 1) {
                console.log();
                lancePc = valorLance + (valorLance * ((Math.floor(Math.random() * (16 - 10)) + 10)/100));
                console.log(`Outra pessoa deu um lance de R$ ${lancePc.toFixed(2)}`);
            } else {
                console.log();
                console.log(`Você conseguiu arrematar com um lance de R$ ${valorLance.toFixed(2)}`);
                arrematou++;
                status.downDolares(valorLance);
                console.log();
                status.upQlCheques(7);
                console.log();
                status.upConfianca(0.5);
            }   
        } else {
            return;
        }
    }
}

///////////FUNÇÃO QUE VERIFICA SE O BANCO ESTÁ ABERTO\\\\\\\\\\\\
function verificaBanco(){
    let temp = tempo.bancoFechado();
    if (temp < 10 || temp > 15){
        console.log();
        tempo.exibeHora();
        console.log();
        console.log("O banco está fechado, deseja ir direto para hora que estiver aberto?");
        let irParaHora = +prompt("● Digite -- 1 -- para SIM ou -- 2 -- para NÃO:  ");
        while(irParaHora != 1 && irParaHora != 2) {
            console.log();
            console.log("Por favor digite uma resposta válida");
            irParaHora = +prompt("● Digite -- 1 -- para SIM ou -- 2 -- para NÃO:  ");
        }
        console.clear();
        if(irParaHora == 1) {
            if(temp < 10 && temp >= 5){
                if(temp >= 5 && temp <= 8) {
                    tempo.alteraTempo(5, 5, 0, 0, 0);
                } else if (temp > 8 && temp < 10) {
                    tempo.alteraTempo(5, 2, 0, 0, 0);
                }
            } else if (temp > 15 && temp < 21) {
                if(temp > 15 && temp < 18) {
                    tempo.alteraTempo(5, 19, 0, 0, 0);
                } else {
                    tempo.alteraTempo(5, 16, 0, 0, 0);
                }
            } else {
                if(temp >= 0 && temp <= 3) {
                    tempo.alteraTempo(5, 10, 0, 0, 0);
                } else if (temp > 3 && temp < 5) {
                    tempo.alteraTempo(5, 3, 0, 0, 0);
                } else if (temp >= 21 && temp < 24){
                    tempo.alteraTempo(5, 13, 0, 0, 0);
                }
            }
            console.log();
            console.log("Pronto, agora o banco está aberto.");
            console.log();
        }else {
            tmp = 5;
            ctt = 5;
        }
    } 
    
}

////////////////////FUNÇÃO INTERROGATÓRIO\\\\\\\\\\\\\\\\\\\\\\\\\
function interrogatorio(){
    console.log();
    console.log();
    console.log();
    console.log("Você foi intimado pela Polícia de N.Y. a prestar depoimento.");
    console.log("Cuidado com o que vai responder, pode acabar na prisão.");
    console.log();
    console.log("O Inspetor Carl é o policial que irá fazer interrogatório.");
    console.log();
    let trabalho = prompt("- Você trabalha, Frank?  ").toUpperCase();
    while(trabalho != 'SIM' && trabalho != 'NAO' && trabalho != 'NÃO') {
        console.log();
        console.log("Por favor digite uma resposta válida.");
        trabalho = prompt("Você trabalha, Frank?  ").toUpperCase();
    }
    console.clear();
    if(trabalho == 'SIM') {
        console.log("- Com o que você trabalha?- pergunta o Carl.");
        console.log();
        let empregos = [
            {emprego: "Entregador de pizzas"},
            {emprego: "Barman"}
        ];
        xyx = 1;
        for(let i in empregos) {
            console.log(`${xyx}: Eu trabalho como ${empregos[i].emprego}.`);
            xyx++;
        }
        console.log();

        let tipoTrabalho = +prompt("Digite o número da resposta que deseja escolher:  ");
        while(tipoTrabalho != 1 && tipoTrabalho != 2) {
            console.log();
            console.log("Por favor digite uma resposta válida");
            tipoTrabalho = +prompt("Digite o número da resposta que deseja escolher:  ");
        }

        if(status.getSerPreso() > 4) {
            console.log();
            console.log("Eu sei que você não trabalha com nada, estou te investigando desde o primeiro cheque que passou.");
            console.log("Estou com muitas provas de que você anda passando cheques sem fundos");
            console.log();
            console.log("Faça uma escolha para tentar não ser preso.");
            console.log();
            console.log("1: Tentar subornar o Policial.");
            console.log("2: Tentar fugir.")
            let subFG = +prompt("Digite o número da resposta que deseja escolher:  ");
            while(subFG != 1 && subFG != 2) {
                console.log();
                console.log("Por favor digite uma resposta válida");
                subFG = +prompt("Digite o número da resposta que deseja escolher:  ");
            }
            console.log();
            if(subFG == 1){
                console.log("- O que acha da gente resolver isso de outra forma.");
                console.log("- Eu te ajudo e você me ajuda.");
                console.log();
                console.log("- Quanto você quer pra me liberar.- Diz Frank.");
                console.log();
                valorLiberarAle = (Math.floor(Math.random() * (2501 - 1000)) + 1000);
                console.log(`- Quero R$ ${valorLiberarAle.toFixed(2)} - responde Carl`);
                console.log();
                if(valorLiberarAle > status.getDolares2()){
                    console.log("Você não tem dinheiro suficiente para subornar o policial.");
                    console.log("Você está sendo preso.");
                    console.log();
                    tempo.alteraTempo(10, 1, 16, 2, 0);
                    console.log();
                    console.log("Você foi preso e condenado a 4 anos e 7 meses de prisão.");
                } else {
                    console.log("Você pagou o suborno e o policial te liberou.");
                    console.log();
                    status.downDolares(valorLiberarAle);
                    console.log();
                    tempo.alteraTempo(10, 1, 16, 8, 0);
                    console.log();
                    console.log("Frank Jr. vive por alguns países da Europa, passando seus cheques.");
                    console.log("E já acumulou mais de 800 mil dólares em dinheiro vivo.");
                }
            } else {
                fuga = (Math.floor(Math.random() * 11));
                if(fuga > 3) {
                    console.log("Frank foi preso tentando fugir.");
                    console.log();
                    tempo.alteraTempo(10, 1, 16, 2, 0);
                    console.log();
                    console.log("Frank Jr foi condenado a 4 anos e 3 meses de prisão.");
                } else {
                    console.log();
                    tempo.alteraTempo(10, 1, 16, 3, 0);
                    console.log();
                    console.log("Frank Jr. conseguiu fugir, mas a polícia vive atrás dele.");
                    console.log("Tem muita dificuldade de passar seus cheques após sua foto ser publicar em todos os jornais.");
                    console.log();
                    console.log("A um prêmio de R$ 5000,00 para quem denunciar seu paradeiro.");
                }
            }
        } else {
            console.log();
            console.log(`Então você trabalha de ${empregos[tipoTrabalho-1].emprego}`);
            console.log();
            console.log(`A quanto tempo você trabalha nesse emprego?`);
            console.log();
            console.log("1: Trabalho a 3 meses.");
            console.log("2: Trabalho a 1 mês.")
            console.log();
            let tempoTrabalho =  +prompt("Digite o número da resposta que deseja escolher:  ");
            while(tempoTrabalho != 1 && tempoTrabalho != 2) {
                console.log();
                console.log("Por favor digite uma resposta válida");
                tempoTrabalho = +prompt("Digite o número da resposta que deseja escolher:  ");
            }
            console.log();
            let numPreso = (Math.floor(Math.random() * 11));
            if(numPreso > 8) {
                console.log("Ok tudo bem, vamos averiguar seu caso e voltamos a conversar.");
                console.log();
                tempo.alteraTempo(10, 1, 16, 2, 0);
                console.log();
                console.log("Sabendo do perigo de ser preso morando em Nova York, Frank se muda para Paris.");
                console.log("E por lá continua sua jornada de crimes.");
                console.log();
                console.log("Estima-se que ele já tenha falsificado mais de 200 mil dólares em cheques.");
                console.log("A polícia segue o procurando.");
            } else {
                console.log("Muito pouco tempo nesse emprego.");
                console.log("Eu sei que você está mentindo, e quem vem passando cheques sem fundos pela cidade toda.");
                console.log();
                console.log("Você está preso.");
                console.log();
                tempo.alteraTempo(10, 1, 16, 2, 0);
                console.log();
                console.log("Frank Jr. foi condenado a 4 meses de prisão.");
            }
        }

    } else {
        console.log();
        console.log("- Então você faz o quê da vida?- pergunta o Carl.");
        console.log();
        console.log("1: Acho que o senhor já sabe, por ter me chamado até aqui.");
        console.log("2: Eu estudo e recebo ajuda de custos de minha mãe.");
        console.log();
        let ocupacao = +prompt("Digite o número da resposta que deseja escolher:  ");
        while(ocupacao != 1 && ocupacao != 2) {
            console.log("Por favor digite uma resposta válida");
            ocupacao = +prompt("Digite o número da resposta que deseja escolher:  ");
        }
        console.log();
        if(ocupacao == 1){
            console.log("- Sei sim. Sei que você é um falsificador de cheques.");
            console.log();
            console.log("Faça uma escolha para tentar não ser preso.");
            console.log();
            let xxx = +prompt("Digite 1 para tentar subornar o Policial:  ");
            while(xxx != 1) {
                console.log();
                console.log("Só lhe restaa tentar subornar ele, ou você será preso.");
                xxx = +prompt("Digite o número da resposta que deseja escolher:  ");
            }
            console.log();
            console.log("Quanto você quer para me deixar sair livre?");
            valorLiberarAle2 = (Math.floor(Math.random() * (1001 - 700)) + 700);
            console.log(`- Quero R$ ${valorLiberarAle2.toFixed(2)} - responde Carl`);
            console.log();
            if(valorLiberarAle2 > status.getDolares2()){
                console.log("Você não tem dinheiro suficiente para subornar o policial.");
                console.log("Você está sendo preso.");
                console.log();
                tempo.alteraTempo(10, 1, 16, 2, 0);
                console.log();
                console.log("Você foi preso e condenado a 4 anos e 7 meses de prisão.");
            } else {
                console.log("Você pagou o suborno e o policial te liberou.");
                console.log();
                status.downDolares(valorLiberarAle2);
                console.log();
                tempo.alteraTempo(10, 1, 16, 5, 0);
                console.log();
                console.log("Frank Jr. vive por alguns países da Europa, passando seus cheques.");
                console.log("E já acumulou mais de 1 milhão de dólares em dinheiro vivo.");
            }
        } else {
            console.log("Ok tudo bem, vamos averiguar seu caso e voltamos a conversar.");
            console.log();
            tempo.alteraTempo(10, 1, 16, 4, 0);
            console.log();
            console.log("Sabendo do perigo de ser preso morando em Nova York, Frank se muda para Buenos Aires.");
            console.log("E por lá continua sua jornada de crimes.");
            console.log();
            console.log("Estima-se que ele já tenha falsificado mais de 400 mil dólares em cheques.");
            console.log("A polícia segue o procurando.");
        }
    }
}




///////////////////////////FUNÇÃO DE TEXTO\\\\\\\\\\\\\\\\\\\\\\\\
function introducao(){
    console.log(`
(Nova York, abril de 1960)
Os Abagnale são uma família de classe média alta norte-americana. Pai, mãe e filho moram em uma bela casa.
Após uma crise financeira na família eles se mudam para um apartamento muito pequeno.
No dia de seu aniversário de 17 anos Frank Jr. ganha como presente de seu pai uma conta corrente e um talão de cheques em seu nome.
Pouco tempo depois os pais de Frank Jr se separam, e ele se vê em uma saia justa de ter de escolher com qual dos dois ficar. 
Ele não consegue enfrentar a situação e foge.

Após fugir de casa, Frank Jr. precisa achar um local para ficar, ele se dirige a um hotel e pergunta se aceitam cheque. 
O atendente responde que sim. Após 3 dias ele é posto na rua, pois seus cheques foram recusados pelo banco por não possuírem fundos.


                  AGORA VOCÊ É FRANK JR.
`);
}





//FUNCÃO PARA INICIAR O JOGO
function play(){
    let jogar = +prompt("● Digite -- 1 -- para SIM ou -- 2 -- para NÃO:  ");
    
    while(jogar != 1 && jogar != 2) {
        console.log("Por favor digite uma resposta válida");
        jogar = play();
    };
    return jogar;
}





///////OBJETOS DE STATUS DO PERSONAGEM\\\\\\\\\
let status = {
    qtDolares: 0,
    qlCheques: 1,
    autoConfianca: 3,
    pdSerPreso: 0,

    //////////////MÉTODOS PARA DINHEIRO\\\\\\\\\\\\
    upDolares: function(a) {
        this.qtDolares += a;
        console.log(`Frank Jr. ganhou uma grana e agora tem R$ ${this.qtDolares.toFixed(2)}`);
    },
    downDolares: function(a) {
        if (this.qtDolares < a) {
            console.log("Frank Jr não tem dinheiro suficiente.");
            console.log(`No momento ele possui R$ ${this.qtDolares.toFixed(2)}`);
            console.log(`Para efetuar a compra Frank precisa de mais R$ ${(a - this.qtDolares).toFixed(2)}`)
        } else {
            console.log();
            this.qtDolares -= a;
            console.log(`Frank gastou R$ ${a.toFixed(2)} e agora tem R$ ${this.qtDolares.toFixed(2)}`);
        }
    },
    getDolares: function(){
        console.log(`Frank Jr tem R$ ${this.qtDolares.toFixed(2)}`);
    },
    getDolares2: function(){
        return this.qtDolares;
    },

    //////////MÉTODOS PARA QUALIDADE CHEQUES\\\\\\\\\\\\
    upQlCheques: function(a) {
        this.qlCheques += a;
        if(this.qlCheques > 10){
            this.qlCheques = 10;
            console.log();
            console.log("Qualidade máxima dos cheques, vai ser difícil descobrir que os cheques são falsos.");
        } else {
            console.log();
            console.log(`Agora os cheques estão melhores.`);
            console.log(`Nível de qualidade dos cheques: ${this.qlCheques}/10`);
        }
    },

    //////////MÉTODOS PARA AUTO CONFIANÇA\\\\\\\\
    upConfianca: function(a) {
        this.autoConfianca += a;
        if(this.autoConfianca > 10) {
            this.autoConfianca = 10;
            console.log("Nível máximo de confiança, Frank Jr está praticamente invencível.");
        } else {
            console.log("A confiança de Frank Jr está subindo, continue assim.");
            console.log(`Nível de confiança: ${this.autoConfianca.toFixed(1)}/10`);
        }
    },
    downConfianca: function(a) {
        this.autoConfianca -= a;
        if(this.autoConfianca < 0){
            this.autoConfianca = 0;
            console.log(`A confiança de Frank Jr está péssima, é melhor fazer algo para melhorar isto.`);
            console.log(`Nível de confiança: ${this.autoConfianca.toFixed(1)}/10`);
        } else {
            console.log(`A confiança de Frank Jr está mais baixa.`);
            console.log(`Nível de confiança: ${this.autoConfianca.toFixed(1)}/10`)
        }
    },

    ////////////MÉTODOS PARA SER PRESO\\\\\\\\\\\\\
    upSerPreso: function(a) {
        this.pdSerPreso += a;
        if(this.pdSerPreso >= 10) {
            console.log(`Você foi preso`);
        } else {
            console.log(`Cuidado com os riscos que está tomando.`);
            console.log(`Chance de ser preso: ${this.pdSerPreso.toFixed(1)}/10`);
        }
    },
    getSerPreso: function(){
        return this.pdSerPreso;
    },

    /////////////MÉTODO QUE CALCULA A CHANCE DE PASSAR O CHEQUE\\\\\\\\\\\\\\\\\
    chanceCheque: function(v) {
        let chanceCheque = ((this.qlCheques + this.autoConfianca) - this.pdSerPreso) * (Math.floor(Math.random() * (8 - 6)) + 6);
        if (chanceCheque >= 65) {
            return true;
        } else if (chanceCheque >= 55 && v <= 1000) {
            return true;
        } else if (chanceCheque >= 30 && v <= 300) {
            return true;
        } else if (chanceCheque >= 20 && v <= 100) {
            return true;
        } else if (chanceCheque >= 1 && v <= 50){
            return true;
        } else {
            return false;
        }
        
    },
}


////////////////OBJETO QUE MEDE O TEMPO\\\\\\\\\\\\\\\\\\\\
let tempo = {
    minutos: 15,
    hora: 13,
    dia: 29,
    mes: 04,
    ano: 1960,
    
    todosOsMeses: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    mesString: "",

    //////////MÉTODO QUE ALTERA O TEMPO\\\\\\\\\\\\\\
    alteraTempo: function(min, hr, d, m, a) {
        this.minutos += min;
        this.hora += hr;
        this.dia += d;
        this.mes += m,
        this.ano += a

        if(this.minutos >= 60){
            for(let i = 60; i <= this.minutos; i + 60){
                this.minutos -= 60;
                this.hora++;
            }
        }
        if(this.hora >= 24){
            for(let i = 24; i <= this.hora; i + 24){
                this.hora -= 24;
                this.dia++;
            }
        }
        if(this.dia > 30){
            for(let i = 30; i <= this.dia; i + 30){
                this.dia -= 29;
                this.mes++;
            }
        }
        if(this.mes >= 12){
            for(let i = 12; i <= this.mes; i + 12){
                this.mes -= 12;
                this.ano++;
            }
        }

        for(let i in this.todosOsMeses){
            if(i == (this.mes - 1)){
                this.mesString = this.todosOsMeses[i];
            }
        }
        console.log(`Data: ${this.dia} de ${this.mesString} de ${this.ano}, Horas: ${this.hora}:${this.minutos}`);
    },

    getHora: function(){
        return this.hora;
    },
    exibeHora: function(){
        console.log(`Agora são ${this.hora}:${this.minutos}`);
    },
    getTempo: function(){
        let getMes = '';
        for(let i in this.todosOsMeses){
            if(i == (this.mes - 1)){
                getMes = this.todosOsMeses[i];
            }
        }
        console.log();
        console.log(`Data: ${this.dia} de ${getMes} de ${this.ano}, Horas: ${this.hora}:${this.minutos}`);
        console.log();
    },

    ///////MÉTODO QUE VERIFICA SE O BANCO ESTÁ ABERTO\\\\\\\
    bancoFechado: function(){
        let minHr = this.hora + (this.minutos * (10/1000));
        return minHr;
    }
}

//////////ARRAY LOJA DE ROUPAS\\\\\\\\\\\\
let lojaDeRoupas = [
    {roupa: "Smoking Normal", valor: 120.90, qtConf: 0.3},
    {roupa: "Smoking Topzera", valor: 230.80, qtConf: 0.6},
    {roupa: "Terno Completo", valor: 169.39, qtConf: 0.4},
    {roupa: "Conjunto Casual", valor: 36.29, qtConf: 0.1},
    {roupa: "Camisa Social", valor: 49.90, qtConf: 0.2},
    {roupa: "Uniforme de Piloto de Avião", valor: 499.90, qtConf: 1}
];


//VÁRIAVEIS GLOBAIS
let ctt = 0;
let tmp = 0;
let arrematou = 0;
let yy = 0;


console.log(`Esse é um jogo de ficção interativa, onde você decide o destino do personagem.

╔═════════════════════════════════════════════╗
║"Inspirado no filme "Prenda-me se for capaz".║
╚═════════════════════════════════════════════╝
`);

console.log("Vamos jogar?")
let jogar = play();

//LOOP QUE EXECUTA O JOGO TODO
while(jogar == 1) {
    introducao();
    decisao1();
    console.log();
    chequeNovoBanco();
    if(status.getDolares2() > 0){
        comprarRoupa();
    }
    ctt = 0;
    tmp = 0;
    console.log();
    console.log();
    console.log("Frank quer ganhar mais uma grana nos bancos.");
    chequeNovoBanco();
    if(status.getDolares2() > 40){
        leilao();
    }
    console.log();
    console.log();
    console.log();
    console.log("Frank quer ganhar mais uma grana nos bancos.");
    ctt = 0;
    tmp = 0;
    chequeNovoBanco();

    if(status.getDolares2() > 500) {
        console.log();
        console.log();
        console.log("Frank está ganhando uma boa grana.");
        console.log();
        let maisDinheiro = prompt("● Quer fazer mais dinheiro? Responda: -- SIM -- ou -- NÃO --:  ").toUpperCase();
        while(maisDinheiro != 'SIM' && maisDinheiro != 'NÃO' && maisDinheiro != 'NAO') {
        console.log();
        console.log("Por favor digite uma resposta válida");
        maisDinheiro = prompt("● Quer fazer mais dinheiro? Responda: -- SIM -- ou -- NÃO --:  ").toUpperCase();
        }
        console.clear();
        if(maisDinheiro == 'SIM'){
            ctt = 0;
            tmp = 0;
            chequeNovoBanco();
        }
    } else {
        console.log();
        console.log();
        console.log("Frank está encontrando difultades para passar os cheques.");
        console.log();
        let tentando = prompt("● Quer continuar tentando? Responda: -- SIM -- ou -- NÃO --:  ").toUpperCase();
        while(tentando != 'SIM' && tentando != 'NÃO' && tentando != 'NAO') {
        console.log();
        console.log("Por favor digite uma resposta válida");
        tentando = prompt("● Quer continuar tentando? Responda: -- SIM -- ou -- NÃO --:  ").toUpperCase();
        }
        console.clear();
        if(tentando == 'SIM'){
            ctt = 0;
            tmp = 0;
            chequeNovoBanco();
        }
    }
    interrogatorio();
    



    console.log();
    console.log("Quer Jogar de novo?");
    jogar = play();
    
    status.qtDolares = 0;
    status.qlCheques = 1;
    status.autoConfianca = 3;
    status.pdSerPreso = 0;
    ctt = 0;
    tmp = 0;
    console.clear();
}