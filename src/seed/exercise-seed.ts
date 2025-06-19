import { prisma } from "../lib/prisma";

export async function createExercises() {
    return prisma.exercise.createMany({
        data: [
            {
                id: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
                content: [
                    {
                        type: "paragraph",
                        data: "Crie uma variável chamada 'idade' e atribua a ela o valor 25. Em seguida, imprima o valor da variável no console.",
                    },
                    {
                        type: "code",
                        data: "_____",
                    },
                ],
                hint: "Use a sintaxe de declaração de variáveis da linguagem que você está aprendendo.",
                type: "WRITE_CODE",
                lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
                order: 1,
            },
            {
                id: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
                content: [
                    {
                        type: "paragraph",
                        data: "Qual é o tipo de dado da variável 'idade' que você criou?"
                    }
                ],
                hint: "Lembre-se dos tipos de dados básicos como inteiro, string, etc.",
                type: "MULTIPLE_CHOICE",
                lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
                order: 2,
            },
            {
                id: "g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v",
                content: [
                    {
                        type: "paragraph",
                        data: "Qual a diferença entre uma variável e uma constante?"
                    }
                ],
                hint: "Considere como cada um é usado e se pode ser alterado após a declaração.",
                type: "MULTIPLE_CHOICE",
                lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
                order: 3,
            },
            {
                id: "43854899-6f0c-41b5-9d7b-fd6c00e75706",
                content: [
                    {
                        type: "paragraph",
                        data: "Defina um valor para a variável abaixo.",
                    },
                    {
                        type: "code",
                        data: "const idade = 5;\n_____",
                    },
                ],
                hint: "Use a sintaxe de declaração de variáveis da linguagem que você está aprendendo.",
                type: "COMPLETE_CODE",
                lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
                order: 4,
            },
            {
                id: "622d8aeb-4a1e-4349-abe5-0ce4bf75a91f",
                content: [
                    {
                        type: "paragraph",
                        data: "Defina um valor para a variável abaixo.",
                    },
                    {
                        type: "code",
                        data: "const idade = _____;",
                    },
                ],
                hint: "Use a sintaxe de declaração de variáveis da linguagem que você está aprendendo.",
                type: "COMPLETE_CODE",
                lessonId: "ac127c88-75ad-46f9-9e46-52da8d5eca9c",
                order: 4,
            },
        ],
    });
}
