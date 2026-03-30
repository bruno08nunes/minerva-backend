export const functionExercises = [
    {
        id: 'b344d2fa-42f2-463b-85a9-bc7b123f44ca',
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
        lessonId: '33fe3c1d-26a2-406b-abe7-94ef0bd7bc1d',
        order: 1,
    },
    {
        id: '9303d07a-a308-43e5-832c-7f3e1150c3b5',
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
        lessonId: '8048b004-bbfe-41fd-a4b5-c62d3b4fb6c9',
        order: 2,
    },
    {
        id: '2fbfbdcb-6b0b-4249-be2c-e1f89e53bb3c',
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
        lessonId: '7671bc8c-6898-4d2c-b27c-4d4a3054cefe',
        order: 3,
    },
    {
        id: '39943d91-bd65-469a-a3a2-3f570e9964f3',
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
        lessonId: '577f6669-e9f6-41ce-bcb7-7d16c8b30d6d',
        order: 4,
    },
] as const;

export const functionPureExercises = [
    {
        id: '66dcc4a9-52db-465d-b559-591cfcebff76',
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
        lessonId: '6f2adda3-6ff7-43c7-a61e-e38b7e3cd0e1',
        order: 1,
    },
    {
        id: '6da1911d-3711-44e4-aed1-3db5e06adbe5',
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
        lessonId: '6a388dd1-7018-49b6-9aa6-f87089840283',
        order: 2,
    },
    {
        id: '890dbc39-a2ac-4148-9e28-1447506cbaaa',
        content: [
            {
                type: "paragraph",
                data: "O que o comando `return` faz dentro de uma função?",
            },
        ],
        hint: "Ele serve para devolver um valor.",
        type: "MULTIPLE_CHOICE",
        lessonId: '60d82400-07bf-4ebc-af5d-253a9843d961',
        order: 3,
    },
    {
        id: '0f05af83-f70c-4bab-8479-b98740137eff',
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
        lessonId: 'b07a621c-1019-4240-8bf3-5a476ce02a97',
        order: 4,
    },
] as const;

export const functionRecursiveExercises = [
    {
        id: '010df9c9-0d2c-4989-8652-8c00851969b6',
        content: [
            {
                type: "paragraph",
                data: "Uma função recursiva é uma função que chama a si mesma. É como um feitiço que se repete até que uma condição de parada seja atingida.",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '859cc57d-9a33-44b0-bbb8-f983eefbcd43',
        order: 1,
    },
    {
        id: 'f78d1ee2-6a5c-4d3a-abb5-6f1b51d515ac',
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
        lessonId: 'b263d45a-ed4f-4ff8-8215-522a8740447f',
        order: 2,
    },
    {
        id: 'afbe21ab-9f44-41fd-9b99-859f7396049b',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se uma função recursiva não tiver uma condição de parada?",
            },
        ],
        hint: "Pense no que ocorre se ela nunca parar de se chamar.",
        type: "MULTIPLE_CHOICE",
        lessonId: '6ec7b02d-a510-480b-ad35-dd2e96ee9243',
        order: 3,
    },
    {
        id: 'b089b5ca-be41-4b40-b2a6-be0f8d8a8ce9',
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
        lessonId: '8420f723-ffc6-40b8-b8a5-d319a277c95b',
        order: 4,
    },
] as const;