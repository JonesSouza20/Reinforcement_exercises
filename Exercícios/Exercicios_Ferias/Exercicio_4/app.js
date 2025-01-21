// Selecionar o elemento onde os posts serão exibidos
const postsList = document.getElementById('posts');

// URL da API pública
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Função para buscar dados da API
async function fetchPosts() {
  try {
    // Fazendo uma requisição GET para a API
    const response = await fetch(API_URL);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados');
    }

    // Convertendo a resposta para JSON
    const posts = await response.json();

    // Exibindo os posts
    displayPosts(posts);
  } catch (error) {
    console.error('Erro:', error);
    postsList.innerHTML = `<li>Erro ao carregar os posts. Tente novamente mais tarde.</li>`;
  }
}

// Função para exibir os posts na tela
function displayPosts(posts) {
  postsList.innerHTML = posts
    .slice(0, 10) // Limita a exibição aos primeiros 10 posts
    .map(post => `
      <li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </li>
    `)
    .join('');
}

// Chamar a função para buscar e exibir os posts ao carregar a página
fetchPosts();