const topicId = "7e3748c5-cb38-4304-9319-ba805dd13aa4";
const themeId = "99f2d1eb-0ad7-4fba-b994-dfa8f735dbb4";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const conditionalLessons = [
    {
        id: '481e4835-7b05-4d4d-b0b2-a386c0823ea6',
        name: "Condicionais",
        description: "Aprenda a usar o if para tomar decisões no código!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 800,
    },
    {
        id: '833184bd-c42e-4b21-8284-cb26252ffa9d',
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
        id: '681e0f09-b278-418d-a6df-2644887222c7',
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
        id: 'ffd1db1e-439a-4b0b-b137-0da4baf5bfda',
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
