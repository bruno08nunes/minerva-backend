import { arraysLessons } from "./rpg/arrays/lessons";
import { conditionalLessons } from "./rpg/conditional/lessons";
import { functionLessons } from "./rpg/functions/lessons";
import { loopLessons } from "./rpg/loop/lessons";
import { objectsLessons } from "./rpg/objects/lessons";
import { operatorLessons } from "./rpg/operators/lessons";
import { variableLessons } from "./rpg/variable/lessons";

import { variableLessons as variableLessonsHorror } from "./terror/variable/lessons";
import { operatorLessons as operatorLessonsHorror } from "./terror/operators/lessons";
import { conditionalLessons as conditionalLessonsHorror } from "./terror/conditional/lessons";
import { functionLessons as functionLessonsHorror } from "./terror/functions/lessons";
import { loopLessons as loopLessonsHorror } from "./terror/loop/lessons";
import { objectsLessons as objectsLessonsHorror } from "./terror/objects/lessons";
import { arraysLessons as arraysLessonsHorror } from "./terror/arrays/lessons";

import { variableLessonsDetetive } from "./detetive/variable/lessons";
import { operatorLessonsDetetive } from "./detetive/operators/lessons";
import { conditionalLessonsDetetive } from "./detetive/conditional/lessons";
import { functionLessonsDetetive } from "./detetive/functions/lessons";
import { loopLessonsDetetive } from "./detetive/loop/lessons";
import { objectsLessonsDetetive } from "./detetive/objects/lessons";
import { arraysLessonsDetetive } from "./detetive/arrays/lessons";

const rpgLessons = [
    ...variableLessons,
    ...operatorLessons,
    ...conditionalLessons,
    ...loopLessons,
    ...functionLessons,
    ...arraysLessons,
    ...objectsLessons,
];

const horrorLessons = [
    ...variableLessonsHorror,
    ...operatorLessonsHorror,
    ...conditionalLessonsHorror,
    ...functionLessonsHorror,
    ...loopLessonsHorror,
    ...objectsLessonsHorror,
    ...arraysLessonsHorror,
];

const detetiveLessons = [
    ...variableLessonsDetetive,
    ...operatorLessonsDetetive,
    ...conditionalLessonsDetetive,
    ...functionLessonsDetetive,
    ...loopLessonsDetetive,
    ...objectsLessonsDetetive,
    ...arraysLessonsDetetive
]

export const lessonData = [...rpgLessons, ...horrorLessons, ...detetiveLessons];
