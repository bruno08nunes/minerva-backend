export const firstLessonExercises = [
    {
        id: '1481a153-fe35-4004-93fa-9bc1b9e34727',
        content: [
            {
                type: "paragraph",
                data: 'Você é um detetive iniciante na Delegacia de Variáveis. Variáveis são como arquivos de caso onde você guarda informações importantes, como o número de pistas coletadas. Na programação, você deve declarar uma variável com a palavra "let".',
            },
            {
                type: "code",
                data: "let quantidadeDePistas = 3",
            },
        ],
        hint: "Não há dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: '2776ee7a-31bf-462e-ad06-08c74371475b',
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
        hint: "Você deve usar uma certa palavra-chave para registrar uma evidência.",
        type: "MULTIPLE_CHOICE",
        lessonId: '2776ee7a-31bf-462e-ad06-08c74371475b',
        order: 2,
    },
    {
        id: '42649dcd-b60d-4a8e-a29f-eff9ba162159',
        content: [
            {
                type: "paragraph",
                data: 'Registre uma variável chamada "nivelDeSuspeita" com o valor 16.',
            },
            {
                type: "code",
                data: "_____",
            },
        ],
        hint: 'Lembre-se de usar a palavra "let" antes do nome da variável.',
        type: "WRITE_CODE",
        lessonId: '2776ee7a-31bf-462e-ad06-08c74371475b',
        order: 3,
    },
    {
        id: 'bce9ef7d-5ba7-4380-97a4-c25d412e356d',
        content: [
            {
                type: "paragraph",
                data: "Defina o nível de evidências coletadas para 10 na variável abaixo.",
            },
            {
                type: "code",
                data: "const evidencias = _____",
            },
        ],
        hint: "Sem dicas para esse exercício.",
        type: "COMPLETE_CODE",
        lessonId: '2776ee7a-31bf-462e-ad06-08c74371475b',
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
        lessonId: '2776ee7a-31bf-462e-ad06-08c74371475b',
        order: 5,
    },
] as const;

export const dataTypesLessonExercises = [
    {
        id: 'b746b11e-f495-4d14-96d1-43b1186c243e',
        content: [
            {
                type: "paragraph",
                data: "Você encontrou um relatório com o nome de um suspeito. Em programação, textos como nomes são armazenados usando o tipo string. Uma string deve estar entre aspas.",
            },
            {
                type: "code",
                data: 'let nomeDoSuspeito = "Carlos"',
            },
        ],
        hint: "Strings sempre ficam entre aspas simples (') ou duplas (\").",
        type: "MULTIPLE_CHOICE",
        lessonId: '6ab140f9-ef4f-48a8-b655-90ad8ea73fd6',
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
        lessonId: '6ab140f9-ef4f-48a8-b655-90ad8ea73fd6',
        order: 2,
    },
    {
        id: '8852850f-5f9c-417c-aee4-b1f85811534e',
        content: [
            {
                type: "paragraph",
                data: "Você contabilizou a quantidade de provas coletadas. Em programação, usamos o tipo number para representar valores numéricos.",
            },
            {
                type: "code",
                data: "let quantidadeDeProvas = 250",
            },
        ],
        hint: "Números não usam aspas.",
        type: "MULTIPLE_CHOICE",
        lessonId: '6ab140f9-ef4f-48a8-b655-90ad8ea73fd6',
        order: 3,
    },
    {
        id: '6fbfc715-53cd-40f7-9567-e1e363d0b7f9',
        content: [
            {
                type: "paragraph",
                data: 'Complete o código para criar uma variável chamada "casosResolvidos" com o valor numérico 5.',
            },
            {
                type: "code",
                data: "let casosResolvidos = _____",
            },
        ],
        hint: "Apenas escreva o número, sem aspas.",
        type: "COMPLETE_CODE",
        lessonId: '6ab140f9-ef4f-48a8-b655-90ad8ea73fd6',
        order: 4,
    },
    {
        id: '94924a39-b4df-44f4-a05f-5c91f610eedd',
        content: [
            {
                type: "paragraph",
                data: "Agora vamos usar boolean. Por exemplo, se o suspeito tem álibi, usamos true; caso contrário, false.",
            },
            {
                type: "code",
                data: "let temAlibi = true",
            },
        ],
        hint: "Boolean não leva aspas, e só aceita true ou false.",
        type: "MULTIPLE_CHOICE",
        lessonId: '6ab140f9-ef4f-48a8-b655-90ad8ea73fd6',
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
        lessonId: '6ab140f9-ef4f-48a8-b655-90ad8ea73fd6',
        order: 6,
    },
] as const;

export const assignmentLessonExercises = [
    {
        id: 'd0edaa2a-eb69-43fc-87b7-5fbc62577e6a',
        content: [
            {
                type: "paragraph",
                data: 'Durante uma investigação, você encontrou 250 evidências. A variável "evidencias" já foi declarada sem valor. Agora atribua esse valor.',
            },
            {
                type: "code",
                data: "let evidencias\nevidencias = _____",
            },
        ],
        hint: "Você pode declarar uma variável sem valor e atribuir depois.",
        type: "COMPLETE_CODE",
        lessonId: '7812b8c9-2a87-4ae1-9eaa-d133fb7aa6a6',
        order: 1,
    },
    {
        id: '436a87d4-e2da-4ba7-8a6d-34f8a450fe78',
        content: [
            {
                type: "paragraph",
                data: 'Qual é o valor da variável "nivelDeSuspeita" após a execução do código abaixo?',
            },
            {
                type: "code",
                data: "let nivelDeSuspeita\nnivelDeSuspeita = 5",
            },
        ],
        hint: "A variável foi declarada e depois recebeu um valor.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7812b8c9-2a87-4ae1-9eaa-d133fb7aa6a6',
        order: 2,
    },
    {
        id: '0f73d075-042b-44f9-8ab3-f900d51c03ea',
        content: [
            {
                type: "paragraph",
                data: 'Declare uma variável chamada "tempoDeInvestigacao" sem valor e depois atribua 37.5.',
            },
            {
                type: "code",
                data: "let tempoDeInvestigacao\ntempoDeInvestigacao = _____",
            },
        ],
        hint: "Use `let` para declarar e depois atribua com =.",
        type: "COMPLETE_CODE",
        lessonId: '7812b8c9-2a87-4ae1-9eaa-d133fb7aa6a6',
        order: 3,
    },
    {
        id: 'c24d3fec-76f3-4143-b2c8-01f558141f20',
        content: [
            {
                type: "paragraph",
                data: 'Novas pistas surgiram! Complete o código para atribuir o valor 17 à variável "nivelDeSuspeita".',
            },
            {
                type: "code",
                data: "let nivelDeSuspeita\n_____",
            },
        ],
        hint: "Atribua o número usando =.",
        type: "COMPLETE_CODE",
        lessonId: '7812b8c9-2a87-4ae1-9eaa-d133fb7aa6a6',
        order: 4,
    },
] as const;

export const constExercises = [
    {
        id: '1bcaea75-6338-4a3a-b600-8a5963f99bc0',
        content: [
            {
                type: "paragraph",
                data: "Há informações em uma investigação que nunca mudam, como o número do caso. Para isso usamos \"const\".",
            },
            {
                type: "code",
                data: "const numeroDoCaso = \"A123\""
            }
        ],
        hint: "Não há dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: '818659ac-1b07-4bd8-afc3-74f38e3e0d64',
        order: 1,
    },
    {
        id: '0c6cb68b-a80b-49a0-9e7c-d839944e3411',
        content: [
            {
                type: "paragraph",
                data: "O número de um caso não pode mudar durante a investigação. Qual palavra-chave devemos usar?",
            },
        ],
        hint: "Use a palavra-chave que define um valor imutável.",
        type: "MULTIPLE_CHOICE",
        lessonId: '818659ac-1b07-4bd8-afc3-74f38e3e0d64',
        order: 2,
    },
    {
        id: '4758305d-f373-4f71-8cce-e808bc561e09',
        content: [
            {
                type: "paragraph",
                data: "Você recebeu uma informação fixa importante. Declare uma constante chamada \"codigoSecreto\" com valor 10."
            },
            {
                type: "code",
                data: "_____"
            }
        ],
        hint: "Constantes usam \"const\".",
        type: "WRITE_CODE",
        lessonId: '818659ac-1b07-4bd8-afc3-74f38e3e0d64',
        order: 3,
    },
    {
        id: '00cc540d-adf3-4028-b7c4-08f14094187c',
        content: [
            {
                type: "paragraph",
                data: "Complete o código abaixo que define o nome da operação."
            },
            {
                type: "code",
                data: " _____ nomeDaOperacao = \"Operação Sombra\""
            }
        ],
        hint: "Use a palavra-chave de constante.",
        type: "COMPLETE_CODE",
        lessonId: '818659ac-1b07-4bd8-afc3-74f38e3e0d64',
        order: 4,
    },
] as const;