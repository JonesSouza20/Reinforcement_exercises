//Manipulando arrays com map, filter e reduce

//filter e map para somar todos os números do array por 10

function somarTodos(numeros) {
    return numeros
        .filter(numero=>numero)
        .map(numero=>numero + 10)
};

const resultado = somarTodos([1, 2, 3, 4, 5]);

console.log(resultado);

//reduce para acumular e somar o total do array

const numeros = [10, 20, 30, 40, 50];

const soma = numeros.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0);

console.log(soma);

//Fim do exercício