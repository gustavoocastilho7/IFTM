window.addEventListener("load", function () {
    document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);

    function cadastrarUsuario() {
        var user = document.getElementById("txtUser").value;
        var senha = document.getElementById("txtPwd").value;
        var checkSenha = document.getElementById("txtCheckPwd").value;
        var nickname = document.getElementById("txtNick").value;

        if (user === "" || senha === "" || checkSenha === "" || nickname === "") {
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");
        } else {
            if (senha === checkSenha) {

                // Expressão regular para validar o nickname (máximo 15 caracteres, letras maiúsculas, minúsculas e caracteres especiais)
                var regexNickname = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{1,15}$/;

                if (!regexNickname.test(nickname)) {
                    alertWifi("Nickname inválido. Verifique as restrições.", false, 0, "", 30, "");
                    return;
                }

                var vetUsuarios = JSON.parse(localStorage.getItem("vetUsuarios")) || [];
                var usuariosNovo = { nome: user, senha: senha, nickname: nickname };
                vetUsuarios.push(usuariosNovo);
                localStorage.setItem("vetUsuarios", JSON.stringify(vetUsuarios));

                alertWifi("Cadastro realizado com sucesso!", false, 0, "", 30, "");
            } else {
                alertWifi("As senhas não coincidem. Tente novamente.", false, 0, "", 30, "");
            }
        }
    }
});