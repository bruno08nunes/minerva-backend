export const arraysExercises = [
    {
        id: 'cec8db0d-b1db-4fab-9503-c8f1ca6ea71d',
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
        lessonId: '2027edaf-62ae-42d8-8231-58d4e522b08c',
        order: 1,
    },
    {
        id: '9a2077bd-0a79-46f4-b3bc-7731c7aa1c1c',
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
        lessonId: '2027edaf-62ae-42d8-8231-58d4e522b08c',
        order: 2,
    },
    {
        id: 'a8132475-d076-44b3-a2fb-e8d86af4b06c',
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
        lessonId: '2027edaf-62ae-42d8-8231-58d4e522b08c',
        order: 3,
    },
    {
        id: '011bde01-1e0d-4eb6-b1c4-68c5693bd8d4',
        content: [
            {
                type: "paragraph",
                data: "Qual método adiciona um novo elemento ao final de um array?",
            },
        ],
        hint: "Você precisa 'empurrar' um valor para o final do array.",
        type: "MULTIPLE_CHOICE",
        lessonId: '2027edaf-62ae-42d8-8231-58d4e522b08c',
        order: 4,
    },
    {
        id: '25fba0f3-4d4c-42a6-a173-6f751d0f9f0f',
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
        lessonId: '2027edaf-62ae-42d8-8231-58d4e522b08c',
        order: 5,
    },
    {
        id: '4557657e-64f0-4157-8a89-062e5f90cf0c',
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
        lessonId: '2027edaf-62ae-42d8-8231-58d4e522b08c',
        order: 6,
    },
] as const;

export const handlingArraysExercises = [
    {
        id: '8a0f42b9-8233-486b-9728-23fa4b39fa7a',
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
        lessonId: '2dbfcbff-a4d9-46d0-9e52-7a8c7b5751aa',
        order: 1,
    },
    {
        id: 'a81b0dff-32e0-4cc9-8cf2-cf79fc0ad195',
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
        lessonId: 'e4b8620a-9c75-435c-a198-88fb2a51572f',
        order: 2,
    },
    {
        id: '75735c6e-337c-4d4e-8b68-e69a045ae04b',
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
        lessonId: 'c1fce894-f06b-4e00-9661-2c0bc20e9ca9',
        order: 3,
    },
    {
        id: '3cf62ebc-d29f-476b-964f-9da3c427fb69',
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
        lessonId: '035ac722-5473-4f63-91d5-7f78ab561187',
        order: 4,
    },
    {
        id: '863c232a-6fa3-495e-b301-3100895fb150',
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
        lessonId: '42e90bc6-1e4d-4b8b-9c82-88ce94fc00c6',
        order: 5,
    },
] as const;

export const arraysAdvancedExercises = [
    {
        id: '4c20cf03-aa3e-4460-8afa-aab87b0c8009',
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
        lessonId: 'a1748caa-f802-46b3-a9ce-b67878ce1420',
        order: 1,
    },
    {
        id: '83f57a0f-2f85-4c92-82f6-498c94e4dd7b',
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
        lessonId: 'c5fda8a1-0f85-4088-b2ee-e10574818c9d',
        order: 2,
    },
    {
        id: '6e9079b8-1d0e-4251-a5f2-2cdb27a1dcb3',
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
        lessonId: '9e62ffae-6d94-4b12-af3a-3414a14985c6',
        order: 3,
    },
    {
        id: '97cbc9b1-1f6e-41d0-82d1-41917df20b54',
        content: [
            {
                type: "paragraph",
                data: "Qual dessas magias modifica o array original?",
            },
        ],
        hint: "Nem todas as funções de array são inofensivas...",
        type: "MULTIPLE_CHOICE",
        lessonId: '94ae5adb-e7a6-486e-ab6c-1050dd8f1d1b',
        order: 4,
    },
] as const;

export const iterationsArraysExercises = [
    {
        id: '42640826-71d0-4426-9fe0-f00e20fd9fa0',
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
        lessonId: 'fe620bb1-189a-427c-9a74-4e57aa1bd1dc',
        order: 1,
    },
    {
        id: '3217670e-5741-493f-a176-6479fb7bf404',
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
        lessonId: '829291f3-1638-4b3f-9e72-a34669bed4c5',
        order: 2,
    },
    {
        id: '22a35d56-9e11-43f5-8d31-3773fa43cd3b',
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
        lessonId: '3d742a14-40d9-4872-a9ee-c68f0f4f3564',
        order: 3,
    },
    {
        id: 'ce39358a-b1cb-4224-902b-1120192db596',
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
        lessonId: '7b4cdfd0-782e-44b2-ae73-de000007f765',
        order: 4,
    },
    {
        id: '484b6434-886f-4011-8cce-58960e309afd',
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
        lessonId: '3e758542-71f1-4cb3-9347-ffaa47361f99',
        order: 5,
    },
    {
        id: '347ed5fe-5eda-446a-bf26-2a28717cfe8c',
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
        lessonId: '0bce2c30-8dd3-4813-8d86-7a39dc10a19a',
        order: 6,
    },
] as const;
