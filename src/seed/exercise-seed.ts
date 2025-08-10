import { prisma } from "../lib/prisma";

const firstLessonExercises = [
    {
        id: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
        content: [
            {
                type: "paragraph",
                data: 'Você é um mago aprendiz que está na Academia Arcana de Variáveis. As variáveis são como pergaminhos onde você armazena informações necessárias, como o número de feitiços que você tem. Na programação, você deve declarar uma variável com a palavra "let".',
            },
            {
                type: "code",
                data: "let quantidadeDeMagias = 3",
            },
        ],
        hint: "Não há dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 1,
    },
    {
        id: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
        content: [
            {
                type: "paragraph",
                data: "Qual das declarações de variáveis abaixo está correta?",
            },
        ],
        hint: "Você deve usar uma certa palavra-chave para declarar uma variável.",
        type: "MULTIPLE_CHOICE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 2,
    },
    {
        id: "g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v",
        content: [
            {
                type: "paragraph",
                data: 'Declare uma variável chamada "sabedoria" com o valor 16.',
            },
            {
                type: "code",
                data: "_____"
            }
        ],
        hint: 'Lembre-se de usar a palavra "let" antes do nome da sua variável.',
        type: "WRITE_CODE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 3,
    },
    {
        id: "622d8aeb-4a1e-4349-abe5-0ce4bf75a91f",
        content: [
            {
                type: "paragraph",
                data: "Defina seu valor de força para 10 na variável abaixo.",
            },
            {
                type: "code",
                data: "const forca = _____",
            },
        ],
        hint: "Sem dicas para esse exercício.",
        type: "COMPLETE_CODE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 4,
    },
    {
        id: "43854899-6f0c-41b5-9d7b-fd6c00e75706",
        content: [
            {
                type: "paragraph",
                data: "O que é uma variável?",
            },
        ],
        hint: "Sem dicas para esse exercício.",
        type: "MULTIPLE_CHOICE",
        lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
        order: 5,
    },
] as const;

export async function createExercises() {
    return prisma.exercise.createMany({
        data: [...firstLessonExercises],
    });
}
