//arrays ou vetores
const bolsa = [
    'Notebook',
    'Moleton',
    'Escova de dentes',
    'Celular',
    'Carteira',
    'Carregador',
    'Mause',
]
//estrutura de repetição  // length é o tamanho da array
for (let i = 0; i < bolsa.length; i++){
    console.log(bolsa[i])
    //condicional
    if(bolsa[i]== 'Carteira')break // forma de quebrar o laço for ate encontrar o item desejado, carteira
} 