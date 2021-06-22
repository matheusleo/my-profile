// Qual a ideia?:
// A ideia é que haja botões que permitam a mudança de um card para o outro.
// Ao clicar em um button, é preciso que card troque.
//
// Passo A Passo
//      1. Adicionar eventListener aos buttons
//      2. Utilizar o scrollBy para gerar o scroll no wrapper-cards

const wrapperCards = document.querySelector("#wrapper-cards");
const buttonArrowLeft = document.querySelector("#button-arrow-left");
const buttonArrowRight = document.querySelector("#button-arrow-right");

buttonArrowLeft.addEventListener("click", () => {
  wrapperCards.scrollBy({
    top: 0,
    left: -351,
    behavior: "smooth",
  });
});

buttonArrowRight.addEventListener("click", () => {
  wrapperCards.scrollBy({
    top: 0,
    left: 351,
    behavior: "smooth",
  });
});
