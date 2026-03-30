const topicId = "218492d4-2a81-4b5a-a0fe-1fd644ee38be";
const themeId = "99f2d1eb-0ad7-4fba-b994-dfa8f735dbb4";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const operatorLessons = [
    {
        id: 'fa814e2e-85ef-49c0-8ece-8d5873c36d06',
        name: "Operadores Aritméticos",
        description: "Aprenda a manipular valores com operadores aritméticos!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 700,
    },
    {
        id: 'f1ae32a2-115a-4b85-99a2-0b6349fa6bcf',
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
        id: 'b1f9014f-6a3a-4bde-91b8-868d361a5097',
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
        id: '23912f00-2975-43ac-8571-dd0fe44416df',
        name: "Operadores Lógicos",
        description: "Combine condições com os operadores lógicos!",
        topicId,
        themeId,
        iconId,
        order: 4,
        rewardXP: 1000,
    },
] as const;
