//Plano B: Criar JS com mapa que implementa o código repetido
// 3 momentos
//  a) Cria objeto com os mapa dados {skill, imagem da skill, valor da skill} [ok]
//  b) Cria a função que irá montar o código repetido  e localiza corretamente no código [ok]
//  c) Cria a função que irá percorrer o mapa colhendo as informações [ok]
//  d) Ao carregar a página, chama função que executa a repetição [ok]
//
//Plano C: Implementar juntos o Plano A e B [ok]
//Plano D: Implementar para que o Plano A funcione com focus

const mySkills = new Map([
  [
    "html5",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/section-skills/assets/img/html5.png?raw=true",
      skillTitle: "HTML5",
      skillValue: "60",
    },
  ],
  [
    "css3",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/section-skills/assets/img/css3.png?raw=true",
      skillTitle: "CSS3",
      skillValue: "50",
    },
  ],
  [
    "js",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/section-skills/assets/img/js.png?raw=true",
      skillTitle: "JavaScript",
      skillValue: "40",
    },
  ],
  [
    "react",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/section-skills/assets/img/react.png?raw=true",
      skillTitle: "React",
      skillValue: "10",
    },
  ],
  [
    "UX",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/section-skills/assets/img/ux.png?raw=true",
      skillTitle: "UX",
      skillValue: "10",
    },
  ],
]);
const skillList = document.querySelector("#skill-list");

function deploySkill(value) {
  const skillStructure = `
  <div class="skill-wrapper">
    <dt class="skill-icon">
      <img src=${value.skillIcon}>
    </dt>
    <div class="skill-wrapper-details">
      <dd class="title -skill">${value.skillTitle}</dd>
      <dd class="skill-measure">
        <meter id=${value.skillTitle} class="measure" value="0" max="100" title="${value.skillTitle} ${value.skillValue}%">0%</meter>
      </dd>
    </div>
  </div>
  `;

  skillList.insertAdjacentHTML("beforeend", skillStructure);
}

mySkills.forEach(deploySkill);
