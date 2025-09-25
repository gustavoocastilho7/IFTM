txtValor1 = document.getElementById("valor1");
txtValor2 = document.getElementById("valor2");
btnSoma = document.getElementById("btnSoma");
btnSubtracao = document.getElementById("btnSubtracao");
btnMultiplicacao = document.getElementById("btnMultiplicacao");
btnDivisao = document.getElementById("btnDivisao");
resultado = document.getElementById("resultado");

btnSoma.addEventListener("click", soma);
btnSubtracao.addEventListener("click", subtracao);
btnMultiplicacao.addEventListener("click", multiplicacao);
btnDivisao.addEventListener("click", divisao);

function soma() {
    valor1 = parseFloat(txtValor1.value);
    valor2 = parseFloat(txtValor2.value);
    if (isNaN(valor1) || isNaN(valor2))
        alert("Informe apenas números!")
    else
        total = valor1 + valor2;
    resultado.value = total;
}

function subtracao() {
    valor1 = parseFloat(txtValor1.value);
    valor2 = parseFloat(txtValor2.value);

    if (isNaN(valor1) || isNaN(valor2))
        alert("Informe apenas números!")
    else
        total = valor1 - valor2;
    resultado.value = total;
}

function multiplicacao() {
    valor1 = parseFloat(txtValor1.value);
    valor2 = parseFloat(txtValor2.value);

    if (isNaN(valor1) || isNaN(valor2))
        alert("Informe apenas números!")
    else
        total = valor1 * valor2;
    resultado.value = total;
}

function divisao() {
    const valor1 = parseFloat(txtValor1.value);
    const valor2 = parseFloat(txtValor2.value);

    if (isNaN(valor1) || isNaN(valor2))
        alert("Informe apenas números!")
    else
        total = valor1 / valor2;
    resultado.value = total;
}