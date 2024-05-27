let nome1 = document.querySelector("#nome1")
let nome2  = document.querySelector("#nome2")
let nome3 = document.querySelector("#nome3")
let data1 = document.querySelector("#data1")
let data2  = document.querySelector("#data2")
let data3 = document.querySelector("#data3")
let btResultado = document.querySelector("#btResultado")
let h3Resultado = document.querySelector("#h3Resultado")

function exibirResutado (){
let nm1 = nome1.value
let dt1 = (data1.value)
let idade1 = new Date().getFullYear() - dt1

let nm2 = nome2.value
let dt2 = (data2.value)
let idade2 = new Date().getFullYear() - dt2

let nm3 = nome3.value
let dt3 = (data3.value)
let idade3 = new Date().getFullYear() - dt3

let pessoas = [
    { nome: nm1, idade: idade1 },
    { nome: nm2, idade: idade2 },
    { nome: nm3, idade: idade3 }
];

pessoas.sort((a, b) => b.idade - a.idade);

let resultado = "";
for (let i = 0; i < pessoas.length; i++) {
    resultado += `Pessoa ${i + 1} mais velha: ${pessoas[i].nome} - ${pessoas[i].idade} anos<br>`;
}

document.getElementById("h3Resultado").innerHTML = h3Resultado;
}
btResultado.onclick = function(){
    exibirResutado();
}