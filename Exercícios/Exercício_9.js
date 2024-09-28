document.addEventListener("keydown", function(event) {
    document.getElementById("TeclaPressionada").innerText = "Você pressionou: " + event.key;
});