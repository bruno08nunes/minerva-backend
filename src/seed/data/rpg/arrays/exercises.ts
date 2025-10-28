export const arraysExercises = [
    {
        id: "a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78",
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
        lessonId: "f7a2b9e0-34d1-4d67-8a29-1f36b80c4b44",
        order: 1,
    },
    {
        id: "b2c3d4e5-f6a7-890b-cd12-ef34gh56ij78",
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
        lessonId: "f7a2b9e0-34d1-4d67-8a29-1f36b80c4b44",
        order: 2,
    },
    {
        id: "a1b2c3d4-e5f6-7890-ab12-cd34ef56gh68",
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
        lessonId: "f7a2b9e0-34d1-4d67-8a29-1f36b80c4b44",
        order: 3,
    },
    {
        id: "c3d4e5f6-a7b8-90c1-de23-fg45hi67jk89",
        content: [
            {
                type: "paragraph",
                data: "Qual método adiciona um novo elemento ao final de um array?",
            },
        ],
        hint: "Você precisa 'empurrar' um valor para o final do array.",
        type: "MULTIPLE_CHOICE",
        lessonId: "f7a2b9e0-34d1-4d67-8a29-1f36b80c4b44",
        order: 4,
    },
    {
        id: "d4e5f6a7-b8c9-01d2-ef34-gh56ij78kl90",
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
        lessonId: "f7a2b9e0-34d1-4d67-8a29-1f36b80c4b44",
        order: 5,
    },
    {
        id: "e5f6a7b8-c9d0-12e3-fg45-hi67jk89lm01",
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
        lessonId: "f7a2b9e0-34d1-4d67-8a29-1f36b80c4b44",
        order: 6,
    },
] as const;

export const handlingArraysExercises = [
    {
        id: "m1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
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
        lessonId: "d8f9b2c1-45e6-7a8b-9c01-2d3e4f5a6b7c",
        order: 1,
    },
    {
        id: "m2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
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
        lessonId: "d8f9b2c1-45e6-7a8b-9c01-2d3e4f5a6b7c",
        order: 2,
    },
    {
        id: "m3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8",
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
        lessonId: "d8f9b2c1-45e6-7a8b-9c01-2d3e4f5a6b7c",
        order: 3,
    },
    {
        id: "m4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
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
        lessonId: "d8f9b2c1-45e6-7a8b-9c01-2d3e4f5a6b7c",
        order: 4,
    },
    {
        id: "m5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
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
        lessonId: "d8f9b2c1-45e6-7a8b-9c01-2d3e4f5a6b7c",
        order: 5,
    },
] as const;

export const arraysAdvancedExercises = [
    {
        id: "aa1b2c3d-4e5f-6g7h-8i9j-0k1l2m3n4o5p",
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
        lessonId: "a7c9d2b3-48e5-6f7a-8b90-1c2d3e4f5a6b",
        order: 1,
    },
    {
        id: "bb2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q",
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
        lessonId: "a7c9d2b3-48e5-6f7a-8b90-1c2d3e4f5a6b",
        order: 2,
    },
    {
        id: "cc3d4e5f-6g7h-8i9j-0k1l-2m3n4o5p6q7r",
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
        lessonId: "a7c9d2b3-48e5-6f7a-8b90-1c2d3e4f5a6b",
        order: 3,
    },
    {
        id: "ee5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t",
        content: [
            {
                type: "paragraph",
                data: "Qual dessas magias modifica o array original?",
            },
        ],
        hint: "Nem todas as funções de array são inofensivas...",
        type: "MULTIPLE_CHOICE",
        lessonId: "a7c9d2b3-48e5-6f7a-8b90-1c2d3e4f5a6b",
        order: 4,
    },
] as const;

export const iterationsArraysExercises = [
    {
        id: "aa2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
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
        lessonId: "b8f9e0a1-23c4-45d6-89e7-f0a1b2c3d4e5",
        order: 1,
    },
    {
        id: "bb3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
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
        lessonId: "b8f9e0a1-23c4-45d6-89e7-f0a1b2c3d4e5",
        order: 2,
    },
    {
        id: "bb3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p8q",
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
        lessonId: "b8f9e0a1-23c4-45d6-89e7-f0a1b2c3d4e5",
        order: 3,
    },
    {
        id: "cc4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
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
        lessonId: "b8f9e0a1-23c4-45d6-89e7-f0a1b2c3d4e5",
        order: 4,
    },
    {
        id: "dd5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
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
        lessonId: "b8f9e0a1-23c4-45d6-89e7-f0a1b2c3d4e5",
        order: 5,
    },
    {
        id: "dd5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9d",
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
        lessonId: "b8f9e0a1-23c4-45d6-89e7-f0a1b2c3d4e5",
        order: 6,
    },
] as const;
