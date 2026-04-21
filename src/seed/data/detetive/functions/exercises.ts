export const functionExercises = [
    {
        id: 'b344d2fa-42f2-463b-85a9-bc7b123f44ca',
        content: [
            {
                type: "paragraph",
                data: "Funções executam várias linhas de código de uma vez quando são chamadas. No contexto de investigação, elas podem representar ações do detetive. O código abaixo aumenta o nível de atenção do detetive e define um limite máximo.",
            },
            {
                type: "code",
                data: "let atencao = 50;\nfunction analisarPistas() {\n    atencao += 10;\n    if (atencao > 100) {\n      atencao = 100;\n    }\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f42e778b-17c6-4672-a811-a5151db35d9b',
        order: 1,
    },
    {
        id: '9303d07a-a308-43e5-832c-7f3e1150c3b5',
        content: [
            {
                type: "paragraph",
                data: "Você tem uma variável global chamada `atencao` e quer criar uma função `analisarPistas()` que aumente 10 pontos de atenção do detetive. Complete o código abaixo:",
            },
            {
                type: "code",
                data: "atencao = 50;\n _____ analisarPistas() {\n    atencao += 10;\n}",
            },
        ],
        hint: "Use a palavra que define uma função",
        type: "COMPLETE_CODE",
        lessonId: 'f42e778b-17c6-4672-a811-a5151db35d9b',
        order: 2,
    },
    {
        id: '2fbfbdcb-6b0b-4249-be2c-e1f89e53bb3c',
        content: [
            {
                type: "paragraph",
                data: "O código abaixo altera uma variável global chamada `pistas`. O que acontece quando chamamos a função `encontrarPista()`?",
            },
            {
                type: "code",
                data: "let pistas = 100;\nfunction encontrarPista() {\n    pistas += 50;\n}",
            },
        ],
        hint: "A variável `pistas` está fora da função.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f42e778b-17c6-4672-a811-a5151db35d9b',
        order: 3,
    },
    {
        id: '39943d91-bd65-469a-a3a2-3f570e9964f3',
        content: [
            {
                type: "paragraph",
                data: "Você quer criar uma função `perderCredibilidade()` que reduza a variável global `credibilidade` em 20 pontos. Complete o código corretamente:",
            },
            {
                type: "code",
                data: "credibilidade = 100;\nfunction perderCredibilidade() {\n    credibilidade = credibilidade _____ 20;\n}",
            },
        ],
        hint: "O operador de subtração é usado aqui.",
        type: "COMPLETE_CODE",
        lessonId: 'f42e778b-17c6-4672-a811-a5151db35d9b',
        order: 4,
    },
] as const;

export const functionPureExercises = [
    {
        id: '66dcc4a9-52db-465d-b559-591cfcebff76',
        content: [
            {
                type: "paragraph",
                data: "Funções podem receber parâmetros (como pistas ou evidências) e retornar conclusões.",
            },
            {
                type: "code",
                data: "function somarPistas(pista1, pista2) {\n   return pista1 + pista2;\n}\nconst total = somarPistas(1, 2);",
            },
        ],
        hint: "A variável total recebe o valor 3.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'b14515dc-e799-4fdd-820d-a12f5d413ce9',
        order: 1,
    },
    {
        id: '6da1911d-3711-44e4-aed1-3db5e06adbe5',
        content: [
            {
                type: "paragraph",
                data: "Você quer criar uma função que calcule a intensidade de uma pista. Ela recebe a `forca` da evidência e um `multiplicador` e retorna o resultado da multiplicação. Complete o código:",
            },
            {
                type: "code",
                data: "function calcularIntensidade(forca, multiplicador) {\n    _____ forca * multiplicador;\n}",
            },
        ],
        hint: "Você deve definir o retorno da função.",
        type: "COMPLETE_CODE",
        lessonId: 'b14515dc-e799-4fdd-820d-a12f5d413ce9',
        order: 2,
    },
    {
        id: '890dbc39-a2ac-4148-9e28-1447506cbaaa',
        content: [
            {
                type: "paragraph",
                data: "O que o comando `return` faz dentro de uma função durante uma investigação?",
            },
        ],
        hint: "Ele serve para devolver um valor.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'b14515dc-e799-4fdd-820d-a12f5d413ce9',
        order: 3,
    },
    {
        id: '0f05af83-f70c-4bab-8479-b98740137eff',
        content: [
            {
                type: "paragraph",
                data: "Você quer uma função que receba o número de evidências coletadas e o valor de cada uma e retorne o total analisado. Complete:",
            },
            {
                type: "code",
                data: "function calcularTotal(quantidade, valor) {\n    return _____ * valor;\n}",
            },
        ],
        hint: "Use um dos parâmetros passados.",
        type: "COMPLETE_CODE",
        lessonId: 'b14515dc-e799-4fdd-820d-a12f5d413ce9',
        order: 4,
    },
] as const;

export const functionRecursiveExercises = [
    {
        id: '010df9c9-0d2c-4989-8652-8c00851969b6',
        content: [
            {
                type: "paragraph",
                data: "Uma função recursiva é uma função que chama a si mesma. Em uma investigação, isso pode representar revisar pistas repetidamente até chegar a uma conclusão.",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: 'b3515928-d738-447b-9638-533cac813877',
        order: 1,
    },
    {
        id: 'f78d1ee2-6a5c-4d3a-abb5-6f1b51d515ac',
        content: [
            {
                type: "paragraph",
                data: "Complete a função abaixo, que revisa pistas numeradas de forma decrescente até 1:",
            },
            {
                type: "code",
                data: "function revisarPistas(numero) {\n    if (numero > 0) {\n        console.log(numero);\n        revisarPistas(_____-1);\n    }\n}",
            },
        ],
        hint: "A função deve chamar a si mesma com o valor decrementado para que não ocorra um loop infinito.",
        type: "COMPLETE_CODE",
        lessonId: 'b3515928-d738-447b-9638-533cac813877',
        order: 2,
    },
    {
        id: 'afbe21ab-9f44-41fd-9b99-859f7396049b',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se uma função recursiva não tiver uma condição de parada durante uma investigação?",
            },
        ],
        hint: "Pense no que ocorre se ela nunca parar de se chamar.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'b3515928-d738-447b-9638-533cac813877',
        order: 3,
    },
    {
        id: 'b089b5ca-be41-4b40-b2a6-be0f8d8a8ce9',
        content: [
            {
                type: "paragraph",
                data: "Crie uma função `investigarAte(n)` que revise pistas de 1 até `n` usando recursão. Complete o retorno da chamada recursiva:",
            },
            {
                type: "code",
                data: "function investigarAte(n) {\n    if (n > 1) {\n        investigarAte(_____-1);\n    }\n    console.log(n);\n}",
            },
        ],
        hint: "A função deve chamar ela mesma, diminuindo o valor de `n`.",
        type: "COMPLETE_CODE",
        lessonId: 'b3515928-d738-447b-9638-533cac813877',
        order: 4,
    },
] as const;