
let listaDeNumerosSorteados = [];
let nuu = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let maxTentativas = 3;
let botaoReiniciar = document.querySelector('.container__botao'); 
let listaNumerosTentados = [];

// Atualizar o valor máximo do campo de entrada
let inputField = document.querySelector('.container__input');
inputField.setAttribute('max', nuu);

function gerarNumeroAleatorio() {
    
     let numeroEscolhido = parseInt(Math.random() * nuu ) + 1;

        if(listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();

        } else {

            listaDeNumerosSorteados.push(numeroEscolhido);
            return numeroEscolhido;
        
        }
}
// retur vai fazer esse valor retornar e atribuir valor a variável geararNumeroAleatório


// se eu inverter a ordem pode dar erro, para gerar gerarNumeroAleatorio(); eu tenho que definir nuu primeiro 
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirMensagemInicial()

    
   
function verificarChute(){
        let chute = parseInt(document.querySelector('input').value);
        paragrafo = document.querySelector('p'); // Seleciona o parágrafo
        let tentativasFinais =  maxTentativas - tentativas;

             
        if(listaNumerosTentados .includes(chute)){
           
            exibirTextoNaTela('p', 'Tente outro número, essse já foi escolhido')
            return chute;

             } else {
                        
                    if(chute <= nuu){

                        if (chute === numeroSecreto) {
                                // Atualiza o parágrafo se o número estiver correto
                                    exibirTextoNaTela('p', '🎉 Parabéns! Você acertou o número!');
                                //paragrafo.innerHTML = '🎉 Parabéns! Você acertou o número!';
                                document.getElementById('reiniciar').removeAttribute('disabled');
                                botaoReiniciar.setAttribute('disabled', 'true'); 

                            } else if (tentativas < maxTentativas){
                                // Atualiza o parágrafo se o número estiver errado
                                if (chute < numeroSecreto ){
                                    exibirTextoNaTela('p', '❌ Tente um maior ! Faltam '+tentativasFinais+'');
                                // paragrafo.innerHTML = '❌ Tente um maior !';
                                }
                                    if (chute > numeroSecreto ){
                                    exibirTextoNaTela('p', '❌ Tente um menor ! Faltam '+tentativasFinais+'');
                                    //paragrafo.innerHTML = '❌ Tente um menor !';
                                }
                            
                            } else {
                                exibirTextoNaTela('p', '😞 Você perdeu! O número secreto era '+ numeroSecreto +'')
                            // paragrafo.innerHTML = `😞 Você perdeu! O número secreto era ${numeroSecreto}.`;
                                document.getElementById('reiniciar').removeAttribute('disabled');
                                botaoReiniciar.setAttribute('disabled', 'true'); 
                            }
                            tentativas++;
                        

                        } else {
                            exibirTextoNaTela('p', 'Por favor ! Insira um número entre 1 e '+nuu+'');
                        }
                   
            
                        listaNumerosTentados.push(chute);
        
      
        
                    }
        // quando vc quer executar a funçao so retornar o nome dela, nao é a mesma coisa que escreve-la  
        limparCampo();
    }

    
function limparCampo(){ 
    //let chute = parseInt(document.querySelector('input').value); nao prescisa let chute pois let para chute já foi guardado na memória anteriormente 
    chute = document.querySelector('input');
    chute.value = ''; 

}
        console.log(`Número Secreto: ${numeroSecreto}, Chute: ${chute}`); // Apenas para depuração

 function novoJogo(){

    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    document.querySelector('.container__botao').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', 'true')
    exibirMensagemInicial()
    listaNumerosTentados = [];
 }

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'joguinhu');
exibirTextoNaTela('p', 'Insira um número entre 1 e '+nuu+'');

}





