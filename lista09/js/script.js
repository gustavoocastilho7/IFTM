window.addEventListener("DOMContentLoaded", function(){

    let nascimento = document.getElementById("txtNascimento");
    document.getElementById("btnNascimento").addEventListener("click", function (){
        let padrao = /^\d{2}[/]\d{2}[/]\d{4}$/

        if(padrao.test(nascimento.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let cpf = document.getElementById("txtCPF");
    document.getElementById("btnCPF").addEventListener("click", function (){
        let padrao = /^\d{3}[.]\d{3}[.]\d{3}[-]\d{2}$/

        if(padrao.test(cpf.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let matricula = document.getElementById("txtMatricula");
    document.getElementById("btnMatricula").addEventListener("click", function (){
        let padrao = /^(IFTM|iftm)[-]\d{3}[/]\d{3}[-]\w{2}$/

        if(padrao.test(matricula.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let disciplina1 = document.getElementById("txtDisciplina1");
    document.getElementById("btnDisciplina1").addEventListener("click", function (){
        let padrao = /^(M|m)(T|t)[-]\d{2}[.]\d{3}[-](I|i)(F|f)(T|t)(M|m)$/

        if(padrao.test(disciplina1.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let disciplina2 = document.getElementById("txtDisciplina2");
    document.getElementById("btnDisciplina2").addEventListener("click", function (){
        let padrao = /^(MT)[-]\d{2}[.]\d{3}[-](I|i)(F|f)(T|t)(M|m)$/

        if(padrao.test(disciplina2.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let disciplina3 = document.getElementById("txtDisciplina3");
    document.getElementById("btnDisciplina3").addEventListener("click", function (){
        let padrao = /^(M|m)[ ]?(T|t)[-]\d{2}[.]\d{3}[-](I|i)[ ]?(F|f)[ ]?(T|t)[ ]?(M|m)$/

        if(padrao.test(disciplina3.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let disciplina4 = document.getElementById("txtDisciplina4");
    document.getElementById("btnDisciplina4").addEventListener("click", function (){
        let padrao = /^(M|m)\s?(T|t)[-]\d{2}[.]\d{3}[-](I|i)\s?(F|f)\s?(T|t)\s?(M|m) (Uberlândia Centro|Uberlândia)$/

        if(padrao.test(disciplina4.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let nome = document.getElementById("txtNome");
    document.getElementById("btnNome").addEventListener("click", function (){
        let padrao = /^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)$/

        if(padrao.test(nome.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let telefone1 = document.getElementById("txtTelefone1");
    document.getElementById("btnTelefone1").addEventListener("click", function (){
        let padrao = /^[+]\d{2}[(]\d{2}[)]\d{5}[-]\d{4}$/

        if(padrao.test(telefone1.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let telefone2 = document.getElementById("txtTelefone2");
    document.getElementById("btnTelefone2").addEventListener("click", function (){
        let padrao = /^[(]\d{2,3}[)]\d{5}[-]\d{4}$/

        if(padrao.test(telefone2.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let altura = document.getElementById("txtAltura");
    document.getElementById("btnAltura").addEventListener("click", function () {
        let padrao = /^(1[,|.][3-9]\d?|2[,|.][0-5]\d)$/;

        if(padrao.test(altura.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let fatura = document.getElementById("txtFatura");
    document.getElementById("btnFatura").addEventListener("click", function () {
        let padrao = /^R\$(?:0|[1-9]\d{0,2}(?:\.\d{3}){0,3}),\d{1,2}$/;

        if(padrao.test(fatura.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let cronometro = document.getElementById("txtCronometro");
    document.getElementById("btnCronometro").addEventListener("click", function () {
        let padrao = /^([01][0-9]|[2][0-3])[:][0-5][0-9][:][0-5][0-9][:][0-9][0-9]$/;

        if(padrao.test(cronometro.value))
        alert("Válido")
        else
        alert("Inválido")
    })

    let senha = document.getElementById("txtSenha");
    document.getElementById("btnSenha").addEventListener("click", function () {
        let padrao = /^[A-Za-z0-9._-]{5,}&[A-Pa-p]+[.][aeiou]+[.]([A-Za-z0-5]+)?[-][^0-9]+[,][^A-Za-z0-9]{2}[^ab01]+$/;

        if(padrao.test(senha.value))
        alert("Válido")
        else
        alert("Inválido")
    })
})
