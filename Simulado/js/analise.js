window.addEventListener("DOMContentLoaded", function (){

    let infoLocalStorage = localStorage.getItem("info")
    document.getElementById("txtIndex").innerHTML = infoLocalStorage

    document.getElementById("btnAnalisar").addEventListener("click", function(){ 
    let txtAnalise;
    let vetPalavras;

    if(document.getElementById("btnOpcoes").selectedIndex == 0)
        txtAnalise = infoLocalStorage
    else
        txtAnalise = document.getElementById("txtInfo").ariaValueMax;

    vetPalavras = txtAnalise.split(" ");

    document.getElementById("txtPalavras").innerHTML = vetPalavras.length;

    let palavraM = [];
    let letra = 'M';

    for(let i=0; i<vetPalavras.length; i++) {
        if(vetPalavras[i].charAt(0).toUpperCase() == letra.toUpperCase())
            palavraM.push(vetPalavras[i]);
    }
    document.getElementById("txtPalavraM").value = palavraM.join(' ');

    document.getElementById("primeiraPalavra").value = vetPalavras[0];
    document.getElementById("segundaPalavra").value = vetPalavras[1];
    document.getElementById("ultimaPalavra").value = vetPalavras[vetPalavras.length-1];

    document.getElementById("btnPapai").addEventListener("click", function (){
        window.open("natal.html", "_self")
    });

    })
   

})