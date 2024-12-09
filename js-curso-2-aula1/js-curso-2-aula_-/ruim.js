let titulo = document.querySelector('h1');
titulo.innerHTML = ('joguinho');

alert("bem vindo ao jogo ")

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = ('Insira um número entre 1 e 10')

////////////////////////////////////////

let nuu = 10;
let numeroSecreto= gerarNumeroAleatorio();


function gerarNumeroAleatorio(params) {
    return parseInt(Math.random() * nuu ) + 1;
}


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'joguinhu');
exibirTextoNaTela('Insira um número entre 1 e 10');



function verificarChute(){
    console.log(numeroSecreto)
}



let nuu = 2;
let numeroSecreto = gerarNumeroAleatorio();
let paragrafo;
let tentativas = 1;
let maxTentativas = 4;


while(tentativas <= maxTentativas){

// se eu inverter a ordem pode dar erro, para gerar gerarNumeroAleatorio(); eu tenho que definir nuu primeiro 
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
}
exibirTextoNaTela('h1', 'joguinhu');
exibirTextoNaTela('p', 'Insira um número entre 1 e '+nuu+'');



function gerarNumeroAleatorio() {
    return parseInt(Math.random() * nuu ) + 1;
}
// retur vai fazer esse valor retornar e atribuir valor a variável geararNumeroAleatório

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    paragrafo = document.querySelector('p'); // Seleciona o parágrafo
    if (chute === numeroSecreto) {
        
        // Atualiza o parágrafo se o número estiver correto
        paragrafo.innerHTML = '🎉 Parabéns! Você acertou o número!';
    
    } else {
        // Atualiza o parágrafo se o número estiver errado
        paragrafo.innerHTML = '❌ Tente novamente!';

        tentativas++;
    }
    console.log(`Número Secreto: ${numeroSecreto}, Chute: ${chute}`); // Apenas para depuração
}

function faltamTentativas(){
    let tentativasFinais = maxTentativas -- tentativas
}
    


