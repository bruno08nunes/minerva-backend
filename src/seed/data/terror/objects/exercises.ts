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
                data: "const mago = {\n  nome: 'Eldrin',\n  nivel: 5,\n  elemento: 'Fogo'\n};",
            },
            {
                type: "paragraph",
                data: "No código acima, o objeto `mago` tem três propriedades. Qual delas guarda o tipo de magia que ele controla?",
            },
        ],
        hint: "Observe o valor da propriedade 'elemento'.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'beeb8e73-2df0-4d03-9de8-d3726efdbd82',
        order: 1,
    },
    {
        id: '97bae378-9870-4f76-bb49-f6e8cc1ac4a7',
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
                data: "const poção = { tipo: 'Mana' };\npoção._____ = 50;",
            },
            {
                type: "paragraph",
                data: "Complete o código para adicionar a propriedade `quantidade` com valor 50.",
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
                data: "const grimorio = { magia: 'Relâmpago' };\nconst chave = 'magia';\nconsole.log(grimorio[_____]);",
            },
            {
                type: "paragraph",
                data: "Complete o código para acessar a magia corretamente.",
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
                data: "const inventario = {\n  varinha: { dano: 12, elemento: 'Gelo' },\n  poção: { tipo: 'Cura', quantidade: 2 }\n};\n\nconsole.log(inventario.poção.tipo);",
            },
            {
                type: "paragraph",
                data: "O que será exibido no console?",
            },
        ],
        hint: "A propriedade 'tipo' dentro do objeto 'poção'.",
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
        lessonId: 'a521da0f-5777-433c-bd7f-5aaf320785f9',
        order: 1,
    },
    {
        id: 'bfc39cd2-ed2e-4b86-83c5-9c7f845ad6c9',
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
                data: "const mago = {\n  nome: 'Eldrin',\n  falar() {\n    console.log('Eu sou ' + this.nome);\n  }\n};\n\nmago.falar();",
            },
            {
                type: "paragraph",
                data: "O que será exibido?",
            },
        ],
        hint: "O método está dentro do objeto, e o this se refere a ele.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'a521da0f-5777-433c-bd7f-5aaf320785f9',
        order: 3,
    },
    {
        id: '8a0fe9f9-5e4b-433b-81c8-9525e9178848',
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
        lessonId: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        order: 1,
    },
    {
        id: 'bfc5c76d-d024-44a2-b971-191184df9d1f',
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
        lessonId: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        order: 2,
    },
    {
        id: 'f910a261-8f9f-4b85-b419-e4fec1cfe8c3',
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
        lessonId: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        order: 3,
    },
    {
        id: '9467c4d5-23a7-4f71-80a7-6cce2814da93',
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
        lessonId: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        order: 4,
    },
] as const;
