export const whileExercises = [
    {
        id: 'dbc25024-720d-424c-b939-b527e21bf454',
        content: [
            {
                type: "paragraph",
                data: "O laço 'while' permite repetir ações enquanto uma condição for verdadeira — como continuar explorando enquanto ainda há sanidade.",
            },
            {
                type: "code",
                data: "let sanidade = 3;\nwhile (sanidade > 0) {\n    console.log('Você ainda resiste...');\n    sanidade = sanidade - 1;\n}",
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
                data: "Continue correndo enquanto ainda tiver energia:",
            },
            {
                type: "code",
                data: "let energia = 5;\n_____ (energia > 0) {\n    console.log('Você corre desesperadamente!');\n    energia = energia - 1;\n}",
            },
        ],
        hint: "Qual palavra cria o laço?",
        type: "COMPLETE_CODE",
        lessonId: '4cc0cb31-2bd0-45c9-aa80-b9a1ee776628',
        order: 2,
    },
    {
        id: '9ed05b09-e738-4703-96fa-1187af3cb946',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se a condição do 'while' nunca se tornar falsa?",
            },
            {
                type: "code",
                data: "while (true) {\n    console.log('Algo te observa...');\n}",
            },
        ],
        hint: "O que acontece quando algo nunca para?",
        type: "MULTIPLE_CHOICE",
        lessonId: '4cc0cb31-2bd0-45c9-aa80-b9a1ee776628',
        order: 3,
    },
    {
        id: 'c3d806c7-c1ae-4853-89b9-be43912fa012',
        content: [
            {
                type: "paragraph",
                data: "Você ganha coragem aos poucos, até atingir 50 pontos. Complete o código:",
            },
            {
                type: "code",
                data: "let coragem = 0;\nwhile (coragem _____ 50) {\n    coragem = coragem + 10;\n    console.log('Coragem atual:', coragem);\n}",
            },
        ],
        hint: "Qual operador mantém o laço até chegar a 50?",
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
                data: "O laço 'do...while' executa pelo menos uma vez — como tentar abrir uma porta mesmo sem saber se está trancada.",
            },
            {
                type: "code",
                data: "let tentativas = 0;\ndo {\n    console.log('Tentando abrir a porta...');\n    tentativas+=1;\n} while (tentativas < 3);",
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
                data: "Você ataca por impulso, mesmo sem energia:",
            },
            {
                type: "code",
                data: "let energia = 0;\n_____ {\n    console.log('Ataque desesperado!');\n    energia--;\n} while (energia > 0);",
            },
        ],
        hint: "Qual palavra inicia o bloco?",
        type: "COMPLETE_CODE",
        lessonId: '35892645-aaed-4c86-a4ae-35f5a9a75cf8',
        order: 2,
    },
    {
        id: '05fcc0bc-3598-4da0-b5d3-2f7a67d8cf4e',
        content: [
            {
                type: "paragraph",
                data: "Você tenta adivinhar um código para escapar, garantindo ao menos uma tentativa:",
            },
            {
                type: "code",
                data: "let codigo;\ndo {\n    codigo = Math.floor(Math.random() * 10);\n    console.log('Tentando:', codigo);\n} _____ (codigo !== 7);",
            },
        ],
        hint: "A estrutura termina com qual palavra?",
        type: "COMPLETE_CODE",
        lessonId: '35892645-aaed-4c86-a4ae-35f5a9a75cf8',
        order: 3,
    },
    {
        id: '8caf62ef-52bd-4ee7-b8a3-27dbdade3e11',
        content: [
            {
                type: "paragraph",
                data: "Quando o 'do...while' é mais útil?",
            },
        ],
        hint: "Quando precisa executar ao menos uma vez.",
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
                data: "O laço 'for' repete ações um número definido de vezes — como passos em um corredor escuro.",
            },
            {
                type: "code",
                data: "for (let i = 0; i < 5; i+=1) {\n    console.log('Passo', i + 1);\n}",
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
                data: "Avance 3 passos pelo corredor:",
            },
            {
                type: "code",
                data: " _____ (let i = 1; i <= 3; i+=1) {\n    console.log('Passo', i);\n}",
            },
        ],
        hint: "Qual palavra inicia o laço?",
        type: "COMPLETE_CODE",
        lessonId: '91a7fe23-1135-4860-b733-3d1225c56dfc',
        order: 2,
    },
    {
        id: '58f5b006-0789-49b3-9de0-a6fd2dc6916c',
        content: [
            {
                type: "paragraph",
                data: "Qual parte do 'for' aumenta o contador?",
            },
        ],
        hint: "Fica no final da estrutura.",
        type: "MULTIPLE_CHOICE",
        lessonId: '91a7fe23-1135-4860-b733-3d1225c56dfc',
        order: 3,
    },
    {
        id: '0dcccf80-2968-4b52-a2c6-bdfef8dfa4d8',
        content: [
            {
                type: "paragraph",
                data: "Você precisa bater na porta 5 vezes:",
            },
            {
                type: "code",
                data: "for (let batida = 1; batida _____ 5; batida+=1) {\n    console.log('Batida', batida);\n}",
            },
        ],
        hint: "Quantas vezes deve repetir?",
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
                data: "'break' e 'continue' controlam o fluxo — decidir parar ou ignorar algo pode salvar sua vida.",
            },
            {
                type: "code",
                data: "for (let i = 1; i <= 5; i+=1) {\n    if (i == 3) {\n      break;\n    }\n    console.log('Passo', i);\n}",
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
                data: "Você para imediatamente ao ouvir algo no passo 4:",
            },
            {
                type: "code",
                data: "for (let passo = 1; passo <= 5; passo+=1) {\n    if (passo === 4) {\n     _____;\n    }\n    console.log('Passo', passo);\n}",
            },
        ],
        hint: "Qual comando encerra tudo?",
        type: "COMPLETE_CODE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 2,
    },
    {
        id: '5069641c-d2f1-4c6d-afe5-bb74df2eda7c',
        content: [
            {
                type: "paragraph",
                data: "Você ignora um ruído estranho e continua andando. Qual comando usar?",
            },
        ],
        hint: "Ele pula uma repetição.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 3,
    },
    {
        id: 'e67fae2b-240a-4653-a85e-19beb36e278a',
        content: [
            {
                type: "paragraph",
                data: "Ignore o terceiro passo, mas continue andando:",
            },
            {
                type: "code",
                data: "for (let i = 1; i <= 5; i+=1) {\n    if (i === 3) {\n     _____;\n    }\n    console.log('Passo', i);\n}",
            },
        ],
        hint: "Qual comando pula apenas essa iteração?",
        type: "COMPLETE_CODE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 4,
    },
    {
        id: '19d8b601-ef7e-4575-88f7-0edd5e3ad3d0',
        content: [
            {
                type: "paragraph",
                data: "Qual a diferença entre 'break' e 'continue'?",
            },
        ],
        hint: "Um para tudo, outro apenas ignora um momento.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
        order: 5,
    },
] as const;