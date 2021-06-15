const menuControl = document.querySelector("#menu-control");
const navMenu = document.querySelector("#menu-nav");
const optionsMenu = document.querySelector("#menu-options");
const mainContent = document.querySelector("#main-content");

function changeMenu() {
  const menuState = menuControl.classList.toggle("-active");
  navMenu.classList.toggle("-active");

  if (menuState) {
    mainContent.style.filter = "blur(.25em)";
  } else {
    mainContent.style.filter = "none";
  }
}

menuControl.addEventListener("click", changeMenu);
menuControl.addEventListener("keydown", (keyPressed) => {
  if (keyPressed.key === "Enter") {
    changeMenu();
  }
});

optionsMenu.addEventListener("click", () => {
  if (innerWidth <= 980) {
    setTimeout(changeMenu, 600);
  }
  //modificar o tempo quando descobrir como funciona a transição entre sections
});

// O que eu quero?
//  Eu quero que, toda vez que o menu estiver fechado, as opções dentro do menu sejam
//  inselecionáveis
//  Ao mesmo tempo que, quando a tela for maior que 980px, essa opções sejam selecionáveis
// 
// Passo A Passo
//  