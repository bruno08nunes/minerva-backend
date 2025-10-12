export const ifExercises = [
    {
        id: "f6bb7f6a-1f49-44c2-8eb2-4f0f92d6cb80",
        content: [
            {
                type: "paragraph",
                data: "O comando 'if' permite que seu código tome decisões. Ele executa um bloco de código apenas se uma condição for verdadeira.",
            },
            {
                type: "code",
                data: "if (condicao) {\n    // código a executar se for verdadeiro\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: "b6de4d17-1c4e-4f8d-bf4c-2c3c33a4e819",
        order: 1,
    },
    {
        id: "d5e9f84d-f94d-44b0-a4c0-9a8f4a36a200",
        content: [
            {
                type: "paragraph",
                data: "Você quer que uma magia só seja lançada se o mago tiver mana suficiente. Complete o código corretamente.",
            },
            {
                type: "code",
                data: " _____ (mana >= 10) {\n    lançarMagia();\n}",
            },
        ],
        hint: "Qual a declaração para um código que acontece apenas com uma condição?",
        type: "COMPLETE_CODE",
        lessonId: "b6de4d17-1c4e-4f8d-bf4c-2c3c33a4e819",
        order: 2,
    },
    {
        id: "e1736b57-c845-4783-8b52-6c4d970d2353",
        content: [
            {
                type: "paragraph",
                data: "O que o código abaixo faz?",
            },
            {
                type: "code",
                data: "if (vida > vidaMaxima) {\n    vida = vidaMaxima;\n}",
            },
        ],
        hint: "Leia o código com calma — o que acontece quando a vida chega a zero?",
        type: "MULTIPLE_CHOICE",
        lessonId: "b6de4d17-1c4e-4f8d-bf4c-2c3c33a4e819",
        order: 3,
    },
    {
        id: "ee1f716b-58cb-4026-9a37-b65b7a1c8a98",
        content: [
            {
                type: "paragraph",
                data: "Complete o código que verifica se o jogador tem uma chave antes de abrir um baú:",
            },
            {
                type: "code",
                data: "if (temChave _____ true) {\n    abrirBau();\n}",
            },
        ],
        hint: "Qual operador verifica igualdade?",
        type: "COMPLETE_CODE",
        lessonId: "b6de4d17-1c4e-4f8d-bf4c-2c3c33a4e819",
        order: 4,
    },
    {
        id: "a9b648f9-cc49-4dd8-b57f-2bdb48dcf774",
        content: [
            {
                type: "paragraph",
                data: "Qual dessas condições representa corretamente: 'o jogador tem mais de 100 pontos de XP'?",
            },
        ],
        hint: "Use o operador '>' (maior que).",
        type: "MULTIPLE_CHOICE",
        lessonId: "b6de4d17-1c4e-4f8d-bf4c-2c3c33a4e819",
        order: 5,
    },
] as const;

export const ifElseExercises = [
    {
        id: "b8d3f37c-9408-4c4a-9a22-b19b29b0a44a",
        content: [
            {
                type: "paragraph",
                data: "O 'if... else' permite executar um bloco de código se uma condição for verdadeira, e outro bloco se ela for falsa.",
            },
            {
                type: "code",
                data: "if (condicao) {\n    // se verdadeiro\n} else {\n    // se falso\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: "b57a18fa-2b3f-4d08-b1d1-6d1f7b00c4a2",
        order: 1,
    },
    {
        id: "a918cb70-1782-48b8-bbcb-2c3b73b5e4a4",
        content: [
            {
                type: "paragraph",
                data: "Você vai utilizar uma magia que ao errar o alvo, você mesmo toma dano. Complete o código abaixo",
            },
            {
                type: "code",
                data: "if (acertouOAlvo) {\n    vidaInimigo -= 20;\n} _____ {\n    vidaPersonagem -= 20;\n}",
            },
        ],
        hint: "Você quer executar um código SE a condição NÃO for real.",
        type: "COMPLETE_CODE",
        lessonId: "b57a18fa-2b3f-4d08-b1d1-6d1f7b00c4a2",
        order: 2,
    },
    {
        id: "dc30e9a5-b01e-4c29-9f92-4c8c82e2a09b",
        content: [
            {
                type: "paragraph",
                data: "Complete o código que verifica se o jogador tem energia suficiente para atacar. Se não tiver, o personagem desmaia:",
            },
            {
                type: "code",
                data: "if (energia _____ 20) {\n    atacar();\n} else {\n    desmaiar();\n}",
            },
        ],
        hint: "Qual operador verifica se a energia é maior ou igual a 20?",
        type: "MULTIPLE_CHOICE",
        lessonId: "b57a18fa-2b3f-4d08-b1d1-6d1f7b00c4a2",
        order: 3,
    },
    {
        id: "db86b67c-5a64-4e76-8477-836d02f403c4",
        content: [
            {
                type: "paragraph",
                data: "O que acontece se a condição dentro do 'if' for falsa e haver um else embaixo?",
            },
        ],
        hint: "Pense no papel do 'else'.",
        type: "MULTIPLE_CHOICE",
        lessonId: "b57a18fa-2b3f-4d08-b1d1-6d1f7b00c4a2",
        order: 4,
    },
    {
        id: "ae65b688-4f48-4a71-a5a8-f3c6a7e8127c",
        content: [
            {
                type: "paragraph",
                data: "Complete o código que mostra 'Sucesso!' se o teste for verdadeiro e 'Falha!' caso contrário.",
            },
            {
                type: "code",
                data: "if (testePassou == true) {\n    console.log('Sucesso!');\n} _____ {\n    console.log('Falha!');\n}",
            },
        ],
        hint: "Qual palavra completa o bloco alternativo?",
        type: "COMPLETE_CODE",
        lessonId: "b57a18fa-2b3f-4d08-b1d1-6d1f7b00c4a2",
        order: 5,
    },
] as const;

export const ifElseIfExercises = [
    {
        id: "f43d5f13-2032-4f5d-bbe9-4af83b4f2d77",
        content: [
            {
                type: "paragraph",
                data: "Quando temos várias condições possíveis, usamos 'if... else if... else' para testar uma por uma até encontrar a verdadeira.",
            },
            {
                type: "code",
                data: "if (condicao1) {\n    // executa se condicao1 for verdadeira\n} else if (condicao2) {\n    // executa se condicao2 for verdadeira\n} else {\n    // executa se nenhuma for verdadeira\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: "d3f4a71b-9b45-4f60-bf53-cb830b43e2de",
        order: 1,
    },
    {
        id: "e1a5cf8a-34d9-4c20-b689-6b7b92cc88d5",
        content: [
            {
                type: "paragraph",
                data: "Um mago conjura feitiços diferentes dependendo da energia que tem. Complete o código:",
            },
            {
                type: "code",
                data: "if (energia > 80) {\n    lancarMagiaForte();\n} _____ (energia > 40) {\n    lancarMagiaMedia();\n} else {\n    lancarMagiaFraca();\n}",
            },
        ],
        hint: "Use a palavra que liga o segundo teste condicional.",
        type: "COMPLETE_CODE",
        lessonId: "d3f4a71b-9b45-4f60-bf53-cb830b43e2de",
        order: 2,
    },
    {
        id: "b8127c2b-7d51-48df-a7b5-8df6a9a29c3f",
        content: [
            {
                type: "paragraph",
                data: "Complete o código que verifica o nível de ameaça de um inimigo com base em sua força:",
            },
            {
                type: "code",
                data: "if (forca > 90) {\n    console.log('Chefe!');\n} else if (_____ > 50) {\n    console.log('Inimigo Forte');\n} else {\n    console.log('Inimigo Fraco');\n}",
            },
        ],
        hint: "Use a mesma variável anterior.",
        type: "COMPLETE_CODE",
        lessonId: "d3f4a71b-9b45-4f60-bf53-cb830b43e2de",
        order: 3,
    },
    {
        id: "db97fc18-9628-41b1-9a0a-1f3f2309eb89",
        content: [
            {
                type: "paragraph",
                data: "Qual a principal diferença entre usar 'if... else if' e vários 'if' separados?",
            },
        ],
        hint: "Pense em quantas condições podem ser verdadeiras ao mesmo tempo.",
        type: "MULTIPLE_CHOICE",
        lessonId: "d3f4a71b-9b45-4f60-bf53-cb830b43e2de",
        order: 4,
    },
] as const;

export const switchExercises = [
    {
        id: "e3a4e5c8-cc93-4e07-bb73-31fbc56cfac2",
        content: [
            {
                type: "paragraph",
                data: "O 'switch' é uma alternativa ao 'if... else if' quando precisamos testar muitas opções de um mesmo valor. A declaração 'switch' recebe a variável cujo valor será comparado. A declaração 'case' testa a variável com o valor. A declaração 'break' encerra o código. A declaração 'default' coloca um valor padrão para caso as outras sejam falsas.",
            },
            {
                type: "code",
                data: "switch (valor) {\n    case 1:\n        console.log('Opção 1');\n        break;\n    case 2:\n        console.log('Opção 2');\n        break;\n    default:\n        console.log('Nenhuma das opções!');\n}",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: "c45e25bc-7306-4d41-b82d-d9a3a25c7430",
        order: 1,
    },
    {
        id: "a79c96a0-37f7-47e3-94da-8c27606a508b",
        content: [
            {
                type: "paragraph",
                data: "Um guardião pergunta sua classe e responde diferente conforme o caso. Complete o código:",
            },
            {
                type: "code",
                data: " _____ (classe) {\n    case 'guerreiro':\n        console.log('Força e honra!');\n        break;\n    case 'mago':\n        console.log('Sabedoria e poder!');\n        break;\n    default:\n        console.log('Classe desconhecida.');\n}",
            },
        ],
        hint: "Qual palavra que recebe uma variável para comparar?",
        type: "COMPLETE_CODE",
        lessonId: "c45e25bc-7306-4d41-b82d-d9a3a25c7430",
        order: 2,
    },
    {
        id: "b7d9a028-bbc0-4f76-89c9-165a89438148",
        content: [
            {
                type: "paragraph",
                data: "Qual a palavra que impede o código de continuar executando os próximos casos?",
            },
        ],
        hint: "Lembre-se que o JavaScript executa os próximos blocos até encontrar uma quebra.",
        type: "MULTIPLE_CHOICE",
        lessonId: "c45e25bc-7306-4d41-b82d-d9a3a25c7430",
        order: 3,
    },
    {
        id: "d6f1c0b4-d2de-4b52-ae51-2cfb8d1f0039",
        content: [
            {
                type: "paragraph",
                data: "Complete o código que mostra o tipo de poção conforme sua cor:",
            },
            {
                type: "code",
                data: "switch (cor) {\n    case 'vermelha':\n        console.log('Poção de vida');\n        break;\n    case 'azul':\n        console.log('Poção de mana');\n        break;\n    _____:\n        console.log('Poção misteriosa');\n}",
            },
        ],
        hint: "Qual palavra é usada para o caso padrão (quando nenhum outro é verdadeiro)?",
        type: "COMPLETE_CODE",
        lessonId: "c45e25bc-7306-4d41-b82d-d9a3a25c7430",
        order: 4,
    },
] as const;
