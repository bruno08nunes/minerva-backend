export const whileExercises = [
    {
        id: 'c8b2531f-59a5-4546-b09d-f4c497362d0d',
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
        lessonId: 'd74bb134-5fde-4362-afb8-2cfade6a386b',
        order: 1,
    },
    {
        id: 'b203c444-fc8d-4bb7-ab6a-938006e6b647',
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
        lessonId: '726560d3-844e-4acc-9c2f-ecc3dd3e9b59',
        order: 2,
    },
    {
        id: 'b357e7d6-d9e1-4d84-85f7-1e6be974cad5',
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
        lessonId: 'e232f4ed-2dc3-49af-8a5d-955d0fea18d2',
        order: 3,
    },
    {
        id: 'd29be91f-f398-402b-af09-5fb8379b7ff7',
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
        lessonId: '80eb97c8-1c87-4451-a68c-97d8e3b87538',
        order: 4,
    },
] as const;

export const doWhileExercises = [
    {
        id: '11639f72-fa2f-4da4-b4b7-f6cdb71ab870',
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
        lessonId: 'baee6090-89ce-4bcd-bb17-d1d8db1e1ec0',
        order: 1,
    },
    {
        id: '5c8b61ad-4f6b-4cb6-8b2d-6a1deed95fba',
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
        lessonId: '74880f6f-88e8-4781-bb63-56788e1a7e92',
        order: 2,
    },
    {
        id: 'cb196692-6bf5-45af-b8ea-6a6b3e6a8751',
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
        lessonId: 'fc3e5219-3471-4801-9250-ec7ac007ed0d',
        order: 3,
    },
    {
        id: '153196db-4a47-40b9-828d-d6d2af794ce2',
        content: [
            {
                type: "paragraph",
                data: "Quando o 'do...while' é mais útil do que o 'while'?",
            },
        ],
        hint: "Pense em situações em que é preciso executar algo ao menos uma vez antes de testar a condição.",
        type: "MULTIPLE_CHOICE",
        lessonId: '3daa5a86-76a3-4e6c-8885-5d4d77bf288f',
        order: 4,
    },
] as const;

export const forExercises = [
    {
        id: '45b2c385-8eac-4fe6-8984-3ad7cd04c254',
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
        lessonId: '4dc7d7a0-9714-4909-b12b-2497121794ad',
        order: 1,
    },
    {
        id: '9413fdfe-d70a-41e7-bab9-28c353978893',
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
        lessonId: 'b88d1849-b371-4c5f-9b86-66a896b8fab8',
        order: 2,
    },
    {
        id: '5c4d3d1e-ba7b-4ff0-9c7c-09925b2dd79f',
        content: [
            {
                type: "paragraph",
                data: "Qual parte do laço 'for' é responsável por aumentar o valor da variável de controle?",
            },
        ],
        hint: "Está localizada no final dos parênteses: (let i = 0; i < 10; i+=1)",
        type: "MULTIPLE_CHOICE",
        lessonId: '60757c65-3d23-47e5-81ea-51695859ceaa',
        order: 3,
    },
    {
        id: '5fbe398f-985c-470c-8471-520fd60814d3',
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
        lessonId: 'da5d3442-c61f-4365-bbbd-a078acc95ee7',
        order: 4,
    },
] as const;

export const controlFlowExercises = [
    {
        id: 'f85de57e-b70c-41bc-8ef3-6e72079e5fd7',
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
        lessonId: '48a3c16b-4f90-4ca3-a800-1122f7bd4431',
        order: 1,
    },
    {
        id: '73d2bba6-1391-4561-a1e4-df6220656433',
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
        lessonId: '3f5d4e12-6d71-48b2-9770-5113221a57c2',
        order: 2,
    },
    {
        id: '989178f3-d98c-4bce-ab01-7f7bf5329b8c',
        content: [
            {
                type: "paragraph",
                data: "Um mago lança 5 feitiços, mas quer ignorar o terceiro. Qual comando faz isso?",
            },
        ],
        hint: "Ele faz o laço pular para a próxima repetição.",
        type: "MULTIPLE_CHOICE",
        lessonId: '8a1016cc-6420-4185-8082-ad0c58ad0a77',
        order: 3,
    },
    {
        id: '04c9c66e-8e7b-4406-950a-a602ef03a57f',
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
        lessonId: '5d5649a6-3602-4782-bc7c-7d3b3d203eed',
        order: 4,
    },
    {
        id: '6fb4e8a2-ad83-4358-a73f-a1291fb15288',
        content: [
            {
                type: "paragraph",
                data: "Qual é a diferença entre 'break' e 'continue'?",
            },
        ],
        hint: "Um encerra o laço, o outro apenas pula uma iteração.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'cd516a57-138d-4fc7-ae48-220f9e5110d7',
        order: 5,
    },
] as const;
