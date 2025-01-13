// Seleciona os elementos do formulário
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Função para validar o campo de nome
function validateName() {
    const name = nameInput.value.trim();
    if (!name) {
      nameError.textContent = "O nome é obrigatório.";
      return false;
    } else if (name.length < 3) {
      nameError.textContent = "O nome deve ter pelo menos 3 caracteres.";
      return false;
    } else {
      nameError.textContent = "";
      return true;
    }
  }

// Função para validar o campo de e-mail
  function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError.textContent = "O e-mail é obrigatório.";
      return false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "O e-mail não é válido.";
      return false;
    } else {
      emailError.textContent = "";
      return true;
    }
  }

// Função para validar o campo de senha
  function validatePassword() {
    const password = passwordInput.value.trim();
    if (!password) {
      passwordError.textContent = "A senha é obrigatória.";
      return false;
    } else if (password.length < 6) {
      passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
      return false;
    } else {
      passwordError.textContent = "";
      return true;
    }
  }

// Adiciona eventos de validação em tempo real
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// Evento ao submeter o formulário
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio do formulário se houver erros

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
        alert("Formulário enviado com sucesso!");
        form.reset(); // Limpa o formulário
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });