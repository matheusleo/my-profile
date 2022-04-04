const wrapperCards = document.querySelector("#wrapper-cards");
const aboutContent = new Map([
  [
    "pitágoras",
    {
      aboutYear: "2006",
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
      aboutYear: "2020",
      aboutImage:
        "https://github.com/matheusleo/my-profile/blob/development/assets/img/ufmg-2.png?raw=true",
      aboutAlt: "Logo da Universidade Federal de Minas Gerais",
      aboutTitle: "UFMG",
      aboutDescription:
        "Na primeira tentativa, em 2019, passei na renomada UFMG, em Física, para começar meus estudos em 2020.",
    },
  ],
  [
    "Layers",
    {
      aboutYear: "2021",
      aboutImage:
      "https://github.com/matheusleo/my-profile/blob/main/assets/img/layers-icon-colorido.svg?raw=true",
      aboutAlt: "Logo da Layers Education",
      aboutTitle: "Layers Education",
      aboutDescription:
        "Após deixar o curso de Física e me dedicar em 2021 a programação, fui contratado, em Agosto, pela Layers Education.",
    },
  ],
  [
    "42SP",
    {
      aboutYear: "2022",
      aboutImage:
        "https://github.com/matheusleo/my-profile/blob/main/assets/img/logo-42sp.png?raw=true",
      aboutAlt: "Logo da 42Sp",
      aboutTitle: "42Sp",
      aboutDescription:
        "Afim de me aprofundar na área e buscar uma formação robusta, fui aprovado no Basecamp de Fevereiro da 42Sp.",
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
