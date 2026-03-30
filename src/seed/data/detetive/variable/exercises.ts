export const firstLessonExercises = [
    {
        id: '1481a153-fe35-4004-93fa-9bc1b9e34727',
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
        lessonId: '23a1c0f9-1b4c-4711-9db6-eef3131b405a',
        order: 1,
    },
    {
        id: '4c229855-bc8f-4800-9715-ff3dd9f94f64',
        content: [
            {
                type: "paragraph",
                data: "Qual das declarações de variáveis abaixo está correta?",
            },
        ],
        hint: "Você deve usar uma certa palavra-chave para declarar uma variável.",
        type: "MULTIPLE_CHOICE",
        lessonId: '6af96c49-7b11-4347-92cc-778a2136930b',
        order: 2,
    },
    {
        id: '42649dcd-b60d-4a8e-a29f-eff9ba162159',
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
        lessonId: '1804565b-284e-4389-8275-276fe6e330c6',
        order: 3,
    },
    {
        id: 'bce9ef7d-5ba7-4380-97a4-c25d412e356d',
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
        lessonId: 'b348a5f1-e22c-49e8-b188-d7bb5ba5faef',
        order: 4,
    },
    {
        id: 'd4ed4b88-27f7-49e1-a72b-9eebd02dc60b',
        content: [
            {
                type: "paragraph",
                data: "O que é uma variável?",
            },
        ],
        hint: "Sem dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'cce527de-f650-457d-976c-9a942ae197ae',
        order: 5,
    },
] as const;

export const dataTypesLessonExercises = [
    {
        id: 'b746b11e-f495-4d14-96d1-43b1186c243e',
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
        lessonId: 'fbaacd31-e17e-406a-be6d-38fa0d1ec14e',
        order: 1,
    },
    {
        id: 'a5093073-eee6-41ba-852f-41ed67c5fc34',
        content: [
            {
                type: "paragraph",
                data: "Qual dessas opções representa corretamente uma string em JavaScript?",
            },
        ],
        hint: "Lembre-se: aspas!",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f1595ba4-0178-4e5a-8ec9-bf3724547ac2',
        order: 2,
    },
    {
        id: '8852850f-5f9c-417c-aee4-b1f85811534e',
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
        lessonId: '73c833f1-e66c-4721-a9d4-38bb22556131',
        order: 3,
    },
    {
        id: '6fbfc715-53cd-40f7-9567-e1e363d0b7f9',
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
        lessonId: '7c25fa80-0da6-475e-8a77-e22e4f54234e',
        order: 4,
    },
    {
        id: '94924a39-b4df-44f4-a05f-5c91f610eedd',
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
        lessonId: 'e9a45c91-487b-470c-baa9-876b93c7c40a',
        order: 5,
    },
    {
        id: '5ee731fd-f75d-40ca-a24c-32c96048b472',
        content: [
            {
                type: "paragraph",
                data: "Qual dessas opções declara corretamente um boolean?",
            },
        ],
        hint: "Apenas true ou false, sem aspas.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'f3258dd7-849f-43bc-99e7-be9033f0718e',
        order: 6,
    },
] as const;

export const assignmentLessonExercises = [
    {
        id: 'd0edaa2a-eb69-43fc-87b7-5fbc62577e6a',
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
        lessonId: '6a814ef1-e364-44ba-94d0-418a11aab029',
        order: 1,
    },
    {
        id: '436a87d4-e2da-4ba7-8a6d-34f8a450fe78',
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
        lessonId: 'e0409c01-0389-4410-90a3-491e4d08fcc5',
        order: 2,
    },
    {
        id: '0f73d075-042b-44f9-8ab3-f900d51c03ea',
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
        lessonId: '0dfab8c5-940e-4acb-a2bc-291703914c4f',
        order: 3,
    },
    {
        id: 'c24d3fec-76f3-4143-b2c8-01f558141f20',
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
        lessonId: '4eb0c85b-c48b-4b4b-8e47-a641f38b4c86',
        order: 4,
    },
] as const;

export const constExercises = [
    {
        id: '1bcaea75-6338-4a3a-b600-8a5963f99bc0',
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
        lessonId: '713c19a7-3a4c-43f3-9528-06b554a8a247',
        order: 1,
    },
    {
        id: '0c6cb68b-a80b-49a0-9e7c-d839944e3411',
        content: [
            {
                type: "paragraph",
                data: "Em uma aventura de RPG, o valor máximo de pontos de vida do herói não pode mudar durante a partida. Qual palavra-chave devemos usar para definir essa informação?",
            },
        ],
        hint: "Use a palavra-chave que define um valor que não pode ser alterado.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'cda770d6-69e9-493c-a39b-7da10c8b27fe',
        order: 2,
    },
    {
        id: '4758305d-f373-4f71-8cce-e808bc561e09',
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
        lessonId: '3a8603b1-fcaf-40f6-9b24-e931b167bbda',
        order: 3,
    },
    {
        id: '00cc540d-adf3-4028-b7c4-08f14094187c',
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
        lessonId: 'becbea1f-c760-4e60-8121-6dbe05e5cc63',
        order: 4,
    },
] as const;
