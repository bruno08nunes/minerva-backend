const topicId = "b6101fef-e2c7-4c68-91dc-d47f10ba497c";
const themeId = "d14e94ff-5702-47d5-bf25-d0984ca44e9e";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const functionLessons = [
    {
        id: "a73b4dc2-9d51-4b73-88f8-5d1dbe1b34e9",
        name: "Funções",
        description: "Aprenda a executar um código que se repete!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 700,
    },
    {
        id: "b81e6c93-4d2b-40f7-9a60-41a84fd23b77",
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
        id: "e5b8c3fa-1b22-4f8a-b7d1-9d84b21e4b90",
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
