import bcrypt from "https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm";

window.addEventListener("DOMContentLoaded", () => {

    const senha = document.getElementById("senhaUser")
    const user = document.getElementById("user")

    const getSenhas = async () => {
        const url = ("https://gustavoocastilho7.github.io/IFTM/Projeto-Front-End-Web-Javascript/ProvaAJAX/senhasCriptografadas.json");
        try {
            const response = await fetch(url);
            const dados = await response.json();
            return dados;
        }
        catch (error) {
            console.log(error.message)
            return [];
        }
    }

    const verificar = document.getElementById("btnValidar").addEventListener("click", async () => {

        const senhaUser = senha.value;
        const usuario = user.value;

        const dados = await getSenhas();

        dados.forEach(item => {
            if (item.username === usuario) {
                const senhaJSON = item.password;
                if (bcrypt.compareSync(senhaUser, senhaJSON)) {
                    alert("User válido");
                } else {
                    alert("User inválido");
                }
            }
        });

    })

})

