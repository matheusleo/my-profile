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
//
//Plano D: Criar JS que será responsavel por modificar os values ao ser clicado [ok]
//Plano E: Implementar para que o Plano A funcione com focus

const skillBarHTML5 = document.querySelector("#HTML5");
const skillBarCSS3 = document.querySelector("#CSS3");
const skillBarJS = document.querySelector("#JavaScript");
const skillBarReact = document.querySelector("#React");
const skillBarUX = document.querySelector("#UX");
const buttonMeasure = document.querySelector("#button-measure");

let skillValues = {
  HTML5: 60,
  CSS3: 50,
  JS: 40,
  React: 10,
  UX: 10,
};

skillBarHTML5.addEventListener("mouseover", () => {
  skillBarHTML5.value = skillValues.HTML5;
  skillBarHTML5.textContent = `skillValues.HTML5%`;
});
skillBarHTML5.addEventListener("mouseout", () => {
  skillBarHTML5.value = 0;
  skillBarHTML5.textContent = "0%";
});

skillBarCSS3.addEventListener("mouseover", () => {
  skillBarCSS3.value = skillValues.CSS3;
  skillBarCSS3.textContent = `skillValues.CSS3%`;
});
skillBarCSS3.addEventListener("mouseout", () => {
  skillBarCSS3.value = 0;
  skillBarCSS3.textContent = "0%";
});

skillBarJS.addEventListener("mouseover", () => {
  skillBarJS.value = skillValues.JS;
  skillBarJS.textContent = `skillValues.JS%`;
});
skillBarJS.addEventListener("mouseout", () => {
  skillBarJS.value = 0;
  skillBarJS.textContent = "0%";
});

skillBarReact.addEventListener("mouseover", () => {
  skillBarReact.value = skillValues.React;
  skillBarReact.textContent = `skillValues.React%`;
});
skillBarReact.addEventListener("mouseout", () => {
  skillBarReact.value = 0;
  skillBarReact.textContent = "0%";
});

skillBarUX.addEventListener("mouseover", () => {
  skillBarUX.value = skillValues.UX;
  skillBarUX.textContent = `skillValues.UX%`;
});
skillBarUX.addEventListener("mouseout", () => {
  skillBarUX.value = 0;
  skillBarUX.textContent = "0%";
});

buttonMeasure.addEventListener("click", () => {
  skillBarHTML5.value = skillValues.HTML5;
  skillBarCSS3.value = skillValues.CSS3;
  skillBarJS.value = skillValues.JS;
  skillBarReact.value = skillValues.React;
  skillBarUX.value = skillValues.UX;
});
