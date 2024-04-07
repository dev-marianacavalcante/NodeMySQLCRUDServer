### Projeto de Servidor Node.js com MySQL e Docker Compose

Este projeto consiste em um servidor Node.js que se comunica com um banco de dados MySQL para realizar operações básicas de CRUD (criação, leitura, atualização e exclusão) em uma tabela de itens.

Estrutura do Projeto
O projeto é dividido em dois arquivos principais:

`mysql.js`: Este arquivo contém a configuração da conexão com o banco de dados MySQL, bem como funções para realizar operações como solicitar, enviar, atualizar e deletar itens na tabela do banco de dados.

`server.js`: Este arquivo é responsável por criar e configurar o servidor Fastify, definir as rotas para manipular as requisições HTTP e chamar as funções correspondentes do arquivo mysql.js para interagir com o banco de dados.

`docker-compose.js`: Este arquivo define a configuração do ambiente Docker, incluindo a inicialização de um contêiner MySQL com as credenciais e configurações necessárias para o funcionamento do servidor.

## Configuração do Banco de Dados com Docker Compose

O arquivo docker-compose.yml define um serviço chamado db que utiliza a imagem oficial do MySQL versão 5.7. Ele inicializa um contêiner MySQL com as seguintes configurações:

- Nome do banco de dados: db
- Nome de usuário: user
- Senha do usuário: password
- Senha do root: password

Além disso, o contêiner expõe a porta 3306, que é a porta padrão do MySQL, e mapeia essa porta para a mesma porta no host local.

## Executando o Servidor com Docker Compose

Para executar o servidor utilizando Docker Compose, siga estas etapas:

- Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

- Clone este repositório em seu ambiente local.

- Abra um terminal na pasta raiz do projeto.

Execute o seguinte comando para iniciar os serviços definidos no arquivo docker-compose.yml:

`docker-compose up -d`

O Docker Compose inicializará o contêiner MySQL e o servidor Node.js. Você poderá verificar se os contêineres estão em execução usando o comando docker ps.

Após iniciar os contêineres, você pode acessar o servidor Node.js na porta 3000 do host local.

## Configuração do Banco de Dados

Antes de executar o servidor, certifique-se de configurar corretamente o banco de dados MySQL com as credenciais apropriadas. Você precisará criar um banco de dados com uma tabela chamada items, contendo pelo menos duas colunas: name e email.

## Executando o Servidor

Para executar o servidor, siga estas etapas:

- Certifique-se de ter o Node.js e o MySQL instalados em sua máquina.

- Clone este repositório em seu ambiente local.

- Configure o banco de dados MySQL conforme mencionado anteriormente.

- Abra um terminal na pasta raiz do projeto e instale as dependências com o comando:
  `npm install`

- Em seguida, inicie o servidor com o comando:
  `node server.js`

- O servidor será iniciado e estará ouvindo as requisições na porta 3000.

## Uso das Rotas

O servidor possui as seguintes rotas, cada uma executando uma operação específica no banco de dados:

- GET /: Rota para solicitar todos os itens da tabela.

- POST /items: Rota para enviar um novo item para ser adicionado à tabela.

- PUT /items/:id: Rota para atualizar um item existente na tabela com o ID fornecido.

- DELETE /items/:id: Rota para deletar um item da tabela com o ID fornecido.

Certifique-se de utilizar um cliente HTTP adequado (como cURL ou Postman) para testar essas rotas e verificar o funcionamento do servidor.

# Observações

Este projeto é apenas um exemplo básico e pode não ser adequado para uso em ambientes de produção sem modificações adicionais para segurança, escalabilidade e robustez.

Recomenda-se implementar tratamento de erros mais robusto, validação de entrada de dados e autenticação/autorização adequadas para garantir a segurança e integridade dos dados.
