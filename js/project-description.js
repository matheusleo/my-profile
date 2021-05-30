//  O que eu quero fazer?
//      Ao clicar no card do projeto, eu quero que haja a abertura de uma seção de
//      descrição do projeto com o título, card, uma descrição e o link para o projeto,
//      no local correto
//
//  Passo A Passo
//      1. selecionar os project-cards [ok]
//          adicionar id ao project-card de cada projeto
//      2. adicionar eventListener aos project cards [ok]
//      3. Criar função que irá montar o HTML [ok]
//          pagar os dados do projeto a partir do Map [ok]
//      4. Adicionar a localização de onde o código será implementado [ok]
//
// Como solucionar:
//    1. o problema de onde o código será implementado?  - tlvz display: grid
//    2. Como fazer para que a sequência não seja simplesmente quebrada?
//    3. Como evitar que o clique adicione várias seções?
//    4. Adicionar o link do repositório no GitHub do projeto

const projectAlura = document.querySelector("#AluraFlix");
const projectCurtasTv = document.querySelector("#CurtasTv");

function createDescription(project) {
  const projectDescription = `
  <section class="section-description">
      <h3 class="title-main -project">${project.projectTitle}</h3>
  
      <article class="project-description">
          <figure class="project-card -description">
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
}

projectAlura.addEventListener("click", () =>
  createDescription(myProjects.get("AluraFlix"))
);
projectCurtasTv.addEventListener("click", () =>
  createDescription(myProjects.get("Curtas.tv"))
);
