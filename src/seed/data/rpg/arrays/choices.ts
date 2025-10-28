export const arraysChoices = [
    // Exercício 1
    {
        id: "1aa2bb3c-4dd5-6ee7-8ff9-0gg1hh2ii3jj",
        text: "Continuar.",
        isCorrect: true,
        order: 1,
        exerciseId: "a1b2c3d4-e5f6-7890-ab12-cd34ef56gh78",
    },

    // Exercício 2
    {
        id: "3cc4dd5e-6ff7-8gg9-0hh1-2ii3jj4kk5ll",
        text: "1",
        isCorrect: true,
        order: 1,
        exerciseId: "b2c3d4e5-f6a7-890b-cd12-ef34gh56ij78",
    },

    // Explicação
    {
        id: "3cc4dd5e-6ff7-8gg9-0hh1-2ii1jj4kk5ll",
        text: "Continuar",
        isCorrect: true,
        order: 1,
        exerciseId: "a1b2c3d4-e5f6-7890-ab12-cd34ef56gh68",
    },

    // Exercício 3
    {
        id: "4dd5ee6f-7gg8-9hh0-1ii2-3jj4kk5ll6mm",
        text: "push()",
        isCorrect: true,
        order: 1,
        exerciseId: "c3d4e5f6-a7b8-90c1-de23-fg45hi67jk89",
    },
    {
        id: "5ee6ff7g-8hh9-0ii1-2jj3-4kk5ll6mm7nn",
        text: "pop()",
        isCorrect: false,
        order: 2,
        exerciseId: "c3d4e5f6-a7b8-90c1-de23-fg45hi67jk89",
    },
    {
        id: "5ee6ff7g-8hh9-0ii1-2jj3-4kk5l46mm7nn",
        text: "length",
        isCorrect: false,
        order: 3,
        exerciseId: "c3d4e5f6-a7b8-90c1-de23-fg45hi67jk89",
    },

    // Exercício 4
    {
        id: "6ff7gg8h-9ii0-1jj2-3kk4-5ll6mm7nn8oo",
        text: "pop",
        isCorrect: true,
        order: 1,
        exerciseId: "d4e5f6a7-b8c9-01d2-ef34-gh56ij78kl90",
    },

    // Exercício 5
    {
        id: "7gg8hh9i-0jj1-2kk3-4ll5-6mm7nn8oo8pp",
        text: "2",
        isCorrect: false,
        order: 1,
        exerciseId: "e5f6a7b8-c9d0-12e3-fg45-hi67jk89lm01",
    },
    {
        id: "7gg8hh9i-0jj1-2kk3-4ll5-6mm7nn8oo9pp",
        text: "3",
        isCorrect: true,
        order: 2,
        exerciseId: "e5f6a7b8-c9d0-12e3-fg45-hi67jk89lm01",
    },
    {
        id: "8hh9ii0j-1kk2-3ll4-5mm6-7nn8oo9pp1qq",
        text: "20",
        isCorrect: false,
        order: 3,
        exerciseId: "e5f6a7b8-c9d0-12e3-fg45-hi67jk89lm01",
    },
    {
        id: "8hh9ii0j-1kk2-3ll4-5mm6-7nn8oo9pp0qq",
        text: "30",
        isCorrect: false,
        order: 4,
        exerciseId: "e5f6a7b8-c9d0-12e3-fg45-hi67jk89lm01",
    },
] as const;

export const handlingArraysChoices = [
    // Exercício 1
    {
        id: "c1a2b3d4-e5f6-g7h8-i9j0-k1l2m3n455p6",
        text: "Fogo",
        isCorrect: false,
        order: 1,
        exerciseId: "m1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
    },
    {
        id: "c1a2b3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
        text: "Gelo",
        isCorrect: true,
        order: 2,
        exerciseId: "m1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
    },
    {
        id: "d2b3c4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        text: "Raio",
        isCorrect: false,
        order: 3,
        exerciseId: "m1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n5o6",
    },

    // Exercício 2
    {
        id: "e3c4d5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
        text: "['Espada', 'Escudo', 'Poção']",
        isCorrect: true,
        order: 1,
        exerciseId: "m2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
    },
    {
        id: "f4d5e6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
        text: "['Poção', 'Espada', 'Escudo']",
        isCorrect: false,
        order: 2,
        exerciseId: "m2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
    },
    {
        id: "f4d5e6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s0",
        text: "['Poção', 'Escudo', 'Espada']",
        isCorrect: false,
        order: 3,
        exerciseId: "m2b3c4d5-e6f7-g8h9-i0j1-k2l3m4n5o6p7",
    },

    // Exercício 3
    {
        id: "g5e6f7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
        text: "pop",
        isCorrect: true,
        order: 1,
        exerciseId: "m3c4d5e6-f7g8-h9i0-j1k2-l3m4n5o6p7q8",
    },

    // Exercício 4
    {
        id: "h6f7g8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
        text: "3",
        isCorrect: false,
        order: 1,
        exerciseId: "m4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
    },
    {
        id: "i7g8h9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
        text: "4",
        isCorrect: true,
        order: 2,
        exerciseId: "m4d5e6f7-g8h9-i0j1-k2l3-m4n5o6p7q8r9",
    },

    // Exercício 5
    {
        id: "j8h9i0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3",
        text: "push",
        isCorrect: true,
        order: 1,
        exerciseId: "m5e6f7g8-h9i0-j1k2-l3m4-n5o6p7q8r9s0",
    },
] as const;

export const arraysAdvancedChoices = [
    // Exercício 1
    {
        id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
        text: "true",
        isCorrect: true,
        order: 1,
        exerciseId: "aa1b2c3d-4e5f-6g7h-8i9j-0k1l2m3n4o5p",
    },
    {
        id: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        text: "false",
        isCorrect: false,
        order: 2,
        exerciseId: "aa1b2c3d-4e5f-6g7h-8i9j-0k1l2m3n4o5p",
    },

    // Exercício 2
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r0",
        text: "0",
        isCorrect: false,
        order: 1,
        exerciseId: "bb2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q",
    },
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r1",
        text: "1",
        isCorrect: false,
        order: 2,
        exerciseId: "bb2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q",
    },
    {
        id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
        text: "2",
        isCorrect: true,
        order: 3,
        exerciseId: "bb2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q",
    },
    {
        id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s3",
        text: "3",
        isCorrect: false,
        order: 4,
        exerciseId: "bb2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6q",
    },

    // Exercício 3
    {
        id: "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
        text: "['Fogo', 'Gelo']",
        isCorrect: false,
        order: 1,
        exerciseId: "cc3d4e5f-6g7h-8i9j-0k1l-2m3n4o5p6q7r",
    },
    {
        id: "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
        text: "['Gelo', 'Raio']",
        isCorrect: true,
        order: 2,
        exerciseId: "cc3d4e5f-6g7h-8i9j-0k1l-2m3n4o5p6q7r",
    },

    // Exercício 5
    {
        id: "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w1",
        text: "splice()",
        isCorrect: true,
        order: 1,
        exerciseId: "ee5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t",
    },
    {
        id: "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x2",
        text: "slice()",
        isCorrect: false,
        order: 2,
        exerciseId: "ee5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t",
    },
    {
        id: "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x3",
        text: "length()",
        isCorrect: false,
        order: 3,
        exerciseId: "ee5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t",
    },
    {
        id: "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4",
        text: "[0]",
        isCorrect: false,
        order: 4,
        exerciseId: "ee5f6g7h-8i9j-0k1l-2m3n-4o5p6q7r8s9t",
    },
] as const;

export const iterationsArraysChoices = [
    // Exercício 1
    {
        id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p3",
        text: "Fogo\nGelo\nRaio",
        isCorrect: true,
        order: 1,
        exerciseId: "aa2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    },
    {
        id: "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q2",
        text: "Raio\nGelo\nFogo",
        isCorrect: false,
        order: 2,
        exerciseId: "aa2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    },

    // Explicação
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
        text: "Continuar",
        isCorrect: true,
        order: 1,
        exerciseId: "bb3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
    },
    
    // Exercício 2
    {
        id: "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r9",
        text: "of",
        isCorrect: true,
        order: 1,
        exerciseId: "bb3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p8q",
    },
    
    // Explicação
    {
        id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s1",
        text: "Continuar",
        isCorrect: true,
        order: 1,
        exerciseId: "cc4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
    },

    // Exercício 4
    {
        id: "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9n0",
        text: "map",
        isCorrect: true,
        order: 1,
        exerciseId: "dd5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
    },

    // Exercício 5
    {
        id: "g5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
        text: "[10, 20, 30]",
        isCorrect: false,
        order: 1,
        exerciseId: "dd5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9d",
    },
    {
        id: "k5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t1",
        text: "[20, 40, 60]",
        isCorrect: true,
        order: 2,
        exerciseId: "dd5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9d",
    },
    {
        id: "l5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t2",
        text: "[0, 1, 2]",
        isCorrect: false,
        order: 3,
        exerciseId: "dd5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9d",
    },
] as const;
