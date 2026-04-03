export const ifExercises = [
    {
        id: 'a7fd20b0-2212-4027-bfdf-b38dc7e91633',
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
        lessonId: '0b3c39eb-f13e-438d-87fa-68a851b45755',
        order: 1,
    },
    {
        id: 'ef96bc4c-0b3f-4670-b25b-4ef26c4715c1',
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
        lessonId: '0b3c39eb-f13e-438d-87fa-68a851b45755',
        order: 2,
    },
    {
        id: 'ec6366c0-3e0b-413a-8449-5192e7ce6725',
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
        lessonId: '0b3c39eb-f13e-438d-87fa-68a851b45755',
        order: 3,
    },
    {
        id: 'ef5470c9-73b8-4b09-884a-aeec98bd4737',
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
        lessonId: '0b3c39eb-f13e-438d-87fa-68a851b45755',
        order: 4,
    },
    {
        id: '251e7a3d-9ef2-4976-b49e-c026255c79e3',
        content: [
            {
                type: "paragraph",
                data: "Qual dessas condições representa corretamente: 'o jogador tem mais de 100 pontos de XP'?",
            },
        ],
        hint: "Use o operador '>' (maior que).",
        type: "MULTIPLE_CHOICE",
        lessonId: '0b3c39eb-f13e-438d-87fa-68a851b45755',
        order: 5,
    },
] as const;

export const ifElseExercises = [
    {
        id: '42abcbef-1ba8-4bbf-b8f2-88a472dea097',
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
        lessonId: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        order: 1,
    },
    {
        id: '6e7cda6b-8e94-4db3-ae48-c38496d3b8bd',
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
        lessonId: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        order: 2,
    },
    {
        id: '41767bfc-c667-414e-83d2-31a894e60aa0',
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
        lessonId: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        order: 3,
    },
    {
        id: 'b7a0f797-88bc-48fc-ba22-b8f71c028c42',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se a condição dentro do 'if' for falsa e haver um else embaixo?",
            },
        ],
        hint: "Pense no papel do 'else'.",
        type: "MULTIPLE_CHOICE",
        lessonId: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        order: 4,
    },
    {
        id: '7d1560a6-4adb-454c-9909-c432bf4c9d4e',
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
        lessonId: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        order: 5,
    },
] as const;

export const ifElseIfExercises = [
    {
        id: '7bc46e4e-5fad-4b17-b268-4bd6d454571a',
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
        lessonId: 'c9bb5f68-5fe5-47af-84fa-f4c68cd93f2b',
        order: 1,
    },
    {
        id: 'f819f5ec-b4da-4490-a4fe-9bddb50d1473',
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
        lessonId: 'c9bb5f68-5fe5-47af-84fa-f4c68cd93f2b',
        order: 2,
    },
    {
        id: '086ba5c9-bc36-4a8b-87c9-33e99aaac799',
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
        lessonId: 'c9bb5f68-5fe5-47af-84fa-f4c68cd93f2b',
        order: 3,
    },
    {
        id: 'f53abfff-1f6c-49a8-96ca-cef0cdbad2d2',
        content: [
            {
                type: "paragraph",
                data: "Qual a principal diferença entre usar 'if... else if' e vários 'if' separados?",
            },
        ],
        hint: "Pense em quantas condições podem ser verdadeiras ao mesmo tempo.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'c9bb5f68-5fe5-47af-84fa-f4c68cd93f2b',
        order: 4,
    },
] as const;

export const switchExercises = [
    {
        id: 'e6b83437-66df-4e49-acba-f822125b2d9b',
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
        lessonId: '4b446f68-7bdf-4583-aca1-b804cb2666f7',
        order: 1,
    },
    {
        id: 'baf62fc0-a2fb-42bd-a27a-4fdb5f2c54f0',
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
        lessonId: '4b446f68-7bdf-4583-aca1-b804cb2666f7',
        order: 2,
    },
    {
        id: 'c942a5ee-277d-4a89-a1f8-e4d0c035d1e4',
        content: [
            {
                type: "paragraph",
                data: "Qual a palavra que impede o código de continuar executando os próximos casos?",
            },
        ],
        hint: "Lembre-se que o JavaScript executa os próximos blocos até encontrar uma quebra.",
        type: "MULTIPLE_CHOICE",
        lessonId: '4b446f68-7bdf-4583-aca1-b804cb2666f7',
        order: 3,
    },
    {
        id: '40402f3e-6377-4e14-bcff-9d4f01fa2b93',
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
        lessonId: '4b446f68-7bdf-4583-aca1-b804cb2666f7',
        order: 4,
    },
] as const;
