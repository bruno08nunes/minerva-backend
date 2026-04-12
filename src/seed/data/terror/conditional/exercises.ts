export const ifExercises = [
    {
        id: '95bdfc7f-92d0-4334-a245-9bff5e6311a2',
        content: [
            {
                type: "paragraph",
                data: "O comando 'if' permite tomar decisões, algo essencial quando você está preso em um lugar desconhecido. Ele executa um bloco de código apenas se uma condição for verdadeira.",
            },
            {
                type: "code",
                data: "if (condicao) {\n    // código executado se for verdadeiro\n}",
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
                data: "Você só deve fugir se houver uma saída aberta. Complete o código:",
            },
            {
                type: "code",
                data: " _____ (saidaAberta == true) {\n    fugir();\n}",
            },
        ],
        hint: "Qual comando executa algo apenas se a condição for verdadeira?",
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
                data: "if (sanidade > sanidadeMaxima) {\n    sanidade = sanidadeMaxima;\n}",
            },
        ],
        hint: "O que acontece quando o valor ultrapassa o limite?",
        type: "MULTIPLE_CHOICE",
        lessonId: '481e4835-7b05-4d4d-b0b2-a386c0823ea6',
        order: 3,
    },
    {
        id: '4f0591bf-4a5c-4ba4-8745-cc64838a78a4',
        content: [
            {
                type: "paragraph",
                data: "Complete o código que verifica se você tem uma chave antes de abrir uma porta trancada:",
            },
            {
                type: "code",
                data: "if (temChave _____ true) {\n    abrirPorta();\n}",
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
                data: "Qual condição representa corretamente: 'seu nível de medo é maior que 100'?",
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
                data: "O 'if... else' permite escolher entre dois caminhos, uma decisão que pode significar sobreviver... ou não.",
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
                data: "Você tenta fugir: se o caminho estiver livre, você escapa. Caso contrário... algo te alcança.",
            },
            {
                type: "code",
                data: "if (caminhoLivre) {\n    escapar();\n} _____ {\n    serCapturado();\n}",
            },
        ],
        hint: "Qual bloco executa quando a condição é falsa?",
        type: "COMPLETE_CODE",
        lessonId: '833184bd-c42e-4b21-8284-cb26252ffa9d',
        order: 2,
    },
    {
        id: '8a3a6282-1dd4-4f3e-a65c-198bc2cfa590',
        content: [
            {
                type: "paragraph",
                data: "Você só consegue correr se tiver energia suficiente. Caso contrário, você desmaia.",
            },
            {
                type: "code",
                data: "if (energia _____ 20) {\n    correr();\n} else {\n    desmaiar();\n}",
            },
        ],
        hint: "Qual operador representa 'maior ou igual'?",
        type: "MULTIPLE_CHOICE",
        lessonId: '833184bd-c42e-4b21-8284-cb26252ffa9d',
        order: 3,
    },
    {
        id: '0540cd14-c5c9-4d64-8479-53f88d003266',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se a condição do 'if' for falsa e existir um 'else'?",
            },
        ],
        hint: "Pense no propósito do 'else'.",
        type: "MULTIPLE_CHOICE",
        lessonId: '833184bd-c42e-4b21-8284-cb26252ffa9d',
        order: 4,
    },
    {
        id: 'e6ee2b15-0f7a-4de3-886f-e7b3c2dc7970',
        content: [
            {
                type: "paragraph",
                data: "Complete o código que mostra 'Seguro' se não houver perigo e 'Perigo!' caso contrário.",
            },
            {
                type: "code",
                data: "if (semPerigo == true) {\n    console.log('Seguro');\n} _____ {\n    console.log('Perigo!');\n}",
            },
        ],
        hint: "Qual palavra define o caminho alternativo?",
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
                data: "Quando há várias possibilidades de perigo, usamos 'if... else if... else' para decidir qual situação está acontecendo.",
            },
            {
                type: "code",
                data: "if (condicao1) {\n} else if (condicao2) {\n} else {\n}",
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
                data: "Dependendo do seu nível de medo, você reage de formas diferentes.",
            },
            {
                type: "code",
                data: "if (medo > 80) {\n    fugirDesesperadamente();\n} _____ (medo > 40) {\n    andarCautelosamente();\n} else {\n    ignorar();\n}",
            },
        ],
        hint: "Qual palavra permite testar outra condição?",
        type: "COMPLETE_CODE",
        lessonId: '681e0f09-b278-418d-a6df-2644887222c7',
        order: 2,
    },
    {
        id: '841d4951-660a-4ce9-800f-a4bff58d40bd',
        content: [
            {
                type: "paragraph",
                data: "Classifique o nível de ameaça com base no medo:",
            },
            {
                type: "code",
                data: "if (medo > 90) {\n    console.log('Terror absoluto');\n} else if (_____ > 50) {\n    console.log('Perigo alto');\n} else {\n    console.log('Seguro... por enquanto');\n}",
            },
        ],
        hint: "Use a mesma variável.",
        type: "COMPLETE_CODE",
        lessonId: '681e0f09-b278-418d-a6df-2644887222c7',
        order: 3,
    },
    {
        id: 'e21a7d18-27c2-41cc-9b0b-13780b0308bd',
        content: [
            {
                type: "paragraph",
                data: "Qual a diferença entre 'if... else if' e vários 'if' separados?",
            },
        ],
        hint: "Quantos blocos podem ser executados?",
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
                data: "O 'switch' ajuda a reagir a diferentes situações, como diferentes sons estranhos na casa, com base em um único valor.",
            },
            {
                type: "code",
                data: "switch (evento) {\n    case 'passos':\n        console.log('Alguém está vindo...');\n        break;\n    case 'porta':\n        console.log('A porta se moveu sozinha');\n        break;\n    default:\n        console.log('Silêncio perturbador');\n}",
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
                data: "Dependendo do som que você ouve, você reage de forma diferente.",
            },
            {
                type: "code",
                data: " _____ (som) {\n    case 'grito':\n        console.log('Fuja!');\n        break;\n    case 'sussurro':\n        console.log('Algo está perto...');\n        break;\n    default:\n        console.log('Silêncio estranho');\n}",
            },
        ],
        hint: "Qual palavra inicia essa estrutura?",
        type: "COMPLETE_CODE",
        lessonId: 'ffd1db1e-439a-4b0b-b137-0da4baf5bfda',
        order: 2,
    },
    {
        id: '6a9fc69f-9073-4f51-83fd-7932770a4119',
        content: [
            {
                type: "paragraph",
                data: "Qual palavra impede que os próximos casos continuem sendo executados?",
            },
        ],
        hint: "Ela interrompe o fluxo.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ffd1db1e-439a-4b0b-b137-0da4baf5bfda',
        order: 3,
    },
    {
        id: 'bcddb431-c6d8-480e-ac29-1265b7980495',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para o caso de nenhum evento conhecido acontecer:",
            },
            {
                type: "code",
                data: "switch (evento) {\n    case 'luz':\n        console.log('As luzes piscam');\n        break;\n    case 'porta':\n        console.log('A porta bate');\n        break;\n    _____:\n        console.log('Algo inexplicável acontece');\n}",
            },
        ],
        hint: "Qual palavra representa o caso padrão?",
        type: "COMPLETE_CODE",
        lessonId: 'ffd1db1e-439a-4b0b-b137-0da4baf5bfda',
        order: 4,
    },
] as const;