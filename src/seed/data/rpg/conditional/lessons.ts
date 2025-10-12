const topicId = "7e3748c5-cb38-4304-9319-ba805dd13aa4";
const themeId = "d14e94ff-5702-47d5-bf25-d0984ca44e9e";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const conditionalLessons = [
    {
        id: "b6de4d17-1c4e-4f8d-bf4c-2c3c33a4e819",
        name: "Condicionais",
        description: "Aprenda a usar o if para tomar decisões no código!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 800,
    },
    {
        id: "b57a18fa-2b3f-4d08-b1d1-6d1f7b00c4a2",
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
        id: "d3f4a71b-9b45-4f60-bf53-cb830b43e2de",
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
        id: "c45e25bc-7306-4d41-b82d-d9a3a25c7430",
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
