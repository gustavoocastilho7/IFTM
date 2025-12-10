window.addEventListener("load", function () {
    document.getElementById("btnEntrar").addEventListener("click", verificarLogin);

    function verificarLogin() {
        var user = document.getElementById("txtUser").value;
        var senha = document.getElementById("txtPwd").value;
        var vetUsuarios = JSON.parse(localStorage.getItem("vetUsuarios"));

        if (user === "" || senha === "") {
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");
        } else {
            if (!vetUsuarios) {
                alertWifi("Ainda não há nenhum usuário cadastrado", false, 0, "", 30, "");
            } else {
                var achou = false;
                var usuarioLogado = null; 

                for (var i = 0; i < vetUsuarios.length; i++) {
                    if (vetUsuarios[i].nome === user && vetUsuarios[i].senha === senha) {
                        achou = true;
                        usuarioLogado = vetUsuarios[i]; 
                        break;
                    }
                }

                if (achou) {
                    localStorage.setItem("usuarioLogadoNome", usuarioLogado.nome);
                    alertWifi("Usuário encontrado!", false, 0, "", 30, "");                    
                    window.location.href = "jogo.html";
                } else {
                    alertWifi("Usuário não existe!", false, 0, "", 30, "");
                }
            }
        }
    }
});