//Plano A: Criar animação da barra com JS
// 3 momentos
//  a) barra carregada pela página -  value="0" no momento inicial resolve o problema
//  b) hover na barra -
//    0. Localiar a barra [ok]
//    1. Selecionar a barra [ok]
//    2. Adicionar um eventListener para o hover [ok]
//    3.1 Modificar o value da barra após o hover [ok]
//    3.2 Modificar a porcentagem dentro do meter após o hover [ok]
//
//  c) saída do hover
//    0. Localiar a barra [ok]
//    1. Selecionar a barra [ok]
//    2. Adicionar um eventListener para a saída do mouse [ok]
//    3. Modificar o value da barra após o saída do mouse [ok]
//    3.2 Modificar a porcentagem dentro do meter após a saída [ok]

const skillBarHTML5 = document.querySelector("#HTML5");
skillBarHTML5.addEventListener("mouseover", () => {
  skillBarHTML5.value = 60;
  skillBarHTML5.textContent = "60%";
});
skillBarHTML5.addEventListener("mouseout", () => {
  skillBarHTML5.value = 0;
  skillBarHTML5.textContent = "0%";
});

const skillBarCSS3 = document.querySelector("#CSS3");
skillBarCSS3.addEventListener("mouseover", () => {
  skillBarCSS3.value = 50;
  skillBarCSS3.textContent = "50%";
});
skillBarCSS3.addEventListener("mouseout", () => {
  skillBarCSS3.value = 0;
  skillBarCSS3.textContent = "0%";
});

const skillBarJS = document.querySelector("#JavaScript");
skillBarJS.addEventListener("mouseover", () => {
  skillBarJS.value = 40;
  skillBarJS.textContent = "40%";
});
skillBarJS.addEventListener("mouseout", () => {
  skillBarJS.value = 0;
  skillBarJS.textContent = "0%";
});

const skillBarReact = document.querySelector("#React");
skillBarReact.addEventListener("mouseover", () => {
  skillBarReact.value = 10;
  skillBarReact.textContent = "10%";
});
skillBarReact.addEventListener("mouseout", () => {
  skillBarReact.value = 0;
  skillBarReact.textContent = "0%";
});

const skillBarUX = document.querySelector("#UX");
skillBarUX.addEventListener("mouseover", () => {
  skillBarUX.value = 10;
  skillBarUX.textContent = "10%";
});
skillBarUX.addEventListener("mouseout", () => {
  skillBarUX.value = 0;
  skillBarUX.textContent = "0%";
});
