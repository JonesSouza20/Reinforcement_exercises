let formulario = document.getElementById("cadastro");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;

    if (nome === "" || email === "" || idade === "") {
        document.getElementById("mensagem").innerText = "Informe seu nome, email e idade.";
    } else {
        document.getElementById("mensagem").innerText = "Cadastro realizado.";
    }
});