export const functionExercises = [
    {
        id: "f01a23b4-c567-4d89-a123-b4c56d7890ef",
        content: [
            {
                type: "paragraph",
                data: "Funções executam várias linhas de código de uma vez quando são chamadas, sendo usadas para facilitar a execução de várias linhas. O código acima aumenta a energia do personagem e adiciona um limite máximo para ela.",
            },
            {
                type: "code",
                data: "let energia = 50;\nfunction descansar() {\n    energia += 10;\n    if (energia > 100) {\n      energia = 100;\n    }\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: "a73b4dc2-9d51-4b73-88f8-5d1dbe1b34e9",
        order: 1,
    },
    {
        id: "e21b3c45-d678-4e9f-a321-b4c56d7890ef",
        content: [
            {
                type: "paragraph",
                data: "Você tem uma variável global chamada `energia` e quer criar uma função `descansar()` que recupere 10 pontos de energia. Complete o código abaixo:",
            },
            {
                type: "code",
                data: "energia = 50;\n _____ descansar() {\n    energia += 10;\n}",
            },
        ],
        hint: "Use a palavra que define uma função",
        type: "COMPLETE_CODE",
        lessonId: "a73b4dc2-9d51-4b73-88f8-5d1dbe1b34e9",
        order: 2,
    },
    {
        id: "c32d4e56-e789-4fa0-b432-c5d67e890f01",
        content: [
            {
                type: "paragraph",
                data: "O código abaixo altera uma variável global chamada `ouro`. O que acontece quando chamamos a função `encontrarTesouro()`?",
            },
            {
                type: "code",
                data: "let ouro = 100;\nfunction encontrarTesouro() {\n    ouro += 50;\n}",
            },
        ],
        hint: "A variável `ouro` está fora da função.",
        type: "MULTIPLE_CHOICE",
        lessonId: "a73b4dc2-9d51-4b73-88f8-5d1dbe1b34e9",
        order: 3,
    },
    {
        id: "b43e5f67-f890-4ab1-c543-d6e78f901012",
        content: [
            {
                type: "paragraph",
                data: "Você quer criar uma função `tomarDano()` que reduza a variável global `vida` em 20 pontos. Complete o código corretamente:",
            },
            {
                type: "code",
                data: "vida = 100;\nfunction tomarDano() {\n    vida = vida _____ 20;\n}",
            },
        ],
        hint: "O operador de subtração é usado aqui.",
        type: "COMPLETE_CODE",
        lessonId: "a73b4dc2-9d51-4b73-88f8-5d1dbe1b34e9",
        order: 4,
    },
] as const;

export const functionPureExercises = [
    {
        id: "e1f2d3c4-b5a6-7d8e-9f0a-f1c2d3e4f5g6",
        content: [
            {
                type: "paragraph",
                data: "As funções podem receber parâmetros (valores de entrada) e podem retornam valores de saída.",
            },
            {
                type: "code",
                data: "function somar(parametro1, parametro2) {\n   return parametro1 + parametro2;\n}\nconst soma = somar(1, 2);",
            },
        ],
        hint: "A variável soma recebe o valor 3.",
        type: "MULTIPLE_CHOICE",
        lessonId: "b81e6c93-4d2b-40f7-9a60-41a84fd23b77",
        order: 1,
    },
    {
        id: "a2b3c4d5-e6f7-8g9h-0i1j-k2l3m4n5o6p7",
        content: [
            {
                type: "paragraph",
                data: "Você quer criar uma função que calcule o dano de um feitiço. Ela recebe a `forca` e o `multiplicador` e retorna o resultado da multiplicação. Complete o código:",
            },
            {
                type: "code",
                data: "function calcularDano(forca, multiplicador) {\n    _____ forca * multiplicador;\n}",
            },
        ],
        hint: "Você deve definir o retorno da função.",
        type: "COMPLETE_CODE",
        lessonId: "b81e6c93-4d2b-40f7-9a60-41a84fd23b77",
        order: 2,
    },
    {
        id: "c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8",
        content: [
            {
                type: "paragraph",
                data: "O que o comando `return` faz dentro de uma função?",
            },
        ],
        hint: "Ele serve para devolver um valor.",
        type: "MULTIPLE_CHOICE",
        lessonId: "b81e6c93-4d2b-40f7-9a60-41a84fd23b77",
        order: 3,
    },
    {
        id: "d4e5f6g7-h8i9-0j1k-2l3m-n4o5p6q7r8s9",
        content: [
            {
                type: "paragraph",
                data: "Você quer uma função que receba o número de poções e o valor de cada uma e retorne o custo total. Complete:",
            },
            {
                type: "code",
                data: "function calcularCusto(quantidade, valor) {\n    return _____ * valor;\n}",
            },
        ],
        hint: "Use um dos parâmetros passados.",
        type: "COMPLETE_CODE",
        lessonId: "b81e6c93-4d2b-40f7-9a60-41a84fd23b77",
        order: 4,
    },
] as const;

export const functionRecursiveExercises = [
    {
        id: "aa11bb22-cc33-dd44-ee55-ff6677889900",
        content: [
            {
                type: "paragraph",
                data: "Uma função recursiva é uma função que chama a si mesma. É como um feitiço que se repete até que uma condição de parada seja atingida.",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: "e5b8c3fa-1b22-4f8a-b7d1-9d84b21e4b90",
        order: 1,
    },
    {
        id: "bb22cc33-dd44-ee55-ff66-77889900aa11",
        content: [
            {
                type: "paragraph",
                data: "Complete a função abaixo, que imprime números de forma decrescente até 1:",
            },
            {
                type: "code",
                data: "function contagem(numero) {\n    if (numero > 0) {\n        console.log(numero);\n        contagem(_____-1);\n    }\n}",
            },
        ],
        hint: "A função deve chamar a si mesma com o valor decrementado para que não ocorra um loop infinito.",
        type: "COMPLETE_CODE",
        lessonId: "e5b8c3fa-1b22-4f8a-b7d1-9d84b21e4b90",
        order: 2,
    },
    {
        id: "cc33dd44-ee55-ff66-7788-9900aa11bb22",
        content: [
            {
                type: "paragraph",
                data: "O que acontece se uma função recursiva não tiver uma condição de parada?",
            },
        ],
        hint: "Pense no que ocorre se ela nunca parar de se chamar.",
        type: "MULTIPLE_CHOICE",
        lessonId: "e5b8c3fa-1b22-4f8a-b7d1-9d84b21e4b90",
        order: 3,
    },
    {
        id: "dd44ee55-ff66-7788-9900-aa11bb22cc33",
        content: [
            {
                type: "paragraph",
                data: "Crie uma função `contarAte(n)` que conte de 1 até `n` usando recursão. Complete o retorno da chamada recursiva:",
            },
            {
                type: "code",
                data: "function contarAte(n) {\n    if (n > 1) {\n        contarAte(_____-1);\n    }\n    console.log(n);\n}",
            },
        ],
        hint: "A função deve chamar ela mesma, diminuindo o valor de `n`.",
        type: "COMPLETE_CODE",
        lessonId: "e5b8c3fa-1b22-4f8a-b7d1-9d84b21e4b90",
        order: 4,
    },
] as const;