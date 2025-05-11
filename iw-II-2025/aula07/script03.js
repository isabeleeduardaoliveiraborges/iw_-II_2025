const imagem = document.getElementById("minhaImagem");
const botao = document.getElementById("trocarImagem");

let imagemAtual = 1;

function trocarImagem() {
  if (imagemAtual === 1) {
    imagem.src = "img/joui.jpg";
    imagemAtual = 2;
  } else {
    imagem.src = "img/gal.jpg";
    imagemAtual = 1;
  }
}

botao.addEventListener("click", trocarImagem);

  