loginInput = document.getElementById("login");
senhaInput = document.getElementById("senha");
confirmarSenhaInput = document.getElementById("confirmarSenha");
btnEntrar = document.getElementById("btnEntrar");
btnLimpar = document.getElementById("btnLimpar");

btnEntrar.addEventListener("click", validarFormulario);
btnLimpar.addEventListener("click", limparCampos);

function validarFormulario() {
    if (loginInput.value.trim() === "") {
        alert("O campo Login não foi preenchido!"); 
        return;
    }

    if (senhaInput.value !== confirmarSenhaInput.value) {
        alert("As senhas digitadas não são iguais!"); 
        senhaInput.value = "";
        confirmarSenhaInput.value = "";
        return; 
    }


    alert("Todos os campos foram digitados corretamente!");
}

function limparCampos() {
    loginInput.value = "";
    senhaInput.value = "";
    confirmarSenhaInput.value = "";
}