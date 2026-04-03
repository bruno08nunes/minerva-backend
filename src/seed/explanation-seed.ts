import { prisma } from "../lib/prisma";

const variableExplanations = [
    {
        id: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
        title: "Introdução às Variáveis",
        description:
            "Variáveis são espaços de memória que podem armazenar valores que podem ser alterados durante a execução do programa. Elas são essenciais para armazenar dados temporários e realizar operações.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Variáveis são espaços de memória que podem armazenar valores que podem ser alterados durante a execução do programa. Elas são essenciais para armazenar dados temporários e realizar operações. Você pode declarar uma variável com a palavra 'let'",
                },
                {
                    type: "code",
                    data: "let quantidadeDeMagias = 3",
                },
                {
                    type: "paragraph",
                    data: "Você pode acessar o valor dessa variável a partir do nome dado a ela. O código abaixo mostra o valor 3.",
                },
                {
                    type: "code",
                    data: "console.log(quantidadeDeMagias)",
                },
                {
                    type: "paragraph",
                    data: "Você pode alterar o valor de uma variável já existente.",
                },
                {
                    type: "code",
                    data: "let quantidadeDeMagias = 13\nquantidadeDeMagias = 5",
                },
            ],
        },
        topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
    },
    {
        id: "e2f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
        title: "Constantes",
        description:
            "Constantes são similares às variáveis, porém seus valores jamais mudam.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Constantes são similares às variáveis, porém seus valores jamais mudam. Elas são definidas com a palavra 'const'",
                },
                {
                    type: "code",
                    data: "const numero = 10",
                },
                {
                    type: "paragraph",
                    data: "Tentar alterar o valor de uma constante lança um erro, como no código abaixo.",
                },
                {
                    type: "code",
                    data: "numero = 5",
                },
            ],
        },
        topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
    },
    {
        id: "e3f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
        title: "Tipos de Dados",
        description:
            "As variáveis podem ser de vários tipos: string, números e booleanos.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "As variáveis podem ser de vários tipos: string, números e booleanos. Strings são textos que ficam entre aspas simples (') ou aspas duplas(\").",
                },
                {
                    type: "code",
                    data: 'const nome = "Bruno"',
                },
                {
                    type: "paragraph",
                    data: "Os números, por outro lado, representam valores numéricos inteiros ou decimais e positivos ou negativos. Eles não levam aspas.",
                },
                {
                    type: "code",
                    data: "const numero = 15\nconst decimal = 9.3\nconst negativo = -12",
                },
                {
                    type: "paragraph",
                    data: "Por fim, há também os valores booleanos, que representam algo que pode ser verdadeiro (true) ou falso (false).",
                },
                {
                    type: "code",
                    data: "const eraAmorVerdadeiro = false",
                },
            ],
        },
        topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
    },
];

const operatorExplanations = [
    {
        id: "c7cd2be2-e167-41ee-b47a-ffbfc299eff5",
        title: "Operadores Aritméticos",
        description:
            "Operadores aritméticos são usados para realizar cálculos matemáticos básicos.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Os operadores aritméticos permitem realizar operações matemáticas como soma, subtração, multiplicação e divisão.",
                },
                {
                    type: "code",
                    data: "const soma = 10 + 5\nconst subtracao = 10 - 5\nconst multiplicacao = 10 * 5\nconst divisao = 10 / 5",
                },
                {
                    type: "paragraph",
                    data: "Também existem operadores como o módulo (%), que retorna o resto da divisão, e o operador de exponenciação (**).",
                },
                {
                    type: "code",
                    data: "const resto = 10 % 3\nconst potencia = 2 ** 3",
                },
            ],
        },
        topicId: "218492d4-2a81-4b5a-a0fe-1fd644ee38be",
    },
    {
        id: "a1b2c3d4-e167-41ee-b47a-ffbfc299eff6",
        title: "Operadores de Atribuição",
        description:
            "Operadores de atribuição são usados para definir ou atualizar valores em variáveis.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Operadores de atribuição são usados para definir ou atualizar valores em variáveis. O operador mais comum é o =, que atribui um valor a uma variável.",
                },
                {
                    type: "code",
                    data: "let numero = 10",
                },
                {
                    type: "paragraph",
                    data: "Também existem operadores de atribuição combinados com operações matemáticas.",
                },
                {
                    type: "code",
                    data: "numero += 5\nnumero -= 3\nnumero *= 2\nnumero /= 2",
                },
            ],
        },
        topicId: "218492d4-2a81-4b5a-a0fe-1fd644ee38be",
    },
    {
        id: "b2c3d4e5-e167-41ee-b47a-ffbfc299eff7",
        title: "Operadores Relacionais",
        description: "Operadores relacionais são usados para comparar valores.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Operadores relacionais são usados para comparar valores. Esses operadores retornam um valor booleano (true ou false) após comparar dois valores.",
                },
                {
                    type: "code",
                    data: "10 > 5\n10 < 5\n10 >= 10\n10 <= 5\n10 == '10'\n10 === '10'\n10 != 5\n10 !== '10'",
                },
                {
                    type: "paragraph",
                    data: "O operador == compara apenas o valor, enquanto === compara valor e tipo. Além deles há o operador de diferença (!= ou !==) que seguem a mesma lógica e os operadores que comparam se um valor é maior ou menor que outros (< menor que, <= menor ou igual, > maior que e >= maior ou igual.",
                },
            ],
        },
        topicId: "218492d4-2a81-4b5a-a0fe-1fd644ee38be",
    },
    {
        id: "c3d4e5f6-e167-41ee-b47a-ffbfc299eff8",
        title: "Operadores Lógicos",
        description:
            "Operadores lógicos são usados para combinar expressões booleanas.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Os operadores lógicos permitem criar condições mais complexas usando expressões booleanas (verdadeiro ou falso).",
                },
                {
                    type: "code",
                    data: "true && false // false\ntrue || false // true\n!true // false",
                },
                {
                    type: "paragraph",
                    data: "O operador && (AND) retorna true se ambas as condições forem verdadeiras. O || (OR) retorna true se pelo menos uma for verdadeira. O ! (NOT) inverte o valor lógico.",
                },
            ],
        },
        topicId: "218492d4-2a81-4b5a-a0fe-1fd644ee38be",
    },
];

const conditionalExplanations = [
    {
        id: "d4e5f6g7-e167-41ee-b47a-ffbfc299eff9",
        title: "Estrutura Condicional: if",
        description:
            "A estrutura if é usada para executar um bloco de código somente se uma condição for verdadeira.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "A estrutura if avalia uma condição. Se ela for verdadeira (true), o código dentro do bloco será executado.",
                },
                {
                    type: "code",
                    data: "const idade = 18\n\nif (idade >= 18) {\n  console.log('Maior de idade')\n}",
                },
            ],
        },
        topicId: "7e3748c5-cb38-4304-9319-ba805dd13aa4",
    },
    {
        id: "e5f6g7h8-e167-41ee-b47a-ffbfc299eff0",
        title: "Estrutura Condicional: if...else",
        description:
            "A estrutura if...else permite executar um bloco de código caso a condição seja verdadeira e outro caso seja falsa.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Quando a condição do if é falsa, o bloco dentro do else será executado.",
                },
                {
                    type: "code",
                    data: "const idade = 16\n\nif (idade >= 18) {\n  console.log('Maior de idade')\n} else {\n  console.log('Menor de idade')\n}",
                },
            ],
        },
        topicId: "7e3748c5-cb38-4304-9319-ba805dd13aa4",
    },
    {
        id: "f6g7h8i9-e167-41ee-b47a-ffbfc299eff1",
        title: "Estrutura Condicional: if...else if",
        description:
            "A estrutura if...else if permite verificar múltiplas condições em sequência.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Você pode usar vários else if para testar diferentes condições. O primeiro bloco verdadeiro será executado.",
                },
                {
                    type: "code",
                    data: "const nota = 7\n\nif (nota >= 9) {\n  console.log('Excelente')\n} else if (nota >= 7) {\n  console.log('Aprovado')\n} else if (nota >= 5) {\n  console.log('Recuperação')\n} else {\n  console.log('Reprovado')\n}",
                },
            ],
        },
        topicId: "7e3748c5-cb38-4304-9319-ba805dd13aa4",
    },
    {
        id: "g7h8i9j0-e167-41ee-b47a-ffbfc299eff2",
        title: "Estrutura Condicional: switch",
        description:
            "A estrutura switch é usada para comparar um valor com múltiplos casos possíveis.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "O switch avalia uma expressão e compara com diferentes casos (case). Quando encontra um caso correspondente, executa o bloco de código.",
                },
                {
                    type: "code",
                    data: "const dia = 2\n\nswitch (dia) {\n  case 1:\n    console.log('Domingo')\n    break\n  case 2:\n    console.log('Segunda-feira')\n    break\n  case 3:\n    console.log('Terça-feira')\n    break\n  default:\n    console.log('Dia inválido')\n}",
                },
                {
                    type: "paragraph",
                    data: "O break é usado para interromper a execução do switch após encontrar um caso válido. Sem ele, os próximos casos também seriam executados. O default é executado quando nenhum dos casos corresponde ao valor.",
                },
            ],
        },
        topicId: "7e3748c5-cb38-4304-9319-ba805dd13aa4",
    },
];

const loopsExplanations = [
    {
        id: "h8i9j0k1-e167-41ee-b47a-ffbfc299eff3",
        title: "Loop: while",
        description:
            "O loop while executa um bloco de código enquanto uma condição for verdadeira.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "O while verifica a condição antes de executar o bloco. Se a condição for verdadeira, o código será repetido.",
                },
                {
                    type: "code",
                    data: "let contador = 0\n\nwhile (contador < 5) {\n  console.log(contador)\n  contador++\n}",
                },
                {
                    type: "paragraph",
                    data: "É importante garantir que a condição eventualmente se torne falsa, evitando loops infinitos.",
                },
            ],
        },
        topicId: "d20a6380-9ee1-4a41-81fe-758133aaf35c",
    },
    {
        id: "i9j0k1l2-e167-41ee-b47a-ffbfc299eff4",
        title: "Loop: do...while",
        description:
            "O loop do...while executa o bloco de código pelo menos uma vez antes de verificar a condição.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Diferente do while, o do...while executa o código primeiro e só depois verifica a condição.",
                },
                {
                    type: "code",
                    data: "let contador = 0\n\ndo {\n  console.log(contador)\n  contador++\n} while (contador < 5)",
                },
                {
                    type: "paragraph",
                    data: "Mesmo que a condição seja falsa inicialmente, o bloco será executado ao menos uma vez.",
                },
            ],
        },
        topicId: "d20a6380-9ee1-4a41-81fe-758133aaf35c",
    },
    {
        id: "j0k1l2m3-e167-41ee-b47a-ffbfc299eff5",
        title: "Loop: for",
        description:
            "O loop for é usado quando sabemos quantas vezes queremos repetir um bloco de código.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "O for possui três partes: inicialização, condição e incremento.",
                },
                {
                    type: "code",
                    data: "for (let i = 0; i < 5; i++) {\n  console.log(i)\n}",
                },
                {
                    type: "paragraph",
                    data: "Esse loop começa em 0, executa enquanto i for menor que 5 e incrementa i a cada repetição.",
                },
            ],
        },
        topicId: "d20a6380-9ee1-4a41-81fe-758133aaf35c",
    },
    {
        id: "k1l2m3n4-e167-41ee-b47a-ffbfc299eff6",
        title: "Controle de Loop: break e continue",
        description:
            "As palavras-chave break e continue controlam o fluxo de execução dentro dos loops.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "O break interrompe completamente o loop antes que ele termine naturalmente.",
                },
                {
                    type: "code",
                    data: "for (let i = 0; i < 5; i++) {\n  if (i === 3) {\n    break\n  }\n  console.log(i)\n}",
                },
                {
                    type: "paragraph",
                    data: "O continue pula a iteração atual e passa para a próxima.",
                },
                {
                    type: "code",
                    data: "for (let i = 0; i < 5; i++) {\n  if (i === 3) {\n    continue\n  }\n  console.log(i)\n}",
                },
            ],
        },
        topicId: "d20a6380-9ee1-4a41-81fe-758133aaf35c",
    },
];

const functionExplanations = [
    {
        id: "l2m3n4o5-e167-41ee-b47a-ffbfc299eff7",
        title: "Funções",
        description:
            "Funções são blocos de código reutilizáveis que executam uma tarefa específica.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Uma função permite agrupar instruções e executá-las sempre que necessário, evitando repetição de código.",
                },
                {
                    type: "code",
                    data: "function saudacao() {\n  console.log('Olá!')\n}",
                },
                {
                    type: "paragraph",
                    data: "Para executar a função, basta chamá-la pelo nome.",
                },
                {
                    type: "code",
                    data: "saudacao()",
                },
            ],
        },
        topicId: "b6101fef-e2c7-4c68-91dc-d47f10ba497c",
    },
    {
        id: "m3n4o5p6-e167-41ee-b47a-ffbfc299eff8",
        title: "Funções: Parâmetros e Retorno",
        description:
            "Funções podem receber valores (parâmetros) e retornar resultados.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Os parâmetros permitem que a função receba dados externos para trabalhar.",
                },
                {
                    type: "code",
                    data: "function soma(a, b) {\n  return a + b\n}",
                },
                {
                    type: "paragraph",
                    data: "O return envia um valor de volta para quem chamou a função.",
                },
                {
                    type: "code",
                    data: "const resultado = soma(5, 3)\nconsole.log(resultado)",
                },
            ],
        },
        topicId: "b6101fef-e2c7-4c68-91dc-d47f10ba497c",
    },
    {
        id: "n4o5p6q7-e167-41ee-b47a-ffbfc299eff9",
        title: "Funções Recursivas",
        description: "Funções recursivas são funções que chamam a si mesmas.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "A recursão acontece quando uma função se chama dentro dela mesma. É necessário ter uma condição de parada para evitar loops infinitos.",
                },
                {
                    type: "code",
                    data: "function contagem(n) {\n  if (n === 0) {\n    return\n  }\n\n  console.log(n)\n  contagem(n - 1)\n}",
                },
                {
                    type: "paragraph",
                    data: "Nesse exemplo, a função continua chamando a si mesma até que n seja igual a 0.",
                },
            ],
        },
        topicId: "b6101fef-e2c7-4c68-91dc-d47f10ba497c",
    },
];

const arrayExplanations = [
    {
        id: "o5p6q7r8-e167-41ee-b47a-ffbfc299eff0",
        title: "Arrays: Conceitos Básicos",
        description:
            "Arrays são estruturas que permitem armazenar múltiplos valores em uma única variável.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Um array é uma lista de valores organizados por índices, começando do 0.",
                },
                {
                    type: "code",
                    data: "const frutas = ['maçã', 'banana', 'laranja']",
                },
                {
                    type: "paragraph",
                    data: "Você pode acessar os elementos usando seus índices (que começam em 0).",
                },
                {
                    type: "code",
                    data: "console.log(frutas[0]) // maçã\nconsole.log(frutas[1]) // banana",
                },
            ],
        },
        topicId: "36e04352-0d70-4198-8dfd-0e064e0d7e78",
    },
    {
        id: "p6q7r8s9-e167-41ee-b47a-ffbfc299eff1",
        title: "Arrays: Manipulação",
        description:
            "Métodos básicos para adicionar e remover elementos de arrays.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "O método push adiciona um elemento ao final do array, enquanto pop remove o último elemento.",
                },
                {
                    type: "code",
                    data: "const numeros = [1, 2, 3]\n\nnumeros.push(4)\nconsole.log(numeros)\n\nnumeros.pop()\nconsole.log(numeros)",
                },
                {
                    type: "paragraph",
                    data: "A propriedade length retorna o tamanho do array.",
                },
                {
                    type: "code",
                    data: "console.log(numeros.length)",
                },
            ],
        },
        topicId: "36e04352-0d70-4198-8dfd-0e064e0d7e78",
    },
    {
        id: "q7r8s9t0-e167-41ee-b47a-ffbfc299eff2",
        title: "Arrays: Métodos Avançados",
        description: "Métodos úteis para buscar, copiar e modificar arrays.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "O includes verifica se um valor existe no array, enquanto indexOf retorna a posição do elemento.",
                },
                {
                    type: "code",
                    data: "const frutas = ['maçã', 'banana', 'laranja']\n\nfrutas.includes('banana')\nfrutas.indexOf('laranja')",
                },
                {
                    type: "paragraph",
                    data: "O slice cria uma cópia de parte do array sem alterar o original.",
                },
                {
                    type: "code",
                    data: "const copia = frutas.slice(0, 2)",
                },
                {
                    type: "paragraph",
                    data: "O splice altera o array original, podendo adicionar ou remover elementos.",
                },
                {
                    type: "code",
                    data: "frutas.splice(1, 1) // remove 1 elemento a partir do índice 1",
                },
            ],
        },
        topicId: "36e04352-0d70-4198-8dfd-0e064e0d7e78",
    },
    {
        id: "r8s9t0u1-e167-41ee-b47a-ffbfc299eff3",
        title: "Loops em Arrays",
        description: "Formas comuns de percorrer arrays em JavaScript.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "O for...of percorre diretamente os valores do array.",
                },
                {
                    type: "code",
                    data: "const numeros = [1, 2, 3]\n\nfor (const num of numeros) {\n  console.log(num)\n}",
                },
                {
                    type: "paragraph",
                    data: "O forEach executa uma função para cada elemento do array.",
                },
                {
                    type: "code",
                    data: "numeros.forEach((num) => {\n  console.log(num)\n})",
                },
                {
                    type: "paragraph",
                    data: "O map cria um novo array com base na transformação dos elementos.",
                },
                {
                    type: "code",
                    data: "const dobrados = numeros.map((num) => num * 2)\nconsole.log(dobrados)",
                },
            ],
        },
        topicId: "36e04352-0d70-4198-8dfd-0e064e0d7e78",
    },
];

const objExplanations = [
    {
        id: "s9t0u1v2-e167-41ee-b47a-ffbfc299eff4",
        title: "Objetos Literais",
        description:
            "Objetos literais são estruturas que permitem armazenar dados em pares de chave e valor.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Objetos são estruturas que permitem armazenar dados em pares de chave e valor. Um objeto é uma coleção de propriedades, onde cada propriedade possui uma chave e um valor.",
                },
                {
                    type: "code",
                    data: "const pessoa = {\n  nome: 'Bruno',\n  idade: 25,\n  ativo: true\n}",
                },
                {
                    type: "paragraph",
                    data: "Você pode acessar os valores usando ponto (.) ou colchetes ([]).",
                },
                {
                    type: "code",
                    data: "console.log(pessoa.nome)\nconsole.log(pessoa['idade'])",
                },
            ],
        },
        topicId: "205bf383-5b91-4502-a489-f9dd250fdcc1",
    },
    {
        id: "t0u1v2w3-e167-41ee-b47a-ffbfc299eff5",
        title: "Prototype Chain e this",
        description:
            "Objetos em JavaScript herdam propriedades através da prototype chain e utilizam 'this' para referenciar o contexto atual.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Todo objeto em JavaScript possui um protótipo, que permite herdar propriedades e métodos de outros objetos.",
                },
                {
                    type: "code",
                    data: "const animal = {\n  falar() {\n    console.log('Som genérico')\n  }\n}\n\nconst cachorro = Object.create(animal)\ncachorro.falar()",
                },
                {
                    type: "paragraph",
                    data: "A palavra-chave 'this' se refere ao objeto atual onde está sendo utilizada.",
                },
                {
                    type: "code",
                    data: "const pessoa = {\n  nome: 'Ana',\n  saudacao() {\n    console.log('Olá, meu nome é ' + this.nome)\n  }\n}\n\npessoa.saudacao()",
                },
            ],
        },
        topicId: "205bf383-5b91-4502-a489-f9dd250fdcc1",
    },
    {
        id: "u1v2w3x4-e167-41ee-b47a-ffbfc299eff6",
        title: "Classes",
        description:
            "Classes são uma forma moderna de criar objetos e trabalhar com herança em JavaScript.",
        content: {
            toJSON: () => [
                {
                    type: "paragraph",
                    data: "Classes permitem definir modelos (templates) para criar objetos com propriedades e métodos.",
                },
                {
                    type: "code",
                    data: "class Pessoa {\n  constructor(nome, idade) {\n    this.nome = nome\n    this.idade = idade\n  }\n\n  saudacao() {\n    console.log('Olá, meu nome é ' + this.nome)\n  }\n}",
                },
                {
                    type: "paragraph",
                    data: "Você pode criar novas instâncias usando a palavra-chave 'new'.",
                },
                {
                    type: "code",
                    data: "const pessoa1 = new Pessoa('Carlos', 30)\npessoa1.saudacao()",
                },
                {
                    type: "paragraph",
                    data: "Podemos criar uma classe que herda de outra usando o encantamento `extends`. A classe filha herda todas as propriedades e métodos da classe mãe. Para usar o construtor da classe mãe dentro da classe filha, chamamos a função `super()` que chama o construtor da classe pai.",
                },
                {
                    type: "code",
                    data: "class ClassePai {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nclass ClasseFilha extends ClassePai {\n  constructor(nome, elemento) {\n    super(nome);\n    this.elemento = elemento;\n  }\n}",
                },
            ],
        },
        topicId: "205bf383-5b91-4502-a489-f9dd250fdcc1",
    },
];

export async function createExplanations() {
    return prisma.explanation.createMany({
        data: [
            ...variableExplanations,
            ...operatorExplanations,
            ...conditionalExplanations,
            ...loopsExplanations,
            ...functionExplanations,
            ...arrayExplanations,
            ...objExplanations,
        ],
    });
}
