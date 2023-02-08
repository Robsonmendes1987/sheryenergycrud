# Controle de dados de Clientes

## 📡 Objetivo

Essa é uma aplicaçao fullstack de Cadastro de clientes e consumo de APIS, o objetivo é o usuário após A validaçao, poder interagir com  3 apis em paginas diferentes e tambem poder cadastrar atualizar e excluir clientes do banco de dados em uma pagina especifica.

<br />

## ⚙️ Tecnologias

- Node.js
- Express.js
- MongoDB
- Mongoose
- Json Web Tokens
- Docker
- Docker Compose
- React COntext API
- Material UI
- Tailwindcss
- React Router Dom
- Axios

## 🚀 Instalação e execução

<details>
<summary>Instalação e execução com Docker</summary>
<br />

Para rodar está aplicação é necessário ter *Git, **Node, **Docker* e o *Docker Compose* instalados no seu computador. O Docker Compose precisa estar na versão *1.29* ou superior e o Node na versão 16.

Para conseguir executar os comandos do abaixo também é necessário que seu sistema operacional tenha um terminal Bash instalado. Caso você esteja utilizando Linux ou macOS, o Bash já vem instalado por padrão. Porém, se o seu sistema for Windows, você pode [aprender como instalar](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/).

### 1 - Clone o repositório:


git clone git@github.com:Robsonmendes1987/sheryenergycrud.git


### 2 - Na raíz do projeto, entre na pasta app e suba os containers do frontend (`frontend_shery`), do backend (`shary-energy-backend`) e o banco de dados (`shary-energy-db`) com o comando:

    docker-compose up -d --build

Os containers estão mapeados nas seguintes portas:

- frontend_shery: 5173
- backend_todo: 3002
- todo-list-db: 27017

Para parar os containers, na pasta raiz do projeto execute o comando:

    docker-compose down
    
### 3 - Acesse a aplicação:

    localhost:3003 

</details>
<br />

## 🔎 Rotas

### Validaçao pagina inicial para acessar a aplicação
UserName: UserAdmin
<br />
PassWord: 123456
### Client

<details>
  <summary><strong>POST /register</strong></summary>
  <br/ >

• Valida o  usuário pelo userEmail e password.

</details>

<br />


### NewCliente

<details>
  <summary><strong>POST /cliente</strong></summary>
  <br/ >

• Cadastra um novo cliente no banco.

</details>

<details>
  <summary><strong>GET /cleinte</strong></summary>
  <br/ >

• Traz todas os clientes

</details>

<details>
  <summary><strong>DELETE /cliente/:id</strong></summary>
  <br/ >

• Deleta um cliente pelo id.

</details>

<details>
  <summary><strong>PUT /cliente/:id</strong></summary>
  <br/ >

• Edita um cliente pelo id.

</details>

<br />
