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
                data: "const evidencias = ['Pegada', 'Sussurro', 'Mancha de sangue'];\nevidencias[0]",
            },
            {
                type: "paragraph",
                data: "No exemplo acima, `evidencias` guarda três itens, acessíveis por seus índices 0, 1 e 2 caso sejam colocados entre colchetes.",
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
                data: "Complete o código para acessar o segundo item do array `evidencias`:",
            },
            {
                type: "code",
                data: "const evidencias = ['Pegada', 'Sussurro', 'Mancha de sangue'];\nconsole.log(evidencias[_____]);",
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
                data: "const evidencias = ['Pegada', 'Sussurro', 'Mancha de sangue'];\nevidencias.push('Fotografia antiga'); // Adiciona um item no fim do array\nevidencias.pop(); // Remove o último item de um array\nevidencias.length // Retorna a quantidade de itens no array",
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
        hint: "Você precisa 'empurrar' uma nova evidência para o final do array.",
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
                data: "const evidencias = ['Pegada', 'Sussurro', 'Mancha de sangue'];\nevidencias._____();",
            },
        ],
        hint: "É o método oposto de `push()`. Algo foi removido... talvez tarde demais.",
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
        hint: "O `.length` mostra quantos elementos existem... quantas pistas você encontrou.",
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
                data: "const sinais = ['Porta rangendo', 'Sombra', 'Grito distante'];\nconsole.log(sinais[1]);",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "Lembre-se: o segundo sinal está na posição 1.",
        type: "MULTIPLE_CHOICE",
        lessonId: '89a856ad-ccf8-48ea-9444-51027094bbe8',
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
                data: "const evidencias = ['Pegada', 'Sussurro'];\nevidencias.push('Mancha de sangue');\nconsole.log(evidencias);",
            },
        ],
        hint: "Uma nova evidência foi adicionada ao final.",
        type: "MULTIPLE_CHOICE",
        lessonId: '89a856ad-ccf8-48ea-9444-51027094bbe8',
        order: 2,
    },
    {
        id: '75735c6e-337c-4d4e-8b68-e69a045ae04b',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para remover o último item do array `itensAmaldiçoados`:",
            },
            {
                type: "code",
                data: "const itensAmaldiçoados = ['Boneca', 'Espelho', 'Relógio parado'];\nitensAmaldiçoados._____();",
            },
        ],
        hint: "É o oposto de `push()`. Talvez seja melhor não mexer nisso...",
        type: "COMPLETE_CODE",
        lessonId: '89a856ad-ccf8-48ea-9444-51027094bbe8',
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
                data: "const entidades = ['Espírito', 'Sombra', 'Demônio', 'Aparição'];\nconsole.log(entidades.length);",
            },
        ],
        hint: "Quantas entidades estão presentes?",
        type: "MULTIPLE_CHOICE",
        lessonId: '89a856ad-ccf8-48ea-9444-51027094bbe8',
        order: 4,
    },
    {
        id: '863c232a-6fa3-495e-b301-3100895fb150',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para adicionar um novo item ao final do array `rituais`:",
            },
            {
                type: "code",
                data: "const rituais = ['Invocação', 'Proteção'];\nrituais._____('Banimento');",
            },
        ],
        hint: "Use o método que adiciona algo ao fim... se tiver coragem.",
        type: "COMPLETE_CODE",
        lessonId: '89a856ad-ccf8-48ea-9444-51027094bbe8',
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
                data: "const criaturas = ['Fantasma', 'Vampiro', 'Lobisomem'];\nconsole.log(criaturas.includes('Vampiro'));",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "A criatura está escondida na lista?",
        type: "MULTIPLE_CHOICE",
        lessonId: '7f3e83a7-ac97-40ed-a1c2-20a75973beb5',
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
                data: "const criaturas = ['Fantasma', 'Vampiro', 'Lobisomem'];\nconsole.log(criaturas.indexOf('Lobisomem'));",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "Índices começam do 0... encontre a criatura.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7f3e83a7-ac97-40ed-a1c2-20a75973beb5',
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
                data: "const registros = ['Caso 1', 'Caso 2', 'Caso 3', 'Caso 4'];\nconst selecionados = registros.slice(1, 3);\nconsole.log(selecionados);",
            },
        ],
        hint: "Copia apenas uma parte... como páginas arrancadas de um diário.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7f3e83a7-ac97-40ed-a1c2-20a75973beb5',
        order: 3,
    },
    {
        id: '97cbc9b1-1f6e-41d0-82d1-41917df20b54',
        content: [
            {
                type: "paragraph",
                data: "Qual dessas funções modifica o array original?",
            },
        ],
        hint: "Algumas ações deixam marcas permanentes...",
        type: "MULTIPLE_CHOICE",
        lessonId: '7f3e83a7-ac97-40ed-a1c2-20a75973beb5',
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
                data: "const eventos = ['Sussurro', 'Passos', 'Batida na porta'];\nfor (let i = 0; i < eventos.length; i++) {\n  console.log(eventos[i]);\n}",
            },
            {
                type: "paragraph",
                data: "O código acima exibirá:",
            },
        ],
        hint: "Cada evento estranho acontece em sequência...",
        type: "MULTIPLE_CHOICE",
        lessonId: 'd80834bc-423c-40db-8b1a-45323852feaa',
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
                data: "const vozes = ['Socorro', 'Saia daqui', 'Estou te vendo'];\nfor (const voz of vozes) {\n  console.log(voz);\n}",
            },
        ],
        hint: "Cada voz será ouvida uma vez...",
        type: "MULTIPLE_CHOICE",
        lessonId: 'd80834bc-423c-40db-8b1a-45323852feaa',
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
                data: "const vozes = ['Socorro', 'Saia daqui', 'Estou te vendo'];\nfor (const voz _____ vozes) {\n  console.log(voz);\n}",
            },
        ],
        hint: "",
        type: "COMPLETE_CODE",
        lessonId: 'd80834bc-423c-40db-8b1a-45323852feaa',
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
                data: "const entidades = ['Sombra', 'Espírito', 'Demônio'];\nentidades.forEach((entidade) => {\n  console.log('Presença detectada:', entidade);\n});",
            },
            {
                type: "paragraph",
                data: "Enquanto isso, método `map()` cria um novo array com os resultados da função aplicada a cada elemento.",
            },
            {
                type: "code",
                data: "const niveisMedo = [1, 2, 3];\nconst intensificados = niveisMedo.map(nivel => nivel * 2);\nconsole.log(intensificados);",
            },
        ],
        hint: "Cada presença é anunciada individualmente...",
        type: "MULTIPLE_CHOICE",
        lessonId: 'd80834bc-423c-40db-8b1a-45323852feaa',
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
                data: "const niveisMedo = [1, 2, 3];\nconst intensificados = niveisMedo._____(nivel => nivel * 2);\nconsole.log(intensificados);",
            },
        ],
        hint: "Cria um novo array com o medo amplificado.",
        type: "COMPLETE_CODE",
        lessonId: 'd80834bc-423c-40db-8b1a-45323852feaa',
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
                data: "const niveisMedo = [1, 2, 3];\nconst intensificados = niveisMedo.map(nivel => nivel * 2);\nconsole.log(intensificados);",
            },
        ],
        hint: "O medo dobra... mas o original permanece.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'd80834bc-423c-40db-8b1a-45323852feaa',
        order: 6,
    },
] as const;