const imagem = document.getElementById("minhaImagem");

const botaoKlee = document.getElementById("botaoKlee");
const botaoQiqi = document.getElementById("botaoQiqi");
const botaoYaoyao = document.getElementById("botaoYaoyao");

botaoKlee.addEventListener("click", () => {
  imagem.src = "img/klee.jpg";
  imagem.alt = "Klee";
});

botaoQiqi.addEventListener("click", () => {
  imagem.src = "img/qiqi.jpg";
  imagem.alt = "Qiqi";
});

botaoYaoyao.addEventListener("click", () => {
  imagem.src = "img/yaoyao.jpg";
  imagem.alt = "Yaoyao";
});
