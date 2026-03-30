export const ifChoices = [
    // Exercise 1
    {
        id: '130495dd-8af1-43a6-a7c5-e691c4b93a67',
        text: "Continuar",
        isCorrect: true,
        order: 1,
        exerciseId: '0d10d8d2-6f06-4dcb-837e-983ef9f2982d',
    },

    // Exercise 2
    {
        id: 'd5f0db8e-43ee-4441-963b-0df235d50cf1',
        text: "if",
        isCorrect: true,
        order: 1,
        exerciseId: '6010ad4a-7b27-45bd-9886-0cb1b342ad92',
    },

    // Exercise 3
    {
        id: '953a4d3d-300a-4fc9-93c2-7b84793395f5',
        text: "Abaixa a vida se for maior que o máximo.",
        isCorrect: true,
        order: 1,
        exerciseId: '3ccf0e2d-1eab-49b9-a534-8f0bb6ffe960',
    },
    {
        id: 'fa65ae00-f488-4d70-a397-df34f7cc7496',
        text: "Aumenta a vida do jogador.",
        isCorrect: false,
        order: 2,
        exerciseId: '48e10550-f1c6-4261-8cd4-46e74202143c',
    },
    {
        id: '2f5f9d25-c39a-4f93-8b89-0644fb88f610',
        text: "Termina o jogo.",
        isCorrect: false,
        order: 3,
        exerciseId: 'f6b96ebe-2211-428b-83a8-20556054da75',
    },
    {
        id: 'cd2fa28c-db17-4aeb-9291-24d4f2edac7b',
        text: "Zera a vida do jogador.",
        isCorrect: false,
        order: 4,
        exerciseId: '626ed395-5fd6-4005-acca-d4572d4902a8',
    },

    // Exercise 4
    {
        id: '9601dc1c-f8f9-4b19-93eb-b58988bbe7e0',
        text: "==",
        isCorrect: true,
        order: 1,
        exerciseId: '86eb36ac-099a-49e0-be20-e81289cfd56d',
    },

    // Exercise 5
    {
        id: '5882e012-72d7-44c1-9206-bec28d910024',
        text: "if (xp > 100)",
        isCorrect: true,
        order: 1,
        exerciseId: '04a0889d-e6eb-4a64-b06d-b185b58a76fd',
    },
    {
        id: '1343561d-9da2-4212-b843-9e3f2d67f654',
        text: "if (xp < 100)",
        isCorrect: false,
        order: 2,
        exerciseId: '7733ba5f-5c60-412c-85fb-b0086cf8f1a6',
    },
    {
        id: 'c15f271a-a722-4b62-b682-a5d374d69cc0',
        text: "if (xp == 100)",
        isCorrect: false,
        order: 3,
        exerciseId: 'f9131832-9b58-4852-9814-d1fe69dc775f',
    },
    {
        id: '3c7be768-b536-42cb-b158-9e5c17d766ee',
        text: "if (xp >= 100)",
        isCorrect: false,
        order: 3,
        exerciseId: '80cf874c-1552-4eee-9f42-2068a165a1b6',
    },
] as const;

export const ifElseChoices = [
    // Exercise 1
    {
        id: '7ea2c554-37d9-40ff-9d2b-36966ed6cdd6',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: 'e4602938-9216-490e-92a8-a0785514f875',
    },

    // Exercise 2
    {
        id: '2a47a928-7c5f-4b51-bfc4-223b742b3546',
        text: "else",
        isCorrect: true,
        order: 1,
        exerciseId: '386165f3-6d7e-4bdf-ab62-91f9014222bb',
    },

    // Exercise 3
    {
        id: '5438526f-2c02-4869-8546-434201660690',
        text: "<=",
        isCorrect: false,
        order: 1,
        exerciseId: 'cd65fac6-f5d8-4e8f-bc70-f302f7da219e',
    },
    {
        id: 'c1341e20-c0d1-4001-a9a0-0b762dc1dde2',
        text: "!=",
        isCorrect: false,
        order: 2,
        exerciseId: 'da356e1a-5f63-40b2-ba47-8f7493e14987',
    },
    {
        id: '7b9ec0d6-e4e9-48a2-80c3-870a5dcd51c4',
        text: ">=",
        isCorrect: true,
        order: 3,
        exerciseId: '507c16a4-a558-4db8-94dd-51b05fbb1f73',
    },
    {
        id: 'fa51dcfa-dba4-4b2d-a714-4673c94cc0a3',
        text: "==",
        isCorrect: false,
        order: 4,
        exerciseId: 'ba919ba4-aefa-4bc9-a3fa-928333268df2',
    },

    // Exercise 4
    {
        id: 'dc1caab7-a632-4b71-bb28-2be86d9d6b65',
        text: "Nada acontece.",
        isCorrect: false,
        order: 1,
        exerciseId: '6a4581fd-0769-417d-8a4d-6498b1b1b351',
    },
    {
        id: '840bb08c-3202-4d8f-a579-a976581d3ff1',
        text: "O bloco dentro do 'else' é executado.",
        isCorrect: true,
        order: 2,
        exerciseId: '61e1586a-a28e-42b9-b0b0-cfa301cca8a3',
    },
    {
        id: '74410c7a-ff06-4d2d-865b-783912aa189f',
        text: "O programa é encerrado automaticamente.",
        isCorrect: false,
        order: 3,
        exerciseId: 'bb1c3786-8db7-4c8d-8c38-1302d1be666e',
    },
    {
        id: '27d66ccd-3231-4f21-8025-4ae138e3cbad',
        text: "O código dentro do if é executado.",
        isCorrect: false,
        order: 4,
        exerciseId: '19b23f8f-48f3-45ce-806c-71abd22a3d39',
    },

    // Exercise 5
    {
        id: '69e04f73-8646-4e80-8168-7eca8404e175',
        text: "else",
        isCorrect: true,
        order: 1,
        exerciseId: '7bf3409e-fb2e-48f7-b05a-2b4c8e964be5',
    },
] as const;

export const ifElseIfChoices = [
    // Exercise 1
    {
        id: 'a4bdb0ec-f164-4c4a-af1c-c3413c9d0ab2',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: 'b3219215-0516-4730-875d-c5b91c144058',
    },

    // Exercise 2
    {
        id: '7f3970a1-3e0a-4398-a299-89c68192e6b9',
        text: "else if",
        isCorrect: true,
        order: 1,
        exerciseId: 'd228ba68-b7d6-4387-aa77-015e8d762296',
    },

    // Exercise 3
    {
        id: '37021574-5251-4724-87ec-70f26c8c364d',
        text: "forca",
        isCorrect: true,
        order: 1,
        exerciseId: '7849f283-e738-4468-b29c-9819e3f424ab',
    },

    // Exercise 4
    {
        id: 'b81bf314-b01f-4fbb-afcc-023520d90192',
        text: "Da primeira forma várias condições são executadas.",
        isCorrect: false,
        order: 1,
        exerciseId: '313a2165-36de-4423-8991-2cd4cec56c47',
    },
    {
        id: '5469aa99-f69d-4ed3-a629-f57f09425f5a',
        text: "Da primeira forma apenas uma condição é executada.",
        isCorrect: true,
        order: 2,
        exerciseId: 'd04bf192-fb71-460e-b92d-ae66e0651eac',
    },
] as const;

export const switchChoices = [
    // Exercise 1
    {
        id: 'cfb1b1b1-1f8d-4f5b-887f-65e9ddf1ddd0',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: 'fd42b809-a6cd-4a5d-a905-ba7ff23b5e5c',
    },

    // Exercise 2
    {
        id: 'cfcd102c-eca9-437b-8855-7bfb428163b6',
        text: "switch",
        isCorrect: true,
        order: 1,
        exerciseId: 'a29d1115-88e9-483a-b08d-0d777d146c2f',
    },

    // Exercise 3
    {
        id: '26d9fbe5-69c4-40f2-8555-3e9747af8dc2',
        text: "switch",
        isCorrect: false,
        order: 1,
        exerciseId: 'd28346fd-3a8f-49a6-9fa0-7bbdc11a9044',
    },
    {
        id: '9ae4a0f0-a677-4a36-bcc6-dfd7a63d6338',
        text: "default",
        isCorrect: false,
        order: 2,
        exerciseId: '85cec3f0-e1c9-4090-bf2e-41609d211965',
    },
    {
        id: 'd5da6281-43fa-4c7d-b3bb-d45ebe8dba95',
        text: "break",
        isCorrect: true,
        order: 3,
        exerciseId: '5e6216a8-deab-49f1-9490-b3b7ed917093',
    },
    {
        id: 'c26a896b-0d71-4c68-a088-03bd50c2a15a',
        text: "case",
        isCorrect: false,
        order: 4,
        exerciseId: '9fd985f6-8b1a-4f1e-ab71-2683d9e7797c',
    },

    // Exercise 4
    {
        id: 'ddfd289a-ebf3-4f67-8ab5-be0b31e2cf9f',
        text: "default",
        isCorrect: true,
        order: 1,
        exerciseId: '365dcbfb-7646-4417-bb8d-eb23cd250340',
    },
];
