let vlr1 = document.querySelector("#vlr1")
let vlr2 = document.querySelector("#vlr2")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function calcular (){
let vlrUm = Number(vlr1.value)
let vlrDois = Number (vlr2.value)

let soma = vlrUm + vlrDois
let menos = vlrUm - vlrDois 
let vezes = vlrUm * vlrDois
let divisao = vlrUm / vlrDois 

h3Resultado.innerHTML =
"Soma: "+soma+"<br>"+
"Subtra&ccedil;&atilde;o: "+menos+"<br>"+
"Multiplica&ccedil;&atilde;o: "+vezes+"<br>"+
"Divis&atilde;o: "+divisao+"<br>";
}
btCalcular.onclick = function() {
    calcular();
}
