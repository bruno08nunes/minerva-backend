const topicId = "b6101fef-e2c7-4c68-91dc-d47f10ba497c";
const themeId = "d14e94ff-5702-47d5-bf25-d0984ca44e9e";
const iconId = "6668bcde-d0bf-4e7e-8a33-a1a870e5051e";

export const functionLessons = [
    {
        id: 'f42e778b-17c6-4672-a811-a5151db35d9b',
        name: "Funções",
        description: "Aprenda a executar um código que se repete!",
        topicId,
        themeId,
        iconId,
        order: 1,
        rewardXP: 700,
    },
    {
        id: 'b14515dc-e799-4fdd-820d-a12f5d413ce9',
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
        id: 'b3515928-d738-447b-9638-533cac813877',
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
