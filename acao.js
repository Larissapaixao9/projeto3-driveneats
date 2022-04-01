let cont=0;
let main_prato;
function selecao1 (){
    document.getElementById("primeiro1").style.borderColor="green";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";
    let cont=cont+1;
    main_prato=opcao1;
}
function selecao2 (){
    document.getElementById("Prato2").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";
    cont+=1;
    main_prato=opcao2;
}
function selecao3 (){
    document.getElementById("Prato3").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato4").style.borderColor="white";
    cont+=1;
    main_prato=opcao3;
}
function selecao4 (){
    document.getElementById("Prato4").style.borderColor="green";
    document.getElementById("primeiro1").style.borderColor="white";
    document.getElementById("Prato2").style.borderColor="white";
    document.getElementById("Prato3").style.borderColor="white";
    cont+=1;
    main_prato=opcao4;
}

function selecaobebiba1 (){
    document.getElementById("bebida1").style.borderColor="green";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="white";

}
function selecaobebiba2 (){
    document.getElementById("bebida2").style.borderColor="green";
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="white";
}
function selecaobebiba3 (){
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="green";
    document.getElementById("bebida4").style.borderColor="white";
}
function selecaobebiba4 (){
    document.getElementById("bebida1").style.borderColor="white";
    document.getElementById("bebida2").style.borderColor="white";
    document.getElementById("bebida3").style.borderColor="white";
    document.getElementById("bebida4").style.borderColor="green";
}

function selecaosobremesa1 (){
    document.getElementById("sobremesa1").style.borderColor="green";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="white";
}
function selecaosobremesa2 (){
    document.getElementById("sobremesa2").style.borderColor="green";
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="white";
}
function selecaosobremesa3 (){
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="green";
    document.getElementById("sobremesa4").style.borderColor="white";
}
function selecaosobremesa4 (){
    document.getElementById("sobremesa1").style.borderColor="white";
    document.getElementById("sobremesa2").style.borderColor="white";
    document.getElementById("sobremesa3").style.borderColor="white";
    document.getElementById("sobremesa4").style.borderColor="green";
}

    
    if(cont>=1){
    const elemento=document.querySelector(".texto-rodape");
    elemento.innerHTML = "Novo texto";
    }
