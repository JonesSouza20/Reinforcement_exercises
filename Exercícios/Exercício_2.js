let nota = -2

if (nota == 100) {
    console.log ("O aluno obteve uma nota Excelente!");

} else if (nota >= 90 && nota <= 99 ) {
    console.log ("O aluno obteve uma nota Ótima!");

} else if (nota >= 80 && nota <= 89) {
    console.log ("O aluno obteve uma nota Boa!");

} else if (nota >= 60 && nota <= 79) {
    console.log ("O aluno obteve uma nota acima da média!");

} else if (nota >= 50 && nota <= 59) {
    console.log ("O aluno obteve uma nota Mediana!");

} else if (nota >= 40 && nota <= 49) {
    console.log ("O aluno obteve uma nota Ruim");

} else if (nota >= 0 && nota <= 39) {
    console.log ("0 aluno obteve uma nota Péssima!");
    
} else {
    console.log("Nota inválida!");
}

console.log(nota);

if (nota < 0 || nota > 100){
    console.log("Nota Inválida!")
};