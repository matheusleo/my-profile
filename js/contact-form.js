const formContact = document.querySelector("#form-contact");

const formFields = new Map([
  [
    "Subject",
    {
      labelContent: "Assunto: ",
      inputTitle: "Insira o assunto sobre o qual gostaria de conversar",
      inputName: "form-subject",
      inputPlaceholder: "Batmóvel",
      inputType: "text",
    },
  ],
  [
    "Email",
    {
      labelContent: "Email: ",
      inputTitle: "Insira um email válido para contato",
      inputName: "form-email",
      inputPlaceholder: "robin@batfamily.bat",
      inputType: "email",
    },
  ],
  [
    "Name",
    {
      labelContent: "Nome: ",
      inputTitle: "Insira seu nome para contato",
      inputName: "form-sender",
      inputPlaceholder: "Robin",
      inputType: "text",
    },
  ],
]);

function deployFormFields(fieldset) {
  const formField = `
    <fieldset class="form-fieldset">
        <label for="${fieldset.inputName}" class="form-label">${fieldset.labelContent}</label><br>
        <input title="${fieldset.inputTitle}" required  placeholder="${fieldset.inputPlaceholder}" 
        class="form-input -validate" name="${fieldset.inputName}" id="${fieldset.inputName}" type=${fieldset.inputType}>
        <span class="form-validity">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z" fill="var(--color-fifth)"/></svg>
        </span>
    </fieldset>
    `;

  formContact.insertAdjacentHTML("afterbegin", formField);
}

formFields.forEach(deployFormFields);
