export const objectLiteralExercises = [
    {
        id: 'b4c75625-559f-4474-bd0c-2a870e78931d',
        content: [
            {
                type: "paragraph",
                data: "Um objeto literal é criado usando chaves `{}` e permite armazenar várias informações relacionadas em um único lugar, como os dados de um suspeito.",
            },
            {
                type: "code",
                data: "const suspeito = {\n  nome: 'Carlos',\n  idade: 35,\n  evidencia: 'Impressão digital'\n};",
            },
            {
                type: "paragraph",
                data: "No código acima, o objeto `suspeito` tem três propriedades. Qual delas guarda a evidência ligada a ele?",
            },
        ],
        hint: "Observe o valor da propriedade 'evidencia'.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e7c8f0c8-902f-4937-abe6-501ac0cbb759',
        order: 1,
    },
    {
        id: '9fe518c8-fbe0-4be3-b08e-43a2dc13f5a7',
        content: [
            {
                type: "paragraph",
                data: "Você pode acessar uma propriedade usando o ponto (`.`). Complete o código para exibir o nome do suspeito:",
            },
            {
                type: "code",
                data: "const suspeito = { nome: 'Carlos' };\nconsole.log(suspeito_____);",
            },
        ],
        hint: "Use o ponto seguido do nome da propriedade.",
        type: "COMPLETE_CODE",
        lessonId: 'e7c8f0c8-902f-4937-abe6-501ac0cbb759',
        order: 2,
    },
    {
        id: 'b0e0f437-4267-4ece-8d70-3488f369d1cd',
        content: [
            {
                type: "paragraph",
                data: "Também é possível adicionar novas informações a um objeto, como mais dados da investigação.",
            },
            {
                type: "code",
                data: "const evidencia = { tipo: 'DNA' };\nevidencia._____ = 50;",
            },
            {
                type: "paragraph",
                data: "Complete o código para adicionar a propriedade `quantidade` com valor 50.",
            },
        ],
        hint: "Use o ponto para criar a nova propriedade.",
        type: "COMPLETE_CODE",
        lessonId: 'e7c8f0c8-902f-4937-abe6-501ac0cbb759',
        order: 3,
    },
    {
        id: '02a51f65-d2c7-425b-a073-2ff035214561',
        content: [
            {
                type: "paragraph",
                data: "Podemos acessar propriedades dinamicamente com colchetes `[]`, usando o nome da chave como string.",
            },
            {
                type: "code",
                data: "const caso = { pista: 'Câmera' };\nconst chave = 'pista';\nconsole.log(caso[_____]);",
            },
            {
                type: "paragraph",
                data: "Complete o código para acessar a pista corretamente.",
            },
        ],
        hint: "Use a variável que contém o nome da propriedade.",
        type: "COMPLETE_CODE",
        lessonId: 'e7c8f0c8-902f-4937-abe6-501ac0cbb759',
        order: 4,
    },
    {
        id: 'ff49e34d-920b-4a3d-9b7f-7f6692f24045',
        content: [
            {
                type: "paragraph",
                data: "Você pode combinar objetos para representar informações mais complexas de um caso.",
            },
            {
                type: "code",
                data: "const caso = {\n  suspeito: { nome: 'Carlos', idade: 35 },\n  evidencia: { tipo: 'DNA', quantidade: 2 }\n};\n\nconsole.log(caso.evidencia.tipo);",
            },
            {
                type: "paragraph",
                data: "O que será exibido no console?",
            },
        ],
        hint: "A propriedade 'tipo' dentro de 'evidencia'.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e7c8f0c8-902f-4937-abe6-501ac0cbb759',
        order: 5,
    },
] as const;

export const prototypeThisExercises = [
    {
        id: 'fe3763da-234d-435b-9144-f13dbcd5e23b',
        content: [
            {
                type: "paragraph",
                data: "No JavaScript, objetos podem herdar características de outros — como um detetive aprendendo com seu mentor.",
            },
            {
                type: "code",
                data: "const detetive = { experiencia: 50 };\nconst aprendiz = Object.create(detetive);\nconsole.log(aprendiz.experiencia);",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "O aprendiz herda do detetive.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'af850bb0-714f-4a7b-80da-c64b33baf173',
        order: 1,
    },
    {
        id: '07239ae7-90b4-4d10-91b4-827c540de5c6',
        content: [
            {
                type: "paragraph",
                data: "Podemos verificar de onde um objeto herda suas propriedades usando `__proto__`.",
            },
            {
                type: "code",
                data: "const detetive = { experiencia: 50 };\nconst aprendiz = Object.create(detetive);\nconsole.log(aprendiz.__proto__ === detetive);",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "O protótipo aponta para o mentor.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'af850bb0-714f-4a7b-80da-c64b33baf173',
        order: 2,
    },
    {
        id: 'c4472cbf-27c4-4c9f-8d46-53b96d1328e7',
        content: [
            {
                type: "paragraph",
                data: "O `this` representa quem executa a ação. Em um método, geralmente aponta para o próprio objeto.",
            },
            {
                type: "code",
                data: "const detetive = {\n  nome: 'Silva',\n  apresentar() {\n    console.log('Eu sou o detetive ' + this.nome);\n  }\n};\n\ndetetive.apresentar();",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "`this` se refere ao objeto detetive.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'af850bb0-714f-4a7b-80da-c64b33baf173',
        order: 3,
    },
    {
        id: 'ee1b6ef1-d2f4-4de4-9441-498b2f310c8b',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para usar corretamente `this`:",
            },
            {
                type: "code",
                data: "const caso = {\n  nivel: 100,\n  resolver() {\n    console.log('Resolvendo caso nível ' + _____.nivel);\n  }\n};",
            },
        ],
        hint: "Use `this` para acessar propriedades do próprio objeto.",
        type: "COMPLETE_CODE",
        lessonId: 'af850bb0-714f-4a7b-80da-c64b33baf173',
        order: 4,
    },
] as const;

export const classInheritanceExercises = [
    {
        id: '89e64af9-b0a8-49e4-88e6-b978446e2c6f',
        content: [
            {
                type: "paragraph",
                data: "Classes são modelos para criar objetos — como fichas de detetives.",
            },
            {
                type: "code",
                data: "class Detetive {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nconst silva = new Detetive('Silva');\nconsole.log(silva.nome);",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "O construtor define o nome.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e40d6e9d-0885-42e3-9779-bd29259f5320',
        order: 1,
    },
    {
        id: '845f7b04-cde7-4a86-b0b7-8d36ac806586',
        content: [
            {
                type: "paragraph",
                data: "Podemos criar especializações de detetives usando `extends`.",
            },
            {
                type: "code",
                data: "class Detetive {\n  constructor() {\n    this.tipo = 'Detetive';\n  }\n}\n\nclass Investigador extends Detetive {}\n\nconst ana = new Investigador();\nconsole.log(ana.tipo);",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "Herda da classe base.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e40d6e9d-0885-42e3-9779-bd29259f5320',
        order: 2,
    },
    {
        id: 'a03eac64-5bbc-4791-9013-8595372ea070',
        content: [
            {
                type: "paragraph",
                data: "Para usar o construtor da classe base, usamos `super()`.",
            },
            {
                type: "code",
                data: "class Detetive {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nclass Investigador extends Detetive {\n  constructor(nome, caso) {\n    super(nome);\n    this.caso = caso;\n  }\n}\n\nconst ana = new Investigador('Ana', 'Roubo');\nconsole.log(ana.nome, ana.caso);",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "`super` chama o construtor da classe base.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e40d6e9d-0885-42e3-9779-bd29259f5320',
        order: 3,
    },
    {
        id: 'bfd4717a-ced5-495d-814f-8a82b9dcf122',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para herdar corretamente:",
            },
            {
                type: "code",
                data: "class Detetive {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nclass Investigador extends Detetive {\n  constructor(nome, caso) {\n    _____(nome);\n    this.caso = caso;\n  }\n}",
            },
        ],
        hint: "Use `super(nome)`.",
        type: "COMPLETE_CODE",
        lessonId: 'e40d6e9d-0885-42e3-9779-bd29259f5320',
        order: 4,
    },
] as const;