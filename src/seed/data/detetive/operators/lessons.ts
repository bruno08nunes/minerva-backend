const topicId = "218492d4-2a81-4b5a-a0fe-1fd644ee38be";
const themeId = "bb858ea9-6327-48a5-a523-39a07fb82183";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const operatorLessonsDetetive = [
    {
        id: '6dc9654a-9de9-4afe-a498-9b2a7c7e995a',
        name: "Operadores Aritméticos",
        description: "Aprenda a manipular valores com operadores aritméticos!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 700,
    },
    {
        id: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        name: "Operadores de Atribuição",
        description:
            "Aprenda a armazenar e modificar valores nas variáveis usando operadores de atribuição.",
        topicId,
        themeId,
        iconId,
        order: 2,
        rewardXP: 1100,
    },
    {
        id: 'e288fdb5-1e7f-4880-ba50-590b593c5e84',
        name: "Operadores Relacionais",
        description:
            "Aprenda a comparar valores com os operadores relacionais!",
        topicId,
        themeId,
        iconId,
        order: 3,
        rewardXP: 800,
    },
    {
        id: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        name: "Operadores Lógicos",
        description: "Combine condições com os operadores lógicos!",
        topicId,
        themeId,
        iconId,
        order: 4,
        rewardXP: 1000,
    },
] as const;
