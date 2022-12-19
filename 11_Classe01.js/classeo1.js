// let jogador = {
//     nome: 'Giva',
//     posicao:'Atacante',
//     numGols:400
// }
 //classe jogadores
const Jogador = function(nome,posicao,numGols){
    Nome =nome,
    Posicao = posicao,
    Gols = numGols

this.getName =function(){
    return Nome
    }
this.getPos = function(){
    return Posicao
    }
this.getGols = function(){
    return numGols
}
}
 //classes com novos jogadores
 const Giva = new Jogador("Giva","Atacante",400)
 console.log(Giva.getName())
 const Fenomeno =new Jogador("Fenomeno","Atacante",500)
 console.log(Fenomeno.getGols())