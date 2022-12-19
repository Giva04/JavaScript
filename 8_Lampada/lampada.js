var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > - 1}//indexOf é uma funçao dentro do js , que procura uma string dentro de outra string


function Ligar(){
    if (!estaQuebrada()){//ponto de esclamação representa negativa
    lamp.src = 'ligada.svg'}
}
function Desligar(){
    if (!estaQuebrada()){
    lamp.src = 'desligada.svg'}
}
lamp.addEventListener('click', Quebrar)// addEventListener adiciona uma funcação direta no js
function Quebrar(){
    lamp.src = 'quebrada.svg'
}
