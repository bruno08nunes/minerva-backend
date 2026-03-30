const topicId = "b6101fef-e2c7-4c68-91dc-d47f10ba497c";
const themeId = "99f2d1eb-0ad7-4fba-b994-dfa8f735dbb4";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const functionLessons = [
    {
        id: '907e6bce-6bf0-4089-9ff9-c3defec5b957',
        name: "Funções",
        description: "Aprenda a executar um código que se repete!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 700,
    },
    {
        id: '5f766dad-4a80-4f6a-b8a6-d30cad43e4a8',
        name: "Parâmetros e Retornos",
        description:
            "Aprenda a criar funções que recebem valores e retornam resultados!",
        topicId,
        themeId,
        iconId,
        order: 2,
        rewardXP: 700,
    },
    {
        id: '3d63c1e3-6fa9-4f1c-9c19-4a6ee10905a9',
        name: "Funções Recursivas",
        description:
            "Aprenda a criar funções que invocam a si mesmas para repetir o código.",
        topicId,
        themeId,
        iconId,
        order: 3,
        rewardXP: 800,
    },
] as const;
