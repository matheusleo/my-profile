// O que eu quero?
// Plano A
//      Eu quero que, ao clicar no menu-control, o menu lateral seja aberto da
// direita para a esquerda e o usuário possa ter acesso a ele e selecionar as opções dele.
//
// Plano B
//      Após selecionar uma opção do menu, o menu lateral deve ser fechado
//
// Passo A Passo - Plano A
//      1. Selecionar o "menu-control" [ok]
//      2. Adicionar eventListener ao "menu-control" [ok]
//      3. Criar a variação de classe active para o menu que é ativada ao clicar [ok]

const menuControl = document.querySelector("#menu-control");
const navMenu = document.querySelector("#menu-nav");

menuControl.addEventListener("click", () => {
  menuControl.classList.toggle("-active");
  navMenu.classList.toggle("-active");
});
