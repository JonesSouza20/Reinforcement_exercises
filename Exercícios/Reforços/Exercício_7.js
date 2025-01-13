let input = document.querySelector('.adicionarTarefas input');
let button = document.querySelector('.adicionarTarefas button');
let listaTarefas = document.getElementById('listaTarefas');


function criarTarefa(texto) {
    let li = document.createElement('li');

    let tarefaTexto = document.createElement('span');
    tarefaTexto.textContent = texto;

    let botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function() {
        listaTarefas.removeChild(li);
    });

    li.appendChild(tarefaTexto);
    li.appendChild(botaoExcluir);

    listaTarefas.appendChild(li);
}

function adicionarTarefa() {
    let textoTarefa = input.value.trim();

    if (textoTarefa !== '') {
        criarTarefa(textoTarefa);
        input.value = '';
    }
}

button.addEventListener('click', adicionarTarefa);

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});