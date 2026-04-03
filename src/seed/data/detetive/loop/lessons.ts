const topicId = "d20a6380-9ee1-4a41-81fe-758133aaf35c";
const themeId = "bb858ea9-6327-48a5-a523-39a07fb82183";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const loopLessonsDetetive = [
    {
        id: '3d1dc34f-f0e3-4528-a387-ce66233dd648',
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
        id: '89c9ffaf-9074-47ca-bad4-8b041b51afdf',
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
        id: '8946dd94-c082-4978-aac9-2649675b4bbe',
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
        id: 'a12831f0-80b9-4cb3-89b3-e8e86c889c57',
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
