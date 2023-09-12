# Desafio3

Este é um projeto Node.js que tem como objetivo integrar uma aplicação CRUD de funcionários com a API Random User Generator.

## Pré-requisitos

- Node.js instalado na sua máquina
- Docker e Docker Compose instalados na sua máquina

## Configuração

1. Clone este repositório para a sua máquina:

   ```bash
   git clone https://github.com/marquesaline/desafios-cognum.git
   ```

2. Navegue para a pasta do projeto usando o seguinte comando:

```bash
cd desafio3
```

3. Instalar Dependências e Executar o Servidor:

```bash
npm install
```

E depois:

```bash
docker-compose up --build
```

## Rotas da API

A API oferece as seguintes rotas para gerenciamento de funcionários:

- GET /api/populate: Popula o banco de dados com 10 novos funcionários aleatórios da API Random User Generator

- GET /api/employees: Retorna todos os funcionários cadastrados.

- POST /api/employees: Cria um novo funcionário. Envie um corpo JSON com os campos "name" e "role" para criar um funcionário.

- GET /api/employees/:id: Retorna um funcionário específico pelo ID.

- PUT /api/employees/:id: Atualiza um funcionário existente pelo ID. Envie um corpo JSON com os campos "name" e "role" para atualizar o funcionário.

- DELETE /api/employees/:id: Exclui um funcionário pelo ID.

### Exemplos de uso

1. Popular banco de dados com 10 funcionários:

``` bash
GET http://localhost:3000/api/populate
```

Exemplo de resposta: 

``` bash
[
  {
    "firstName": "João",
    "lastName": "Silva",
    "gender": "male",
    "address": {
      "street": "123 Main St",
      "city": "Exampleville",
      "state": "CA",
      "country": "United States",
      "postalCode": "12345"
    },
    "dateOfBirth": "1990-01-15T08:30:00.000Z",
    "email": "joao.silva@example.com"
  },
  // Outros funcionários
]

```

2. Listar todos os funcionários:

``` bash
GET http://localhost:3000/api/employees
```

Exemplo de resposta:

``` bash
[
  {
    "_id": "5f9d8f30a2950f0f240a05ed",
    "firstName": "João",
    "lastName": "Silva",
    "gender": "male",
    "address": {
      "street": "123 Main St",
      "city": "Exampleville",
      "state": "CA",
      "country": "United States",
      "postalCode": "12345"
    },
    "dateOfBirth": "1990-01-15T08:30:00.000Z",
    "email": "joao.silva@example.com",
    "__v": 0
  },
  // Outros funcionários
]

```
3. Criar um novo funcionário:

``` bash
POST http://localhost:3000/api/employees
Body:
{
  "firstName": "João",
  "lastName": "Silva",
  "gender": "male",
  "address": {
    "street": "123 Main St",
    "city": "Exampleville",
    "state": "CA",
    "country": "United States",
    "postalCode": "12345"
  },
  "dateOfBirth": "1990-01-15T08:30:00.000Z",
  "email": "joao.silva@example.com"
}
```

Exemplo de resposta: 

``` bash
{
    "_id": "5f9d8f30a2950f0f240a05ed",
    "firstName": "João",
    "lastName": "Silva",
    "gender": "male",
    "address": {
      "street": "123 Main St",
      "city": "Exampleville",
      "state": "CA",
      "country": "United States",
      "postalCode": "12345"
    },
    "dateOfBirth": "1990-01-15T08:30:00.000Z",
    "email": "joao.silva@example.com",
    "__v": 0
}
```

4. Obter um funcionário pelo ID:

``` bash
GET http://localhost:3000/api/employees/:id
```

Exemplo de resposta: 

``` bash
{
    "_id": "5f9d8f30a2950f0f240a05ed",
    "firstName": "João",
    "lastName": "Silva",
    "gender": "male",
    "address": {
      "street": "123 Main St",
      "city": "Exampleville",
      "state": "CA",
      "country": "United States",
      "postalCode": "12345"
    },
    "dateOfBirth": "1990-01-15T08:30:00.000Z",
    "email": "joao.silva@example.com",
    "__v": 0
},
```

5. Atualizar um funcionário pelo ID:


``` bash
PUT http://localhost:3000/api/employees/:id
Body:
{
  "firstName": "João",
  "lastName": "Silva",
  "gender": "male",
  "address": {
    "street": "123 Main St",
    "city": "Exampleville",
    "state": "CA",
    "country": "United States",
    "postalCode": "12345"
  },
  "dateOfBirth": "1990-01-15T08:30:00.000Z",
  "email": "joao.silva@example.com"
}
```

Exemplo de resposta: 

``` bash
{
    "_id": "5f9d8f30a2950f0f240a05ed",
    "firstName": "João",
    "lastName": "Silva",
    "gender": "male",
    "address": {
      "street": "123 Main St",
      "city": "Exampleville",
      "state": "CA",
      "country": "United States",
      "postalCode": "12345"
    },
    "dateOfBirth": "1990-01-15T08:30:00.000Z",
    "email": "joao.silva@example.com",
    "__v": 0
}
```

6. Excluir um funcionário pelo ID:

``` bash
DELETE http://localhost:3000/api/employees/:id
```

Exemplo de resposta: 

``` bash
{
  "message": "Employee deleted successfully"
}
```