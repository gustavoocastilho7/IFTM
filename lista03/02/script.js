btnExibir = document.getElementById("btnExibir")
txtValue = document.getElementById("txtValue")

btnExibir.addEventListener("click", txtExibir)

function txtExibir() {
    alert(txtValue.value.toUpperCase());
}