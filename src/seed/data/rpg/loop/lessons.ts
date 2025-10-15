const topicId = "d20a6380-9ee1-4a41-81fe-758133aaf35c";
const themeId = "d14e94ff-5702-47d5-bf25-d0984ca44e9e";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const loopLessons = [
    {
        id: "c55a9a67-beb0-45c3-a7af-8d423c2d83e3",
        name: "While",
        description:
            "Aprenda a repetir ações com o laço while, até que uma condição deixe de ser verdadeira!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 1200,
    },
    {
        id: "d2a50e8e-9b12-4e8e-b40a-79e0c67b9d1a",
        name: "Do... While",
        description:
            "Aprenda a usar o laço do...while, que garante ao menos uma execução antes de verificar a condição!",
        topicId,
        themeId,
        iconId,
        order: 2,
        rewardXP: 1300,
    },
    {
        id: "a5f02cc4-915a-43ad-9e8a-4a2a540d4a2e",
        name: "For",
        description:
            "Aprenda a usar o laço for, ideal para repetições com contadores definidos!",
        topicId,
        themeId,
        iconId,
        order: 3,
        rewardXP: 1300,
    },
    {
        id: "c4b59d1f-582a-4b65-bc8f-53e6372eab7f",
        name: "Break e Continue",
        description:
            "Aprenda a controlar o fluxo dos laços com break e continue!",
        topicId,
        themeId,
        iconId,
        order: 4,
        rewardXP: 1400,
    },
] as const;
