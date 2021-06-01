// Como solucionar:
//    1. o problema de onde o código será implementado?  - tlvz display: grid
//    2. Como fazer para que a sequência não seja simplesmente quebrada?
//    4. Adicionar o link do repositório no GitHub do projeto
//
//Criar funcionalidade do button-clean
//  O que eu quero?
//    Eu quero que ao clicar no button-clean, a descrição que está na tela seja removida
//
//  Passo A Passo
//    1. Selecionar button-clean [ok]
//    2. Adicionar um eventListener de click ao button [ok]
//    3. Executar a função cleanDescription() [ok]
//    4. Onde posicionar?

const projectAlura = document.querySelector("#AluraFlix");
const projectCurtasTv = document.querySelector("#CurtasTv");

function createDescription(project) {
  const sectionDescription = document.querySelector("#section-description");
  if (sectionDescription) {
    cleanDescription();
  }

  if (project.projectBg == 1) {
    var backgroundColor = "style='background-color: var(--color-second)'";
  } else {
    var backgroundColor = "style='background-color: var(--color-sixth)'";
  }

  const projectDescription = `
  <section class="section-description" id="section-description">
    <h3 class="title-main -project">${project.projectTitle}</h3>
    <button class="button-dark" id="button-clean">×</button>
    <article class="project-description">
        <figure class="project-card -description" ${backgroundColor}>
          <img
          class="project" 
          src=${project.projectImage} 
          alt="Logo do ${project.projectTitle}"
          >
        </figure>
        <div class="description-wrapper">
          <p class= "description">${project.projectDescription}</p>
          <a class ="link" href="${project.projectLink}" 
          target="_blank" rel="noopener noreferrer">
              Visitar projeto...</a>
        </div>
    </article>
  </section>
  `;

  listProjects.insertAdjacentHTML("beforeend", projectDescription);

  const buttonClean = document.querySelector("#button-clean");
  buttonClean.addEventListener("click", cleanDescription);
}

function createButtonClean() {}

function cleanDescription() {
  const sectionDescription = document.querySelector("#section-description");
  listProjects.removeChild(sectionDescription);
}

projectAlura.addEventListener("click", () =>
  createDescription(myProjects.get("AluraFlix"))
);
projectCurtasTv.addEventListener("click", () =>
  createDescription(myProjects.get("Curtas.tv"))
);
