//Manipulando closures em funções

function contador(contar) { //Primeira função.
    let numeros = 0; //Declaração de variavel para a função, a declaração foi feita com let pois permite a alteração de sua variavel.

 //Chamando a segunda função com base na variavel declarada na primeira. Closures permite que esta função "lembre-se" dos parametros da primeira função.
        return function() {
            numeros++; //Contagem dos números começando a partir do zero, informado na variavel declarada anteriormente.
            console.log(numeros)
        };
};


const contagem = contador(); //Declaração de uma nova variavel para armazenar os valores da função

contagem();
contagem();
contagem();