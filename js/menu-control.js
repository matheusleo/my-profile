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

optionsMenu.addEventListener("click", () => {
  setTimeout(changeMenu, 150);
  //modificar o tempo quando descobrir como funciona a transição entre sections
});
