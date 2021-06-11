const menuControl = document.querySelector("#menu-control");
const navMenu = document.querySelector("#menu-nav");
const optionsMenu = document.querySelector("#menu-options");

function changeMenu() {
  menuControl.classList.toggle("-active");
  navMenu.classList.toggle("-active");
}

menuControl.addEventListener("click", changeMenu);

optionsMenu.addEventListener("click", () => {
  setTimeout(changeMenu, 150);
  //modificar o tempo quando descobrir como funciona a transição entre sections
});
