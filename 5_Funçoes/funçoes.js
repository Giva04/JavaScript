//funcoes
function presente(dinheiro,valor){
    if (dinheiro < valor){
        return 'Não vai dar para comprar...'
    }else{
        return 'Você realmente precisa fazer essa compra?'
    }
}
let x = presente (150,90)
console.log (x)
