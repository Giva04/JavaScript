let jogador = {
    nome: 'Giva Gomez',
    idade: 33,
    numGol:100,
    Gol(g=0){
        console.log('Renato fez gol!')
        this.numGol += g
        //this é a forma de acessar o objeto dentro do objeto
    }
}

// console.log =(jogador.nome)
// console.log(jogador.numGol)
// jogador.Gol()
// // console.log(jogador.numGol)

jogador.posicao = 'Atacante'
console.log(jogador)

delete jogador.idade
console.log(jogador)