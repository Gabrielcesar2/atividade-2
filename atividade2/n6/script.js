let ipMedia = document.querySelector("#ipMedia");
let btVerificar = document.querySelector("#btVerificar");

function verificarMedia(){
let media = Number(ipMedia.value);
    // desvio condicional simples 
if(media >= 6.0){
    alert("aluno aprovado!");
}
else if(media >= 4.0){
    alert("precisa fazer prova substitutiva!");
}
else{
    alert("aluno reprovado!")
}
}
btVerificar.onclick = function(){
    verificarMedia();

}