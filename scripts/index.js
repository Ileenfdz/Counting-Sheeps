import { countingSheeps } from "./modules/CountingOnlySheeps.js";

/* export function app(){
    countingRefactor('true');
    countingRefactor('false');
} */

console.log("conected to index.js");

export function app(){
    console.log("conected to app");
    countingSheeps();
}

app();