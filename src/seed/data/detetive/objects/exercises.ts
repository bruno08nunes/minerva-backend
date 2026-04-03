export const objectLiteralExercises = [
    {
        id: 'b4c75625-559f-4474-bd0c-2a870e78931d',
        content: [
            {
                type: "paragraph",
                data: "Um objeto literal é criado usando chaves `{}` e permite armazenar várias informações relacionadas em um único lugar.",
            },
            {
                type: "code",
                data: "const mago = {\n  nome: 'Eldrin',\n  nivel: 5,\n  elemento: 'Fogo'\n};",
            },
            {
                type: "paragraph",
                data: "No código acima, o objeto `mago` tem três propriedades. Qual delas guarda o tipo de magia que ele controla?",
            },
        ],
        hint: "Observe o valor da propriedade 'elemento'.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e7c8f0c8-902f-4937-abe6-501ac0cbb759',
        order: 1,
    },
    {
        id: '9fe518c8-fbe0-4be3-b08e-43a2dc13f5a7',
        content: [
            {
                type: "paragraph",
                data: "Você pode acessar uma propriedade de um objeto usando o ponto (`.`). Complete o código para exibir o nome do mago:",
            },
            {
                type: "code",
                data: "const mago = { nome: 'Eldrin' };\nconsole.log(mago_____);",
            },
        ],
        hint: "Use o operador de ponto e o nome da propriedade.",
        type: "COMPLETE_CODE",
        lessonId: 'e7c8f0c8-902f-4937-abe6-501ac0cbb759',
        order: 2,
    },
    {
        id: 'b0e0f437-4267-4ece-8d70-3488f369d1cd',
        content: [
            {
                type: "paragraph",
                data: "Também é possível adicionar uma nova propriedade a um objeto já existente.",
            },
            {
                type: "code",
                data: "const poção = { tipo: 'Mana' };\npoção._____ = 50;",
            },
            {
                type: "paragraph",
                data: "Complete o código para adicionar a propriedade `quantidade` com valor 50.",
            },
        ],
        hint: "Atribua o valor à nova propriedade com o ponto.",
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
                data: "const grimorio = { magia: 'Relâmpago' };\nconst chave = 'magia';\nconsole.log(grimorio[_____]);",
            },
            {
                type: "paragraph",
                data: "Complete o código para acessar a magia corretamente.",
            },
        ],
        hint: "Use a variável que guarda o nome da propriedade.",
        type: "COMPLETE_CODE",
        lessonId: 'e7c8f0c8-902f-4937-abe6-501ac0cbb759',
        order: 4,
    },
    {
        id: 'ff49e34d-920b-4a3d-9b7f-7f6692f24045',
        content: [
            {
                type: "paragraph",
                data: "Você pode combinar objetos literais para criar estruturas mais complexas.",
            },
            {
                type: "code",
                data: "const inventario = {\n  varinha: { dano: 12, elemento: 'Gelo' },\n  poção: { tipo: 'Cura', quantidade: 2 }\n};\n\nconsole.log(inventario.poção.tipo);",
            },
            {
                type: "paragraph",
                data: "O que será exibido no console?",
            },
        ],
        hint: "A propriedade 'tipo' dentro do objeto 'poção'.",
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
                data: "No JavaScript, todos os objetos têm uma ligação mágica chamada Prototype, que permite herdar propriedades de outros objetos.",
            },
            {
                type: "code",
                data: "const mago = { poder: 50 };\nconst aprendiz = Object.create(mago);\nconsole.log(aprendiz.poder);",
            },
            {
                type: "paragraph",
                data: "O que será exibido no console?",
            },
        ],
        hint: "O objeto 'aprendiz' herda propriedades do objeto 'mago' por meio da cadeia de protótipos.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'af850bb0-714f-4a7b-80da-c64b33baf173',
        order: 1,
    },
    {
        id: '07239ae7-90b4-4d10-91b4-827c540de5c6',
        content: [
            {
                type: "paragraph",
                data: "Você pode verificar de onde um objeto herda suas propriedades usando o operador mágico `__proto__`.",
            },
            {
                type: "code",
                data: "const mago = { poder: 50 };\nconst aprendiz = Object.create(mago);\nconsole.log(aprendiz.__proto__ === mago);",
            },
            {
                type: "paragraph",
                data: "O que esse código exibirá?",
            },
        ],
        hint: "Lembre-se: o protótipo do aprendiz aponta para o objeto mestre.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'af850bb0-714f-4a7b-80da-c64b33baf173',
        order: 2,
    },
    {
        id: 'c4472cbf-27c4-4c9f-8d46-53b96d1328e7',
        content: [
            {
                type: "paragraph",
                data: "O `this` representa quem está executando a ação. Em métodos dentro de objetos, ele aponta para o próprio objeto.",
            },
            {
                type: "code",
                data: "const mago = {\n  nome: 'Eldrin',\n  falar() {\n    console.log('Eu sou ' + this.nome);\n  }\n};\n\nmago.falar();",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "O método está dentro do objeto, e o this se refere a ele.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'af850bb0-714f-4a7b-80da-c64b33baf173',
        order: 3,
    },
    {
        id: 'ee1b6ef1-d2f4-4de4-9441-498b2f310c8b',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para que o método do objeto `feitico` use corretamente o `this` para acessar o poder e lançar a magia:",
            },
            {
                type: "code",
                data: "const feitico = {\n  poder: 100,\n  lançar() {\n    console.log('Lançando magia com poder ' + _____.poder);\n  }\n};",
            },
        ],
        hint: "Dentro de métodos, use 'this' para acessar propriedades do mesmo objeto.",
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
                data: "As classes em JavaScript são como grimórios mágicos: modelos que descrevem como criar objetos com poderes específicos.",
            },
            {
                type: "code",
                data: "class Mago {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nconst eldrin = new Mago('Eldrin');\nconsole.log(eldrin.nome);",
            },
            {
                type: "paragraph",
                data: "O que será exibido no console?",
            },
        ],
        hint: "O construtor define propriedades iniciais do objeto criado com 'new'.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e40d6e9d-0885-42e3-9779-bd29259f5320',
        order: 1,
    },
    {
        id: '845f7b04-cde7-4a86-b0b7-8d36ac806586',
        content: [
            {
                type: "paragraph",
                data: "Podemos criar uma classe que herda de outra usando o encantamento `extends`.",
            },
            {
                type: "code",
                data: "class Mago {\n  constructor() {\n    this.tipo = 'Mago';\n  }\n}\n\nclass Feiticeiro extends Mago {}\n\nconst lira = new Feiticeiro();\nconsole.log(lira.tipo);",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "A classe filha herda todas as propriedades e métodos da classe mãe.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e40d6e9d-0885-42e3-9779-bd29259f5320',
        order: 2,
    },
    {
        id: 'a03eac64-5bbc-4791-9013-8595372ea070',
        content: [
            {
                type: "paragraph",
                data: "Para usar o construtor da classe mãe dentro da classe filha, invocamos o feitiço `super()`.",
            },
            {
                type: "code",
                data: "class Mago {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nclass Arcanista extends Mago {\n  constructor(nome, elemento) {\n    super(nome);\n    this.elemento = elemento;\n  }\n}\n\nconst sora = new Arcanista('Sora', 'Fogo');\nconsole.log(sora.nome, sora.elemento);",
            },
            {
                type: "paragraph",
                data: "O que o console exibirá?",
            },
        ],
        hint: "O 'super()' chama o construtor da classe mãe antes de definir novas propriedades.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e40d6e9d-0885-42e3-9779-bd29259f5320',
        order: 3,
    },
    {
        id: 'bfd4717a-ced5-495d-814f-8a82b9dcf122',
        content: [
            {
                type: "paragraph",
                data: "Complete o código para que a classe 'Arcanista' herde de 'Mago' e chame o construtor da classe mãe corretamente:",
            },
            {
                type: "code",
                data: "class Mago {\n  constructor(nome) {\n    this.nome = nome;\n  }\n}\n\nclass Arcanista extends Mago {\n  constructor(nome, elemento) {\n    _____(nome);\n    this.elemento = elemento;\n  }\n}",
            },
        ],
        hint: "Use 'super(nome)' para completar o feitiço da herança.",
        type: "COMPLETE_CODE",
        lessonId: 'e40d6e9d-0885-42e3-9779-bd29259f5320',
        order: 4,
    },
] as const;
