export const arithmeticExercises = [
    {
        id: '2aaf0fda-ee9d-4948-ae54-66c295c6c16a',
        content: [
            {
                type: "paragraph",
                data: "Os operadores aritméticos são usados para realizar cálculos durante uma investigação. As operações possíveis são: adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%).",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: '6dc9654a-9de9-4afe-a498-9b2a7c7e995a',
        order: 1,
    },
    {
        id: '68a1b5b1-6e95-46fe-9721-cebf91f6e76a',
        content: [
            {
                type: "paragraph",
                data: "Você encontrou 12 pistas em cada cena do crime e investigou 4 cenas. Quantas pistas no total você reuniu?",
            },
            {
                type: "code",
                data: "12 _____ 4",
            },
        ],
        hint: "Qual operador usamos para multiplicar evidências?",
        type: "COMPLETE_CODE",
        lessonId: '6dc9654a-9de9-4afe-a498-9b2a7c7e995a',
        order: 2,
    },
    {
        id: '6d355188-52a8-48dc-a253-dfe813ec623d',
        content: [
            {
                type: "paragraph",
                data: "Você precisa dividir 100 evidências igualmente entre 5 investigadores. Qual operação representa isso?",
            },
        ],
        hint: "Use o operador '/' para dividir.",
        type: "MULTIPLE_CHOICE",
        lessonId: '6dc9654a-9de9-4afe-a498-9b2a7c7e995a',
        order: 3,
    },
    {
        id: '884e334c-8cce-473e-af7c-873aff0a5970',
        content: [
            {
                type: "paragraph",
                data: "A cada nova pista analisada, seu nível de progresso aumenta em 2 pontos. Complete o código:",
            },
            {
                type: "code",
                data: "progresso = progresso _____ 2",
            },
        ],
        hint: "Qual operador usamos para somar?",
        type: "COMPLETE_CODE",
        lessonId: '6dc9654a-9de9-4afe-a498-9b2a7c7e995a',
        order: 4,
    },
    {
        id: '8747342b-d7a6-4ea7-afa8-80ec3e895d4b',
        content: [
            {
                type: "paragraph",
                data: "Qual operador é usado para obter o resto de uma divisão durante um cálculo?",
            },
        ],
        hint: 'É conhecido como "módulo".',
        type: "MULTIPLE_CHOICE",
        lessonId: '6dc9654a-9de9-4afe-a498-9b2a7c7e995a',
        order: 5,
    },
] as const;

export const assignmentExercises = [
    {
        id: 'b0702210-ea66-4372-ad67-d2b523fb8b00',
        content: [
            {
                type: "paragraph",
                data: "Os operadores de atribuição permitem atualizar informações durante a investigação. O operador (=) pode ser combinado com operadores aritméticos (+, -, *, /, %) para atualizar valores.",
            },
        ],
        hint: "Use o operador básico de atribuição.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        order: 1,
    },
    {
        id: '2ada8928-3ef2-40ba-8e69-9e76749d65af',
        content: [
            {
                type: "paragraph",
                data: "Você ganhou 50 pontos de progresso ao resolver uma pista importante. Complete o código:",
            },
            {
                type: "code",
                data: "progresso _____ 50",
            },
        ],
        hint: "Use o operador que soma e reatribui.",
        type: "COMPLETE_CODE",
        lessonId: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        order: 2,
    },
    {
        id: 'd4c7954d-327c-497b-b318-7248ac63a3c6',
        content: [
            {
                type: "paragraph",
                data: "Você descartou 20 evidências irrelevantes. Qual operador completa o código?",
            },
            {
                type: "code",
                data: "evidencias _____ 20",
            },
        ],
        hint: "Use o operador que subtrai e atualiza.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        order: 3,
    },
    {
        id: '97ed33d4-9854-47bc-857c-e47e0fd54985',
        content: [
            {
                type: "paragraph",
                data: "Você dobrou a quantidade de pistas analisadas em um dia. Complete o código:",
            },
            {
                type: "code",
                data: "pistas _____ 2",
            },
        ],
        hint: "Use o operador que multiplica e reatribui.",
        type: "COMPLETE_CODE",
        lessonId: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        order: 4,
    },
    {
        id: 'bd898357-d7e4-4e3f-aa80-f69ae7a41601',
        content: [
            {
                type: "paragraph",
                data: "Você decidiu dividir sua carga de trabalho pela metade. Qual operador usar?",
            },
            {
                type: "code",
                data: "tarefas _____ 2",
            },
        ],
        hint: "Use o operador que divide e reatribui.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        order: 5,
    },
] as const;

export const relationalExercises = [
    {
        id: 'd09746ae-3558-4ba1-9222-1a2842768d5d',
        content: [
            {
                type: "paragraph",
                data: "Os operadores relacionais são usados para comparar informações em uma investigação, como suspeitos ou evidências. Exemplos: maior que (>), menor que (<), igual (==) e diferente (!=).",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e288fdb5-1e7f-4880-ba50-590b593c5e84',
        order: 1,
    },
    {
        id: '7d4b35b0-783a-4119-945b-8bf1b36e2be0',
        content: [
            {
                type: "paragraph",
                data: "Você quer verificar se o número de evidências é menor ou igual a 50. Complete o código:",
            },
            {
                type: "code",
                data: "if (evidencias _____ 50) {\n console.log('Poucas evidências') \n}",
            },
        ],
        hint: "Combine os símbolos de 'menor' e 'igual'.",
        type: "COMPLETE_CODE",
        lessonId: 'e288fdb5-1e7f-4880-ba50-590b593c5e84',
        order: 2,
    },
    {
        id: 'f5aba429-f622-4080-993f-db18144eb8d1',
        content: [
            {
                type: "paragraph",
                data: "Você quer saber se dois depoimentos são iguais. Qual operador usar?",
            },
        ],
        hint: "Use o operador de igualdade.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'e288fdb5-1e7f-4880-ba50-590b593c5e84',
        order: 3,
    },
    {
        id: '4af25363-10f0-4257-acc1-8c7053c921c5',
        content: [
            {
                type: "paragraph",
                data: "Verifique se o número de suspeitos é diferente de 20. Complete:",
            },
            {
                type: "code",
                data: "if (suspeitos _____ 20) {\n console.log('Número alterado!') \n}",
            },
        ],
        hint: "Use o operador com ponto de exclamação.",
        type: "COMPLETE_CODE",
        lessonId: 'e288fdb5-1e7f-4880-ba50-590b593c5e84',
        order: 4,
    },
] as const;

export const logicalExercises = [
    {
        id: '29bd0d25-80df-4a8d-9d90-324774ce1f36',
        content: [
            {
                type: "paragraph",
                data: "Operadores lógicos ajudam a tomar decisões durante a investigação. Eles são: && (todas condições verdadeiras), || (pelo menos uma verdadeira) e ! (negação).",
            },
        ],
        hint: "",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        order: 1,
    },
    {
        id: '08794613-ad9e-4698-b5d5-130bb5c3538f',
        content: [
            {
                type: "paragraph",
                data: "Você só pode prender um suspeito se houver provas suficientes e testemunhas confiáveis. Qual operador usar?",
            },
        ],
        hint: "Use o operador onde todas condições precisam ser verdadeiras.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        order: 2,
    },
    {
        id: '09cbda8f-7647-457f-b751-64b68e1b6c3a',
        content: [
            {
                type: "paragraph",
                data: "Verifique se há impressão digital ou testemunha ocular. Complete:",
            },
            {
                type: "code",
                data: "if (temDigital _____ temTestemunha) {\n console.log('Há pistas!') \n}",
            },
        ],
        hint: "Use o operador onde apenas uma condição precisa ser verdadeira.",
        type: "COMPLETE_CODE",
        lessonId: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        order: 3,
    },
    {
        id: 'cb893869-09f5-4257-89cc-9445eeb74693',
        content: [
            {
                type: "paragraph",
                data: "Você quer garantir que o suspeito NÃO tenha álibi. Qual operador usar?",
            },
        ],
        hint: "Use o operador de negação.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        order: 4,
    },
    {
        id: '600f5503-c185-4a9e-b14c-24485067f7fc',
        content: [
            {
                type: "paragraph",
                data: "Qual opção retorna verdadeiro se NÃO houver evidências?",
            },
        ],
        hint: "Use o operador que inverte o valor lógico.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        order: 5,
    },
] as const;