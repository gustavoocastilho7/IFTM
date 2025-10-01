btnGerarResultado = document.getElementById("btnGerarResultado");
btnGerarResultado.addEventListener("click",gerarSorteio);

function gerarSorteio() {

candidatos = [
    { nome: "Simone Tebet", partido: "MDB", img: "Candidato4.png" },
    { nome: "Luiz Inácio Lula", partido: "PT", img: "Candidato2.png" },
    { nome: "Ciro Gomes", partido: "PDT", img: "Candidato3.png" },
    { nome: "Jair Bolsonaro", partido: "PL", img: "Candidato1.png" }
];

indices = [0,1,2,3];
nroVotos = Math.round(Math.random()*100)
vetVotos = [nroVotos, 100-nroVotos];
indicesSorteados = [];

for (i=1; i<=2; i++) {
    indCand = indices.splice(Math.floor(Math.random()*indices.length), 1)[0];
    indicesSorteados[i-1] = indCand
    document.getElementById(`candSorteado${i}`).innerHTML = candidatos[indCand].nome;
    document.getElementById(`partCandidato${i}`).innerHTML = candidatos[indCand].partido;
    document.getElementById(`candFoto${i}`).src = `img/${candidatos[indCand].img}`;
    document.getElementById(`votosCand${i}`).innerHTML = vetVotos[i-1].toFixed(1);
}

if (vetVotos[0] == vetVotos[1]){
    document.getElementById("candVencedor").innerHTML = "Empate";
    document.getElementById("percVencedor").innerHTML = "-";
}
else if (vetVotos[0] > vetVotos[1]){
    document.getElementById("candVencedor").innerHTML = candidatos[indicesSorteados[0]].nome;
    document.getElementById("percVencedor").innerHTML = vetVotos[0].toFixed(1);
}
else{
    document.getElementById("candVencedor").innerHTML = candidatos[indicesSorteados[1]].nome;
    document.getElementById("percVencedor").innerHTML = vetVotos[1];
}

}

gerarSorteio();



// vet = [0,1,2,3];
// indice1 = Math.floor(Math.random()*vet.length);
// sorteado1 = vet.splice(indice1, 1)[0];

// document.getElementById("candSorteado1").innerHTML = candidatos[sorteado1].nome;
// document.getElementById("partCandidato1").innerHTML = candidatos[sorteado1].partido;
// document.getElementById("candFoto1").src = `img/${candidatos[sorteado1].img}`;

// indice2 = Math.floor(Math.random()*vet.lenght);
// sorteado2 = vet.splice(indice2, 1)[0];

// document.getElementById("candSorteado2").innerHTML = candidatos[sorteado2].nome;
// document.getElementById("partCandidato2").innerHTML = candidatos[sorteado2].partido;
// document.getElementById("candFoto2").src = `img/${candidatos[sorteado2].img}`;