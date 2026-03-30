export const functionExercises = [
    {
        id: '97ccabbd-e475-407f-87d2-ecd369a89ce2',
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
        lessonId: '907e6bce-6bf0-4089-9ff9-c3defec5b957',
        order: 1,
    },
    {
        id: '5a3ef190-292c-4348-babb-00b924774df7',
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
        lessonId: '907e6bce-6bf0-4089-9ff9-c3defec5b957',
        order: 2,
    },
    {
        id: '25dbf7fd-f29e-4651-8eeb-2a05d3b483ea',
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
        lessonId: '907e6bce-6bf0-4089-9ff9-c3defec5b957',
        order: 3,
    },
    {
        id: 'b3e8c86f-6713-406a-a457-a7f566cd712e',
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
        lessonId: '907e6bce-6bf0-4089-9ff9-c3defec5b957',
        order: 4,
    },
] as const;

export const functionPureExercises = [
    {
        id: '8dfaf217-6f7a-45b8-b4d1-1aae3427ac59',
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
        lessonId: '5f766dad-4a80-4f6a-b8a6-d30cad43e4a8',
        order: 1,
    },
    {
        id: '9076bb32-829f-4694-a063-1dbd299f2477',
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
        lessonId: '5f766dad-4a80-4f6a-b8a6-d30cad43e4a8',
        order: 2,
    },
    {
        id: '86a6899f-65a3-4dfb-a672-721965667f8b',
        content: [
            {
                type: "paragraph",
                data: "O que o comando `return` faz dentro de uma função?",
            },
        ],
        hint: "Ele serve para devolver um valor.",
        type: "MULTIPLE_CHOICE",
        lessonId: '5f766dad-4a80-4f6a-b8a6-d30cad43e4a8',
        order: 3,
    },
    {
        id: 'de9bc854-b1d4-4f46-946b-c62e7c6e0a4a',
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
        lessonId: '5f766dad-4a80-4f6a-b8a6-d30cad43e4a8',
        order: 4,
    },
] as const;

export const functionRecursiveExercises = [
    {
        id: '80c2a11c-dee9-4e06-8a05-f7f871eddf8a',
        content: [
            {
                type: "paragraph",
                data: "Uma função recursiva é uma função que chama a si mesma. É como um feitiço que se repete até que uma condição de parada seja atingida.",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '3d63c1e3-6fa9-4f1c-9c19-4a6ee10905a9',
        order: 1,
    },
    {
        id: '2de42ab5-731b-4acc-a407-752981d17283',
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
        lessonId: '3d63c1e3-6fa9-4f1c-9c19-4a6ee10905a9',
        order: 2,
    },
    {
        id: '94f7a4a6-09a5-4cbc-a0a5-b432f7e688c2',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se uma função recursiva não tiver uma condição de parada?",
            },
        ],
        hint: "Pense no que ocorre se ela nunca parar de se chamar.",
        type: "MULTIPLE_CHOICE",
        lessonId: '3d63c1e3-6fa9-4f1c-9c19-4a6ee10905a9',
        order: 3,
    },
    {
        id: '14f7f667-0af8-49a2-8e3e-b17e939cd469',
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
        lessonId: '3d63c1e3-6fa9-4f1c-9c19-4a6ee10905a9',
        order: 4,
    },
] as const;