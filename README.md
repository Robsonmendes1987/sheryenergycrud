# Todo List

## 📡 Objetivo

Essa é uma aplicaçao fullstack de Todo list, o objetivo é o usuário após fazer cadastro e validaçao, criar uma lista de tarefas.

<br />

## ⚙️ Tecnologias

- Node.js
- Express.js
- Sequelize.js
- MySQL
- Json Web Tokens
- Docker
- Docker Compose
- React
- Material UI
- React Router Dom

## 🚀 Instalação e execução

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar está aplicação é necessário ter *Git, **Node, **Docker* e o *Docker Compose* instalados no seu computador. O Docker Compose precisa estar na versão *1.29* ou superior e o Node na versão 16.

Para conseguir executar os comandos do abaixo também é necessário que seu sistema operacional tenha um terminal Bash instalado. Caso você esteja utilizando Linux ou macOS, o Bash já vem instalado por padrão. Porém, se o seu sistema for Windows, você pode [aprender como instalar](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/).

### 1 - Clone o repositório:


git clone git@github.com:robsonmendes1987/Todolist.git


### 2 - Na raíz do projeto, entre na pasta app e suba os containers do frontend (`frontend_todo`), do backend (`backend_todo`) e o banco de dados (`todo-list-db`) com o comando:

    docker-compose up -d --build

Os containers estão mapeados nas seguintes portas:

- frontend_todo: 3000
- backend_todo: 3001
- todo-list-db: 3002

Para parar os containers, na pasta raiz do projeto execute o comando:

    docker-compose down
    
### 3 - Acesse a aplicação:

    localhost:3000 

</details>
<br />

## 🔎 Rotas

### User

<details>
  <summary><strong>POST /user/register</strong></summary>
  <br/ >

• Cadastra um novo usuário pelo email e senha.

</details>

<br />

### Login

<details>
  <summary><strong>POST /login</strong></summary>
  <br/ >

• Faz o login pelo email e senha.

</details>

<br />

### Newtodo

<details>
  <summary><strong>POST /newtodo</strong></summary>
  <br/ >

• Cria uma nova tarefa.

</details>

<details>
  <summary><strong>GET /newtodo</strong></summary>
  <br/ >

• Traz todas as tarefas

</details>

<details>
  <summary><strong>GET /newtodo/:id</strong></summary>
  <br/ >

• Traz uma tarefa pelo id.

</details>

<details>
  <summary><strong>DELETE /newtodo/:id</strong></summary>
  <br/ >

• Deleta uma tarefa pelo id.

</details>

<details>
  <summary><strong>PUT /newtodo/:id</strong></summary>
  <br/ >

• Edita uma tarefa pelo id.

</details>

<br />