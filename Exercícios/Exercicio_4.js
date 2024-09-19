//Declaração do array com números a serem multiplicados
let numeros = [32, 4, 55, 1, 67, 44, 10, 33, 2];

let alterarNum = numeros.map(function(multiplicar) {
    return multiplicar * 2;
})

console.log(alterarNum);

//Adicionando conteúdo ao array com push

let funcionarios = ["Gabriel", "Lara", "Leonardo", "Lucas", "Pedro", "Jean", "Nicole", "Rosana"];

//Adição de conteúdo no array com push
funcionarios.push("Jose")
//Eliminando o primeiro conteúdo do array com shift
funcionarios.shift("Ana")
//Eliminando o ultimo conteúdo do array com pop
funcionarios.pop()

//Filtrando o conteúdo do array com Filter
let filtrarNomes = funcionarios.filter(function(funcionarios){
    return funcionarios.startsWith("L")
})

console.log(filtrarNomes);

//Acumulando o conteúdo do array com Reduce

let idadeFuncionarios = [22, 25, 33, 21, 33, 19, 31, 29, 45];

let idadeTotal = idadeFuncionarios.reduce(function(acumular, idades){
    return acumular + idades;
})

console.log(idadeTotal)

//Calculando a média da idade dos Funcionarios

let mediaIdades = idadeTotal / idadeFuncionarios.length

console.log(mediaIdades)