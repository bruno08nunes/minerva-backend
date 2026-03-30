const topicId = "d20a6380-9ee1-4a41-81fe-758133aaf35c";
const themeId = "99f2d1eb-0ad7-4fba-b994-dfa8f735dbb4";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const loopLessons = [
    {
        id: '4cc0cb31-2bd0-45c9-aa80-b9a1ee776628',
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
        id: '35892645-aaed-4c86-a4ae-35f5a9a75cf8',
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
        id: '91a7fe23-1135-4860-b733-3d1225c56dfc',
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
        id: 'fb3d0b45-afa7-4eca-adcb-d02188ce84ed',
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
