const topicId = "205bf383-5b91-4502-a489-f9dd250fdcc1";
const themeId = "99f2d1eb-0ad7-4fba-b994-dfa8f735dbb4";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const objectsLessons = [
    {
        id: 'beeb8e73-2df0-4d03-9de8-d3726efdbd82',
        name: "Objetos Literais",
        description:
            "Aprenda a usar objetos literais e armazenar múltiplas informações em uma única estrutura.",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 1200,
    },
    {
        id: 'a521da0f-5777-433c-bd7f-5aaf320785f9',
        name: "Prototype Chain e This",
        description:
            "Descubra como os objetos herdam propriedades por meio da corrente de protótipos e aprenda a dominar o enigmático 'this'.",
        topicId,
        themeId,
        iconId,
        order: 2,
        rewardXP: 1300,
    },
    {
        id: '7f1fcf4a-49bc-46d8-93be-a3df4b962aab',
        name: "Classes e Herança",
        description:
            "Descubra como as classes permitem criar linhagens de objetos, passando propriedades para aprendizes com 'extends' e 'super'.",
        topicId,
        themeId,
        iconId,
        order: 3,
        rewardXP: 1400,
    },
] as const;
