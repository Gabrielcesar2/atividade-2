let sabor1 = document.querySelector("#sabor1")
let sabor2 = document.querySelector("#sabor2")
let sabor3 = document.querySelector("#sabor3")
let sabor4 = document.querySelector("#sabor4")
let refri = document.querySelector("#refri")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function exibirTexto (){
    let vlrRefri = 7 
    let vlrPizza = 48
    let calcRefri = vlrRefri * refri.value
    

    h3Resultado.innerHTML = 
    "Sabor 1: "+sabor1.value+"<br>"+
    "Sabor 2: "+sabor2.value+"<br>"+
    "Sabor 3: "+sabor3.value+"<br>"+
    "Sabor 4: "+sabor4.value+"<br>"+
    "Valor da Pizza: "+vlrPizza+"<br>"+
    "Valor do Refrigerante: "+calcRefri+"<br>";

}
btCalcular.onclick = function(){
    exibirTexto();
}