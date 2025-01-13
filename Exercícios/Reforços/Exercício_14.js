//Manipulação de async e await para puxar dados de uma API

async function dadosAPI() { //Declaração da função
    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts'); //Declaração de uma variavel chamando os dados da API com o link da mesma.
    let resultado = await resposta.json(); //Declaração de uma segunda variavel para o retorno dos dados da API.
    
    try { //Bloco para verificação de possiveis erros com os dados da API
        resposta
        resultado
        console.log(resultado)
    } catch(erro) {
        console.log("Não é possível buscar os dados da API.", erro); //Mensagem caso ocorra algum erro na verificação dos dados da API.
        
    }
}

dadosAPI();