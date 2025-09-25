nota1 = document.getElementById("nota1")
nota2 = document.getElementById("nota2")
soma = document.getElementById("soma")

soma.addEventListener("click", notafinal)

function notafinal() {
    valor1 = parseFloat(nota1.value);
    valor2 = parseFloat(nota2.value);
    notatotal = valor1 + valor2;
    if (notatotal >= 60)
    alert(`Aprovado ${notatotal}`)
    else
    alert(`Reprovado! Faltou ${60-notatotal} pontos para ser aprovado`)
}
