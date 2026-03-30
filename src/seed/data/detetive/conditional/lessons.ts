const topicId = "7e3748c5-cb38-4304-9319-ba805dd13aa4";
const themeId = "d14e94ff-5702-47d5-bf25-d0984ca44e9e";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const conditionalLessons = [
    {
        id: '0b3c39eb-f13e-438d-87fa-68a851b45755',
        name: "Condicionais",
        description: "Aprenda a usar o if para tomar decisões no código!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 800,
    },
    {
        id: '89b4f0f9-f71f-49b3-b19b-8848cf27541f',
        name: "Senão",
        description:
            "Aprenda a usar o if... else para escolher entre dois caminhos!",
        topicId,
        themeId,
        iconId,
        order: 2,
        rewardXP: 900,
    },
    {
        id: 'c9bb5f68-5fe5-47af-84fa-f4c68cd93f2b',
        name: "Condicional: if... else if",
        description:
            "Aprenda a usar if... else if para lidar com várias possibilidades!",
        topicId,
        themeId,
        iconId,
        order: 3,
        rewardXP: 1000,
    },
    {
        id: '4b446f68-7bdf-4583-aca1-b804cb2666f7',
        name: "Switch... Case",
        description:
            "Aprenda a usar o switch... case para lidar com várias opções de forma organizada!",
        topicId,
        themeId,
        iconId,
        order: 4,
        rewardXP: 1100,
    },
] as const;
