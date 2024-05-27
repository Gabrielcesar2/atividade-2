let vlrPessoas = document.querySelector("#vlrPessoas")
let btCalcular = document.querySelector("#btCalcular")
let h3Resultado = document.querySelector("#h3Resultado")

function calcular(){
    let vlr = Number(vlrPessoas.value)
    let ovos = 2
    let queijo = 50

    let calcOvos = vlr * ovos

    let calcQueiojo = vlr * queijo

    h3Resultado.innerHTML = 
    "Quantia de Ovos: "+calcOvos+ "<br>"+ 
    "Quantia de Gramas do Queijo: "+calcQueiojo
}
btCalcular.onclick = function() {
    calcular();
}


