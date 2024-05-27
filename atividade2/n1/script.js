let vlrDolar = document.querySelector("#vlrDolar")
let btcalcular = document.querySelector("#btCalcular")
let h4Resultado = document.querySelector("#h4Resultado")

function calcular(){
    let vlr = Number(vlrDolar.value)
    let umPorcento = (1/100)
    let doisPorcento = (2/100)
    let cincoPorcento = (5/100)
    let dezPorcento = (10/100)

    // um porcento 
    let umPC = vlr + (vlr * umPorcento );

    // dois porcento 
    let doisPC = vlr + (vlr * doisPorcento);

    // cinco porcento 
    let cincoPC = vlr + (vlr * cincoPorcento)

    // dez porcento 
    let dezPC = vlr + (vlr * dezPorcento)
    
    h4Resultado.innerHTML = 
    "1 Porcento: "+umPC +"<br>"+
    "2 Porcento: "+doisPC +"<br>"+
    "5 Porcento: "+cincoPC + "<br>"+
    "10 Porcento: "+dezPC + "<br>"

}
btCalcular.onclick = function() {
    calcular();

}