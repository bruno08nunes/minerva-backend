import { detetiveExercises } from "./detetive/detetive-exercises";
import { rpgExercises } from "./rpg/rpg-exercises";
import { horrorExercises } from "./terror/horror-exercises";

export const exercises = [...rpgExercises, ...horrorExercises, ...detetiveExercises];