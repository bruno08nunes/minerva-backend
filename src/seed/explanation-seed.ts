import { prisma } from "../lib/prisma";

export async function createExplanations() {
    return prisma.explanation.createMany({
        data: [
            {
                id: "e1f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
                title: "Introdução às Variáveis",
                description:
                    "Variáveis são espaços de memória que podem armazenar valores que podem ser alterados durante a execução do programa. Elas são essenciais para armazenar dados temporários e realizar operações.",
                content: {
                    toJSON: () => [
                        {
                            type: "paragraph",
                            data: "Variáveis são espaços de memória que podem armazenar valores que podem ser alterados durante a execução do programa. Elas são essenciais para armazenar dados temporários e realizar operações. Você pode declarar uma variável com a palavra 'let'",
                        },
                        {
                            type: "code",
                            data: "let quantidadeDeMagias = 3",
                        },
                        {
                            type: "paragraph",
                            data: "Você pode acessar o valor dessa variável a partir do nome dado a ela. O código abaixo mostra o valor 3.",
                        },
                        {
                            type: "code",
                            data: "console.log(quantidadeDeMagias)",
                        },
                        {
                            type: "paragraph",
                            data: "Você pode alterar o valor de uma variável já existente.",
                        },
                        {
                            type: "code",
                            data: "let quantidadeDeMagias = 13\nquantidadeDeMagias = 5",
                        },
                    ],
                },
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
            },
            {
                id: "e2f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
                title: "Constantes",
                description:
                    "Constantes são similares às variáveis, porém seus valores jamais mudam.",
                content: {
                    toJSON: () => [
                        {
                            type: "paragraph",
                            data: "Constantes são similares às variáveis, porém seus valores jamais mudam. Elas são definidas com a palavra 'const'",
                        },
                        {
                            type: "code",
                            data: "const numero = 10",
                        },
                        {
                            type: "paragraph",
                            data: "Tentar alterar o valor de uma constante lança um erro, como no código abaixo.",
                        },
                        {
                            type: "code",
                            data: "numero = 5",
                        },
                    ],
                },
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
            },
            {
                id: "e3f2d3c4-b5a6-7d8e-9f0a-b1c2d3e4f5g6",
                title: "Tipos de Dados",
                description:
                    "As variáveis podem ser de vários tipos: string, números e booleanos.",
                content: {
                    toJSON: () => [
                        {
                            type: "paragraph",
                            data: "As variáveis podem ser de vários tipos: string, números e booleanos. Strings são textos que ficam entre aspas simples (') ou aspas duplas(\").",
                        },
                        {
                            type: "code",
                            data: "const nome = \"Bruno\"",
                        },
                        {
                            type: "paragraph",
                            data: "Os números, por outro lado, representam valores numéricos inteiros ou decimais e positivos ou negativos. Eles não levam aspas.",
                        },
                        {
                            type: "code",
                            data: "const numero = 15\nconst decimal = 9.3\nconst negativo = -12",
                        },
                        {
                            type: "paragraph",
                            data: "Por fim, há também os valores booleanos, que representam algo que pode ser verdadeiro (true) ou falso (false).",
                        },
                        {
                            type: "code",
                            data: "const eraAmorVerdadeiro = false",
                        },
                    ],
                },
                topicId: "e58681e3-8305-4787-b63f-9e58b07c52a8",
            },
        ],
    });
}
