import { detetiveChoices } from "./detetive/detetive-choices";
import { rpgChoices } from "./rpg/rpg-choices";
import { horrorChoices } from "./terror/horror-choices";

export const choices = [
    ...rpgChoices,
    ...horrorChoices,
    ...detetiveChoices
];