
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var criaMoscaTempo = 1500

var dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')

if (dificuldade === 'normal'){
    //1500
    criaMoscaTempo = 1500
} else if (dificuldade === 'dificil'){
    //1000
    criaMoscaTempo = 1000
} else if (dificuldade === 'vidaBR')
    //750
    criaMoscaTempo = 750

// Monitora o tamanho da tela que esta o jogo para orientar as dimensoes ate aonde pode aparecer moscas.
function ajustaTamanhoPalcoJogo () {
     altura = window.innerHeight
     largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

//Controle de tempo do jogoo
var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro) //limpando o fluxo da funcao caso ganhe, senao, tanto o tempo quanto a criacao de moscas continua.
        clearInterval(criaMosca)  
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000 )

function posicaoRandomica() {


    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
         document.getElementById('mosquito').remove()

         if(vidas > 3){

             window.location.href = 'fim_de_jogo.html'

         } else{

              document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

         vidas++
         }
        
    }
   

    var posicaoX = Math.floor( Math.random() * largura) - 70
    var posicaoY = Math.floor(Math.random() * altura) - 70

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

//criar o elemento html 

    var mosquito = document.createElement('img')
    var moscaViva = 'imagens/mosca.png'
    mosquito.src = moscaViva
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    mosquito.onclick = function() {
        MosquitoMorto()
        this.remove()
    }

    document.body.appendChild(mosquito)

}

function MosquitoMorto(){
    var moscaMorta = 'imagens/mosca2.png'
    moscaViva = moscaMorta
}

// Randomiza o tamanho da mosca na tela
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) 

    switch(classe) {
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

// Randomiza a direcao que a mosca esta olhando (esquerda ou direita)
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2) 

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}