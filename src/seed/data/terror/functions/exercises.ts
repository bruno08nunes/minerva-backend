export const functionExercises = [
    {
        id: '97ccabbd-e475-407f-87d2-ecd369a89ce2',
        content: [
            {
                type: "paragraph",
                data: "Funções executam várias linhas de código de uma vez quando são chamadas. Em uma casa assombrada, você pode usá-las para restaurar sua sanidade aos poucos, mas sem ultrapassar um limite seguro.",
            },
            {
                type: "code",
                data: "let sanidade = 50;\nfunction descansar() {\n    sanidade += 10;\n    if (sanidade > 100) {\n      sanidade = 100;\n    }\n}",
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
                data: "Você tem uma variável global chamada `sanidade` e quer criar uma função `descansar()` que recupere 10 pontos de sanidade. Complete o código abaixo:",
            },
            {
                type: "code",
                data: "sanidade = 50;\n _____ descansar() {\n    sanidade += 10;\n}",
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
                data: "O código abaixo altera uma variável global chamada `pistas`. O que acontece quando chamamos a função `investigar()`?",
            },
            {
                type: "code",
                data: "let pistas = 100;\nfunction investigar() {\n    pistas += 50;\n}",
            },
        ],
        hint: "A variável `pistas` está fora da função.",
        type: "MULTIPLE_CHOICE",
        lessonId: '907e6bce-6bf0-4089-9ff9-c3defec5b957',
        order: 3,
    },
    {
        id: 'b3e8c86f-6713-406a-a457-a7f566cd712e',
        content: [
            {
                type: "paragraph",
                data: "Você quer criar uma função `tomarDano()` que reduza a variável global `sanidade` em 20 pontos após um susto. Complete o código corretamente:",
            },
            {
                type: "code",
                data: "sanidade = 100;\nfunction tomarDano() {\n    sanidade = sanidade _____ 20;\n}",
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
                data: "As funções podem receber parâmetros (valores de entrada) e retornar valores. Em um cenário de terror, você pode calcular níveis de medo com base em diferentes fatores.",
            },
            {
                type: "code",
                data: "function somar(valor1, valor2) {\n   return valor1 + valor2;\n}\nconst medoTotal = somar(1, 2);",
            },
        ],
        hint: "A variável recebe o valor 3.",
        type: "MULTIPLE_CHOICE",
        lessonId: '5f766dad-4a80-4f6a-b8a6-d30cad43e4a8',
        order: 1,
    },
    {
        id: '9076bb32-829f-4694-a063-1dbd299f2477',
        content: [
            {
                type: "paragraph",
                data: "Você quer criar uma função que calcule o nível de medo. Ela recebe a `intensidade` e o `multiplicador` e retorna o resultado da multiplicação. Complete o código:",
            },
            {
                type: "code",
                data: "function calcularMedo(intensidade, multiplicador) {\n    _____ intensidade * multiplicador;\n}",
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
                data: "Você quer uma função que receba o número de pistas encontradas e o valor de cada uma e retorne o total de evidências coletadas. Complete:",
            },
            {
                type: "code",
                data: "function calcularEvidencias(quantidade, valor) {\n    return _____ * valor;\n}",
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
                data: "Uma função recursiva é uma função que chama a si mesma. Em um cenário de terror, é como um eco em um corredor escuro que se repete até desaparecer.",
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
                data: "Complete a função abaixo, que imprime números de forma decrescente até 1, como uma contagem regressiva antes de algo assustador acontecer:",
            },
            {
                type: "code",
                data: "function contagem(numero) {\n    if (numero > 0) {\n        console.log(numero);\n        contagem(_____-1);\n    }\n}",
            },
        ],
        hint: "A função deve chamar a si mesma com o valor decrementado.",
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
                data: "Crie uma função `contarAte(n)` que conte de 1 até `n` usando recursão, como passos ecoando em um corredor escuro. Complete a chamada recursiva:",
            },
            {
                type: "code",
                data: "function contarAte(n) {\n    if (n > 1) {\n        contarAte(_____-1);\n    }\n    console.log(n);\n}",
            },
        ],
        hint: "A função deve chamar ela mesma diminuindo o valor de `n`.",
        type: "COMPLETE_CODE",
        lessonId: '3d63c1e3-6fa9-4f1c-9c19-4a6ee10905a9',
        order: 4,
    },
] as const;