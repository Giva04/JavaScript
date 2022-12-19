// função construtora
class Jogador {
    constructor(nome,posicao,numGol){
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    }
        golsMarcados(){
            console.log(`O ${this.nome} já marcou ${this.numGol} gols em sua carreira`)
        }
      
    }
    const Neymar = new Jogador('Neymar','Atancante', 400)
    Neymar.golsMarcados()
    const Pelé =new Jogador('Pelé','Atacante',100 )
    Pelé.golsMarcados()
    
    console.log(typeof Jogador)
    // typeof ,mostra o tipo da class
