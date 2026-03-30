export const whileExercises = [
    {
        id: 'dbc25024-720d-424c-b939-b527e21bf454',
        content: [
            {
                type: "paragraph",
                data: "O laço 'while' permite repetir um bloco de código enquanto uma condição for verdadeira.",
            },
            {
                type: "code",
                data: "let energia = 3;\nwhile (energia > 0) {\n    console.log('Você ainda tem energia!');\n    energia = energia - 1;\n}",
            },
        ],
        hint: "Esse código repete 3 vezes.",
        type: "MULTIPLE_CHOICE",
        lessonId: '4cc0cb31-2bd0-45c9-aa80-b9a1ee776628',
        order: 1,
    },
    {
        id: '3c9eee9a-5039-40be-9e80-dd4e2db2bc06',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para que o mago continue lançando feitiços enquanto tiver mana:",
            },
            {
                type: "code",
                data: "let mana = 5;\n_____ (mana > 0) {\n    console.log('Feitiço lançado!');\n    mana = mana - 1;\n}",
            },
        ],
        hint: "Qual palavra-chave cria o laço de repetição?",
        type: "COMPLETE_CODE",
        lessonId: '4cc0cb31-2bd0-45c9-aa80-b9a1ee776628',
        order: 2,
    },
    {
        id: '9ed05b09-e738-4703-96fa-1187af3cb946',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se a condição do 'while' nunca for falsa?",
            },
            {
                type: "code",
                data: "let energia = 3;\nwhile (energia > 0) {\n    console.log('Você ainda tem energia!');\n    energia = energia - 1;\n}",
            },
        ],
        hint: "Pense no que ocorreria se o contador nunca diminuísse dentro do laço.",
        type: "MULTIPLE_CHOICE",
        lessonId: '4cc0cb31-2bd0-45c9-aa80-b9a1ee776628',
        order: 3,
    },
    {
        id: 'c3d806c7-c1ae-4853-89b9-be43912fa012',
        content: [
            {
                type: "paragraph",
                data: "Um aprendiz está treinando. A cada rodada ele ganha 10 XP, mas para quando atingir 50 XP. Complete o código:",
            },
            {
                type: "code",
                data: "let xp = 0;\nwhile (xp _____ 50) {\n    xp = xp + 10;\n    console.log('XP atual:', xp);\n}",
            },
        ],
        hint: "Qual operador mantém o laço ativo até que xp chegue a 50?",
        type: "MULTIPLE_CHOICE",
        lessonId: '4cc0cb31-2bd0-45c9-aa80-b9a1ee776628',
        order: 4,
    },
] as const;

export const doWhileExercises = [
    {
        id: '152ab4f0-cbad-4c0d-83a3-62b5dd1000ca',
        content: [
            {
                type: "paragraph",
                data: "O laço 'do...while' executa o bloco ao menos uma vez, mesmo que a condição seja falsa no início.",
            },
            {
                type: "code",
                data: "let tentativas = 0;\ndo {\n    console.log('Tentando abrir o baú...');\n    tentativas+=1;\n} while (tentativas < 3);",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '35892645-aaed-4c86-a4ae-35f5a9a75cf8',
        order: 1,
    },
    {
        id: 'e7ced7a0-aa8f-4a30-9f2e-c2ac52abf1ce',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para que o guerreiro ataque pelo menos uma vez, mesmo com energia 0:",
            },
            {
                type: "code",
                data: "let energia = 0;\n_____ {\n    console.log('Ataque realizado!');\n    energia--;\n} while (energia > 0);",
            },
        ],
        hint: "Qual palavra inicia o bloco que executa antes da verificação?",
        type: "COMPLETE_CODE",
        lessonId: '35892645-aaed-4c86-a4ae-35f5a9a75cf8',
        order: 2,
    },
    {
        id: '05fcc0bc-3598-4da0-b5d3-2f7a67d8cf4e',
        content: [
            {
                type: "paragraph",
                data: "Um mago tenta adivinhar um número secreto. Complete o código que garante que ele sempre tenta pelo menos uma vez:",
            },
            {
                type: "code",
                data: "let numero;\ndo {\n    numero = Math.floor(Math.random() * 10);\n    console.log('Tentando número:', numero);\n} _____ (numero !== 7);",
            },
        ],
        hint: "A estrutura começa com 'do' e termina com 'while'.",
        type: "COMPLETE_CODE",
        lessonId: '35892645-aaed-4c86-a4ae-35f5a9a75cf8',
        order: 3,
    },
    {
        id: '8caf62ef-52bd-4ee7-b8a3-27dbdade3e11',
        content: [
            {
                type: "paragraph",
                data: "Quando o 'do...while' é mais útil do que o 'while'?",
            },
        ],
        hint: "Pense em situações em que é preciso executar algo ao menos uma vez antes de testar a condição.",
        type: "MULTIPLE_CHOICE",
        lessonId: '35892645-aaed-4c86-a4ae-35f5a9a75cf8',
        order: 4,
    },
] as const;

export const forExercises = [
    {
        id: 'b226b65d-9ca3-4eca-af15-9d25e23e85bf',
        content: [
            {
                type: "paragraph",
                data: "O laço 'for' é usado quando sabemos quantas vezes queremos repetir algo. Ele possui três partes: inicialização, onde a variável é criada; condição, onde a variável é comparada com um valor específico; e incremento, onde é adiciona um valor à variável.",
            },
            {
                type: "code",
                data: "for (let i = 0; i < 5; i+=1) {\n    console.log('Ataque número', i + 1);\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '91a7fe23-1135-4860-b733-3d1225c56dfc',
        order: 1,
    },
    {
        id: '187e0199-71e1-40a5-acbf-5343cb86b057',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para que o mago conjure 3 feitiços numerados de 1 a 3:",
            },
            {
                type: "code",
                data: " _____ (let i = 1; i <= 3; i+=1) {\n    console.log('Feitiço número', i);\n}",
            },
        ],
        hint: "Qual palavra inicia um laço com contador definido?",
        type: "COMPLETE_CODE",
        lessonId: '91a7fe23-1135-4860-b733-3d1225c56dfc',
        order: 2,
    },
    {
        id: '58f5b006-0789-49b3-9de0-a6fd2dc6916c',
        content: [
            {
                type: "paragraph",
                data: "Qual parte do laço 'for' é responsável por aumentar o valor da variável de controle?",
            },
        ],
        hint: "Está localizada no final dos parênteses: (let i = 0; i < 10; i+=1)",
        type: "MULTIPLE_CHOICE",
        lessonId: '91a7fe23-1135-4860-b733-3d1225c56dfc',
        order: 3,
    },
    {
        id: '0dcccf80-2968-4b52-a2c6-bdfef8dfa4d8',
        content: [
            {
                type: "paragraph",
                data: "O guerreiro quer atacar 5 vezes. Complete o código para que ele ataque 5 vezes e mostre o número de cada ataque:",
            },
            {
                type: "code",
                data: "for (let golpe = 1; golpe _____ 5; golpe+=1) {\n    console.log('Golpe número', golpe);\n}",
            },
        ],
        hint: "Use a estrutura de repetição com contador fixo.",
        type: "MULTIPLE_CHOICE",
        lessonId: '91a7fe23-1135-4860-b733-3d1225c56dfc',
        order: 4,
    },
] as const;

export const controlFlowExercises = [
    {
        id: '8733aa4d-8cbf-4fa0-82a4-480ac03a681e',
        content: [
            {
                type: "paragraph",
                data: "Os comandos 'break' e 'continue' controlam o fluxo dentro dos laços. O 'break' encerra o laço imediatamente, enquanto o 'continue' pula para a próxima iteração. O código abaixo termina o loop quando 'i' é igual a 3.",
            },
            {
                type: "code",
                data: "for (let i = 1; i <= 5; i+=1) {\n    if (i == 3) {\n      break;\n    }\n    console.log('Ataque número', i);\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 1,
    },
    {
        id: '79a31c68-bb97-4747-96b2-a56efbc189ae',
        content: [
            {
                type: "paragraph",
                data: "Um guerreiro está treinando 5 golpes, mas quer parar o treino assim que o golpe número 4 for executado. Complete o código corretamente:",
            },
            {
                type: "code",
                data: "for (let golpe = 1; golpe <= 5; golpe+=1) {\n    if (golpe === 4) {\n     _____;\n    }\n    console.log('Golpe', golpe);\n}",
            },
        ],
        hint: "Use o comando que encerra o laço completamente.",
        type: "COMPLETE_CODE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 2,
    },
    {
        id: '5069641c-d2f1-4c6d-afe5-bb74df2eda7c',
        content: [
            {
                type: "paragraph",
                data: "Um mago lança 5 feitiços, mas quer ignorar o terceiro. Qual comando faz isso?",
            },
        ],
        hint: "Ele faz o laço pular para a próxima repetição.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 3,
    },
    {
        id: 'e67fae2b-240a-4653-a85e-19beb36e278a',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para que o mago não conjure o feitiço número 3, mas continue o resto normalmente:",
            },
            {
                type: "code",
                data: "for (let i = 1; i <= 5; i+=1) {\n    if (i === 3) {\n     _____;\n    }\n    console.log('Feitiço número', i);\n}",
            },
        ],
        hint: "Use o comando que pula a execução atual do laço.",
        type: "COMPLETE_CODE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 4,
    },
    {
        id: '19d8b601-ef7e-4575-88f7-0edd5e3ad3d0',
        content: [
            {
                type: "paragraph",
                data: "Qual é a diferença entre 'break' e 'continue'?",
            },
        ],
        hint: "Um encerra o laço, o outro apenas pula uma iteração.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 5,
    },
] as const;
