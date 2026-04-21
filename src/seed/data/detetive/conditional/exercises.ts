export const ifExercises = [
    {
        id: 'a7fd20b0-2212-4027-bfdf-b38dc7e91633',
        content: [
            {
                type: "paragraph",
                data: "O comando 'if' permite que você tome decisões durante uma investigação. Ele executa um bloco de código apenas se uma condição for verdadeira.",
            },
            {
                type: "code",
                data: "if (condicao) {\n    // código executado se a condição for verdadeira\n}",
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
                data: "Você só pode interrogar um suspeito se tiver provas suficientes. Complete o código:",
            },
            {
                type: "code",
                data: " _____ (provas >= 10) {\n    interrogarSuspeito();\n}",
            },
        ],
        hint: "Qual estrutura executa código apenas quando a condição é verdadeira?",
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
                data: "if (evidencias > evidenciasMaximas) {\n    evidencias = evidenciasMaximas;\n}",
            },
        ],
        hint: "O que acontece quando o número de evidências ultrapassa o limite?",
        type: "MULTIPLE_CHOICE",
        lessonId: '0b3c39eb-f13e-438d-87fa-68a851b45755',
        order: 3,
    },
    {
        id: 'ef5470c9-73b8-4b09-884a-aeec98bd4737',
        content: [
            {
                type: "paragraph",
                data: "Complete o código que verifica se você tem um mandado antes de fazer uma busca:",
            },
            {
                type: "code",
                data: "if (temMandado _____ true) {\n    realizarBusca();\n}",
            },
        ],
        hint: "Qual operador usamos para verificar igualdade?",
        type: "COMPLETE_CODE",
        lessonId: '0b3c39eb-f13e-438d-87fa-68a851b45755',
        order: 4,
    },
    {
        id: '251e7a3d-9ef2-4976-b49e-c026255c79e3',
        content: [
            {
                type: "paragraph",
                data: "Qual condição representa corretamente: 'há mais de 100 evidências coletadas'?",
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
                data: "O 'if... else' permite tomar decisões alternativas durante a investigação: um caminho se a condição for verdadeira, outro se for falsa.",
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
                data: "Se você identificar corretamente o suspeito, avança no caso; caso contrário, perde tempo. Complete o código:",
            },
            {
                type: "code",
                data: "if (identificouSuspeito) {\n    avancarCaso();\n} _____ {\n    perderTempo();\n}",
            },
        ],
        hint: "Qual bloco executa quando a condição é falsa?",
        type: "COMPLETE_CODE",
        lessonId: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        order: 2,
    },
    {
        id: '41767bfc-c667-414e-83d2-31a894e60aa0',
        content: [
            {
                type: "paragraph",
                data: "Verifique se há evidências suficientes para prender o suspeito. Caso contrário, continue investigando:",
            },
            {
                type: "code",
                data: "if (evidencias _____ 20) {\n    prender();\n} else {\n    investigarMais();\n}",
            },
        ],
        hint: "Qual operador representa 'maior ou igual'?",
        type: "MULTIPLE_CHOICE",
        lessonId: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        order: 3,
    },
    {
        id: 'b7a0f797-88bc-48fc-ba22-b8f71c028c42',
        content: [
            {
                type: "paragraph",
                data: "O que acontece se a condição do 'if' for falsa e houver um 'else'?",
            },
        ],
        hint: "O 'else' cobre o caso contrário.",
        type: "MULTIPLE_CHOICE",
        lessonId: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        order: 4,
    },
    {
        id: '7d1560a6-4adb-454c-9909-c432bf4c9d4e',
        content: [
            {
                type: "paragraph",
                data: "Complete o código que mostra 'Caso resolvido!' se for verdadeiro e 'Caso inconclusivo!' caso contrário:",
            },
            {
                type: "code",
                data: "if (casoResolvido == true) {\n    console.log('Caso resolvido!');\n} _____ {\n    console.log('Caso inconclusivo!');\n}",
            },
        ],
        hint: "Qual palavra define o caminho alternativo?",
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
                data: "Quando há vários possíveis cenários em uma investigação, usamos 'if... else if... else' para testar diferentes condições.",
            },
            {
                type: "code",
                data: "if (condicao1) {\n    // ação 1\n} else if (condicao2) {\n    // ação 2\n} else {\n    // ação padrão\n}",
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
                data: "Dependendo da quantidade de evidências, você toma decisões diferentes. Complete o código:",
            },
            {
                type: "code",
                data: "if (evidencias > 80) {\n    acusarPrincipalSuspeito();\n} _____ (evidencias > 40) {\n    investigarSuspeitos();\n} else {\n    buscarMaisPistas();\n}",
            },
        ],
        hint: "Use a palavra que adiciona uma nova condição.",
        type: "COMPLETE_CODE",
        lessonId: 'c9bb5f68-5fe5-47af-84fa-f4c68cd93f2b',
        order: 2,
    },
    {
        id: '086ba5c9-bc36-4a8b-87c9-33e99aaac799',
        content: [
            {
                type: "paragraph",
                data: "Classifique o nível de suspeita com base no valor:",
            },
            {
                type: "code",
                data: "if (suspeita > 90) {\n    console.log('Culpado!');\n} else if (_____ > 50) {\n    console.log('Suspeito');\n} else {\n    console.log('Inocente');\n}",
            },
        ],
        hint: "Use a mesma variável usada anteriormente.",
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
        hint: "Pense em quantas condições podem ser executadas.",
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
                data: "O 'switch' pode ser usado para lidar com diferentes situações em uma investigação, dependendo de um valor específico.",
            },
            {
                type: "code",
                data: "switch (caso) {\n    case 'roubo':\n        console.log('Investigar local');\n        break;\n    case 'homicidio':\n        console.log('Chamar perícia');\n        break;\n    default:\n        console.log('Caso desconhecido');\n}",
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
                data: "Dependendo do tipo de crime, você toma ações diferentes. Complete o código:",
            },
            {
                type: "code",
                data: " _____ (tipoCrime) {\n    case 'roubo':\n        console.log('Analisar câmeras');\n        break;\n    case 'fraude':\n        console.log('Verificar documentos');\n        break;\n    default:\n        console.log('Sem informações');\n}",
            },
        ],
        hint: "Qual palavra inicia essa estrutura?",
        type: "COMPLETE_CODE",
        lessonId: '4b446f68-7bdf-4583-aca1-b804cb2666f7',
        order: 2,
    },
    {
        id: 'c942a5ee-277d-4a89-a1f8-e4d0c035d1e4',
        content: [
            {
                type: "paragraph",
                data: "Qual palavra impede que o código continue executando os próximos casos?",
            },
        ],
        hint: "Ela interrompe o fluxo dentro do switch.",
        type: "MULTIPLE_CHOICE",
        lessonId: '4b446f68-7bdf-4583-aca1-b804cb2666f7',
        order: 3,
    },
    {
        id: '40402f3e-6377-4e14-bcff-9d4f01fa2b93',
        content: [
            {
                type: "paragraph",
                data: "Complete o código que define uma ação padrão quando o tipo de crime não é reconhecido:",
            },
            {
                type: "code",
                data: "switch (tipoCrime) {\n    case 'roubo':\n        console.log('Investigar cena');\n        break;\n    case 'sequestro':\n        console.log('Ação imediata');\n        break;\n    _____:\n        console.log('Caso desconhecido');\n}",
            },
        ],
        hint: "Qual palavra representa o caso padrão?",
        type: "COMPLETE_CODE",
        lessonId: '4b446f68-7bdf-4583-aca1-b804cb2666f7',
        order: 4,
    },
] as const;