export const ifExercises = [
    {
        id: '95bdfc7f-92d0-4334-a245-9bff5e6311a2',
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
        lessonId: '481e4835-7b05-4d4d-b0b2-a386c0823ea6',
        order: 1,
    },
    {
        id: 'c699b171-287e-4ecf-99e4-df2bdfa2d73a',
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
        lessonId: '481e4835-7b05-4d4d-b0b2-a386c0823ea6',
        order: 2,
    },
    {
        id: 'a7f0f877-5fd1-473a-b83a-b593af9faec9',
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
        lessonId: '481e4835-7b05-4d4d-b0b2-a386c0823ea6',
        order: 3,
    },
    {
        id: '4f0591bf-4a5c-4ba4-8745-cc64838a78a4',
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
        lessonId: '481e4835-7b05-4d4d-b0b2-a386c0823ea6',
        order: 4,
    },
    {
        id: '530e8828-4b57-428f-b350-aaa7b4e2f9b4',
        content: [
            {
                type: "paragraph",
                data: "Qual dessas condições representa corretamente: 'o jogador tem mais de 100 pontos de XP'?",
            },
        ],
        hint: "Use o operador '>' (maior que).",
        type: "MULTIPLE_CHOICE",
        lessonId: '481e4835-7b05-4d4d-b0b2-a386c0823ea6',
        order: 5,
    },
] as const;

export const ifElseExercises = [
    {
        id: 'f4afd373-8254-47e2-88ce-1db6d12d8f64',
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
        lessonId: '833184bd-c42e-4b21-8284-cb26252ffa9d',
        order: 1,
    },
    {
        id: '27a2ad86-3ebe-4774-b8fb-653630090811',
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
        lessonId: '833184bd-c42e-4b21-8284-cb26252ffa9d',
        order: 2,
    },
    {
        id: '8a3a6282-1dd4-4f3e-a65c-198bc2cfa590',
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
        lessonId: '833184bd-c42e-4b21-8284-cb26252ffa9d',
        order: 3,
    },
    {
        id: '0540cd14-c5c9-4d64-8479-53f88d003266',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se a condição dentro do 'if' for falsa e haver um else embaixo?",
            },
        ],
        hint: "Pense no papel do 'else'.",
        type: "MULTIPLE_CHOICE",
        lessonId: '833184bd-c42e-4b21-8284-cb26252ffa9d',
        order: 4,
    },
    {
        id: 'e6ee2b15-0f7a-4de3-886f-e7b3c2dc7970',
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
        lessonId: '833184bd-c42e-4b21-8284-cb26252ffa9d',
        order: 5,
    },
] as const;

export const ifElseIfExercises = [
    {
        id: 'c7157f1e-9939-48fe-b7f3-31df7e80b139',
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
        lessonId: '681e0f09-b278-418d-a6df-2644887222c7',
        order: 1,
    },
    {
        id: '6146da48-342a-4e6b-b587-3b4835796ea2',
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
        lessonId: '681e0f09-b278-418d-a6df-2644887222c7',
        order: 2,
    },
    {
        id: '841d4951-660a-4ce9-800f-a4bff58d40bd',
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
        lessonId: '681e0f09-b278-418d-a6df-2644887222c7',
        order: 3,
    },
    {
        id: 'e21a7d18-27c2-41cc-9b0b-13780b0308bd',
        content: [
            {
                type: "paragraph",
                data: "Qual a principal diferença entre usar 'if... else if' e vários 'if' separados?",
            },
        ],
        hint: "Pense em quantas condições podem ser verdadeiras ao mesmo tempo.",
        type: "MULTIPLE_CHOICE",
        lessonId: '681e0f09-b278-418d-a6df-2644887222c7',
        order: 4,
    },
] as const;

export const switchExercises = [
    {
        id: '2b3b71d6-ca2c-491c-b142-52338e10c75f',
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
        lessonId: 'ffd1db1e-439a-4b0b-b137-0da4baf5bfda',
        order: 1,
    },
    {
        id: 'c1476b8b-64b7-4681-9a3d-be0563f583bd',
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
        lessonId: 'ffd1db1e-439a-4b0b-b137-0da4baf5bfda',
        order: 2,
    },
    {
        id: '6a9fc69f-9073-4f51-83fd-7932770a4119',
        content: [
            {
                type: "paragraph",
                data: "Qual a palavra que impede o código de continuar executando os próximos casos?",
            },
        ],
        hint: "Lembre-se que o JavaScript executa os próximos blocos até encontrar uma quebra.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ffd1db1e-439a-4b0b-b137-0da4baf5bfda',
        order: 3,
    },
    {
        id: 'bcddb431-c6d8-480e-ac29-1265b7980495',
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
        lessonId: 'ffd1db1e-439a-4b0b-b137-0da4baf5bfda',
        order: 4,
    },
] as const;
