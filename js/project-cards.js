const listProjects = document.querySelector("#projects-list");

const myProjects = new Map([
  [
    "AluraFlix",
    {
      projectLink: "https://matheusleo.github.io/AluraFlix/",
      padTop: 52.225,
      projectImage:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/aluraflix.png?raw=true",
      projectTitle: "AluraFlix",
    },
  ],
  [
    "Curtas.tv",
    {
      projectLink: "https://squad-08.github.io/curtas.tv/",
      padTop: 14,
      projectImage:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/curtas.tv.png?raw=true",
      projectTitle: "Curtas.tv",
    },
  ],
]);

function createProjectCard(project) {
  const projectCard = `
    <article class="project-card">
        <a href=${project.projectLink} rel="noreferrer noopener" target="_blank">
            <img style="padding-top: ${project.padTop}px;" src=${project.projectImage} alt="Logo do projeto ${project.projectTitle}" class="project">
        </a>
    </article>
    `;

  listProjects.insertAdjacentHTML("beforeend", projectCard);
}

myProjects.forEach(createProjectCard);
