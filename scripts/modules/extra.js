export function countingSheeps() {
    let sheeps=0;
    let wolves=0;
   
    console.log(sheeps);
    console.log(wolves);
}

countingSheeps();

export function searchWolves() {
    let numWolves=0;
    let wolves='false';
    searchAnimals();
}

export function searchAnimals(b){
    let a=0;
    
    for (let i = 0; i < list.length; i++) {
        if (list[i] == b) {
            a++;
        } 
    }

    console.log(a+' '+b);
    printAnimals(a, b); 
}

export function printAnimals(a, b){
    if(b == 'true'){
        console.log('sheeps'+' '+a);
    }
    if(b == 'false'){
        console.log('wolves'+' '+a);
    }
}
let input='hola';

for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
    
}