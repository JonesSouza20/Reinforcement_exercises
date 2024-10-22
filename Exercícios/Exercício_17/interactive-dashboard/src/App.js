import React, {useEffect, useState} from 'react'; //Importando o React

function DadosAPI() { //Componente responsavel por exibir o dashboard criado
  const [posts, setPosts] = useState([]); //Criação do estado posts utilizando useState, inicializa o array vazio. setPosts atualizará o estado.

  useEffect(() => { //Chama a API quando o componente é montado.
    async function api() { //Função assincrona para chamar a API.
      try {
        const resultado = await fetch('https://jsonplaceholder.typicode.com/posts'); //Resquisição com Fetch para obter os dados da API.
        const retorno = await resultado.json(); //Converte a resposta em Json
        setPosts(retorno); //Atualiza o estado com os posts recebidos.
      } catch (erro) { //Registra qualquer erro na requisição da API.
        console.log("Não foi possível obter os dados da API", erro);
      }
    }

    api();
  });

  return (
    <div>
      <h1>Dashboard Interativo de Postagens</h1>
      <button onClick={() => setPosts([...posts `Posts ${posts.length + 1}`])}>Proximo post</button> 

      <ul>
        {posts.map((post, index) => (
          <li key={index}>{posts}</li>
        ))}
      </ul>
    </div>
  )
}


export default DadosAPI;