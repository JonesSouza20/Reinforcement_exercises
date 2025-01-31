const express = require('express'); // Importando o módulo express para criar o servidor web.
const { createServer } = require('node:http'); // Importando a função createServer do módulo http para criar um servidor HTTP.
const { join } = require('node:path'); // Importando a função join do módulo path para trabalhar com caminhos de arquivos e diretórios.
const { Server } = require('socket.io'); // Importando a classe Server do módulo socket.io para gerenciar conexões WebSocket.
const sqlite3 = require('sqlite3'); // Importando o módulo sqlite3 para interagir com o banco de dados SQLite.
const { open } = require('sqlite'); // Importando a função open do módulo sqlite para abrir o banco de dados SQLite.
const { availableParallelism } = require('node:os'); // Importando a função availableParallelism do módulo os para obter o número de CPUs disponíveis.
const cluster = require('node:cluster'); // Importando o módulo cluster para gerenciar processos de trabalho.
const { createAdapter, setupPrimary } = require('@socket.io/cluster-adapter'); // Importando as funções createAdapter e setupPrimary do módulo @socket.io/cluster-adapter para configuração de clusters.

if (cluster.isPrimary) { // Verifica se o processo atual é o processo primário do cluster.
  const numCPUs = availableParallelism(); // Obtém o número de CPUs disponíveis.
  for (let i = 0; i < numCPUs; i++) { // Cria um processo de trabalho para cada CPU disponível.
    cluster.fork({ // Cria um novo processo de trabalho.
      PORT: 3000 + i // Define a porta para o processo de trabalho como 3000 + i.
    }); // Fim do cluster.fork.
  }

  return setupPrimary(); // Configura o processo primário do cluster.
}

async function main() { // Função principal assíncrona.
  const db = await open({ // Abre uma conexão com o banco de dados SQLite.
    filename: 'chat.db', // Nome do arquivo do banco de dados.
    driver: sqlite3.Database // Driver do SQLite.
  }); // Fim da configuração do db.

  await db.exec(` 
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_offset TEXT UNIQUE,
      content TEXT
    );
  `); // Cria a tabela messages no banco de dados, se não existir.

  const app = express(); // Cria uma instância do express.
  const server = createServer(app); // Cria um servidor HTTP com a instância do express.
  const io = new Server(server, { // Cria uma instância do socket.io com o servidor HTTP.
    connectionStateRecovery: {}, // Habilita a recuperação do estado da conexão.
    adapter: createAdapter() // Configura o adaptador de cluster para o socket.io.
  });

  app.get('/', (req, res) => { // Define uma rota para a raiz do servidor.
    res.sendFile(join(__dirname, 'index.html')); // Envia o arquivo index.html como resposta.
  });

  io.on('connection', async (socket) => { // Lida com novas conexões WebSocket.
    socket.on('chat message', async (msg, clientOffset, callback) => { // Lida com mensagens de chat enviadas pelos clientes.
      let result; // Variável para armazenar o resultado da operação no banco de dados.
      try {  
        result = await db.run('INSERT INTO messages (content, client_offset) VALUES (?, ?)', msg, clientOffset); // Insere a mensagem no banco de dados.
      } catch (e) { 
        if (e.errno === 19 /* SQLITE_CONSTRAINT */) { // Verifica se o erro é uma violação de constraint.
          callback(); // Chama o callback para indicar que a operação foi concluída.
        } else {
          // Não faz nada, apenas deixa o cliente tentar novamente.
        }
        return; // Retorna para encerrar a execução.
      }
      io.emit('chat message', msg, result.lastID); // Emite a mensagem para todos os clientes conectados.
      callback(); // Chama o callback para indicar que a operação foi concluída.
    }); // Fim do socket.on.

    if (!socket.recovered) { // Verifica se a conexão não foi recuperada.
      try { // Tenta executar a operação.
        await db.each('SELECT id, content FROM messages WHERE id > ?', // Seleciona mensagens do banco de dados.
          [socket.handshake.auth.serverOffset || 0], // Define o offset do servidor.
          (_err, row) => { // Função de callback para processar cada linha.
            socket.emit('chat message', row.content, row.id); // Emite a mensagem para o cliente.
          } // Fim da função de callback.
        )
      } catch (e) { // Lida com erros na operação.
        console.error(e); // Exibe o erro no console.
      } // Fim do catch.
    }
  });

  const port = process.env.PORT; // Obtém a porta do ambiente de execução.

  server.listen(port, () => { // Inicia o servidor na porta definida.
    console.log(`Servidor rodando em http://localhost:${port}`); // Exibe uma mensagem de que o servidor está rodando.
  });
}

main(); // Chama a função principal.
