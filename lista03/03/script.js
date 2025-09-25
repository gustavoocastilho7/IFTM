txtValor = document.getElementById("txtValor");
btnDobrar = document.getElementById("btnDobrar");
txtResultado = document.getElementById("txtResultado")

btnDobrar.addEventListener("click", dobrarValor);

function dobrarValor() {
    if(txtValor.value.trim() == "")
    alert("Digite um valor!")
    else if(isNaN(txtValor.value))
    alert("Informe apenas numeros!")
    else
    txtResultado.value = txtValor.value * 2;
}