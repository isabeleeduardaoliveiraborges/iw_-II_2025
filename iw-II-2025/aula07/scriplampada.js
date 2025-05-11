const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");
const estado = document.getElementById("estado");

function ligarLampada() {
  lampada.src = "img/acesa.jpeg";
  lampada.alt = "Lâmpada Ligada";
  estado.innerText = "Você acendeu a luz :)";
}

function desligarLampada() {
  lampada.src = "img/apagada.jpeg";
  lampada.alt = "Lâmpada Desligada";
  estado.innerText = "Você apagou a luz :/";
}

btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);
