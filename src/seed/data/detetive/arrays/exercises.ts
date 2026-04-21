export const arraysExercises = [
    {
        id: 'fcd245dc-1eb7-4b3f-a625-939561b2a3fc',
        content: [
            {
                type: "paragraph",
                data: "Um array é uma estrutura que permite guardar vários valores em uma única variável. Em uma investigação, pode representar uma lista de evidências:",
            },
            {
                type: "code",
                data: "const evidencias = ['Impressão digital', 'Pegada', 'Câmera'];\nevidencias[0]",
            },
            {
                type: "paragraph",
                data: "No exemplo acima, `evidencias` guarda três itens, acessíveis por seus índices 0, 1 e 2.",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 1,
    },
    {
        id: 'b449d2a4-f7a9-41af-8bc7-d227e450e6bc',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para acessar a segunda evidência do array `evidencias`:",
            },
            {
                type: "code",
                data: "const evidencias = ['Impressão digital', 'Pegada', 'Câmera'];\nconsole.log(evidencias[_____]);",
            },
        ],
        hint: "Os índices começam em 0.",
        type: "COMPLETE_CODE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 2,
    },
    {
        id: 'e89c9858-ffc6-4d58-ae62-b0637eae2b2b',
        content: [
            {
                type: "paragraph",
                data: "Arrays possuem propriedades e métodos úteis para manipular listas de pistas.",
            },
            {
                type: "code",
                data: "const evidencias = ['Impressão digital', 'Pegada', 'Câmera'];\nevidencias.push('Testemunha');\nevidencias.pop();\nevidencias.length",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 3,
    },
    {
        id: '4b55e43c-e577-407b-a131-28816759d4e2',
        content: [
            {
                type: "paragraph",
                data: "Qual método adiciona uma nova evidência ao final de um array?",
            },
        ],
        hint: "Você precisa 'empurrar' a evidência para o final.",
        type: "MULTIPLE_CHOICE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 4,
    },
    {
        id: '401661b5-c15a-426e-b2ef-fb48814ec61f',
        content: [
            {
                type: "paragraph",
                data: "Complete o código que remove a última evidência:",
            },
            {
                type: "code",
                data: "const evidencias = ['Impressão digital', 'Pegada', 'Câmera'];\nevidencias._____();",
            },
        ],
        hint: "É o oposto de `push()`.",
        type: "COMPLETE_CODE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 5,
    },
    {
        id: '3649917c-7310-48f7-a250-43ac85df42bb',
        content: [
            {
                type: "paragraph",
                data: "Quantas evidências existem?",
            },
            {
                type: "code",
                data: "const numeros = [10, 20, 30];\nconsole.log(numeros.length);",
            },
        ],
        hint: "`.length` mostra quantos itens existem.",
        type: "MULTIPLE_CHOICE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 6,
    },
] as const;

export const handlingArraysExercises = [
    {
        id: '5e573628-5004-430f-863b-fa8af4ff376f',
        content: [
            {
                type: "paragraph",
                data: "Os índices começam em 0. Isso ajuda o detetive a acessar pistas específicas.",
            },
            {
                type: "code",
                data: "const suspeitos = ['João', 'Maria', 'Carlos'];\nconsole.log(suspeitos[1]);",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "O segundo item está na posição 1.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 1,
    },
    {
        id: '64c722b9-9141-4294-8328-e44e4f946f79',
        content: [
            {
                type: "paragraph",
                data: "Qual será o resultado?",
            },
            {
                type: "code",
                data: "const evidencias = ['Impressão', 'Pegada'];\nevidencias.push('Câmera');\nconsole.log(evidencias);",
            },
        ],
        hint: "Adiciona no final.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 2,
    },
    {
        id: 'ee4f18c8-a6e7-4c0a-913d-95615cc0685f',
        content: [
            {
                type: "paragraph",
                data: "Remova a última evidência:",
            },
            {
                type: "code",
                data: "const mochila = ['Prova A', 'Prova B', 'Prova C'];\nmochila._____();",
            },
        ],
        hint: "Oposto de `push()`.",
        type: "COMPLETE_CODE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 3,
    },
    {
        id: '2a80b342-4b0d-4081-bd32-4ac60f2e6a90',
        content: [
            {
                type: "paragraph",
                data: "Quantas pistas existem?",
            },
            {
                type: "code",
                data: "const pistas = ['A', 'B', 'C', 'D'];\nconsole.log(pistas.length);",
            },
        ],
        hint: "Conta os elementos.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 4,
    },
    {
        id: '03d49c47-2235-4972-aae2-979d0d9afd6a',
        content: [
            {
                type: "paragraph",
                data: "Adicione uma nova evidência:",
            },
            {
                type: "code",
                data: "const casos = ['Roubo', 'Fraude'];\ncasos._____('Sequestro');",
            },
        ],
        hint: "Adiciona ao final.",
        type: "COMPLETE_CODE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 5,
    },
] as const;

export const arraysAdvancedExercises = [
    {
        id: 'c92b8597-8473-4890-a337-8265631ceb08',
        content: [
            {
                type: "paragraph",
                data: "O método `includes()` verifica se uma evidência está presente.",
            },
            {
                type: "code",
                data: "const evidencias = ['Impressão', 'Pegada', 'DNA'];\nconsole.log(evidencias.includes('Pegada'));",
            },
            {
                type: "paragraph",
                data: "O código exibirá:",
            },
        ],
        hint: "A evidência existe?",
        type: "MULTIPLE_CHOICE",
        lessonId: '94b18b29-f34c-4a6e-acec-f3ca3a2a4dc5',
        order: 1,
    },
    {
        id: '1acc1987-40b4-4a50-9b64-7fb5bb0b33c1',
        content: [
            {
                type: "paragraph",
                data: "O método `indexOf()` retorna onde uma pista aparece.",
            },
            {
                type: "code",
                data: "const pistas = ['A', 'B', 'C'];\nconsole.log(pistas.indexOf('C'));",
            },
            {
                type: "paragraph",
                data: "O código exibirá:",
            },
        ],
        hint: "Índices começam em 0.",
        type: "MULTIPLE_CHOICE",
        lessonId: '94b18b29-f34c-4a6e-acec-f3ca3a2a4dc5',
        order: 2,
    },
    {
        id: '852c780d-b142-4373-a1e2-f5679a3b6a52',
        content: [
            {
                type: "paragraph",
                data: "O método `slice()` permite copiar parte de uma lista de evidências.",
            },
            {
                type: "code",
                data: "const provas = ['A', 'B', 'C', 'D'];\nconst copia = provas.slice(1, 3);\nconsole.log(copia);",
            },
        ],
        hint: "Não inclui o último índice.",
        type: "MULTIPLE_CHOICE",
        lessonId: '94b18b29-f34c-4a6e-acec-f3ca3a2a4dc5',
        order: 3,
    },
    {
        id: '3b2aa1c3-19ca-4e02-aa84-d5dbf5851461',
        content: [
            {
                type: "paragraph",
                data: "Qual desses métodos altera o array original durante a investigação?",
            },
        ],
        hint: "Alguns métodos modificam as evidências diretamente.",
        type: "MULTIPLE_CHOICE",
        lessonId: '94b18b29-f34c-4a6e-acec-f3ca3a2a4dc5',
        order: 4,
    },
] as const;

export const iterationsArraysExercises = [
    {
        id: 'fb4921cb-7f1f-4b23-aeed-62caabb7e4fc',
        content: [
            {
                type: "paragraph",
                data: "O laço `for` permite que o detetive analise todas as evidências uma por uma.",
            },
            {
                type: "code",
                data: "const evidencias = ['Impressão', 'Pegada', 'DNA'];\nfor (let i = 0; i < evidencias.length; i++) {\n  console.log(evidencias[i]);\n}",
            },
            {
                type: "paragraph",
                data: "O código exibirá:",
            },
        ],
        hint: "Percorre todas as evidências.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 1,
    },
    {
        id: '29e17c7a-2708-4199-a3d6-645fd73fa785',
        content: [
            {
                type: "paragraph",
                data: "O `for...of` percorre diretamente cada pista encontrada.",
            },
            {
                type: "code",
                data: "const pistas = ['A', 'B', 'C'];\nfor (const pista of pistas) {\n  console.log(pista);\n}",
            },
        ],
        hint: "Cada item aparece uma vez.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 2,
    },
    {
        id: 'cb8551b6-f89c-41b8-9c6a-9d0abc8b3fe2',
        content: [
            {
                type: "paragraph",
                data: "Complete o código:",
            },
            {
                type: "code",
                data: "const pistas = ['A', 'B', 'C'];\nfor (const pista _____ pistas) {\n  console.log(pista);\n}",
            },
        ],
        hint: "",
        type: "COMPLETE_CODE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 3,
    },
    {
        id: '7727d348-3272-4efd-bc4f-7cdfb811e1c0',
        content: [
            {
                type: "paragraph",
                data: "O método `forEach()` permite analisar cada evidência.",
            },
            {
                type: "code",
                data: "const pistas = ['A', 'B', 'C'];\npistas.forEach((pista) => {\n  console.log('Analisando:', pista);\n});",
            },
            {
                type: "paragraph",
                data: "Já o `map()` cria uma nova lista com resultados da análise.",
            },
            {
                type: "code",
                data: "const valores = [10, 20, 30];\nconst dobrados = valores.map(v => v * 2);\nconsole.log(dobrados);",
            },
        ],
        hint: "Cada pista é analisada individualmente.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 4,
    },
    {
        id: '4d91f5b8-ed35-4f99-a698-8bf5002c9605',
        content: [
            {
                type: "paragraph",
                data: "Complete o código:",
            },
            {
                type: "code",
                data: "const valores = [10, 20, 30];\nconst dobrados = valores._____(v => v * 2);\nconsole.log(dobrados);",
            },
        ],
        hint: "Cria um novo array.",
        type: "COMPLETE_CODE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 5,
    },
    {
        id: 'b56ceb93-2a68-471b-8642-d1fe6e5d9a06',
        content: [
            {
                type: "paragraph",
                data: "Qual será o resultado?",
            },
            {
                type: "code",
                data: "const valores = [10, 20, 30];\nconst dobrados = valores.map(v => v * 2);\nconsole.log(dobrados);",
            },
        ],
        hint: "Retorna um novo array com valores dobrados.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 6,
    },
] as const;