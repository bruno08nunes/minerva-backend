# Minerva

Esta é a documentação do backend da aplicação Minerva e conterá explicações sobre as rotas, arquivos e outras anotações de desenvolvimento. Para mais informações sobre a lista de tarefas do desenvolvimento da aplicação, consulte: [Notion - Minerva](https://www.notion.so/Projeto-Profissional-Desenvolvimento-de-Sistemas-1ea09dc95b2380e698b0fc78f3d460a0).

## Sumário

1. [Descrição](#descrição)
2. [Lista de Tarefas](#lista-de-tarefas)
3. [Desenvolvimento](#desenvolvimento)
    1. [Configurar no Git](#configurar-no-git)
    2. [Clonando o Repositório na Máquina](#clonando-o-repositório-na-máquina)
    3. [Configurando Arquivos e Servidor](#configurando-arquivos-e-servidor)
    4. [Iniciando o Servidor](#iniciando-o-servidor)
    5. [Fazendo Alterações no Projeto](#fazendo-alterações-no-projeto)
4. [Linguagens, Bibliotecas, Frameworks e Recursos Utilizados](#linguagens-bibliotecas-frameworks-e-recursos-utilizados)
5. [Explicação do Código](#explicação-do-código)
    1. [README.md](#readmemd)
    2. [LICENSE](#license)
    3. [.prettierrc](#prettierrc)
    4. [.gitignore](#gitignore)
    5. [jest.config.cjs](#jestconfigcjs)
    6. [package.json e package-lock.json](#packagejson-e-package-lockjson)
    7. [.env.example](#envexample)
    8. [tsconfig.json](#tsconfigjson)
    9. [swagger.json](#swaggerjson)
    10. [node_modules](#node_modules)
    11. [prisma](#prisma)
    12. [src](#src)
    13. [tests](#tests)
    14. [types](#types)
6. [Rotas e Banco de Dados](#rotas-e-banco-de-dados)
7. [Formatação e Convenções](#formatação-e-convenções)
8. [Deploy](#deploy)

## Desenvolvimento

Você precisa ter uma conta no github e ter sido colocado como colaborador do projeto para executar os passos abaixo.

### Configurar no Git

Caso não esteja configurado no Git, você deve colocar no git bash os comandos:

```
git config --global user.name "Nome de Usuário"
git config --global user.email "emailgithub@gmail.com"
```

### Clonando o repositório na máquina

É necessário fazer uma clonagem do repositório na sua máquina. Para isso, você deve colocar no git bash os comandos:

```
git clone https://github.com/bruno08nunes/minerva-backend.git
cd minerva-backend
```

### Configurando arquivos e servidor

Primeiramente você precisa definir as variáveis de ambiente. Crie um arquivo .env, copie as informações presentes em .env.example e substitua os valores para os adequados.

Após isso, você deve instalar as depências com o código abaixo:

```
npm i
```

Dessa forma, o banco de dados e seu sistema no cliente são criados automaticamente, desde que você possua um servidor do banco de dados rodando (MySQL).

### Iniciando o servidor

Por fim, você precisa rodar o servidor no modo de desenvolvimento.

```
npm run dev
```

### Fazendo alterações no projeto

Antes de começar a trabalhar, é sempre recomendado puxar as alterações feitas para a sua máquina, usando o comando:

```
git pull origin main
```

Também é recomendado criar uma nova branch para fazer as alterações. Você deve fazer usando:

```
git checkout -b dev
```

É recomendado que as alterações sejam feitas por etapas, de pouco a pouco. Você deve fazer um commit com as alterações feitas, colocando no git bash:

```
git add .
git commit -m "Mensagem descrevendo as alterações"
```

Depois é necessário apenas enviar para o repositório remoto. Caso você já esteja conectado entre o git e o github, você deve executar o primeiro código, se não, o segundo.

1.

```
git push -u origin main
```

2.

```
git push origin main
```

Caso haja mais dúvidas, veja: [Git e Github - Tutorial](https://docs.google.com/document/d/1UeFRh8nkwYq1HemMNNc_1RpyQb_FGNWZEEgKtZuF8Ko/edit)

## Linguagens, Bibliotecas, Frameworks e Recursos Utilizados

-   TypeScript;
    -   Node.js;
    -   Prisma
    -   Express; e
    -   Jest
-   MySQL.

## Explicação do Código

### README.md

Documentação do backend do projeto projeto

### LICENSE

Licença de copyright da aplicação

### .prettierrc

Arquivo com estilização padrão para o desenvolvimento do site, usado em conjunto com a extensão presente no Visual Studio Code e outras IDEs: Prettier.

### .gitignore

Arquivo que serve para não levar arquivos que não devem ser colocados no github.

### jest.config.cjs

Arquivo de configuração do Jest, que permite executar testes do código TypeScript.

### package.json e package-lock.json

Informações sobre as dependências do projeto. A primeira pode sofrer algumas alterações, como na parte de scripts, enquanto a segunda não deve ser alterada.

### .env.example

Contém as variáveis de ambiente necessárias para o funcionamento do servidor. Depende de questões do desenvolvedor, que deve criar um arquivo .env com essas variáveis, mudando os valores conforme o necessário.

### tsconfig.json

Arquivo de configuração do TypeScript.

### swagger.json

Arquivo de configuração da documentação Swagger.

### node_modules

Pasta com as dependências do projeto, instalada com npm i. Não deve ser alterada ou enviada para o Github de forma nenhuma.

### prisma

Pasta com a configuração do schema do prisma, juntamente com suas migrations.

### src

Contém os arquivos TypeScript usados no backend. Sua estrutura de pastas segue:

-   controllers - Onde os dados são recebidos e tratados, passando ele futuramente para os services;
-   env - Contém a configuração das variáveis de ambiente da aplicação;
-   lib - Contém configurações de bibliotecas externas chaves para a aplicação;
-   middlewares - Contém os middlewares da aplicação, ou seja, funções intermediárias entre as rotas da API;
-   repositories - Contém os repositórios para lidar com as entidades do banco de dados através do Repository Pattern. Contém uma interface e dois tipos de repositório para cada entidade: InMemory (em memória através de array); e Prisma (através do ORM Prisma);
-   routes - Onde as rotas da aplicação são definidas;
-   services - Articulam a lógica de negócio da sua aplicação, além de ser responsável por se comunicar com as camadas mais internas do Software, como por exemplo, uma camada de Dados; e
-   utils - Contém funções úteis e genéricas para a aplicação que podem ser usadas em diversos contextos.

Além disso, possui os arquivos:

-   app.ts - Definição do Express, suas rotas e middlewares; e
-   server.ts - Inicia o servidor.

### tests

Essa pasta contém os testes da aplicação que são executados com Jest através do comando:

```
npm test
```

### types

Contém a definição de alguns tipos extras e necessários para o funcionamento da API com TypeScript.

## Rotas e Banco de Dados

Você pode ver as rotas da aplicação na documentação do Swagger, presente em http://localhost:PORT/api/docs.

Você pode ver o banco de dados no arquivo de definição do Prisma.

## Formatação e Convenções

Por padrão, os códigos do projeto devem seguir:

-   Geral:
    -   Quatro (4) espaços para indentação do código. Para facilitar isso, você deve instalar a extensão Prettier.
-   TypeScript:
    -   Nome de variáveis em inglês;
    -   Nome de variáveis coerentes, com palavras separadas por _camelCase_ (como: `carrinhoDeProdutos`); e
    -   Variáveis declaradas apenas com `let` e `const`.

## Deploy

### Repositório Remoto

O repositório remoto está no Github: <https://github.com/bruno08nunes/minerva-backend>