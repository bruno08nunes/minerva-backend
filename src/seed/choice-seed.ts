import { prisma } from "../lib/prisma";

export async function createChoices() {
    return prisma.choice.createMany({
        data: [
            {
                id: "c1a2b3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
                text: "Inteiro",
                isCorrect: true,
                order: 1,
                exerciseId: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
            },
            {
                id: "q1r2s3t4-u5v6-w7x8-y9z0-a1b2c3d4e5f6",
                text: "String",
                isCorrect: false,
                order: 2,
                exerciseId: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
            },
            {
                id: "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
                text: "Booleano",
                isCorrect: false,
                order: 3,
                exerciseId: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
            },
            {
                id: "w3x4y5z6-a7b8-c9d0-e1f2-g3h4i5j6k7l8",
                text: "Variável",
                isCorrect: false,
                order: 4,
                exerciseId: "f7e8d9c0-b1a2-3d4e-5f6a-7b8c9d0e1f2g",
            },
            {
                id: "m1n2o3p4-q5r6-s7t8-u9v0-w1x2y3z4a5b6",
                text: "Variável é um espaço de memória que pode ser alterado, enquanto constante não pode ser alterada após a declaração.",
                isCorrect: true,
                order: 1,
                exerciseId: "g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v",
            },
            {
                id: "c7d8e9f0-g1h2-i3j4-k5l6-m7n8o9p0q1r2",
                text: "Variável e constante são a mesma coisa.",
                isCorrect: false,
                order: 2,
                exerciseId: "g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v",
            },
            {
                id: "s3t4u5v6-w7x8-y9z0-a1b2-c3d4e5f6g7h8",
                text: "Constante é um espaço de memória que pode ser alterado, enquanto variável não pode ser alterada após a declaração.",
                isCorrect: false,
                order: 3,
                exerciseId: "g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v",
            },
            {
                id: "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4",
                text: "Variável armazena números inteiros, enquanto constante armazena strings (texto).",
                isCorrect: false,
                order: 4,
                exerciseId: "g3h4i5j6-k7l8-9m0n-1o2p-3q4r5s6t7u8v",
            },
        ],
    });
}