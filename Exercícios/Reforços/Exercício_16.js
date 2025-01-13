//Exercicio de manipulação de Pilhas (stacks) e filhas (queues) com arrays.

let pilha = []; //Declaração do array.

//Adicionando elementos ao array. Push adiciona elementos ao final da pilha/fila.
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);

console.log(pilha);

let remover = pilha.pop(); //Declaração de uma nova variavel para remover o ultimo elemento do array mostrando-o no console.

console.log(remover); //Removendo o ultimo elemento da pilha.

pilha.unshift(remover); //Pegando o ultimo elemento retirado e adicionando ao primeiro lugar da pilha.

console.log(pilha);