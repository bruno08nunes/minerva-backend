export const ifChoices = [
    // Exercise 1
    {
        id: '8dd55238-0c6c-43f1-8bdc-320a52d19de2',
        text: "Continuar",
        isCorrect: true,
        order: 1,
        exerciseId: 'bce4fc33-0dac-49a9-8a0d-1c4597f9aacf',
    },

    // Exercise 2
    {
        id: '03f85e95-85d6-49a4-9fa5-213ad586dc82',
        text: "if",
        isCorrect: true,
        order: 1,
        exerciseId: '2229f686-15ad-40d2-aa1a-62e144dbaf98',
    },

    // Exercise 3
    {
        id: '404254ac-a726-47f8-b5df-44e8b7db1007',
        text: "Abaixa a vida se for maior que o máximo.",
        isCorrect: true,
        order: 1,
        exerciseId: 'e102945d-e9fd-404a-83ff-840ecc856743',
    },
    {
        id: '158d374e-6a44-48c5-be98-c185c902daaf',
        text: "Aumenta a vida do jogador.",
        isCorrect: false,
        order: 2,
        exerciseId: '068813a2-1d99-4fe6-a62c-aef10427de86',
    },
    {
        id: '4b485a93-c062-4564-8b4d-3581372e79c5',
        text: "Termina o jogo.",
        isCorrect: false,
        order: 3,
        exerciseId: 'd3d9fd4f-9651-48ce-b707-c92769f6a447',
    },
    {
        id: '486c9847-3649-4981-a3d6-1d599258ad9d',
        text: "Zera a vida do jogador.",
        isCorrect: false,
        order: 4,
        exerciseId: '19d6e658-8886-4352-811e-280cf9b5b684',
    },

    // Exercise 4
    {
        id: '719acca7-5cd2-4909-a02a-4aee32e8562c',
        text: "==",
        isCorrect: true,
        order: 1,
        exerciseId: 'a43cf43a-59d2-4ae1-9b3c-e7c678b71630',
    },

    // Exercise 5
    {
        id: '92aaccc9-29f4-48de-bad8-60ee266d46d4',
        text: "if (xp > 100)",
        isCorrect: true,
        order: 1,
        exerciseId: '433b2dd2-bcf5-42f5-aa34-710a173409fe',
    },
    {
        id: '4bebfff2-8c4b-4c54-9add-d7afd84306ea',
        text: "if (xp < 100)",
        isCorrect: false,
        order: 2,
        exerciseId: '54d6bab3-9a0a-4900-bfb4-1ea24c576299',
    },
    {
        id: 'c1176419-6c16-4e32-97ef-65ac5f5a1af9',
        text: "if (xp == 100)",
        isCorrect: false,
        order: 3,
        exerciseId: '796afb82-ef86-4f92-8450-476e7dc25f67',
    },
    {
        id: '25747956-ffb3-4955-abe9-24e33e7952d0',
        text: "if (xp >= 100)",
        isCorrect: false,
        order: 3,
        exerciseId: 'fdb0c9ff-9840-4ab7-9095-bf482a243715',
    },
] as const;

export const ifElseChoices = [
    // Exercise 1
    {
        id: 'af307bc0-f0b9-46d0-bbb0-59f0a522719f',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: 'ad373a69-61f6-4f34-bc17-9492d505dd76',
    },

    // Exercise 2
    {
        id: '5b9e8e48-25c0-47df-bb77-e402c923f427',
        text: "else",
        isCorrect: true,
        order: 1,
        exerciseId: 'ce7e3296-8b42-4b23-abe5-0a71a19300c0',
    },

    // Exercise 3
    {
        id: '731bbde7-4b84-4939-89c1-681805bf7352',
        text: "<=",
        isCorrect: false,
        order: 1,
        exerciseId: '08c0fa0a-6ca1-4171-8d1f-d210a9653538',
    },
    {
        id: '9c0df43a-8e79-4c2d-be0f-7df30aa97938',
        text: "!=",
        isCorrect: false,
        order: 2,
        exerciseId: 'e7ad1965-66a8-4aeb-9f17-b7fd64a25768',
    },
    {
        id: '3bdee7b2-c17a-4063-a016-2a6902fc93bf',
        text: ">=",
        isCorrect: true,
        order: 3,
        exerciseId: 'e7b38371-0738-4e52-bd5f-292cdac1a93f',
    },
    {
        id: '1d5e14cb-6662-4307-8da9-67f4bc6018fa',
        text: "==",
        isCorrect: false,
        order: 4,
        exerciseId: 'ef0811fc-79d7-4781-b324-13139a3c1156',
    },

    // Exercise 4
    {
        id: '57b748a9-d112-4831-9739-300d95ec9fbd',
        text: "Nada acontece.",
        isCorrect: false,
        order: 1,
        exerciseId: '089ab79d-3351-46aa-b9e1-98f0e0a00168',
    },
    {
        id: 'ccebac18-2956-4420-9ae4-f56cc1e82195',
        text: "O bloco dentro do 'else' é executado.",
        isCorrect: true,
        order: 2,
        exerciseId: 'da88e512-23c8-456b-a40d-451c5ad7a71d',
    },
    {
        id: '5a0df6c7-7a94-4012-93ef-1c032feab450',
        text: "O programa é encerrado automaticamente.",
        isCorrect: false,
        order: 3,
        exerciseId: '32fdff0c-3f13-4a97-8806-c08596f33ef2',
    },
    {
        id: '27b2d416-a025-4868-9b9e-b08c23392356',
        text: "O código dentro do if é executado.",
        isCorrect: false,
        order: 4,
        exerciseId: '2caebdc2-61c7-4795-b376-b804e10a6ed1',
    },

    // Exercise 5
    {
        id: 'c309aa82-e7f3-4246-9cd7-cb98dd50bfbe',
        text: "else",
        isCorrect: true,
        order: 1,
        exerciseId: 'db66c321-4eb6-41c8-98c0-d2e177f52931',
    },
] as const;

export const ifElseIfChoices = [
    // Exercise 1
    {
        id: '1d160a97-2b0c-436c-add5-ce4de561d587',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: 'd09e6d5c-4f9b-48c1-a7a3-c8f1026945d4',
    },

    // Exercise 2
    {
        id: 'a942bd79-a7f6-4bd1-b52f-2b633f9489ba',
        text: "else if",
        isCorrect: true,
        order: 1,
        exerciseId: '455ecac0-8c00-4d88-86cd-e9fb7841c5b2',
    },

    // Exercise 3
    {
        id: 'f61f91b2-e034-45f0-8fd3-2d2f8b1b1c28',
        text: "forca",
        isCorrect: true,
        order: 1,
        exerciseId: 'd7cf10f6-2949-40d9-88f0-db806ed2e79f',
    },

    // Exercise 4
    {
        id: '4b460cc3-1126-46e6-afba-412303d29e34',
        text: "Da primeira forma várias condições são executadas.",
        isCorrect: false,
        order: 1,
        exerciseId: '82354d29-7a84-42ce-839a-5015a2583469',
    },
    {
        id: 'b0a5bae5-9f78-4f96-afd1-064269f5de24',
        text: "Da primeira forma apenas uma condição é executada.",
        isCorrect: true,
        order: 2,
        exerciseId: '2984756e-a663-4249-aefb-138a3e5e6506',
    },
] as const;

export const switchChoices = [
    // Exercise 1
    {
        id: '117aff9b-aa62-48bf-a66b-3aa12e3d12b7',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: '68c75f75-e8df-40a7-9d5e-ae14f425ecd9',
    },

    // Exercise 2
    {
        id: 'bc264aa0-c370-4e01-8e37-5b8b5bae5c9f',
        text: "switch",
        isCorrect: true,
        order: 1,
        exerciseId: 'd610b7ba-237d-4220-891e-de7eaba6212c',
    },

    // Exercise 3
    {
        id: 'afdb48c5-30d1-4a25-8cca-49631d17b1e1',
        text: "switch",
        isCorrect: false,
        order: 1,
        exerciseId: '53a69d9c-2203-4eee-98ad-f73202842ff9',
    },
    {
        id: '3722fc8f-d1b1-4711-9e94-73340eb5b65b',
        text: "default",
        isCorrect: false,
        order: 2,
        exerciseId: 'b12a94ca-4a14-40bd-95fa-62ce948bf26d',
    },
    {
        id: 'b009b1dd-7641-4fcb-8e47-2f865b6210a0',
        text: "break",
        isCorrect: true,
        order: 3,
        exerciseId: 'd584b8a7-9131-4f94-9d6b-5db44011338c',
    },
    {
        id: '6b41ad0d-250b-4fba-a632-d3677088052c',
        text: "case",
        isCorrect: false,
        order: 4,
        exerciseId: '3d4d6ee4-cbb1-477b-8af5-572db3b82f91',
    },

    // Exercise 4
    {
        id: '3837f23e-7933-4e8d-af61-fd377782770b',
        text: "default",
        isCorrect: true,
        order: 1,
        exerciseId: '45269048-6592-41a3-bdfb-1c272799d809',
    },
];
