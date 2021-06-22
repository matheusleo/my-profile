const wrapperCards = document.querySelector("#wrapper-cards");
const aboutContent = new Map([
  [
    "pitágoras",
    {
      aboutYear: 2006,
      aboutImage:
        "https://raw.githubusercontent.com/matheusleo/my-profile/3b6094390e442a122f8a79860cc94a3891c169e8/assets/img/logo-pitagoras-colored.svg",
      aboutAlt: "Logo do Colégio Pitágoras - Cidade Jardim",
      aboutTitle: "Colégio Pitágoras",
      aboutDescription:
        "Colégio no qual tive a alegria de estudar desde 2006 e de me formar em 2019 - ano em que realizei o ENEM.",
    },
  ],
  [
    "UFMG",
    {
      aboutYear: 2020,
      aboutImage:
        "https://github.com/matheusleo/my-profile/blob/section-about/assets/img/ufmg-2.png?raw=true",
      aboutAlt: "Logo da Universidade Federal de Minas Gerais",
      aboutTitle: "UFMG",
      aboutDescription:
        "Na primeira tentativa, em 2019, passei na renomada UFMG, em Física, para começar meus estudos em 2020.",
    },
  ],
]);

function contentTimeline(aboutCard) {
  const aboutCardCode = `
    <article class="about-card" tabindex="0">
        <time class="subtitle-main -year" datetime="${aboutCard.aboutYear}">${aboutCard.aboutYear}</time>
        <div class="about-wrapper">
            <img src=${aboutCard.aboutImage} 
                alt=${aboutCard.aboutAlt}
                class="about-image">
        </div>
        <h3 class="title-main -about -long-name">${aboutCard.aboutTitle}</h3>
        <p class="description-paragraph -about">${aboutCard.aboutDescription}
    </article>
    `;

  wrapperCards.insertAdjacentHTML("beforeend", aboutCardCode);
}

aboutContent.forEach(contentTimeline);
