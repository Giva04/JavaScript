function Tabuada(){ //atribuindo a função da tabulada
    var num= window.document.getElementById('num')
    var end= document.getElementById('end')//podemos usar window.document ou somente document
    if (num.value.length == 0 || end.value.length == 0 ){
        window.alert('[ERRO] Confira os seus dados!')
    }else{

    
    // aviso de erro if = se algo não estiver else=se não roda normal
    var n = Number(num.value) //variavel que multiplica
    var e = Number(end.value)   // variavel a ser multiplicada
    var x = 0 //variavel que inicia a multiplicação 0x2,1x2,2x2,3x2...
    var r ='' //resultado
    var res = window.document.getElementById('resposta')
    res.innerHTML = `A tabuada do  ${n} é:<br>`//valor do input(num)
   do{ //extrutura do dowhile
        r = n*x
        res.innerHTML +=`${x} X ${n} = ${r}  <br>`//valores da resposta+== adicione novos  itens 
        x++
   }while(x <= e)

  }   
}