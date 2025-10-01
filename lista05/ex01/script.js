boy = document.getElementById("personagem");
paragrafo = document.getElementById("mensagem");

trocarPersonagem('pensativo', 'zzzzzzzzz!');

boy.addEventListener("mouseover", function () {trocarPersonagem('assustado', 'O que você quer?')});
boy.addEventListener("mouseout", function () {trocarPersonagem('pensativo', 'zzzzzzzz!')});
boy.addEventListener("click", pedirNome);

function trocarPersonagem(tipo, msg) {
    boy.src = `img/${tipo}.png`;
    paragrafo.innerHTML = msg;
}

function pedirNome() {
    nome = prompt("Qual é o seu nome?");
    
    if (!nome) {
        trocarPersonagem('nervoso', 'Não me faça perder o meu tempo');
        boy.classList.add('nervoso');
    } else {
        trocarPersonagem('alegre', `${nome}, seja bem-vindo!`);
        boy.classList.add('alegre');
    }
}
