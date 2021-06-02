const projectAlura = document.querySelector("#AluraFlix");
const projectCurtasTv = document.querySelector("#CurtasTv");

function createDescription(project) {
  if (sectionDescription.className === "section-description -disabled") {
    deployDescription(project);
  } else {
    cleanDescription();
    window.setTimeout(() => {
      deployDescription(project);
    }, 1250);
  }
}

function deployDescription(project) {
  sectionDescription.className = "section-description -active";
  if (project.projectBg == 1) {
    var backgroundColor = "style='background-color: var(--color-second)'";
  } else {
    var backgroundColor = "style='background-color: var(--color-sixth)'";
  }

  const projectDescription = `
    <div class="wrapper-section" id="wrapper-section" style="width: 100%; height: 100%">
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
    </div>
    `;

  sectionDescription.insertAdjacentHTML("afterbegin", projectDescription);

  const buttonClean = document.querySelector("#button-clean");
  buttonClean.addEventListener("click", cleanDescription);
}

function cleanDescription() {
  sectionDescription.className = "section-description -disabled";
  const wrapperSection = document.querySelector("#wrapper-section");
  window.setTimeout(() => {
    sectionDescription.removeChild(wrapperSection);
  }, 1000);
}

projectAlura.addEventListener("click", () =>
  createDescription(myProjects.get("AluraFlix"))
);
projectCurtasTv.addEventListener("click", () =>
  createDescription(myProjects.get("Curtas.tv"))
);
