export const objectLiteralExercises = [
    {
        id: '0785b9da-761b-4585-aac1-ce10d4d43f9a',
        content: [
            {
                type: "paragraph",
                data: "Um objeto literal é criado usando chaves `{}` e permite armazenar várias informações relacionadas em um único lugar.",
            },
            {
                type: "code",
                data: "const entidade = {\n  nome: 'Sombrasussurro',\n  nivel: 5,\n  tipo: 'Espiritual'\n};",
            },
            {
                type: "paragraph",
                data: "No código acima, o objeto `entidade` tem três propriedades. Qual delas define o tipo da entidade?",
            },
        ],
        hint: "Observe o valor da propriedade 'tipo'.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'beeb8e73-2df0-4d03-9de8-d3726efdbd82',
        order: 1,
    },
    {
        id: '97bae378-9870-4f76-bb49-f6e8cc1ac4a7',
        content: [
            {
                type: "paragraph",
                data: "Você pode acessar uma propriedade de um objeto usando o ponto (`.`). Complete o código para exibir o nome da entidade:",
            },
            {
                type: "code",
                data: "const entidade = { nome: 'Sombrasussurro' };\nconsole.log(entidade_____);",
            },
        ],
        hint: "Use o operador de ponto e o nome da propriedade.",
        type: "COMPLETE_CODE",
        lessonId: 'beeb8e73-2df0-4d03-9de8-d3726efdbd82',
        order: 2,
    },
    {
        id: 'cc1de5a5-8c58-48ac-a8fd-a8a1e1289bb6',
        content: [
            {
                type: "paragraph",
                data: "Também é possível adicionar uma nova propriedade a um objeto já existente.",
            },
            {
                type: "code",
                data: "const artefato = { tipo: 'Amaldiçoado' };\nartefato._____ = 50;",
            },
            {
                type: "paragraph",
                data: "Complete o código para adicionar a propriedade `intensidade` com valor 50.",
            },
        ],
        hint: "Atribua o valor à nova propriedade com o ponto.",
        type: "COMPLETE_CODE",
        lessonId: 'beeb8e73-2df0-4d03-9de8-d3726efdbd82',
        order: 3,
    },
    {
        id: 'ce8dabf3-eec3-42ff-a558-c640ec79b022',
        content: [
            {
                type: "paragraph",
                data: "Podemos acessar propriedades dinamicamente com colchetes `[]`, usando o nome da chave como string.",
            },
            {
                type: "code",
                data: "const registro = { evento: 'Grito na madrugada' };\nconst chave = 'evento';\nconsole.log(registro[_____]);",
            },
            {
                type: "paragraph",
                data: "Complete o código para acessar o evento corretamente.",
            },
        ],
        hint: "Use a variável que guarda o nome da propriedade.",
        type: "COMPLETE_CODE",
        lessonId: 'beeb8e73-2df0-4d03-9de8-d3726efdbd82',
        order: 4,
    },
    {
        id: 'dbb971b8-9e22-419d-9a29-734b8572b5f9',
        content: [
            {
                type: "paragraph",
                data: "Você pode combinar objetos literais para criar estruturas mais complexas.",
            },
            {
                type: "code",
                data: "const caso = {\n  entidade: { nome: 'Sombrasussurro', nivel: 12 },\n  evidencia: { tipo: 'Mancha de sangue', quantidade: 2 }\n};\n\nconsole.log(caso.evidencia.tipo);",
            },
            {
                type: "paragraph",
                data: "O que será exibido no console?",
            },
        ],
        hint: "A propriedade 'tipo' dentro do objeto 'evidencia'.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'beeb8e73-2df0-4d03-9de8-d3726efdbd82',
        order: 5,
    },
] as const;

export const prototypeThisExercises = [
    {
        id: '0eef022a-6bcb-44a4-a018-77ffdce4a035',
        content: [
            {
                type: "paragraph",
                data: "No JavaScript, todos os objetos têm uma ligação misteriosa chamada Prototype, que permite herdar propriedades de outros objetos.",
            },
            {
                type: "code",
                data: "const entidade = { energia: 50 };\nconst manifestacao = Object.create(entidade);\nconsole.log(manifestacao.energia);",
            },
            {
                type: "paragraph",
                data: "O que será exibido no console?",
            },
        ],
        hint: "A manifestação herda energia da entidade original.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'a521da0f-5777-433c-bd7f-5aaf320785f9',
        order: 1,
    },
    {
        id: 'bfc39cd2-ed2e-4b86-83c5-9c7f845ad6c9',
        content: [
            {
                type: "paragraph",
                data: "Você pode verificar de onde um objeto herda suas propriedades usando o operador `__proto__`.",
            },
            {
                type: "code",
                data: "const entidade = { energia: 50 };\nconst manifestacao = Object.create(entidade);\nconsole.log(manifestacao.__proto__ === entidade);",
            },
            {
                type: "paragraph",
                data: "O que esse código exibirá?",
            },
        ],
        hint: "O vínculo entre entidade e manifestação é direto.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'a521da0f-5777-433c-bd7f-5aaf320785f9',
        order: 2,
    },
    {
        id: '466cda8e-85af-4f2e-8ae8-318756c3cfcd',
        content: [
            {
                type: "paragraph",
                data: "O `this` representa quem está executando a ação. Em métodos dentro de objetos, ele aponta para o próprio objeto.",
            },
            {
                type: "code",
                data: "const entidade = {\n  nome: 'Sombrasussurro',\n  revelar() {\n    console.log('Eu sou ' + this.nome);\n  }\n};\n\nentidade.revelar();",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "A entidade revela o próprio nome.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'a521da0f-5777-433c-bd7f-5aaf320785f9',
        order: 3,
    },
    {
        id: '8a0fe9f9-5e4b-433b-81c8-9525e9178848',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para que o método do objeto `ritual` use corretamente o `this` para acessar a energia:",
            },
            {
                type: "code",
                data: "const ritual = {\n  energia: 100,\n  invocar() {\n    console.log('Invocando com energia ' + _____.energia);\n  }\n};",
            },
        ],
        hint: "Dentro de métodos, use 'this'.",
        type: "COMPLETE_CODE",
        lessonId: 'a521da0f-5777-433c-bd7f-5aaf320785f9',
        order: 4,
    },
] as const;

export const classInheritanceExercises = [
    {
        id: '2e45ac62-6e48-4d0e-a535-a79689f38951',
        content: [
            {
                type: "paragraph",
                data: "As classes em JavaScript são como registros ocultos: modelos que descrevem como criar entidades com características específicas.",
            },
            {
                type: "code",
                data: "class Entidade {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nconst sombra = new Entidade('Sombrasussurro');\nconsole.log(sombra.nome);",
            },
            {
                type: "paragraph",
                data: "O que será exibido no console?",
            },
        ],
        hint: "O nome é definido ao criar a entidade.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        order: 1,
    },
    {
        id: 'bfc5c76d-d024-44a2-b971-191184df9d1f',
        content: [
            {
                type: "paragraph",
                data: "Podemos criar uma classe que herda de outra usando `extends`.",
            },
            {
                type: "code",
                data: "class Entidade {\n  constructor() {\n    this.tipo = 'Espiritual';\n  }\n}\n\nclass Aparicao extends Entidade {}\n\nconst espectro = new Aparicao();\nconsole.log(espectro.tipo);",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "A aparição herda o tipo da entidade.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        order: 2,
    },
    {
        id: 'f910a261-8f9f-4b85-b419-e4fec1cfe8c3',
        content: [
            {
                type: "paragraph",
                data: "Para usar o construtor da classe mãe dentro da classe filha, usamos `super()`.",
            },
            {
                type: "code",
                data: "class Entidade {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nclass Demonio extends Entidade {\n  constructor(nome, nivel) {\n    super(nome);\n    this.nivel = nivel;\n  }\n}\n\nconst azrael = new Demonio('Azrael', 10);\nconsole.log(azrael.nome, azrael.nivel);",
            },
            {
                type: "paragraph",
                data: "O que o console exibirá?",
            },
        ],
        hint: "O nome vem da classe mãe e o nível da classe filha.",
        type: "MULTIPLE_CHOICE",
        lessonId: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        order: 3,
    },
    {
        id: '9467c4d5-23a7-4f71-80a7-6cce2814da93',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para que a classe 'Demonio' herde de 'Entidade' e chame o construtor corretamente:",
            },
            {
                type: "code",
                data: "class Entidade {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nclass Demonio extends Entidade {\n  constructor(nome, nivel) {\n    _____(nome);\n    this.nivel = nivel;\n  }\n}",
            },
        ],
        hint: "Use 'super(nome)'.",
        type: "COMPLETE_CODE",
        lessonId: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        order: 4,
    },
] as const;