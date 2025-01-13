//Manipulando Destructuring, Spread operator e Rest parameters.

//Destructuring

const lista = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = lista;

console.log(a, b, c, d, e);

const pessoa = {nome: "Jones", idade: 25, cidade: "São Paulo"};

const {nome, idade, cidade} = pessoa;

console.log(nome, idade, cidade);

//Spread operator

const lista2 = [1, 2, 3, 4, 5];

const adicaoNumeros = [...lista2, 6, 7, 8, 9, 10];

console.log(adicaoNumeros);

const funcionario = {nome: "Jones", idade: 25};

const adicaoCargo = {...funcionario, cargo: "Desenvolvedor"};

console.log(adicaoCargo);

//Rest parameters

function soma(...numeros) {
    console.log(numeros);
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(soma(1, 2, 3, 4, 5));

//Fim do exercício