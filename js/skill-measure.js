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

const skillBar = document.querySelector(".measure");
skillBar.addEventListener("mouseover", () => {
  skillBar.value = 50;
  skillBar.textContent = "50%";
});
skillBar.addEventListener("mouseout", () => {
  skillBar.value = 0;
  skillBar.textContent = "0%";
});
