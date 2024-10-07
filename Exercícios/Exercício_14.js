async function dadosAPI() {
    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let resultado = await resposta.json();
    
    try {
        resposta
        resultado
        console.log(resultado)
    } catch(erro) {
        console.log("Não é possível buscar os dados da API.", erro);
        
    }
}

dadosAPI();