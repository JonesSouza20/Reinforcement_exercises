//Explorando destructuring, spread operator e rest parameters.

//Destructuring é uma maneira de extrair valores de uma variavel podendo ser acessados de forma mais fácil.
let funcionario = { //variavel do tipo objeto com nome, idade e localidade atribuidos. Essa variavel poderia ser um array que iria funcionar da mesma forma.
    nome: "Jones",
    idade: 25,
    Localidade: "São Paulo"
};

let {nome, idade, localidade} = funcionario; //atribuição dos valores do objeto anterior para uma nova variavel.

console.log(funcionario);

//Spread operator é uma forma de manipular os valores do array ou objeto, neste caso adicionando um cargo ao cadastro do funcionario.
//Declaração de uma nova variavel, o spread operator é utilizado com "..." em seguida a primeira varial e em seguida a adição do cargo.
let addFuncionario = {...funcionario, cargo: "Desenvolvedor"}

console.log(addFuncionario)

//Rest parameters permite a declaração de uma função sem um numero certo de argumentos.

/*Declaração da função, porém, ao utilizar "...salarios" estou definindo que o argumento "salarios" não tem um número certo de parametros, ou salarios
definidos, sendo assim, posso atribuir varios salarios de varios colaboradores.*/
function soma(...salarios) {
    return salarios.reduce((acc, num) => acc + num, 0); /*No retorno temos o método "reduce" que faz a redução de todos os valores do argumento
juntando tudo em um unico valor. Já o "acc" é o nosso acumulador, ou seja, irá acumular todos os numeros para que sejam somados entre si. O "num" é
onde o acumulador irá começar a contar dentro do argumento, neste caso 0.*/
};

console.log(soma(2000, 1590, 3600, 5000)); //Definição dos valores para acumulo e soma.