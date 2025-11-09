window.addEventListener("DOMContentLoaded", function(){

    const txtInicial = document.getElementById("txtInicial");
    const btnEnviar = document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", function (){
        localStorage.setItem("info", txtInicial.value);
        window.location.href = "analise.html";
    })
})