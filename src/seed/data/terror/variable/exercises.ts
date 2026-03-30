export const firstLessonExercises = [
    {
        id: "9c00c7c1-4bdc-4dec-b8f4-5b554ff0a5e3",
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
                data: 'Declare uma variável chamada "sabedoria" com o valor 16.',
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
                data: "Defina seu valor de força para 10 na variável abaixo.",
            },
            {
                type: "code",
                data: "const forca = _____",
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
                data: "Você encontrou um pergaminho com o seu nome. Em programação, textos como nomes são armazenados usando o tipo de dado string. Uma string deve estar entre aspas.",
            },
            {
                type: "code",
                data: 'let nomeDoHeroi = "Arthas"',
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
                data: "Você vendeu esse pergaminho por algumas moedas. Agora, você precisa guardar a quantidade de moedas de ouro que possui. Em programação, usamos o tipo number para representar valores numéricos. Você pode utilizar valores decimais também, usando um ponto (10.5).",
            },
            {
                type: "code",
                data: "let moedasDeOuro = 250",
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
                data: "Por fim, vamos usar o tipo boolean. Booleans podem ser apenas os valores true ou false (verdadeiro ou falso). Por exemplo, se o herói está vivo, usamos true; se está morto, usamos false.",
            },
            {
                type: "code",
                data: "let estaVivo = true",
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
                data: 'Durante sua procura por um orb mágico, você encontra um baú com 250 moedas. A variável "moedas" já foi declarada sem valor. Agora só falta atribuir o número de moedas encontradas a variável.',
            },
            {
                type: "code",
                data: "let moedasDeOuro\nmoedasDeOuro = _____",
            },
        ],
        hint: "Lembre-se: você pode declarar uma variável sem valor e atribuir depois.",
        type: "COMPLETE_CODE",
        lessonId: "9f5e45f5-6a66-49ca-8df8-7e8589e5dfb6",
        order: 1,
    },
    {
        id: "7c581ca4-b2fa-433c-b507-4d8fb9719ab6",
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
        lessonId: "9f5e45f5-6a66-49ca-8df8-7e8589e5dfb6",
        order: 2,
    },
    {
        id: "fd9a77a6-d20b-45ee-a539-98640a3a1f80",
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
        lessonId: "9f5e45f5-6a66-49ca-8df8-7e8589e5dfb6",
        order: 3,
    },
    {
        id: "cd6c0637-ab78-47d8-b40a-dcc1a90a14d8",
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
                data: 'Há certas variáveis na qual nunca iremos mudar o valor. Nós declaramos ela como "const"',
            },
            {
                type: "code",
                data: 'const nome = "Baltazar"',
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
                data: "Em uma aventura de RPG, o valor máximo de pontos de vida do herói não pode mudar durante a partida. Qual palavra-chave devemos usar para definir essa informação?",
            },
        ],
        hint: "Use a palavra-chave que define um valor que não pode ser alterado.",
        type: "MULTIPLE_CHOICE",
        lessonId: "32064fbb-e84b-400e-9a2b-9ecdb7a0ba3c",
        order: 2,
    },
    {
        id: "108cf72c-0a6f-4a5b-bf15-57e44a848cef",
        content: [
            {
                type: "paragraph",
                data: 'Durante os seus estudos sobre variáveis, você encontrou uma poção que lhe concede permanentemente mana extra. Declare uma constante chamada "bonus" com o valor 10.',
            },
            {
                type: "code",
                data: "_____",
            },
        ],
        hint: 'Lembre-se: constantes usam "const".',
        type: "WRITE_CODE",
        lessonId: "32064fbb-e84b-400e-9a2b-9ecdb7a0ba3c",
        order: 3,
    },
    {
        id: "2d932c71-67f2-4cab-b6e2-5c02b1385b6a",
        content: [
            {
                type: "paragraph",
                data: "Complete o código abaixo que define o nome do reino.",
            },
            {
                type: "code",
                data: ' _____ nomeDoReino = "Cormyr"',
            },
        ],
        hint: "Lembre-se da palavra-chave para definir constantes.",
        type: "COMPLETE_CODE",
        lessonId: "32064fbb-e84b-400e-9a2b-9ecdb7a0ba3c",
        order: 4,
    },
] as const;
