export const arithmeticExercises = [
    {
        id: '2aaf0fda-ee9d-4948-ae54-66c295c6c16a',
        content: [
            {
                type: "paragraph",
                data: "Os operadores aritméticos são os operadores que fazem operações matemáticas. As operações possíveis são: adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%).",
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
                data: "Calcule o dano total de uma magia que causa 12 pontos por golpe e acerta 4 vezes.",
            },
            {
                type: "code",
                data: "12 _____ 4",
            },
        ],
        hint: "Qual é o operador de multiplicação?",
        type: "COMPLETE_CODE",
        lessonId: '6dc9654a-9de9-4afe-a498-9b2a7c7e995a',
        order: 2,
    },
    {
        id: '6d355188-52a8-48dc-a253-dfe813ec623d',
        content: [
            {
                type: "paragraph",
                data: "Um alquimista divide 100 pontos de energia igualmente entre 5 frascos. Qual operação representa essa ação?",
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
                data: "Você encontrou uma runa que aumenta sua força em 2 pontos toda vez que a usa. Complete o código que soma esse bônus corretamente.",
            },
            {
                type: "code",
                data: "forca = forca _____ 2",
            },
        ],
        hint: "Qual o operador usado para soma?",
        type: "COMPLETE_CODE",
        lessonId: '6dc9654a-9de9-4afe-a498-9b2a7c7e995a',
        order: 4,
    },
    {
        id: '8747342b-d7a6-4ea7-afa8-80ec3e895d4b',
        content: [
            {
                type: "paragraph",
                data: "Qual operador é usado para obter o resto de uma divisão?",
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
                data: "Os operadores de atribuição alteram um valor de uma variável. O operador de atribuição (=) pode ser misturado com operadores aritméticos (+, -, *, /, %) para realizar a operação enquanto atribui o valor à variável.",
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
                data: "Durante a batalha, o herói ganha 50 pontos de experiência. Complete o código para adicionar esse valor à variável existente:",
            },
            {
                type: "code",
                data: "experiencia _____ 50",
            },
        ],
        hint: "Use o operador que soma e reatribui o valor.",
        type: "COMPLETE_CODE",
        lessonId: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        order: 2,
    },
    {
        id: 'd4c7954d-327c-497b-b318-7248ac63a3c6',
        content: [
            {
                type: "paragraph",
                data: "Após uma armadilha, o guerreiro perde 20 pontos de vida. Qual dos abaixos completa o código:",
            },
            {
                type: "code",
                data: "vida _____ 20",
            },
        ],
        hint: "Use o operador que subtrai e atualiza o valor.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        order: 3,
    },
    {
        id: '97ed33d4-9854-47bc-857c-e47e0fd54985',
        content: [
            {
                type: "paragraph",
                data: "O ferreiro quer dobrar a durabilidade de uma espada. Complete o código:",
            },
            {
                type: "code",
                data: "durabilidade _____ 2",
            },
        ],
        hint: "Use o operador que multiplica e reatribui o valor.",
        type: "COMPLETE_CODE",
        lessonId: 'ae83eabd-1580-4f71-bdff-11dc98e527cd',
        order: 4,
    },
    {
        id: 'bd898357-d7e4-4e3f-aa80-f69ae7a41601',
        content: [
            {
                type: "paragraph",
                data: "Um mago quer dividir sua energia pela metade. Qual dos abaixo completa o código corretamente?",
            },
            {
                type: "code",
                data: "energia _____ 2",
            },
        ],
        hint: "Use o operador que divide e reatribui o valor.",
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
                data: "Os operadores relacionais são aqueles que comparam dois valores. Eles podem ser o de maior que (>), menor que (<), igual (==) ou diferente (!=).",
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
                data: "A feiticeira quer verificar se sua energia é menor ou igual a 50. Complete o código:",
            },
            {
                type: "code",
                data: "if (energia _____ 50) {\n console.log('Energia baixa!') \n}",
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
                data: "O mago quer saber se dois ingredientes possuem o mesmo valor mágico. Qual operador deve usar?",
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
                data: "Você precisa testar se o valor de forca é diferente de 20. Complete o código:",
            },
            {
                type: "code",
                data: "if (forca _____ 20) {\n console.log('Força alterada!') \n}",
            },
        ],
        hint: "O operador de diferença usa um ponto de exclamação.",
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
                data: "Operadores lógicos são usados para comparar valores booleanos (verdadeiro ou falso) e combinar resultados para criar condições mais complexas. Elas são && (verdade quando todas são verdade), || (verdade quando ao menos uma é verdade) e ! (inverte o valor).",
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
                data: "O mago só pode lançar um feitiço se tiver mana maior que 50 e foco maior que 30. Qual operador lógico deve usar?",
            },
        ],
        hint: "Use o operador que exige que todas as condições sejam verdadeiras.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        order: 2,
    },
    {
        id: '09cbda8f-7647-457f-b751-64b68e1b6c3a',
        content: [
            {
                type: "paragraph",
                data: "Você quer verificar se o guerreiro tem espada ou machado. Complete o código:",
            },
            {
                type: "code",
                data: "if (temEspada _____ temMachado) {\n console.log('Pronto para a batalha!') \n}",
            },
        ],
        hint: "Use o operador que retorna verdadeiro se pelo menos uma condição for verdadeira.",
        type: "COMPLETE_CODE",
        lessonId: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        order: 3,
    },
    {
        id: 'cb893869-09f5-4257-89cc-9445eeb74693',
        content: [
            {
                type: "paragraph",
                data: "A feiticeira quer garantir que não esteja envenenada antes de tomar a poção. Qual operador deve usar?",
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
                data: "Qual das opções retorna verdadeiro se o jogador não tiver mana?",
            },
        ],
        hint: "Use o operador que inverte o valor lógico.",
        type: "MULTIPLE_CHOICE",
        lessonId: 'ac151f6d-7f78-4bb4-8ab7-39cce88ae166',
        order: 5,
    },
] as const;
