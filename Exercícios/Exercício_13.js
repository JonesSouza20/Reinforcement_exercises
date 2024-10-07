function contador(contar) {
    let numeros = 0;

        return function() {
            numeros++;
            console.log(numeros)
        };
};


const contagem = contador();

contagem();
contagem();
contagem();