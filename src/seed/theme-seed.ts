import { prisma } from "../lib/prisma";

export async function createThemes() {
    return prisma.theme.createMany({
        data: [
            {
                id: "d14e94ff-5702-47d5-bf25-d0984ca44e9e",
                name: "RPG",
                description: "Aprenda lógica a programação através de conceitos de RPG de Mesa!",
                iconId: "6668bcde-d0bf-4e7e-8a33-a1a870e5051e",
            }
        ],
    });
}