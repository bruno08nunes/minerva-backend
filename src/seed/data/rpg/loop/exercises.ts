export const whileExercises = [
    {
        id: "5aef8b62-cc03-47a7-93c8-03afcc85a211",
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
        lessonId: "c55a9a67-beb0-45c3-a7af-8d423c2d83e3",
        order: 1,
    },
    {
        id: "e8496ff3-0838-496c-b6f2-1cde1a7d6b2d",
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
        lessonId: "c55a9a67-beb0-45c3-a7af-8d423c2d83e3",
        order: 2,
    },
    {
        id: "c14d9aa8-caa1-4b43-bb86-2cc8590b38f7",
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
        lessonId: "c55a9a67-beb0-45c3-a7af-8d423c2d83e3",
        order: 3,
    },
    {
        id: "ddab0a5f-bf36-40bb-9d9e-4f38a216be2b",
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
        lessonId: "c55a9a67-beb0-45c3-a7af-8d423c2d83e3",
        order: 4,
    },
] as const;

export const doWhileExercises = [
    {
        id: "8b21c95e-30a8-4ef9-94e3-96f1bb3fdc8e",
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
        lessonId: "d2a50e8e-9b12-4e8e-b40a-79e0c67b9d1a",
        order: 1,
    },
    {
        id: "b01b63b8-1af4-4f67-8c67-d77b252e28df",
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
        lessonId: "d2a50e8e-9b12-4e8e-b40a-79e0c67b9d1a",
        order: 2,
    },
    {
        id: "8a43bb88-bd9f-4b74-820d-f41d4d10c61d",
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
        lessonId: "d2a50e8e-9b12-4e8e-b40a-79e0c67b9d1a",
        order: 3,
    },
    {
        id: "f6ee7f20-2a2e-4f48-9c36-329e0dc9670a",
        content: [
            {
                type: "paragraph",
                data: "Quando o 'do...while' é mais útil do que o 'while'?",
            },
        ],
        hint: "Pense em situações em que é preciso executar algo ao menos uma vez antes de testar a condição.",
        type: "MULTIPLE_CHOICE",
        lessonId: "d2a50e8e-9b12-4e8e-b40a-79e0c67b9d1a",
        order: 4,
    },
] as const;

export const forExercises = [
    {
        id: "7b9b3f32-1a47-4f52-8c67-d2a8c1cf54d9",
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
        lessonId: "a5f02cc4-915a-43ad-9e8a-4a2a540d4a2e",
        order: 1,
    },
    {
        id: "24fbdc7e-89a8-4f8c-b782-cf1d9b6e72bb",
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
        lessonId: "a5f02cc4-915a-43ad-9e8a-4a2a540d4a2e",
        order: 2,
    },
    {
        id: "42c2c2ad-891f-4d61-8b9d-5eabccf06a0f",
        content: [
            {
                type: "paragraph",
                data: "Qual parte do laço 'for' é responsável por aumentar o valor da variável de controle?",
            },
        ],
        hint: "Está localizada no final dos parênteses: (let i = 0; i < 10; i+=1)",
        type: "MULTIPLE_CHOICE",
        lessonId: "a5f02cc4-915a-43ad-9e8a-4a2a540d4a2e",
        order: 3,
    },
    {
        id: "da24b34a-7f37-45b5-8d17-931fbd15b90a",
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
        lessonId: "a5f02cc4-915a-43ad-9e8a-4a2a540d4a2e",
        order: 4,
    },
] as const;

export const controlFlowExercises = [
    {
        id: "13c7a02a-8c5a-4b5c-97e9-f2c8b2fa52e8",
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
        lessonId: "c4b59d1f-582a-4b65-bc8f-53e6372eab7f",
        order: 1,
    },
    {
        id: "2b7a132b-03b5-4b08-9bb1-90e8c8e2f64e",
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
        lessonId: "c4b59d1f-582a-4b65-bc8f-53e6372eab7f",
        order: 2,
    },
    {
        id: "33e22c76-20ce-46bb-a6d0-7a2a31d72d64",
        content: [
            {
                type: "paragraph",
                data: "Um mago lança 5 feitiços, mas quer ignorar o terceiro. Qual comando faz isso?",
            },
        ],
        hint: "Ele faz o laço pular para a próxima repetição.",
        type: "MULTIPLE_CHOICE",
        lessonId: "c4b59d1f-582a-4b65-bc8f-53e6372eab7f",
        order: 3,
    },
    {
        id: "4f3b2a29-0648-4ef7-a257-8d7a8c3a06a0",
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
        lessonId: "c4b59d1f-582a-4b65-bc8f-53e6372eab7f",
        order: 4,
    },
    {
        id: "8a2d3f9b-f3cd-4f3a-a6bb-c9d73d04e72c",
        content: [
            {
                type: "paragraph",
                data: "Qual é a diferença entre 'break' e 'continue'?",
            },
        ],
        hint: "Um encerra o laço, o outro apenas pula uma iteração.",
        type: "MULTIPLE_CHOICE",
        lessonId: "c4b59d1f-582a-4b65-bc8f-53e6372eab7f",
        order: 5,
    },
] as const;
