const tabuleiroMemoria = document.getElementById('tabuleiro-memoria');
const displayTempo = document.getElementById('display-tempo');
const displayNome = document.getElementById('display-nome');
const inputNome = document.getElementById('nome-usuario');
const selectDificuldade = document.getElementById('nivel-dificuldade');
const mensagemStatus = document.getElementById('mensagem-status');
const btnIniciar = document.getElementById('btn-iniciar');
const btnPausar = document.getElementById('btn-pausar');
const btnParar = document.getElementById('btn-parar');

let cartaVirada = false;
let bloqueioTabuleiro = false;
let primeiraCarta, segundaCarta;
let paresEncontrados = 0;
let totalPares = 0;

let intervaloTempo;
let tempoRestante;
let estaPausado = false;
let jogoEmAndamento = false;

const CONFIG_DIFICULDADE = {
    'facil': { tempoLimite: 90, cartas: 12, classesGrid: 'facil' },
    'medio': { tempoLimite: 90, cartas: 16, classesGrid: 'medio' },
    'dificil': { tempoLimite: 120, cartas: 24, classesGrid: 'dificil' }
};

var usuarios = JSON.parse(localStorage.getItem("vetUsuarios"));

if (usuarios && usuarios.length > 0 && usuarios[0] && usuarios[0].nickname) {
    var nickname = usuarios[0].nickname;

    document.getElementById("nomeJogador").textContent = nickname + "!";
} 

const nomesImagens = [
    'img/carta1.png', 
    'img/carta2.png',
    'img/carta3.png',
    'img/carta4.png',
    'img/carta5.png',
    'img/carta6.png',
    'img/carta7.png',
    'img/carta8.png',
    'img/carta9.png',
    'img/carta10.png',
    'img/carta11.png',
    'img/carta12.png'
];

function iniciarJogo() {
    pararTimer();
    tabuleiroMemoria.innerHTML = '';

    const nivel = selectDificuldade.value;
    const config = CONFIG_DIFICULDADE[nivel];
    
    totalPares = config.cartas / 2;
    tempoRestante = config.tempoLimite;

    tabuleiroMemoria.className = 'tabuleiro-memoria ' + config.classesGrid;

    resetarTabuleiro();
    paresEncontrados = 0;
    estaPausado = false;
    jogoEmAndamento = true;

    embaralharEGerarCartas(config.cartas);

    iniciarTimer();
    atualizarControles(false, true, true); 
    
    mensagemStatus.textContent = `Jogo Iniciado! Nível: ${nivel.toUpperCase()}. Encontre ${totalPares} pares.`;
}

function pausarJogo() {
    if (!jogoEmAndamento) return;

    if (estaPausado) {
        estaPausado = false;
        btnPausar.textContent = 'Pausar';
        iniciarTimer();
        bloqueioTabuleiro = false;
        mensagemStatus.textContent = "Jogo despausado. Continue a busca!";
    } else {
        estaPausado = true;
        btnPausar.textContent = 'Continuar';
        pararTimer();
        bloqueioTabuleiro = true;
        mensagemStatus.textContent = "Jogo PAUSADO.";
    }
}

function pararJogo() {
    pararTimer();
    jogoEmAndamento = false;
    tabuleiroMemoria.innerHTML = '';
    tabuleiroMemoria.className = 'tabuleiro-memoria';
    resetarTabuleiro();
    tempoRestante = CONFIG_DIFICULDADE[selectDificuldade.value].tempoLimite; 
    atualizarDisplayTempo();
    atualizarControles(true, false, false); 
    mensagemStatus.textContent = "Jogo Parado. Clique em 'Recomeçar' para jogar.";
}

function atualizarControles(pIniciar, pPausar, pParar) {
    btnIniciar.disabled = !pIniciar;
    btnPausar.disabled = !pPausar;
    btnParar.disabled = !pParar;
}


function iniciarTimer() {
    pararTimer(); 
    atualizarDisplayTempo();

    intervaloTempo = setInterval(() => {
        if (estaPausado || !jogoEmAndamento) return;

        tempoRestante--;
        atualizarDisplayTempo();

        if (tempoRestante <= 0) {
            fimDeJogo(false);
        }
    }, 1000);
}

function pararTimer() {
    clearInterval(intervaloTempo);
}

function atualizarDisplayTempo() {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    const tempoFormatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    displayTempo.textContent = tempoFormatado;
}


function embaralharEGerarCartas(numeroCartas) {
    const numParesNecessarios = numeroCartas / 2;
    const imagensJogo = nomesImagens.slice(0, numParesNecessarios); 

    const cartas = [...imagensJogo, ...imagensJogo];
    cartas.sort(() => Math.random() - 0.5);

    tabuleiroMemoria.innerHTML = '';

    cartas.forEach((imagem, indice) => {
        const elementoCarta = document.createElement('div');
        elementoCarta.classList.add('carta-memoria'); 
        elementoCarta.dataset.par = imagem; 

        elementoCarta.innerHTML = `
            <img class="frente-carta" src="${imagem}" alt="Carta">
            <div class="verso-carta">${indice + 1}</div>
        `;

        elementoCarta.addEventListener('click', virarCarta);
        tabuleiroMemoria.appendChild(elementoCarta);
    });
}

function virarCarta() {
    if (bloqueioTabuleiro || estaPausado || !jogoEmAndamento) return;
    if (this === primeiraCarta) return;

    this.classList.add('virada');

    if (!cartaVirada) {
        cartaVirada = true;
        primeiraCarta = this;
        mensagemStatus.textContent = "Primeira carta virada!";
        return;
    }

    segundaCarta = this;
    checarPar();
}

function checarPar() {
    let parEncontrado = primeiraCarta.dataset.par === segundaCarta.dataset.par;

    if (parEncontrado) {
        desativarCartas();
    } else {
        desvirarCartas();
    }
}

function desativarCartas() {
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);

    paresEncontrados++;
    mensagemStatus.textContent = `Par encontrado! ${paresEncontrados}/${totalPares} pares.`;
    
    resetarTabuleiro();

    if (paresEncontrados === totalPares) {
        fimDeJogo(true);
    }
}

function desvirarCartas() {
    bloqueioTabuleiro = true;

    setTimeout(() => {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
        
        mensagemStatus.textContent = "Tente novamente...";
        resetarTabuleiro();
    }, 1200);
}

function resetarTabuleiro() {
    [cartaVirada, bloqueioTabuleiro] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

atualizarControles(true, false, false);
const configInicial = CONFIG_DIFICULDADE[selectDificuldade.value];
tempoRestante = configInicial.tempoLimite;
atualizarDisplayTempo();

btnIniciar.addEventListener('click', iniciarJogo);
btnPausar.addEventListener('click', pausarJogo);
btnParar.addEventListener('click', pararJogo);

selectDificuldade.addEventListener('change', pararJogo);
