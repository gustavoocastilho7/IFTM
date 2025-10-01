document.getElementById("votosCand1").innerHTML = 0;
document.getElementById("votosCand2").innerHTML = 0;
document.getElementById("votosCand3").innerHTML = 0;
document.getElementById("votosCand4").innerHTML = 0;

var vetVotos = [0,0,0,0];


var fotoCand1 = document.getElementById("fotoCand1");
var fotoCand2 = document.getElementById("fotoCand2");
var fotoCand3 = document.getElementById("fotoCand3");
var fotoCand4 = document.getElementById("fotoCand4");


fotoCand1.addEventListener("click", function(){addVotoCand(1)});
fotoCand2.addEventListener("click", function(){addVotoCand(2)});
fotoCand3.addEventListener("click", function(){addVotoCand(3)});
fotoCand4.addEventListener("click", function(){addVotoCand(4)});


function aumentarVotos(nroCand) {
    document.getElementById(`votosCand${nroCand}`).innerHTML = ++vetVotos[nroCand-1];
    destacarMaiorVoto();
}

function destacarMaiorVoto() {
    var maxVoto = Math.max(...vetVotos);
    for (let i = 0; i < vetVotos.length; i++) {
        if (vetVotos[i] === maxVoto) {
            document.getElementById(`candidato${i+1}`).style.backgroundColor = "blue";
        } else {
            document.getElementById(`candidato${i+1}`).style.backgroundColor = "rgb(188, 229, 188)";
        }
    }
}