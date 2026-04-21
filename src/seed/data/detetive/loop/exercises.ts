export const whileExercises = [
    {
        id: 'c8b2531f-59a5-4546-b09d-f4c497362d0d',
        content: [
            {
                type: "paragraph",
                data: "O laço 'while' permite repetir ações durante uma investigação enquanto uma condição for verdadeira.",
            },
            {
                type: "code",
                data: "let pistas = 3;\nwhile (pistas > 0) {\n    console.log('Ainda há pistas para analisar!');\n    pistas = pistas - 1;\n}",
            },
        ],
        hint: "Esse código repete 3 vezes.",
        type: "MULTIPLE_CHOICE",
        lessonId: '3d1dc34f-f0e3-4528-a387-ce66233dd648',
        order: 1,
    },
    {
        id: 'b203c444-fc8d-4bb7-ab6a-938006e6b647',
        content: [
            {
                type: "paragraph",
                data: "Continue investigando enquanto ainda houver evidências a analisar:",
            },
            {
                type: "code",
                data: "let evidencias = 5;\n_____ (evidencias > 0) {\n    console.log('Analisando evidência...');\n    evidencias = evidencias - 1;\n}",
            },
        ],
        hint: "Qual palavra cria um laço baseado em condição?",
        type: "COMPLETE_CODE",
        lessonId: '3d1dc34f-f0e3-4528-a387-ce66233dd648',
        order: 2,
    },
    {
        id: 'b357e7d6-d9e1-4d84-85f7-1e6be974cad5',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se a condição do 'while' nunca se tornar falsa durante a investigação?",
            },
            {
                type: "code",
                data: "let pistas = 3;\nwhile (pistas > 0) {\n    console.log('Analisando pista...');\n    pistas = pistas - 1;\n}",
            },
        ],
        hint: "E se o valor nunca fosse reduzido?",
        type: "MULTIPLE_CHOICE",
        lessonId: '3d1dc34f-f0e3-4528-a387-ce66233dd648',
        order: 3,
    },
    {
        id: 'd29be91f-f398-402b-af09-5fb8379b7ff7',
        content: [
            {
                type: "paragraph",
                data: "Você ganha 10 pontos de progresso a cada análise, mas para ao atingir 50. Complete o código:",
            },
            {
                type: "code",
                data: "let progresso = 0;\nwhile (progresso _____ 50) {\n    progresso = progresso + 10;\n    console.log('Progresso:', progresso);\n}",
            },
        ],
        hint: "Qual operador mantém o loop até atingir 50?",
        type: "MULTIPLE_CHOICE",
        lessonId: '3d1dc34f-f0e3-4528-a387-ce66233dd648',
        order: 4,
    },
] as const;

export const doWhileExercises = [
    {
        id: '11639f72-fa2f-4da4-b4b7-f6cdb71ab870',
        content: [
            {
                type: "paragraph",
                data: "O laço 'do...while' executa uma ação pelo menos uma vez, mesmo que a condição não seja verdadeira no início.",
            },
            {
                type: "code",
                data: "let tentativas = 0;\ndo {\n    console.log('Tentando acessar o sistema...');\n    tentativas+=1;\n} while (tentativas < 3);",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '89c9ffaf-9074-47ca-bad4-8b041b51afdf',
        order: 1,
    },
    {
        id: '5c8b61ad-4f6b-4cb6-8b2d-6a1deed95fba',
        content: [
            {
                type: "paragraph",
                data: "Você tenta interrogar um suspeito pelo menos uma vez, mesmo sem provas suficientes:",
            },
            {
                type: "code",
                data: "let provas = 0;\n_____ {\n    console.log('Interrogando suspeito...');\n    provas--;\n} while (provas > 0);",
            },
        ],
        hint: "Qual palavra inicia o bloco que executa antes da condição?",
        type: "COMPLETE_CODE",
        lessonId: '89c9ffaf-9074-47ca-bad4-8b041b51afdf',
        order: 2,
    },
    {
        id: 'cb196692-6bf5-45af-b8ea-6a6b3e6a8751',
        content: [
            {
                type: "paragraph",
                data: "Você tenta descobrir o suspeito correto, garantindo ao menos uma tentativa:",
            },
            {
                type: "code",
                data: "let suspeito;\ndo {\n    suspeito = Math.floor(Math.random() * 10);\n    console.log('Testando suspeito:', suspeito);\n} _____ (suspeito !== 7);",
            },
        ],
        hint: "A estrutura começa com 'do' e termina com 'while'.",
        type: "COMPLETE_CODE",
        lessonId: '89c9ffaf-9074-47ca-bad4-8b041b51afdf',
        order: 3,
    },
    {
        id: '153196db-4a47-40b9-828d-d6d2af794ce2',
        content: [
            {
                type: "paragraph",
                data: "Quando o 'do...while' é mais útil em uma investigação?",
            },
        ],
        hint: "Quando é necessário executar pelo menos uma ação antes da verificação.",
        type: "MULTIPLE_CHOICE",
        lessonId: '89c9ffaf-9074-47ca-bad4-8b041b51afdf',
        order: 4,
    },
] as const;

export const forExercises = [
    {
        id: '45b2c385-8eac-4fe6-8984-3ad7cd04c254',
        content: [
            {
                type: "paragraph",
                data: "O laço 'for' é útil quando você sabe quantas vezes precisa repetir uma ação durante uma investigação.",
            },
            {
                type: "code",
                data: "for (let i = 0; i < 5; i+=1) {\n    console.log('Analisando pista', i + 1);\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '8946dd94-c082-4978-aac9-2649675b4bbe',
        order: 1,
    },
    {
        id: '9413fdfe-d70a-41e7-bab9-28c353978893',
        content: [
            {
                type: "paragraph",
                data: "Analise 3 evidências numeradas de 1 a 3:",
            },
            {
                type: "code",
                data: " _____ (let i = 1; i <= 3; i+=1) {\n    console.log('Evidência', i);\n}",
            },
        ],
        hint: "Qual palavra inicia esse tipo de laço?",
        type: "COMPLETE_CODE",
        lessonId: '8946dd94-c082-4978-aac9-2649675b4bbe',
        order: 2,
    },
    {
        id: '5c4d3d1e-ba7b-4ff0-9c7c-09925b2dd79f',
        content: [
            {
                type: "paragraph",
                data: "Qual parte do 'for' aumenta o contador a cada repetição?",
            },
        ],
        hint: "Está no final: i+=1",
        type: "MULTIPLE_CHOICE",
        lessonId: '8946dd94-c082-4978-aac9-2649675b4bbe',
        order: 3,
    },
    {
        id: '5fbe398f-985c-470c-8471-520fd60814d3',
        content: [
            {
                type: "paragraph",
                data: "Você precisa analisar 5 suspeitos. Complete o código:",
            },
            {
                type: "code",
                data: "for (let suspeito = 1; suspeito _____ 5; suspeito+=1) {\n    console.log('Analisando suspeito', suspeito);\n}",
            },
        ],
        hint: "Use uma condição que permita repetir 5 vezes.",
        type: "MULTIPLE_CHOICE",
        lessonId: '8946dd94-c082-4978-aac9-2649675b4bbe',
        order: 4,
    },
] as const;

export const controlFlowExercises = [
    {
        id: 'f85de57e-b70c-41bc-8ef3-6e72079e5fd7',
        content: [
            {
                type: "paragraph",
                data: "Os comandos 'break' e 'continue' ajudam a controlar o fluxo de uma investigação dentro de loops.",
            },
            {
                type: "code",
                data: "for (let i = 1; i <= 5; i+=1) {\n    if (i == 3) {\n      break;\n    }\n    console.log('Analisando pista', i);\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: 'a12831f0-80b9-4cb3-89b3-e8e86c889c57',
        order: 1,
    },
    {
        id: '73d2bba6-1391-4561-a1e4-df6220656433',
        content: [
            {
                type: "paragraph",
                data: "Você analisa 5 pistas, mas para ao encontrar a pista número 4:",
            },
            {
                type: "code",
                data: "for (let pista = 1; pista <= 5; pista+=1) {\n    if (pista === 4) {\n     _____;\n    }\n    console.log('Pista', pista);\n}",
            },
        ],
        hint: "Qual comando encerra o loop?",
        type: "COMPLETE_CODE",
        lessonId: 'a12831f0-80b9-4cb3-89b3-e8e86c889c57',
        order: 2,
    },
    {
        id: '989178f3-d98c-4bce-ab01-7f7bf5329b8c',
        content: [
            {
                type: "paragraph",
                data: "Você analisa 5 suspeitos, mas decide ignorar o terceiro. Qual comando usar?",
            },
        ],
        hint: "Ele pula para a próxima repetição.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'a12831f0-80b9-4cb3-89b3-e8e86c889c57',
        order: 3,
    },
    {
        id: '04c9c66e-8e7b-4406-950a-a602ef03a57f',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para ignorar a pista número 3:",
            },
            {
                type: "code",
                data: "for (let i = 1; i <= 5; i+=1) {\n    if (i === 3) {\n     _____;\n    }\n    console.log('Pista', i);\n}",
            },
        ],
        hint: "Use o comando que pula a iteração atual.",
        type: "COMPLETE_CODE",
        lessonId: 'a12831f0-80b9-4cb3-89b3-e8e86c889c57',
        order: 4,
    },
    {
        id: '6fb4e8a2-ad83-4358-a73f-a1291fb15288',
        content: [
            {
                type: "paragraph",
                data: "Qual a diferença entre 'break' e 'continue'?",
            },
        ],
        hint: "Um encerra o loop, o outro apenas pula uma repetição.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'a12831f0-80b9-4cb3-89b3-e8e86c889c57',
        order: 5,
    },
] as const;