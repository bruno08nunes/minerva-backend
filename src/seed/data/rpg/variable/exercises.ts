export const firstLessonExercises = [
    {
        id: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
        content: [
            {
                type: "paragraph",
                data: 'Você é um mago aprendiz que está na Academia Arcana de Variáveis. As variáveis são como pergaminhos onde você armazena informações necessárias, como o número de feitiços que você tem. Na programação, você deve declarar uma variável com a palavra "let".',
            },
            {
                type: "code",
                data: "let quantidadeDeMagias = 3",
            },
        ],
        hint: "Não há dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 1,
    },
    {
        id: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
        content: [
            {
                type: "paragraph",
                data: "Qual das declarações de variáveis abaixo está correta?",
            },
        ],
        hint: "Você deve usar uma certa palavra-chave para declarar uma variável.",
        type: "MULTIPLE_CHOICE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 2,
    },
    {
        id: "g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v",
        content: [
            {
                type: "paragraph",
                data: 'Declare uma variável chamada "sabedoria" com o valor 16.',
            },
            {
                type: "code",
                data: "_____",
            },
        ],
        hint: 'Lembre-se de usar a palavra "let" antes do nome da sua variável.',
        type: "WRITE_CODE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 3,
    },
    {
        id: "622d8aeb-4a1e-4349-abe5-0ce4bf75a91f",
        content: [
            {
                type: "paragraph",
                data: "Defina seu valor de força para 10 na variável abaixo.",
            },
            {
                type: "code",
                data: "const forca = _____",
            },
        ],
        hint: "Sem dicas para esse exercício.",
        type: "COMPLETE_CODE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 4,
    },
    {
        id: "43854899-6f0c-41b5-9d7b-fd6c00e75706",
        content: [
            {
                type: "paragraph",
                data: "O que é uma variável?",
            },
        ],
        hint: "Sem dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 5,
    },
] as const;

export const dataTypesLessonExercises = [
    {
        id: "f2c4a2f6-6fbb-4a93-9e77-31fb18e2dfc0",
        content: [
            {
                type: "paragraph",
                data: "Você encontrou um pergaminho com o seu nome. Em programação, textos como nomes são armazenados usando o tipo de dado string. Uma string deve estar entre aspas.",
            },
            {
                type: "code",
                data: 'let nomeDoHeroi = "Arthas"',
            },
        ],
        hint: "Strings sempre ficam entre aspas simples (') ou duplas (\").",
        type: "MULTIPLE_CHOICE",
        lessonId: "4e6684e8-8d1f-4739-aa26-3eafa49fe59a",
        order: 1,
    },
    {
        id: "6a6ffb60-46c3-4c70-a0b7-fc3cda79d4b0",
        content: [
            {
                type: "paragraph",
                data: "Qual dessas opções representa corretamente uma string em JavaScript?",
            },
        ],
        hint: "Lembre-se: aspas!",
        type: "MULTIPLE_CHOICE",
        lessonId: "4e6684e8-8d1f-4739-aa26-3eafa49fe59a",
        order: 2,
    },
    {
        id: "982e6a7a-639d-4696-922a-b7e2b7e5bc40",
        content: [
            {
                type: "paragraph",
                data: "Você vendeu esse pergaminho por algumas moedas. Agora, você precisa guardar a quantidade de moedas de ouro que possui. Em programação, usamos o tipo number para representar valores numéricos. Você pode utilizar valores decimais também, usando um ponto (10.5).",
            },
            {
                type: "code",
                data: "let moedasDeOuro = 250",
            },
        ],
        hint: "Números não usam aspas.",
        type: "MULTIPLE_CHOICE",
        lessonId: "4e6684e8-8d1f-4739-aa26-3eafa49fe59a",
        order: 3,
    },
    {
        id: "7f1c7dbf-2a78-46d6-bb57-7037ff8d01d3",
        content: [
            {
                type: "paragraph",
                data: 'Complete o código para criar uma variável chamada "nivel" com o valor numérico 5.',
            },
            {
                type: "code",
                data: "let nivel = _____",
            },
        ],
        hint: "Apenas escreva o número, sem aspas.",
        type: "COMPLETE_CODE",
        lessonId: "4e6684e8-8d1f-4739-aa26-3eafa49fe59a",
        order: 4,
    },
    {
        id: "b188ac7a-c245-40f4-a45d-14a444cc1a64",
        content: [
            {
                type: "paragraph",
                data: "Por fim, vamos usar o tipo boolean. Booleans podem ser apenas os valores true ou false (verdadeiro ou falso). Por exemplo, se o herói está vivo, usamos true; se está morto, usamos false.",
            },
            {
                type: "code",
                data: "let estaVivo = true",
            },
        ],
        hint: "Boolean não leva aspas, e só aceita true ou false.",
        type: "MULTIPLE_CHOICE",
        lessonId: "4e6684e8-8d1f-4739-aa26-3eafa49fe59a",
        order: 5,
    },
    {
        id: "e2f839f0-a07d-49b6-a9c0-5fc601a531fd",
        content: [
            {
                type: "paragraph",
                data: "Qual dessas opções declara corretamente um boolean?",
            },
        ],
        hint: "Apenas true ou false, sem aspas.",
        type: "MULTIPLE_CHOICE",
        lessonId: "4e6684e8-8d1f-4739-aa26-3eafa49fe59a",
        order: 6,
    },
] as const;

export const assignmentLessonExercises = [
    {
        id: "a3f5726c-c3e1-4b1e-89fc-6e1f3f2c7d2a",
        content: [
            {
                type: "paragraph",
                data: 'Durante sua procura por um orb mágico, você encontra um baú com 250 moedas. A variável "moedas" já foi declarada sem valor. Agora só falta atribuir o número de moedas encontradas a variável.',
            },
            {
                type: "code",
                data: "let moedasDeOuro\nmoedasDeOuro = _____",
            },
        ],
        hint: "Lembre-se: você pode declarar uma variável sem valor e atribuir depois.",
        type: "COMPLETE_CODE",
        lessonId: "e572a55e-f93e-413b-89c6-94a71ac14c76",
        order: 1,
    },
    {
        id: "b42d4a14-e3b6-4bff-8b8f-cd9e742d41e7",
        content: [
            {
                type: "paragraph",
                data: 'Qual é o valor da variável "nivelDoMago" após a execução do código abaixo?',
            },
            {
                type: "code",
                data: "let nivelDoMago\nnivelDoMago = 5",
            },
        ],
        hint: "Veja que a variável foi declarada e depois recebeu um valor.",
        type: "MULTIPLE_CHOICE",
        lessonId: "e572a55e-f93e-413b-89c6-94a71ac14c76",
        order: 2,
    },
    {
        id: "f58979e4-85bc-4de0-8c6a-7b13238f1a47",
        content: [
            {
                type: "paragraph",
                data: 'Declare uma variável chamada "vida" sem valor e depois atribua o número 37.5 a ela.',
            },
            {
                type: "code",
                data: "let vida\nvida = _____",
            },
        ],
        hint: "Use `let` para declarar e depois atribua o valor com =.",
        type: "COMPLETE_CODE",
        lessonId: "e572a55e-f93e-413b-89c6-94a71ac14c76",
        order: 3,
    },
    {
        id: "c9512f3e-9b9f-48e9-a3be-70ebf521ef4f",
        content: [
            {
                type: "paragraph",
                data: 'A sua sabedoria aumentou durante a aventura! Complete o código para atribuir o valor 17 à variável "sabedoria" declarada abaixo.',
            },
            {
                type: "code",
                data: "let sabedoria\n_____",
            },
        ],
        hint: "Atribua o número 20 usando o operador de atribuição (=).",
        type: "COMPLETE_CODE",
        lessonId: "e572a55e-f93e-413b-89c6-94a71ac14c76",
        order: 4,
    },
] as const;

export const constExercises = [
    {
        id: "7b3dcb94-5dc3-46ec-8d6a-ec2193e49d56",
        content: [
            {
                type: "paragraph",
                data: "Há certas variáveis na qual nunca iremos mudar o valor. Nós declaramos ela como \"const\"",
            },
            {
                type: "code",
                data: "const nome = \"Baltazar\""
            }
        ],
        hint: "Não há dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: "f8a4a9f2-32aa-4c12-9b63-4e6a6e3e2c3d",
        order: 1,
    },
    {
        id: "7b3dcb94-5dc3-46ec-8d6a-ec2193e49d76",
        content: [
            {
                type: "paragraph",
                data: "Em uma aventura de RPG, o valor máximo de pontos de vida do herói não pode mudar durante a partida. Qual palavra-chave devemos usar para definir essa informação?",
            },
        ],
        hint: "Use a palavra-chave que define um valor que não pode ser alterado.",
        type: "MULTIPLE_CHOICE",
        lessonId: "f8a4a9f2-32aa-4c12-9b63-4e6a6e3e2c3d",
        order: 2,
    },
    {
        id: "1c1b3b80-97d0-4d29-a94e-c64f5d9f263b",
        content: [
            {
                type: "paragraph",
                data: "Durante os seus estudos sobre variáveis, você encontrou uma poção que lhe concede permanentemente mana extra. Declare uma constante chamada \"bonus\" com o valor 10."
            },
            {
                type: "code",
                data: "_____"
            }
        ],
        hint: "Lembre-se: constantes usam \"const\".",
        type: "WRITE_CODE",
        lessonId: "f8a4a9f2-32aa-4c12-9b63-4e6a6e3e2c3d",
        order: 3,
    },
    {
        id: "ed82959c-d5a2-44a8-9184-4e3028478f94",
        content: [
            {
                type: "paragraph",
                data: "Complete o código abaixo que define o nome do reino."
            },
            {
                type: "code",
                data: " _____ nomeDoReino = \"Cormyr\""
            }
        ],
        hint: "Lembre-se da palavra-chave para definir constantes.",
        type: "COMPLETE_CODE",
        lessonId: "f8a4a9f2-32aa-4c12-9b63-4e6a6e3e2c3d",
        order: 4,
    },
] as const;
