# Desafio2

Este é um projeto Node.js que utiliza Docker Compose para configurar um ambiente de desenvolvimento local com um servidor Node.js e um banco de dados MongoDB.

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
cd desafio2
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

- GET /employees: Retorna todos os funcionários cadastrados.

- POST /employees: Cria um novo funcionário. Envie um corpo JSON com os campos "name" e "role" para criar um funcionário.

- GET /employees/:id: Retorna um funcionário específico pelo ID.

- PUT /employees/:id: Atualiza um funcionário existente pelo ID. Envie um corpo JSON com os campos "name" e "role" para atualizar o funcionário.

- DELETE /employees/:id: Exclui um funcionário pelo ID.

### Exemplos de uso

1. Listar todos os funcionários:

``` bash
GET http://localhost:3000/employees
```

2. Criar um novo funcionário:


``` bash
POST http://localhost:3000/employees
Body:
{
  "name": "João Silva",
  "role": "Desenvolvedor"
}
```

3. Obter um funcionário pelo ID:

``` bash
GET http://localhost:3000/employees/:id
```

4. Atualizar um funcionário pelo ID:


``` bash
PUT http://localhost:3000/employees/:id
Body:
{
  "name": "João da Silva",
  "role": "Engenheiro de Software"
}

```

5. Excluir um funcionário pelo ID:

``` bash
DELETE http://localhost:3000/employees/:id
```