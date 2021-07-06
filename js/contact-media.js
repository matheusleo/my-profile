{
  /* <a href="https://www.linkedin.com/in/matheusleo/" 
title="LinkedIn: Matheus Leonardo Ferreira" 
class="contact-media" rel="noopener noreferrer">
    <img src="assets/img/linkedin-icon-circle.png" alt="Logo em preto e branco do LinkedIn" class="contact-logo">
</a> */
}

const contactGIF = document.querySelector("#contact-gif");
//Seleciona o GIF que aparece na segunda coluna da section Contact
const footerMain = document.querySelector("#footer-main");

const myMedias = new Map([
  [
    "LinkedIn",
    {
      mediaLink: "https://www.linkedin.com/in/matheusleo/",
      mediaTitle: "LinkedIn: Matheus Leonardo Ferreira",
      mediaLogo: "assets/img/linkedin-icon-circle.png",
      mediaName: "LinkedIn",
      mediaDescription: "Matheus Leonardo Ferreira",
    },
  ],
  [
    "Instagram",
    {
      mediaLink: "https://www.instagram.com/matheusleo._/",
      mediaTitle: "Instagram: @matheusleo._",
      mediaLogo: "assets/img/instagram-icon-white.png",
      mediaName: "Instagram",
      mediaDescription: "@matheusleo._",
    },
  ],
  [
    "GitHub",
    {
      mediaLink: "https://github.com/matheusleo",
      mediaTitle: "GitHub: matheusleo",
      mediaLogo: "assets/img/github-mark-light.png",
      mediaName: "GitHub",
      mediaDescription: "matheusleo",
    },
  ],
]);

function deployContactMedia(media) {
  const mediaSectionContact = `
    <a href="${media.mediaLink}" class="contact-media" 
    title="${media.mediaTitle}" rel="noopener noreferrer">
        <img src="${media.mediaLogo}" alt="Logo em preto e branco do ${media.mediaName}" class="contact-logo">${media.mediaDescription}
    </a>
    `;

  const mediaFooter = `
    <a href="${media.mediaLink}" class="contact-media"
    title="${media.mediaTitle}" rel="noopener noreferrer">
        <img src="${media.mediaLogo}" alt="Logo em preto e branco do ${media.mediaName}" class="contact-logo">
    </a>
    `;

  contactGIF.insertAdjacentHTML("beforebegin", mediaSectionContact);
  footerMain.insertAdjacentHTML("beforeend", mediaFooter);
}

myMedias.forEach(deployContactMedia);
