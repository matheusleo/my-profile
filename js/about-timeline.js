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
