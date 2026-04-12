export const firstLessonExercises = [
    {
        id: "9c00c7c1-4bdc-4dec-b8f4-5b554ff0a5e3",
        content: [
            {
                type: "paragraph",
                data: 'Você é um investigador preso em uma casa abandonada. Para sobreviver, precisa registrar informações importantes, como o número de pistas encontradas. Na programação, usamos variáveis para armazenar dados, declarando-as com a palavra "let".',
            },
            {
                type: "code",
                data: "let pistasEncontradas = 3",
            },
        ],
        hint: "Não há dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: "a805cf4a-a2cf-4e06-9650-fd12e9c2fc2c",
        order: 1,
    },
    {
        id: "f1cc0945-3508-49a8-9a04-851d8b5b4875",
        content: [
            {
                type: "paragraph",
                data: "Qual das declarações de variáveis abaixo está correta?",
            },
        ],
        hint: "Você deve usar uma certa palavra-chave para declarar uma variável.",
        type: "MULTIPLE_CHOICE",
        lessonId: "a805cf4a-a2cf-4e06-9650-fd12e9c2fc2c",
        order: 2,
    },
    {
        id: "7747916c-4151-407a-adb0-7071018d7b4e",
        content: [
            {
                type: "paragraph",
                data: 'Declare uma variável chamada "sanidade" com o valor 16.',
            },
            {
                type: "code",
                data: "_____",
            },
        ],
        hint: 'Lembre-se de usar a palavra "let" antes do nome da sua variável.',
        type: "WRITE_CODE",
        lessonId: "a805cf4a-a2cf-4e06-9650-fd12e9c2fc2c",
        order: 3,
    },
    {
        id: "0a0c26c6-6849-40b5-b091-16fd989d68e7",
        content: [
            {
                type: "paragraph",
                data: "Defina seu nível de medo para 10 na variável abaixo.",
            },
            {
                type: "code",
                data: "const nivelDeMedo = _____",
            },
        ],
        hint: "Sem dicas para esse exercício.",
        type: "COMPLETE_CODE",
        lessonId: "a805cf4a-a2cf-4e06-9650-fd12e9c2fc2c",
        order: 4,
    },
    {
        id: "f76a5935-3b88-4959-a1e4-439a81a0c0e9",
        content: [
            {
                type: "paragraph",
                data: "O que é uma variável?",
            },
        ],
        hint: "Sem dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: "a805cf4a-a2cf-4e06-9650-fd12e9c2fc2c",
        order: 5,
    },
] as const;

export const dataTypesLessonExercises = [
    {
        id: "1d59e545-9317-4a97-b51f-785aea14f3c2",
        content: [
            {
                type: "paragraph",
                data: "Você encontrou um bilhete com um nome escrito. Em programação, textos como nomes são armazenados como string, sempre entre aspas.",
            },
            {
                type: "code",
                data: 'let nomeDaVitima = "Marina"',
            },
        ],
        hint: "Strings sempre ficam entre aspas simples (') ou duplas (\").",
        type: "MULTIPLE_CHOICE",
        lessonId: "614e8ce8-5958-4fae-9382-07a456813bb1",
        order: 1,
    },
    {
        id: "a4e90115-a53b-471b-9dc5-17b56e39d35a",
        content: [
            {
                type: "paragraph",
                data: "Qual dessas opções representa corretamente uma string em JavaScript?",
            },
        ],
        hint: "Lembre-se: aspas!",
        type: "MULTIPLE_CHOICE",
        lessonId: "614e8ce8-5958-4fae-9382-07a456813bb1",
        order: 2,
    },
    {
        id: "2f175892-31cf-4482-a0a7-b58542ac5aad",
        content: [
            {
                type: "paragraph",
                data: "Você encontrou várias evidências na cena. Para armazenar quantidades numéricas, usamos o tipo number.",
            },
            {
                type: "code",
                data: "let evidencias = 250",
            },
        ],
        hint: "Números não usam aspas.",
        type: "MULTIPLE_CHOICE",
        lessonId: "614e8ce8-5958-4fae-9382-07a456813bb1",
        order: 3,
    },
    {
        id: "91e33225-96ce-4abb-a023-58bda855f4b9",
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
        lessonId: "614e8ce8-5958-4fae-9382-07a456813bb1",
        order: 4,
    },
    {
        id: "63922c16-0176-4817-8a8f-1cd1258cd602",
        content: [
            {
                type: "paragraph",
                data: "Agora, usamos boolean. Por exemplo, se a porta está aberta (true) ou fechada (false).",
            },
            {
                type: "code",
                data: "let portaAberta = true",
            },
        ],
        hint: "Boolean não leva aspas, e só aceita true ou false.",
        type: "MULTIPLE_CHOICE",
        lessonId: "614e8ce8-5958-4fae-9382-07a456813bb1",
        order: 5,
    },
    {
        id: "03af3432-f68a-46ca-a837-a4afa55af28f",
        content: [
            {
                type: "paragraph",
                data: "Qual dessas opções declara corretamente um boolean?",
            },
        ],
        hint: "Apenas true ou false, sem aspas.",
        type: "MULTIPLE_CHOICE",
        lessonId: "614e8ce8-5958-4fae-9382-07a456813bb1",
        order: 6,
    },
] as const;

export const assignmentLessonExercises = [
    {
        id: "8c517812-d226-4126-a99a-e556c39d8063",
        content: [
            {
                type: "paragraph",
                data: 'Ao explorar o porão, você encontra 250 documentos estranhos. A variável já foi declarada, agora atribua o valor.',
            },
            {
                type: "code",
                data: "let documentos\n documentos = _____",
            },
        ],
        hint: "Você pode declarar uma variável sem valor e atribuir depois.",
        type: "COMPLETE_CODE",
        lessonId: "9f5e45f5-6a66-49ca-8df8-7e8589e5dfb6",
        order: 1,
    },
    {
        id: "7c581ca4-b2fa-433c-b507-4d8fb9719ab6",
        content: [
            {
                type: "paragraph",
                data: 'Qual é o valor da variável "nivelDeTerror" após o código?',
            },
            {
                type: "code",
                data: "let nivelDeTerror\nnivelDeTerror = 5",
            },
        ],
        hint: "A variável recebe valor depois da declaração.",
        type: "MULTIPLE_CHOICE",
        lessonId: "9f5e45f5-6a66-49ca-8df8-7e8589e5dfb6",
        order: 2,
    },
    {
        id: "fd9a77a6-d20b-45ee-a539-98640a3a1f80",
        content: [
            {
                type: "paragraph",
                data: 'Declare uma variável chamada "energia" e atribua o valor 37.5.',
            },
            {
                type: "code",
                data: "let energia\nenergia = _____",
            },
        ],
        hint: "Use `let` e depois atribua com =.",
        type: "COMPLETE_CODE",
        lessonId: "9f5e45f5-6a66-49ca-8df8-7e8589e5dfb6",
        order: 3,
    },
    {
        id: "cd6c0637-ab78-47d8-b40a-dcc1a90a14d8",
        content: [
            {
                type: "paragraph",
                data: 'Sua sanidade diminuiu... atribua o valor 17 à variável "sanidade".',
            },
            {
                type: "code",
                data: "let sanidade\n_____",
            },
        ],
        hint: "Use o operador = para atribuir.",
        type: "COMPLETE_CODE",
        lessonId: "9f5e45f5-6a66-49ca-8df8-7e8589e5dfb6",
        order: 4,
    },
] as const;

export const constExercises = [
    {
        id: "f9b3185a-7319-4f0c-9fb5-1c68c06bf95a",
        content: [
            {
                type: "paragraph",
                data: 'Existem informações que nunca mudam, como o nome de uma entidade que assombra o local. Para isso usamos "const".',
            },
            {
                type: "code",
                data: 'const entidade = "Sombras" ',
            },
        ],
        hint: "Não há dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: "32064fbb-e84b-400e-9a2b-9ecdb7a0ba3c",
        order: 1,
    },
    {
        id: "f30365cc-1e16-40c5-9fad-e17064040909",
        content: [
            {
                type: "paragraph",
                data: "O nome do demônio invocado não pode mudar. Qual palavra-chave usar?",
            },
        ],
        hint: "Valor que não muda.",
        type: "MULTIPLE_CHOICE",
        lessonId: "32064fbb-e84b-400e-9a2b-9ecdb7a0ba3c",
        order: 2,
    },
    {
        id: "108cf72c-0a6f-4a5b-bf15-57e44a848cef",
        content: [
            {
                type: "paragraph",
                data: 'Você encontrou um símbolo amaldiçoado permanente. Declare uma constante "marca" com valor "Sangue".',
            },
            {
                type: "code",
                data: "_____",
            },
        ],
        hint: 'Use "const".',
        type: "WRITE_CODE",
        lessonId: "32064fbb-e84b-400e-9a2b-9ecdb7a0ba3c",
        order: 3,
    },
    {
        id: "2d932c71-67f2-4cab-b6e2-5c02b1385b6a",
        content: [
            {
                type: "paragraph",
                data: "Complete o código abaixo que define o nome da cidade amaldiçoada.",
            },
            {
                type: "code",
                data: ' _____ nomeDaCidade = "Silent Hill"',
            },
        ],
        hint: "Use a palavra-chave de constante.",
        type: "COMPLETE_CODE",
        lessonId: "32064fbb-e84b-400e-9a2b-9ecdb7a0ba3c",
        order: 4,
    },
] as const;