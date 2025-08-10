import { prisma } from "../lib/prisma";

const firstLessonChoices = [
    {
        id: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
        text: "Continue",
        isCorrect: true,
        order: 1,
        exerciseId: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
    },
    ...[
        {
            id: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g5",
            text: "vida = 100",
            isCorrect: false,
            order: 1,
            exerciseId: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
        },
        {
            id: "q1r2s3t4-u5v6-w7x8-y9z0-a1b2c3d4e5f6",
            text: "let vida = 100",
            isCorrect: true,
            order: 2,
            exerciseId: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
        },
        {
            id: "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
            text: "vida: 100",
            isCorrect: false,
            order: 3,
            exerciseId: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
        },
        {
            id: "w3x4y5z6-a7b8-c9d0-e1f2-g3h4i5j6k7l8",
            text: "let vida: 100",
            isCorrect: false,
            order: 4,
            exerciseId: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
        },
    ],
    {
        id: "m1n2o3p4-q5r6-s7t8-u9v0-w1x2y3z4a5b6",
        text: "let sabedoria = 16",
        isCorrect: true,
        order: 1,
        exerciseId: "g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v",
    },
    {
        id: "2f42906d-8fde-4158-9e6c-218254290219",
        text: "10",
        isCorrect: true,
        order: 1,
        exerciseId: "622d8aeb-4a1e-4349-abe5-0ce4bf75a91f",
    },
    ...[
        {
            id: "7bbc5a85-7315-4815-8f8a-dfbcdd4fdba8",
            text: "Uma forma de armazenar valores.",
            isCorrect: true,
            order: 1,
            exerciseId: "43854899-6f0c-41b5-9d7b-fd6c00e75706",
        },
        {
            id: "7bbc5a85-7315-4815-8f8a-dfbcdd4fdba7",
            text: "Um número.",
            isCorrect: false,
            order: 2,
            exerciseId: "43854899-6f0c-41b5-9d7b-fd6c00e75706",
        },
        {
            id: "7bbc5a85-7315-4815-8f8a-dfbcdd4fdba6",
            text: "Uma forma de armazenar sua força.",
            isCorrect: false,
            order: 3,
            exerciseId: "43854899-6f0c-41b5-9d7b-fd6c00e75706",
        },
        {
            id: "7bbc5a85-7315-4815-8f8a-dfbcdd4fdba5",
            text: "Um texto.",
            isCorrect: false,
            order: 4,
            exerciseId: "43854899-6f0c-41b5-9d7b-fd6c00e75706",
        },
    ],
];

export async function createChoices() {
    return prisma.choice.createMany({
        data: [...firstLessonChoices],
    });
}
