let i=0;
let j=0;
let k=0;
let n=0;
let total=0;
let main;
let drink;
let desert;
let nome;
let endereco;

function selecao1 (){
    if(true){
    document.getElementById("primeiro1").style.borderColor="green";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";
    //document.getElementsByClassName(".icone").style.backgroundColor="green";
    document.getElementById("icone").style.backgroundColor="green";
    document.getElementById("icone-2").style.backgroundColor="white";
    document.getElementById("icone-3").style.backgroundColor="white";
    document.getElementById("icone-4").style.backgroundColor="white";
    i=i+1;
    total=total+14.90;
    main="Frango Yin Yang";
    }
}
function selecao2 (){
    if(true){
    document.getElementById("Prato2").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";
    document.getElementById("icone-2").style.backgroundColor="green";
    document.getElementById("icone").style.backgroundColor="white";
    document.getElementById("icone-3").style.backgroundColor="white";
    document.getElementById("icone-4").style.backgroundColor="white";
    total=total+20.00;
    i=i+1;
    main="Carne de panela";
    }

}
function selecao3 (){
    if(true){
    document.getElementById("Prato3").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";

    document.getElementById("icone-2").style.backgroundColor="white";
    document.getElementById("icone").style.backgroundColor="white";
    document.getElementById("icone-3").style.backgroundColor="green";
    document.getElementById("icone-4").style.backgroundColor="white";
    total=total+25.90;
    i=i+1;
    main="strogonoff";
    }

}
function selecao4 (){
    if(true){
    document.getElementById("Prato4").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    i=i+1;

    document.getElementById("icone-2").style.backgroundColor="white";
    document.getElementById("icone").style.backgroundColor="white";
    document.getElementById("icone-3").style.backgroundColor="white";
    document.getElementById("icone-4").style.backgroundColor="green";
    total=total+9.90;
    main="Feijoada";
    }
}

function selecaobebiba1 (){
    if(true){
    document.getElementById("bebida1").style.borderColor="green";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="white";


    document.getElementById("icone-5").style.backgroundColor="green";
    document.getElementById("icone-6").style.backgroundColor="white";
    document.getElementById("icone-7").style.backgroundColor="white";
    document.getElementById("icone-8").style.backgroundColor="white";
    total=total+4.90;
    k=k+1;
    drink="Coca-cola";
    }
}
function selecaobebiba2 (){
    if(true){
    document.getElementById("bebida2").style.borderColor="green";
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="white";

    document.getElementById("icone-5").style.backgroundColor="white";
    document.getElementById("icone-6").style.backgroundColor="green";
    document.getElementById("icone-7").style.backgroundColor="white";
    document.getElementById("icone-8").style.backgroundColor="white";
    total=total+3.90;
    k=k+1;
    drink="Guaraná";
}
}
function selecaobebiba3 (){
    if(true){
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="green";
    document.getElementById("bebida4").style.borderColor="white";

    document.getElementById("icone-5").style.backgroundColor="white";
    document.getElementById("icone-6").style.backgroundColor="white";
    document.getElementById("icone-7").style.backgroundColor="green";
    document.getElementById("icone-8").style.backgroundColor="white";
    total=total+5.90;
    k=k+1;
    drink="Fanta";
}
}
function selecaobebiba4 (){
    if(true){
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="green";

    document.getElementById("icone-5").style.backgroundColor="white";
    document.getElementById("icone-6").style.backgroundColor="white";
    document.getElementById("icone-7").style.backgroundColor="white";
    document.getElementById("icone-8").style.backgroundColor="green";
    total=total+2.90;
    k=k+1;
    drink="dolly";
}
}

function selecaosobremesa1 (){
    if(true){
    document.getElementById("sobremesa1").style.borderColor="green";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="white";

 
    document.getElementById("icone-9").style.backgroundColor="green";
    document.getElementById("icone-10").style.backgroundColor="white";
    document.getElementById("icone-11").style.backgroundColor="white";
    document.getElementById("icone-12").style.backgroundColor="white";
    total=total+7.90;
    j=j+1;
    desert="pudim";
    }
}

function selecaosobremesa2 (){
    if(true){
    document.getElementById("sobremesa2").style.borderColor="green";
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="white";

    document.getElementById("icone-9").style.backgroundColor="white";
    document.getElementById("icone-10").style.backgroundColor="green";
    document.getElementById("icone-11").style.backgroundColor="white";
    document.getElementById("icone-12").style.backgroundColor="white";
    total=total+10.90;
    j=j+1;
    desert="torta";
    }
}
function selecaosobremesa3 (){
    if(true){
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="green";
    document.getElementById("sobremesa4").style.borderColor="white";

    document.getElementById("icone-9").style.backgroundColor="white";
    document.getElementById("icone-10").style.backgroundColor="white";
    document.getElementById("icone-11").style.backgroundColor="green";
    document.getElementById("icone-12").style.backgroundColor="white";
    total=total+7.90;
    j=j+1;
    desert="gelatina";
    }
}

function selecaosobremesa4 (){
    if(true){
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="green";

    document.getElementById("icone-9").style.backgroundColor="white";
    document.getElementById("icone-10").style.backgroundColor="white";
    document.getElementById("icone-11").style.backgroundColor="white";
    document.getElementById("icone-12").style.backgroundColor="green";
    total=total+10.90;
    j=j+1;
    desert="sorvete";
    }
}

function alterarBotao (){
    if(true){
    const elemento=document.querySelector(".texto-rodape");
    elemento.innerHTML = "Fechar pedido";
    const cor= document.querySelector(".centro-rodape");
    cor.style.backgroundColor="#32B72F";
    n=n+1;
    
    }
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
    if(n==1){
        
        nome=(prompt("Digite seu nome"));
        endereco=(prompt("Digite seu endereço"));
        mensagem="Olá, gostaria de fazer o pedido:\n" +"\n-Prato: "+ main+ "\n-Bebida: "+drink+"\n-Sobremesa: "+desert+ "\nTotal: R$ "+total.toFixed(2)+"\n\nNome: "+nome+"\nEndereço: "+endereco;
        
        texto=window.encodeURI(mensagem);

    //window.open("https://wa.me/48984733304?text=texto");
    window.open("https://api.whatsapp.com/send?phone=" + 5513997513335 + "&text=" + texto, "_blank");
    }
}

window.addEventListener("load",contador);
window.addEventListener("load",eventos);

