let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?")
}

if(nomeUsuário == null){  //anulado
    elemento.textContent = 'seja muito bem-vindo!';
}  else{
    elemento.textContent = nomeUsuário;
}


