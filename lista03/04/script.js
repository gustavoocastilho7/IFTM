nota1 = document.getElementById("nota1")
nota2 = document.getElementById("nota2")
soma = document.getElementById("soma")

soma.addEventListener("click", notafinal)

function notafinal() {
    nota1 = parseFloat(nota1.value);
    nota2 = parseFloat(nota2.value);
    if (nota1 + nota2 >= 60)
    alert("Aprovado")
    else
    alert("Reprovado!")
}
