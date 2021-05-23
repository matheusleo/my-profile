//Plano B: Criar JS com objetos que implementa o código repetido
// 3 momentos
//  a) Cria objeto com os mapa dados {skill, imagem da skill, valor da skill}
//  b) Cria a função que irá de percorrer o objeto colhendo as informações, montando o código e implementado
//  c) Ao carregar a pagina chama função que executa a repetição
//
//Plano C: Implementar juntos o Plano A e B
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

