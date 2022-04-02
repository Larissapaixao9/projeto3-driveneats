let i=0;
let j=0;
let k=0;
let total=0;
let main;
let drink;
let desert;

function selecao1 (){
    if(true){
    document.getElementById("primeiro1").style.borderColor="green";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";
    i=i+1;
    main="primeiro1";
    }
}
function selecao2 (){
    if(true){
    document.getElementById("Prato2").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";
    i=i+1;
    main="pPrato2";
    }

}
function selecao3 (){
    if(true){
    document.getElementById("Prato3").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";
    i=i+1;
    main="Prato3";
    }

}
function selecao4 (){
    if(true){
    document.getElementById("Prato4").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    i=i+1;
    main="Prato4";
    }
}

function selecaobebiba1 (){
    if(true){
    document.getElementById("bebida1").style.borderColor="green";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="white";
    k=k+1;
    drink="bebida1";
    }
}
function selecaobebiba2 (){
    if(true){
    document.getElementById("bebida2").style.borderColor="green";
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="white";
    k=k+1;
    drink="bebida2";
}
}
function selecaobebiba3 (){
    if(true){
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="green";
    document.getElementById("bebida4").style.borderColor="white";
    k=k+1;
    drink="bebida3";
}
}
function selecaobebiba4 (){
    if(true){
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="green";
    k=k+1;
    drink="bebida4";
}
}

function selecaosobremesa1 (){
    if(true){
    document.getElementById("sobremesa1").style.borderColor="green";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="white";
    j=j+1;
    desert="sobremesa1";
    }
}
function selecaosobremesa2 (){
    if(true){
    document.getElementById("sobremesa2").style.borderColor="green";
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="white";
    j=j+1;
    desert="sobremesa2";
    }
}
function selecaosobremesa3 (){
    if(true){
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="green";
    document.getElementById("sobremesa4").style.borderColor="white";
    j=j+1;
    desert="sobremesa3";
    }
}
function selecaosobremesa4 (){
    if(true){
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="green";
    j=j+1;
    desert="sobremesa4";
    }
}


function alterarBotao (){
    const elemento=document.querySelector(".texto-rodape");
    elemento.innerHTML = "Fechar pedido";
    const cor= document.querySelector(".centro-rodape");
    cor.style.backgroundColor="#32B72F";
    
}

function eventos(){
   
    document.getElementById("primeiro1").addEventListener("click",contador);
    document.getElementById("Prato2").addEventListener("click",contador);
    document.getElementById("Prato3").addEventListener("click",contador);
    document.getElementById("Prato4").addEventListener("click",contador);
    document.getElementById("bebida1").addEventListener("click",contador);
    document.getElementById("bebida2").addEventListener("click",contador);
    document.getElementById("bebida3").addEventListener("click",contador);
    document.getElementById("bebida4").addEventListener("click",contador);
    document.getElementById("bebida4").addEventListener("click",contador);
    document.getElementById("sobremesa1").addEventListener("click",contador);
    document.getElementById("sobremesa2").addEventListener("click",contador);
    document.getElementById("sobremesa3").addEventListener("click",contador);
    document.getElementById("sobremesa4").addEventListener("click",contador);
}
function contador(){

        if(i>=1 && k>=1 && j>=1){
            alterarBotao();
        }
}

function fecharPedido (){
    let mensagem;
    
    mensagem="Olá, gostaria de fazer o pedido: \n-Prato: Frango Yin Yang \n -Bebida: coca \n - Sobremesa: Pudim \n Total: R$ 27.70"
    
    texto=window.encodeURI(mensagem);

   //window.open("https://wa.me/13999999999?text=texto");
   window.open("https://api.whatsapp.com/send?phone=" + 13999999999 + "&text=" + texto, "_blank");

}

window.addEventListener("load",contador);
window.addEventListener("load",eventos);

