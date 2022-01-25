const prompt = require('prompt-sync')();
console.clear();


let nomeUsuario = prompt('Olá, qual o seu nome? ');
let iniciar = "";
let iniciarN = 0;
function textoIniciar() {
    console.log("Gostaria de iniciar o jogo?");
    iniciar = prompt(`-- SIM ou NÃO --  `);
}

console.log(`${nomeUsuario}, esse é um mini jogo de escolhas, onde você pode alterar a história dependendo de suas decisões.`)

function doWhlieIniciar(){
    do {
        textoIniciar();
        if (iniciarN === 2) {
            console.log(`Tudo bem ${nomeUsuario}, até a próxima.`);
            fail; //Unica forma que achei de parar a execução de todo o código
        } else if (
            iniciar === "nao" ||
            iniciar === "Nao" ||
            iniciar === "não" ||
            iniciar === "NAO" ||
            iniciar === "NÃO"
            ) {
                console.log("Vamos lá vai ser divertido!!");
                iniciarN++
            } else if (iniciar === "sim" || iniciar === "Sim" || iniciar === "SIM") {
                break;
            } else {
                console.log("Por favor digite SIM ou NÃO.");
                doWhlieIniciar();
            }
        
        
    } while
        (
        iniciar === "nao" ||
        iniciar === "Nao" ||
        iniciar === "não" ||
        iniciar === "NAO" ||
        iniciar === "NÃO"
        );
}
doWhlieIniciar();


if (iniciar === "sim" || iniciar === "Sim" || iniciar === "SIM") {
    console.log
    ( `
        Curitiba 5 de novembro de 2023. Doutora Betina Martins começa mais uma de suas consultas, seu novo paciente, um homem negro de nome desconhecido, 
        encontrado desacordado no meio de uma avenida, se demonstrou agressivo, com delírios e confusão. 
        - Olá, tudo bem? - diz a Dra.
        - Tudo bem. - respondeu seu novo paciente.
        - Por favor, me diga seu nome, idade e de onde você vem?
        - Meu nome é Júlio Ribeiro, tenho 41 anos e vim do ano de 2078.
        - 2078? – pergunta Betina com estranheza.
        - Sim, 2078?
        - Então você é um homem do futuro?
        - Sim doutora sou um viajante no tempo, e estou aqui em 2023 para salvar o mundo.
        - Salvar o mundo de que? – pergunta a Dra.
        - Isso não interessa, agora.
        - Quando te encontraram você estava repetindo várias vezes um nome, Amanda Antonelli. Quem é ela? É sua mulher, namorada ou filha?
        - Não, eu não a conheço, ainda. – respondeu Júlio.
        - Ok! Você já foi internado ou medicado antes?
        - Não.
        - Já foi diagnosticado com algum tipo de transtorno de personalidade?
        - Não. – respondeu o homem um pouco irritado que tenta sair da sala. Ela pede para ele se acalmar.
        - Você está numa unidade psiquiatra de um hospital geral, eu não posso deixar você ir embora!
        Então Júlio acomoda-se novamente em sua cadeira e a doutora lhe oferece um copo de água.
        - Prefiro um cigarro – responde Júlio.
    `);
}

console.log();
console.log("Oferecer um cigarro a Júlio?");
let oferecerCigarroSN = "";
function cigarroSimOuNao() {
    oferecerCigarroSN = prompt("-- SIM ou NAO --  ");
}

function oferecerCigarroF() {
    cigarroSimOuNao();
    if (oferecerCigarroSN === "sim" || oferecerCigarroSN === "Sim" || oferecerCigarroSN === "SIM") {
        console.log( `
        A doutora alcança para seu paciente um cigarro que acende.
        - Obrigado. – diz Júlio.
        - Agora me diga, como acaba o mundo?
        - Um vírus acaba com tudo, uma grande pandemia.
        - Acho que então você chegou atrasado. – diz a doutora dando uma leve risada.
        - Não estou falando da pandemia de 2020, estou falando da grande pandemia a que acabou com 90% da população mundial.
        - E o fim do mundo tem a ver com Amanda Antonelli? – questiona a doutora.
        - Sim, no dia 14 de novembro de 2023 Amanda pegará o voo 637 de São Paulo a Madrid onde será infectada e por conta de uma mutação
        que acontecerá dentro dela será impossível parar o vírus, tentaremos vacinas por muitos anos, mas as pessoas continuarão morrendo 
        de vagar ao passar dos anos. Os poucos que sobreviveram vivem em comunidades isoladas de tudo, sem contato com ninguém.
        -  Você consegue provar o que está dizendo?
        - Não tenho como provar.
        - Mas fazendo uma afirmação dessa deveria apresentar alguma prova. – indaga Betina.
        `);

    } else if (
        oferecerCigarroSN === "nao" ||
        oferecerCigarroSN === "Nao" ||
        oferecerCigarroSN === "não" ||
        oferecerCigarroSN === "NAO" ||
        oferecerCigarroSN === "NÃO") 
        {
            console.log( `
            - Eu não fumo, não tenho cigarros. – respondeu a doutora.
            - Deveria fumar, relaxa e você tá precisando.
            - Me diga Júlio como acaba o mundo? – pergunta Betina.
            - E isso interessa? Você não vai acreditar em mim. Acha que sou mais um de seus pacientes loucos, que tenho algum tipo de 
            transtorno mental e que preciso tomar muitos remédios para me acalmar como os que estão me dando.
            - Me desculpe se fiz você pensar isso, mas não acho que você seja louco, aliás seus exames estão muito bons.
            - Eu não sou nenhum louco doutora, sou um viajante no tempo.
            - E onde você deixou sua máquina do tempo?
            - Não existe uma máquina no tempo. Para viaja para o futuro o segredo é a gravidade, para o passado são laser. Muitos lasers que destorcem o espaço tempo.
            - E como você volta para o futuro? - Pergunta a doutora.
            - Não volto.
            -  Você consegue provar o que está dizendo?
            - Não tenho como provar.
            - Mas fazendo uma afirmação dessa deveria apresentar alguma prova. – indaga Betina.
             `);
        } else {
            console.log("Por favor digite SIM ou NÃO.");
            oferecerCigarroF();
        }
}
oferecerCigarroF();

console.log();
console.log("Apresentar Prova?");
let apresetarProva = "";
function apresentarProvaSimOuNao() {
    apresetarProva = prompt("-- SIM ou NAO --  ");
}

function apresetarProvaF() {
    apresentarProvaSimOuNao();
    if (apresetarProva === "sim" || apresetarProva === "Sim" || apresetarProva === "SIM") {
        console.log(`
        - Por mais que você não acredite em mim e isso irá parecer um pouco confuso, 
        mas aprimeira prova de que venho do futuro é você doutora, Betina Martins do Amaral.
        A doutora assustada pergunta:
        - Como sabe que me chamo assim? Eu nunca uso Betina, andou me investigando? Quem é você?
        `);

    } else if (
        apresetarProva === "nao" ||
        apresetarProva === "Nao" ||
        apresetarProva === "não" ||
        apresetarProva === "NAO" ||
        apresetarProva === "NÃO") 
        {
            console.log(`
            - Você já parece estar decidida do que pensa de mim. Não sei se o que eu falar vai mudar isso. – diz Júlio
            - Então pelo visto você não tem prova nenhuma.
            - Tenho, mas a senhora realmente está disposta a ouvir?
            `);
            console.log();
            console.log("Ouvir o que Júlio tem a dizer?");
            var apresetarProva2N = "";
            function apresentarProvaSimOuNao2N() {
                apresetarProva2N = prompt("-- SIM ou NAO --  ");
            }
            function apresetarProvaF2N() {
                apresentarProvaSimOuNao2N();
                if (apresetarProva2N === "sim" || apresetarProva2N === "Sim" || apresetarProva2N === "SIM") {
                    console.log(`
                    - Por mais que você não acredite em mim e isso irá parecer um pouco confuso, 
                    mas aprimeira prova de que venho do futuro é você doutora, Betina Martins do Amaral.
                    A doutora assustada pergunta:
                    - Como sabe que me chamo assim? Eu nunca uso Betina, andou me investigando? Quem é você?
                    `);
                } else if (
                    apresetarProva2N === "nao" ||
                    apresetarProva2N === "Nao" ||
                    apresetarProva2N === "não" ||
                    apresetarProva2N === "NAO" ||
                    apresetarProva2N === "NÃO") 
                    {
                        console.log(`
                        - É o que eu imaginava a senhora já definiu o que pensa de mim, mas mesmo assim vou lhe dizer.
                        -Por mais que você não acredite em mim e isso irá parecer um pouco confuso, 
                        mas aprimeira prova de que venho do futuro é você doutora, Betina Martins do Amaral.
                        A doutora assustada pergunta:
                        - Como sabe que me chamo assim? Eu nunca uso Betina, andou me investigando? Quem é você?
                        `);
                    } else {
                        console.log("Por favor digite SIM ou NÃO.");
                        apresetarProvaF2N();
                    }
            }
            apresetarProvaF2N();
            
        } else {
            console.log("Por favor digite SIM ou NÃO.");
            apresetarProvaF();
        }
}
apresetarProvaF();

console.log();
console.log("Responder quem Júlio é?");
let responderSN = "";
function responderSimOuNao() {
    responderSN = prompt("-- SIM ou NAO --  ");
}
let ajudarJulio = "";
let impedirSN = "";
function responderF() {
    responderSimOuNao();
    if (responderSN === "sim" || responderSN === "Sim" || responderSN === "SIM") {
        console.log( `
        - Eu já lhe disse doutora, meu nome é Júlio Ribeiro tenho 41 anos, e sou um viajante no tempo, 
        estou aqui para impedir que Amanda Antonelli entre naquele voo, e a senhora vai me ajudar a fazer isto.
        `);
        console.log();
            console.log("Ajudar Júlio?");
            
            function ajudarJulioSimOuNao() {
                ajudarJulio = prompt("-- SIM ou NAO --  ");
            }
            function ajudarJulioF() {
                ajudarJulioSimOuNao();
                if (ajudarJulio === "sim" || ajudarJulio === "Sim" || ajudarJulio === "SIM") {
                    console.log(`
                    - Ok Júlio, digamos que eu aceite, o que você irá fazer?
                    - Você irá fazer, você vai até o aeroporto dia 14 as oito horas da manhã, o voo sai as 10, precisa se aproximar dela, 
                    ganhar a confiança. Caso não consiga impedir ela de entrar naquele voo, irá ter que injetar esse soro que trouxe comigo. 
                    O soro a deixará imune e assim evitará o fim da espécie humana.
                    `);

                    console.log();
                    console.log("Impedir Amanda Antonelli?");
                    
                    function impedirSimOuNao() {
                        impedirSN = prompt("-- SIM ou NAO --  ");
                    }

                    function impedirF() {
                        impedirSimOuNao();
                        if (impedirSN === "sim" || impedirSN === "Sim" || impedirSN === "SIM") {
                            console.log("Doura Betina Martins impediu Amanda de entrar no voo.");
                        } else if (
                            impedirSN === "nao" ||
                            impedirSN === "Nao" ||
                            impedirSN === "não" ||
                            impedirSN === "NAO" ||
                            impedirSN === "NÃO") 
                            {
                               console.log("A doutora não aceitou impedir Amanda de entrar no voo, mas Júlio fez isso sozinho.");
                            } else {
                                console.log("Por favor digite SIM ou NÃO.");
                                impedirF();
                            }
                    }
                    impedirF();


                } else if (
                    ajudarJulio === "nao" ||
                    ajudarJulio === "Nao" ||
                    ajudarJulio === "não" ||
                    ajudarJulio === "NAO" ||
                    ajudarJulio === "NÃO") 
                    {
                        console.log(`
                        - Já entendi, a senhora não quer me ajudar a sair daqui, não acredita em mim, tudo bem então eu vou 
                        conseguir do meu próprio jeito. Essa noite vou sair daqui e vou fazer o que realmente importa. 
                        Júlio fala rispidamente com a doutora que chama os seguranças do hospital.
                        - Levem ele e mediquem, vamos dar 30 mg de Butabarbital ele está muito agressivo.

                        `);
                    } else {
                        console.log("Por favor digite SIM ou NÃO.");
                        ajudarJulioF();
                    }
                return(ajudarJulio);
            }
            ajudarJulioF();

    } else if (
        responderSN === "nao" ||
        responderSN === "Nao" ||
        responderSN === "não" ||
        responderSN === "NAO" ||
        responderSN === "NÃO") 
        {
            console.log( ` - Você fez uma péssima escolha doutora.`);
        } else {
            console.log("Por favor digite SIM ou NÃO.");
            responderF();
        }
}
responderF();








if (
    (oferecerCigarroSN === "sim" || oferecerCigarroSN === "Sim" || oferecerCigarroSN === "SIM") &&
    (apresetarProva === "sim" || apresetarProva === "Sim" || apresetarProva === "SIM") &&
    (responderSN === "sim" || responderSN === "Sim" || responderSN === "SIM") &&
    (ajudarJulio === "sim" || ajudarJulio === "Sim" || ajudarJulio === "SIM") &&
    (impedirSN === "sim" || impedirSN === "Sim" || impedirSN === "SIM")
) {
    console.log("Parabéns, você savou o mundo, de 2020 a 2078 não ouve nenhuma pandemia.");
    
} else if (
    (oferecerCigarroSN === "nao" ||
    oferecerCigarroSN === "Nao" ||
    oferecerCigarroSN === "não" ||
    oferecerCigarroSN === "NAO" ||
    oferecerCigarroSN === "NÃO")  &&
    (apresetarProva === "sim" || apresetarProva === "Sim" || apresetarProva === "SIM") &&
    (responderSN === "sim" || responderSN === "Sim" || responderSN === "SIM") &&
    (ajudarJulio === "sim" || ajudarJulio === "Sim" || ajudarJulio === "SIM") &&
    (impedirSN === "sim" || impedirSN === "Sim" || impedirSN === "SIM")
) {
    console.log("Você salvou o mundo, mas Júlio preferiria ter fumado um cigarro.");

} else if (
    (oferecerCigarroSN === "nao" ||
    oferecerCigarroSN === "Nao" ||
    oferecerCigarroSN === "não" ||
    oferecerCigarroSN === "NAO" ||
    oferecerCigarroSN === "NÃO")  &&
    (apresetarProva === "nao" ||
    apresetarProva === "Nao" ||
    apresetarProva === "não" ||
    apresetarProva === "NAO" ||
    apresetarProva === "NÃO") &&
    (responderSN === "sim" || responderSN === "Sim" || responderSN === "SIM") &&
    (ajudarJulio === "sim" || ajudarJulio === "Sim" || ajudarJulio === "SIM") &&
    (impedirSN === "sim" || impedirSN === "Sim" || impedirSN === "SIM")
) {
    console.log("Você salvou o mundo, mas Júlio te achou uma pessoa muito cética.");
} else if (
    (oferecerCigarroSN === "nao" ||
    oferecerCigarroSN === "Nao" ||
    oferecerCigarroSN === "não" ||
    oferecerCigarroSN === "NAO" ||
    oferecerCigarroSN === "NÃO")  &&
    (apresetarProva === "nao" ||
    apresetarProva === "Nao" ||
    apresetarProva === "não" ||
    apresetarProva === "NAO" ||
    apresetarProva === "NÃO") &&
    (responderSN === "nao" ||
    responderSN === "Nao" ||
    responderSN === "não" ||
    responderSN === "NAO" ||
    responderSN === "NÃO") &&
    (ajudarJulio === "sim" || ajudarJulio === "Sim" || ajudarJulio === "SIM") &&
    (impedirSN === "sim" || impedirSN === "Sim" || impedirSN === "SIM")
) {
    console.log("O mundo foi salvo, mas Júlio acabou morrendo após tentar fugir do hospital e cair de 8 andares.")
} else if (
    (oferecerCigarroSN === "nao" ||
    oferecerCigarroSN === "Nao" ||
    oferecerCigarroSN === "não" ||
    oferecerCigarroSN === "NAO" ||
    oferecerCigarroSN === "NÃO")  &&
    (apresetarProva === "nao" ||
    apresetarProva === "Nao" ||
    apresetarProva === "não" ||
    apresetarProva === "NAO" ||
    apresetarProva === "NÃO") &&
    (responderSN === "nao" ||
    responderSN === "Nao" ||
    responderSN === "não" ||
    responderSN === "NAO" ||
    responderSN === "NÃO") &&
    (ajudarJulio === "nao" ||
    ajudarJulio === "Nao" ||
    ajudarJulio === "não" ||
    ajudarJulio === "NAO" ||
    ajudarJulio === "NÃO") 
) {
    console.log("Em 2078 poucas pessoas vivem na terra, as que ainda restam estão em comunidades muito isoladas.")

} else if (
    (oferecerCigarroSN === "sim" || oferecerCigarroSN === "Sim" || oferecerCigarroSN === "SIM")  &&
    (apresetarProva === "nao" ||
    apresetarProva === "Nao" ||
    apresetarProva === "não" ||
    apresetarProva === "NAO" ||
    apresetarProva === "NÃO") &&
    (responderSN === "nao" ||
    responderSN === "Nao" ||
    responderSN === "não" ||
    responderSN === "NAO" ||
    responderSN === "NÃO") &&
    (ajudarJulio === "nao" ||
    ajudarJulio === "Nao" ||
    ajudarJulio === "não" ||
    ajudarJulio === "NAO" ||
    ajudarJulio === "NÃO") 
) {
    console.log(`
     Em 2078 poucas pessoas vivem na terra, as que ainda restam estão em comunidades
     muito isoladas. Mas Júlio pelo menos fumou um cigarro`)

} else if (
    (oferecerCigarroSN === "sim" || oferecerCigarroSN === "Sim" || oferecerCigarroSN === "SIM")  &&
    (apresetarProva === "nao" ||
    apresetarProva === "Nao" ||
    apresetarProva === "não" ||
    apresetarProva === "NAO" ||
    apresetarProva === "NÃO") &&
    (responderSN === "sim" || responderSN === "Sim" || responderSN === "SIM") &&
    (ajudarJulio === "nao" ||
    ajudarJulio === "Nao" ||
    ajudarJulio === "não" ||
    ajudarJulio === "NAO" ||
    ajudarJulio === "NÃO") 
) {
    console.log(`O mundo chegou ao fim, mesmo a doutora sabendo quem era Júlio`);
}




