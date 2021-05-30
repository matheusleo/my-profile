const listProjects = document.querySelector("#projects-list");

const myProjects = new Map([
  [
    "AluraFlix",
    {
      projectLink: "https://matheusleo.github.io/AluraFlix/",
      projectImage:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/aluraflix.png?raw=true",
      projectTitle: "AluraFlix",
    },
  ],
  [
    "Curtas.tv",
    {
      projectLink: "https://squad-08.github.io/curtas.tv/",
      projectImage:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/curtas.tv.png?raw=true",
      projectTitle: "Curtas.tv",
    },
  ],
]);

function createProjectCard(project) {
  const projectCard = `
    <button id=${project.projectTitle} class="project-card">
      <img src=${project.projectImage} alt="Logo do projeto ${project.projectTitle}" class="project">
    </button>
    `;

  listProjects.insertAdjacentHTML("beforeend", projectCard);
}

myProjects.forEach(createProjectCard);
