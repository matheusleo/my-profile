const mySkills = new Map([
  [
    "html5",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/html5.png?raw=true",
      skillTitle: "HTML5",
      skillValue: "60",
    },
  ],
  [
    "css3",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/css3.png?raw=true",
      skillTitle: "CSS3",
      skillValue: "50",
    },
  ],
  [
    "js",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/js.png?raw=true",
      skillTitle: "JavaScript",
      skillValue: "40",
    },
  ],
  [
    "react",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/react.png?raw=true",
      skillTitle: "React",
      skillValue: "10",
    },
  ],
  [
    "UX",
    {
      skillIcon:
        "https://github.com/matheusleo/my-profile/blob/master/assets/img/ux.png?raw=true",
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
      <dd class="title-main -skill">${value.skillTitle}</dd>
      <dd class="skill-measure">
        <meter id=${value.skillTitle} class="measure" value="0" max="100" title="${value.skillTitle} ${value.skillValue}%">0%</meter>
      </dd>
    </div>
  </div>
  `;

  skillList.insertAdjacentHTML("beforeend", skillStructure);
}

mySkills.forEach(deploySkill);
