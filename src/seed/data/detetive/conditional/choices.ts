export const ifChoices = [
    // Exercise 1
    {
        id: '8dd55238-0c6c-43f1-8bdc-320a52d19de2',
        text: "Continuar",
        isCorrect: true,
        order: 1,
        exerciseId: 'a7fd20b0-2212-4027-bfdf-b38dc7e91633',
    },

    // Exercise 2
    {
        id: '03f85e95-85d6-49a4-9fa5-213ad586dc82',
        text: "if",
        isCorrect: true,
        order: 1,
        exerciseId: 'ef96bc4c-0b3f-4670-b25b-4ef26c4715c1',
    },

    // Exercise 3
    {
        id: '404254ac-a726-47f8-b5df-44e8b7db1007',
        text: "Abaixa a vida se for maior que o máximo.",
        isCorrect: true,
        order: 1,
        exerciseId: 'ec6366c0-3e0b-413a-8449-5192e7ce6725',
    },
    {
        id: '158d374e-6a44-48c5-be98-c185c902daaf',
        text: "Aumenta a vida do jogador.",
        isCorrect: false,
        order: 2,
        exerciseId: 'ec6366c0-3e0b-413a-8449-5192e7ce6725',
    },
    {
        id: '4b485a93-c062-4564-8b4d-3581372e79c5',
        text: "Termina o jogo.",
        isCorrect: false,
        order: 3,
        exerciseId: 'ec6366c0-3e0b-413a-8449-5192e7ce6725',
    },
    {
        id: '486c9847-3649-4981-a3d6-1d599258ad9d',
        text: "Zera a vida do jogador.",
        isCorrect: false,
        order: 4,
        exerciseId: 'ec6366c0-3e0b-413a-8449-5192e7ce6725',
    },

    // Exercise 4
    {
        id: '719acca7-5cd2-4909-a02a-4aee32e8562c',
        text: "==",
        isCorrect: true,
        order: 1,
        exerciseId: 'ef5470c9-73b8-4b09-884a-aeec98bd4737',
    },

    // Exercise 5
    {
        id: '92aaccc9-29f4-48de-bad8-60ee266d46d4',
        text: "if (xp > 100)",
        isCorrect: true,
        order: 1,
        exerciseId: '251e7a3d-9ef2-4976-b49e-c026255c79e3',
    },
    {
        id: '4bebfff2-8c4b-4c54-9add-d7afd84306ea',
        text: "if (xp < 100)",
        isCorrect: false,
        order: 2,
        exerciseId: '251e7a3d-9ef2-4976-b49e-c026255c79e3',
    },
    {
        id: 'c1176419-6c16-4e32-97ef-65ac5f5a1af9',
        text: "if (xp == 100)",
        isCorrect: false,
        order: 3,
        exerciseId: '251e7a3d-9ef2-4976-b49e-c026255c79e3',
    },
    {
        id: '25747956-ffb3-4955-abe9-24e33e7952d0',
        text: "if (xp >= 100)",
        isCorrect: false,
        order: 3,
        exerciseId: '251e7a3d-9ef2-4976-b49e-c026255c79e3',
    },
] as const;

export const ifElseChoices = [
    // Exercise 1
    {
        id: 'af307bc0-f0b9-46d0-bbb0-59f0a522719f',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: '42abcbef-1ba8-4bbf-b8f2-88a472dea097',
    },

    // Exercise 2
    {
        id: '5b9e8e48-25c0-47df-bb77-e402c923f427',
        text: "else",
        isCorrect: true,
        order: 1,
        exerciseId: '6e7cda6b-8e94-4db3-ae48-c38496d3b8bd',
    },

    // Exercise 3
    {
        id: '731bbde7-4b84-4939-89c1-681805bf7352',
        text: "<=",
        isCorrect: false,
        order: 1,
        exerciseId: '41767bfc-c667-414e-83d2-31a894e60aa0',
    },
    {
        id: '9c0df43a-8e79-4c2d-be0f-7df30aa97938',
        text: "!=",
        isCorrect: false,
        order: 2,
        exerciseId: '41767bfc-c667-414e-83d2-31a894e60aa0',
    },
    {
        id: '3bdee7b2-c17a-4063-a016-2a6902fc93bf',
        text: ">=",
        isCorrect: true,
        order: 3,
        exerciseId: '41767bfc-c667-414e-83d2-31a894e60aa0',
    },
    {
        id: '1d5e14cb-6662-4307-8da9-67f4bc6018fa',
        text: "==",
        isCorrect: false,
        order: 4,
        exerciseId: '41767bfc-c667-414e-83d2-31a894e60aa0',
    },

    // Exercise 4
    {
        id: '57b748a9-d112-4831-9739-300d95ec9fbd',
        text: "Nada acontece.",
        isCorrect: false,
        order: 1,
        exerciseId: 'b7a0f797-88bc-48fc-ba22-b8f71c028c42',
    },
    {
        id: 'ccebac18-2956-4420-9ae4-f56cc1e82195',
        text: "O bloco dentro do 'else' é executado.",
        isCorrect: true,
        order: 2,
        exerciseId: 'b7a0f797-88bc-48fc-ba22-b8f71c028c42',
    },
    {
        id: '5a0df6c7-7a94-4012-93ef-1c032feab450',
        text: "O programa é encerrado automaticamente.",
        isCorrect: false,
        order: 3,
        exerciseId: 'b7a0f797-88bc-48fc-ba22-b8f71c028c42',
    },
    {
        id: '27b2d416-a025-4868-9b9e-b08c23392356',
        text: "O código dentro do if é executado.",
        isCorrect: false,
        order: 4,
        exerciseId: 'b7a0f797-88bc-48fc-ba22-b8f71c028c42',
    },

    // Exercise 5
    {
        id: 'c309aa82-e7f3-4246-9cd7-cb98dd50bfbe',
        text: "else",
        isCorrect: true,
        order: 1,
        exerciseId: '7d1560a6-4adb-454c-9909-c432bf4c9d4e',
    },
] as const;

export const ifElseIfChoices = [
    // Exercise 1
    {
        id: '1d160a97-2b0c-436c-add5-ce4de561d587',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: '7bc46e4e-5fad-4b17-b268-4bd6d454571a',
    },

    // Exercise 2
    {
        id: 'a942bd79-a7f6-4bd1-b52f-2b633f9489ba',
        text: "else if",
        isCorrect: true,
        order: 1,
        exerciseId: 'f819f5ec-b4da-4490-a4fe-9bddb50d1473',
    },

    // Exercise 3
    {
        id: 'f61f91b2-e034-45f0-8fd3-2d2f8b1b1c28',
        text: "forca",
        isCorrect: true,
        order: 1,
        exerciseId: '086ba5c9-bc36-4a8b-87c9-33e99aaac799',
    },

    // Exercise 4
    {
        id: '4b460cc3-1126-46e6-afba-412303d29e34',
        text: "Da primeira forma várias condições são executadas.",
        isCorrect: false,
        order: 1,
        exerciseId: 'f53abfff-1f6c-49a8-96ca-cef0cdbad2d2',
    },
    {
        id: 'b0a5bae5-9f78-4f96-afd1-064269f5de24',
        text: "Da primeira forma apenas uma condição é executada.",
        isCorrect: true,
        order: 2,
        exerciseId: 'f53abfff-1f6c-49a8-96ca-cef0cdbad2d2',
    },
] as const;

export const switchChoices = [
    // Exercise 1
    {
        id: '117aff9b-aa62-48bf-a66b-3aa12e3d12b7',
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: 'e6b83437-66df-4e49-acba-f822125b2d9b',
    },

    // Exercise 2
    {
        id: 'bc264aa0-c370-4e01-8e37-5b8b5bae5c9f',
        text: "switch",
        isCorrect: true,
        order: 1,
        exerciseId: 'baf62fc0-a2fb-42bd-a27a-4fdb5f2c54f0',
    },

    // Exercise 3
    {
        id: 'afdb48c5-30d1-4a25-8cca-49631d17b1e1',
        text: "switch",
        isCorrect: false,
        order: 1,
        exerciseId: 'c942a5ee-277d-4a89-a1f8-e4d0c035d1e4',
    },
    {
        id: '3722fc8f-d1b1-4711-9e94-73340eb5b65b',
        text: "default",
        isCorrect: false,
        order: 2,
        exerciseId: 'c942a5ee-277d-4a89-a1f8-e4d0c035d1e4',
    },
    {
        id: 'b009b1dd-7641-4fcb-8e47-2f865b6210a0',
        text: "break",
        isCorrect: true,
        order: 3,
        exerciseId: 'c942a5ee-277d-4a89-a1f8-e4d0c035d1e4',
    },
    {
        id: '6b41ad0d-250b-4fba-a632-d3677088052c',
        text: "case",
        isCorrect: false,
        order: 4,
        exerciseId: 'c942a5ee-277d-4a89-a1f8-e4d0c035d1e4',
    },

    // Exercise 4
    {
        id: '3837f23e-7933-4e8d-af61-fd377782770b',
        text: "default",
        isCorrect: true,
        order: 1,
        exerciseId: '40402f3e-6377-4e14-bcff-9d4f01fa2b93',
    },
];