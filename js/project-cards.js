const sectionDescription = document.querySelector("#section-description");

const myProjects = new Map([
  [
    "AluraFlix",
    {
      projectLink: "https://matheusleo.github.io/AluraFlix/",
      projectImage:
        "https://github.com/matheusleo/my-profile/blob/main/assets/img/aluraflix.png?raw=true",
      projectTitle: "AluraFlix",
      projectDescription:
        "O AluraFlix foi o primeiro projeto e mais simples que eu desenvolvi utilizando HTML, CSS e JavaScript acompanhando as lives de programação na twitch do MarcoBrunoDev. Seu conceito foi elaborado durante a Imersão Dev da Alura, em 2021.",
      projectBg: 1,
    },
  ],
  [
    "Curtas.tv",
    {
      projectLink: "https://squad-08.github.io/curtas.tv/",
      projectImage:
        "https://github.com/matheusleo/my-profile/blob/main/assets/img/curtas.tv.png?raw=true",
      projectTitle: "CurtasTv",
      projectDescription:
        "O conceito veio de criar uma plataforma na qual, ao invés de precisar procurar curta por curta no Youtube que é uma plataforma com milhões de vídeos, o usuário poderia ter fácil acesso a uma coletânea de curtas, separados por gênero. Assim, surgiu o Curtas Tv.",
      projectBg: 0,
    },
  ],
]);

function createProjectCard(project) {
  const projectCard = `
    <button id=${project.projectTitle} class="project-card">
      <img src=${project.projectImage} alt="Logo do projeto ${project.projectTitle}" class="project">
      <div class="project-overlay">Conhecer mais sobre</div>
    </button>
    `;

  sectionDescription.insertAdjacentHTML("beforebegin", projectCard);
}

myProjects.forEach(createProjectCard);
