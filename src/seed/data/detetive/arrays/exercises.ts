export const arraysExercises = [
    {
        id: 'fcd245dc-1eb7-4b3f-a625-939561b2a3fc',
        content: [
            {
                type: "paragraph",
                data: "Um array é uma estrutura que permite guardar vários valores em uma única variável. Por exemplo:",
            },
            {
                type: "code",
                data: "const inventario = ['Espada', 'Escudo', 'Poção'];\ninventario[0]",
            },
            {
                type: "paragraph",
                data: "No exemplo acima, `inventario` guarda três itens, acessíveis por seus índices 0, 1 e 2 caso sejam colocados entre colchetes.",
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
                data: "Complete o código para acessar o segundo item do array `inventario`:",
            },
            {
                type: "code",
                data: "const inventario = ['Espada', 'Escudo', 'Poção'];\nconsole.log(inventario[_____]);",
            },
        ],
        hint: "Lembre-se que os índices começam do 0 e é necessário colocar apenas o número.",
        type: "COMPLETE_CODE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 2,
    },
    {
        id: 'e89c9858-ffc6-4d58-ae62-b0637eae2b2b',
        content: [
            {
                type: "paragraph",
                data: "Arrays possuem propriedades e métodos, que funcionam como variáveis e funções internas do array.",
            },
            {
                type: "code",
                data: "const inventario = ['Espada', 'Escudo', 'Poção'];\ninventario.push('Grimório'); // Adiciona um item no fim do array\ninventario.pop(); // Remove o último item de um array\ninventario.length // Retorna a quantidade de itens no array",
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
                data: "Qual método adiciona um novo elemento ao final de um array?",
            },
        ],
        hint: "Você precisa 'empurrar' um valor para o final do array.",
        type: "MULTIPLE_CHOICE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 4,
    },
    {
        id: '401661b5-c15a-426e-b2ef-fb48814ec61f',
        content: [
            {
                type: "paragraph",
                data: "Complete o código que remove o último item de um array:",
            },
            {
                type: "code",
                data: "const inventario = ['Espada', 'Escudo', 'Poção'];\ninventario._____();",
            },
        ],
        hint: "É o método oposto de `push()`.",
        type: "COMPLETE_CODE",
        lessonId: '9d3d5847-0c97-4ce1-8ea4-9f7fd9d825b7',
        order: 5,
    },
    {
        id: '3649917c-7310-48f7-a250-43ac85df42bb',
        content: [
            {
                type: "paragraph",
                data: "Qual resultado será exibido no console?",
            },
            {
                type: "code",
                data: "const numeros = [10, 20, 30];\nconsole.log(numeros.length);",
            },
        ],
        hint: "O `.length` mostra o tamanho (quantos elementos existem).",
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
                data: "Os índices dos arrays começam em 0. Assim, o primeiro item tem índice 0, o segundo tem índice 1 e assim por diante.",
            },
            {
                type: "code",
                data: "const magias = ['Fogo', 'Gelo', 'Raio'];\nconsole.log(magias[1]);",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "Lembre-se: o segundo item está na posição 1.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 1,
    },
    {
        id: '64c722b9-9141-4294-8328-e44e4f946f79',
        content: [
            {
                type: "paragraph",
                data: "Qual será o resultado do código abaixo?",
            },
            {
                type: "code",
                data: "const inventario = ['Espada', 'Escudo'];\ninventario.push('Poção');\nconsole.log(inventario);",
            },
        ],
        hint: "O método `push` adiciona um novo item ao final do array.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 2,
    },
    {
        id: 'ee4f18c8-a6e7-4c0a-913d-95615cc0685f',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para remover o último item do array `mochila`:",
            },
            {
                type: "code",
                data: "const mochila = ['Mapa', 'Tocha', 'Corda'];\nmochila._____();",
            },
        ],
        hint: "É o oposto de `push()`.",
        type: "COMPLETE_CODE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 3,
    },
    {
        id: '2a80b342-4b0d-4081-bd32-4ac60f2e6a90',
        content: [
            {
                type: "paragraph",
                data: "O que o código a seguir exibirá no console?",
            },
            {
                type: "code",
                data: "const runas = ['Terra', 'Água', 'Ar', 'Fogo'];\nconsole.log(runas.length);",
            },
        ],
        hint: "O `.length` mostra quantos elementos há no array.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7118b28c-f423-46f0-91b8-35f465423520',
        order: 4,
    },
    {
        id: '03d49c47-2235-4972-aae2-979d0d9afd6a',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para adicionar um novo feitiço ao final do array `grimorio`:",
            },
            {
                type: "code",
                data: "const grimorio = ['Cura', 'Ilusão'];\ngrimorio._____('Relâmpago');",
            },
        ],
        hint: "Use o método que adiciona um item ao fim.",
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
                data: "O método `includes()` verifica se um valor está presente em um array, retornando true ou false.",
            },
            {
                type: "code",
                data: "const grimorio = ['Fogo', 'Gelo', 'Raio'];\nconsole.log(grimorio.includes('Gelo'));",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "O feitiço 'Gelo' está no grimório?",
        type: "MULTIPLE_CHOICE",
        lessonId: '94b18b29-f34c-4a6e-acec-f3ca3a2a4dc5',
        order: 1,
    },
    {
        id: '1acc1987-40b4-4a50-9b64-7fb5bb0b33c1',
        content: [
            {
                type: "paragraph",
                data: "O método `indexOf()` retorna o índice onde um valor aparece no array, ou `-1` se ele não for encontrado.",
            },
            {
                type: "code",
                data: "const runas = ['Terra', 'Água', 'Fogo'];\nconsole.log(runas.indexOf('Fogo'));",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "Lembre-se: índices começam do 0.",
        type: "MULTIPLE_CHOICE",
        lessonId: '94b18b29-f34c-4a6e-acec-f3ca3a2a4dc5',
        order: 2,
    },
    {
        id: '852c780d-b142-4373-a1e2-f5679a3b6a52',
        content: [
            {
                type: "paragraph",
                data: "O método `slice()` cria uma cópia parcial do array, sem modificar o original.",
            },
            {
                type: "code",
                data: "const pergaminhos = ['Fogo', 'Gelo', 'Raio', 'Terra'];\nconst copiados = pergaminhos.slice(1, 3);\nconsole.log(copiados);",
            },
        ],
        hint: "O slice copia do índice inicial até o final (sem incluir o último).",
        type: "MULTIPLE_CHOICE",
        lessonId: '94b18b29-f34c-4a6e-acec-f3ca3a2a4dc5',
        order: 3,
    },
    {
        id: '3b2aa1c3-19ca-4e02-aa84-d5dbf5851461',
        content: [
            {
                type: "paragraph",
                data: "Qual dessas magias modifica o array original?",
            },
        ],
        hint: "Nem todas as funções de array são inofensivas...",
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
                data: "O laço `for` clássico pode ser usado para percorrer todos os elementos de um array, acessando cada posição com um índice.",
            },
            {
                type: "code",
                data: "const magias = ['Fogo', 'Gelo', 'Raio'];\nfor (let i = 0; i < magias.length; i++) {\n  console.log(magias[i]);\n}",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "O loop percorre todos os elementos do array em ordem.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 1,
    },
    {
        id: '29e17c7a-2708-4199-a3d6-645fd73fa785',
        content: [
            {
                type: "paragraph",
                data: "O `for...of` percorre diretamente os valores de um array, sem precisar de índice.",
            },
            {
                type: "code",
                data: "const poções = ['Cura', 'Mana', 'Força'];\nfor (const poção of poções) {\n  console.log(poção);\n}",
            },
        ],
        hint: "Cada elemento da lista é mostrado uma vez.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 2,
    },
    {
        id: 'cb8551b6-f89c-41b8-9c6a-9d0abc8b3fe2',
        content: [
            {
                type: "paragraph",
                data: "Complete o código.",
            },
            {
                type: "code",
                data: "const poções = ['Cura', 'Mana', 'Força'];\nfor (const poção _____ poções) {\n  console.log(poção);\n}",
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
                data: "O método `forEach()` executa uma função para cada elemento do array.",
            },
            {
                type: "code",
                data: "const runas = ['Ar', 'Água', 'Terra'];\nrunas.forEach((runa) => {\n  console.log('Runa mágica:', runa);\n});",
            },
            {
                type: "paragraph",
                data: "Enquanto isso, método `map()` cria um novo array com os resultados da função aplicada a cada elemento.",
            },
            {
                type: "code",
                data: "const danos = [10, 20, 30];\nconst dobrados = danos.map(dano => dano * 2);\nconsole.log(dobrados);",
            },
        ],
        hint: "Cada runa é invocada individualmente com um prefixo de texto.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 4,
    },
    {
        id: '4d91f5b8-ed35-4f99-a698-8bf5002c9605',
        content: [
            {
                type: "paragraph",
                data: "Complete o código.",
            },
            {
                type: "code",
                data: "const danos = [10, 20, 30];\nconst dobrados = danos._____(dano => dano * 2);\nconsole.log(dobrados);",
            },
        ],
        hint: "Coloque o método que cria um novo array.",
        type: "COMPLETE_CODE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 5,
    },
    {
        id: 'b56ceb93-2a68-471b-8642-d1fe6e5d9a06',
        content: [
            {
                type: "paragraph",
                data: "Qual será o resultado do código abaixo?",
            },
            {
                type: "code",
                data: "const danos = [10, 20, 30];\nconst dobrados = danos.map(dano => dano * 2);\nconsole.log(dobrados);",
            },
        ],
        hint: "O método map não altera o original, mas retorna um novo com as transformações.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f164775f-82be-4745-8b63-102ee57644d8',
        order: 6,
    },
] as const;
