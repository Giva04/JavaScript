const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const chegada = "25 Dec 2022"//constante para inicio da contagem

function countDown(){ //função countDown

const dataChega = new Date(chegada)
const hoje = new Date()

const segTotal =(dataChega - hoje)/1000;//começa pelos segundos


const finalDias = Math.floor(segTotal /60 / 60 / 24);//math converte o ultimo menor numero em nuemro inteiro
const finalHoras = Math.floor(segTotal / 60 / 60 ) % 24; // % para pegar o resto que não contabilizou nos dias 
const finalMinutos = Math.floor(segTotal / 60 ) % 60;
const finalSegundos = Math.floor(segTotal) % 60 ;

dia.innerHTML = finalDias // para chamar html
hora.innerHTML = formatoTempo(finalHoras)
minuto.innerHTML = formatoTempo(finalMinutos)
segundo.innerHTML = formatoTempo(finalSegundos)

}
function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` :tempo;
}//$ para concatenar e tirar o da frene

//chamando a função para executar
countDown();
setInterval(countDown, 1000)