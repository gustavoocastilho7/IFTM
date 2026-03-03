import users from "./users.js";

window.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("op");
    
    document.getElementById("btnClique").addEventListener("click", function () {

        const opcao = select.value;
        console.clear()

        switch (opcao) {

            //1
            case "1":
                console.log("1)")
                 const maioresIdade = users.filter(user => user.idade >= 18).forEach(user =>
                    console.log(`${user.nome} tem ${user.idade} anos`));
                break;
            //2
            case "2":
                console.log("2)")
                const homens = users.filter(user => user.sexo === "M")
                console.log(homens);
                break;
            //3
            case "3":

                console.log("3)")
                const maior = users.reduce((maior, atual) => {
                    return atual.salario > maior.salario ? atual : maior;
                });
                console.log(maior);

                break;
            //4
            case "4":
                console.log("4)")
                const mulherMaior = users.some(users =>
                    users.sexo == "F" && users.salario > 5000)
                console.log(mulherMaior);

                break;

            //5
            case "5":
                console.log("5)")
                const soma = users.reduce((total, user) => {
                    return total + user.salario;
                }, 0);
                const media = soma / users.length;
                console.log(media);

                break;
        }

    });
});

