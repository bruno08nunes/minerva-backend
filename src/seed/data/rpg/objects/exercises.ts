export const objectLiteralExercises = [
    {
        id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
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
        lessonId: "c7d8e9f0-1a2b-3c4d-5e6f-7g8h9i0j1k2l",
        order: 1,
    },
    {
        id: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
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
        lessonId: "c7d8e9f0-1a2b-3c4d-5e6f-7g8h9i0j1k2l",
        order: 2,
    },
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
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
        lessonId: "c7d8e9f0-1a2b-3c4d-5e6f-7g8h9i0j1k2l",
        order: 3,
    },
    {
        id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
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
        lessonId: "c7d8e9f0-1a2b-3c4d-5e6f-7g8h9i0j1k2l",
        order: 4,
    },
    {
        id: "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
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
        lessonId: "c7d8e9f0-1a2b-3c4d-5e6f-7g8h9i0j1k2l",
        order: 5,
    },
] as const;

export const prototypeThisExercises = [
    {
        id: "aa1b2c3d-4e5f-6g7h-cetd-0k1l2m3n4o5p",
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
        lessonId: "d9e0f1a2-b3c4-56d7-89e0-f1a2b3c4d5e6",
        order: 1,
    },
    {
        id: "bb2c3d4e-fdad-7h8i-9j0k-1l2m3n4o5p6q",
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
        lessonId: "d9e0f1a2-b3c4-56d7-89e0-f1a2b3c4d5e6",
        order: 2,
    },
    {
        id: "cfdq4e5f-6g7h-8i9j-0k1l-2m3n4o5p6q7r",
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
        lessonId: "d9e0f1a2-b3c4-56d7-89e0-f1a2b3c4d5e6",
        order: 3,
    },
    {
        id: "eemf6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t",
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
        lessonId: "d9e0f1a2-b3c4-56d7-89e0-f1a2b3c4d5e6",
        order: 4,
    },
] as const;

export const classInheritanceExercises = [
    {
        id: "k1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
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
        lessonId: "e0f1a2b3-c4d5-67e8-90f1-a2b3c4d5e6f7",
        order: 1,
    },
    {
        id: "l2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
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
        lessonId: "e0f1a2b3-c4d5-67e8-90f1-a2b3c4d5e6f7",
        order: 2,
    },
    {
        id: "j3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
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
        lessonId: "e0f1a2b3-c4d5-67e8-90f1-a2b3c4d5e6f7",
        order: 3,
    },
    {
        id: "d5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
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
        lessonId: "e0f1a2b3-c4d5-67e8-90f1-a2b3c4d5e6f7",
        order: 4,
    },
] as const;
