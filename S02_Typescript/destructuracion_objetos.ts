let avenger = {
    name: 'Steve',
    key: 'Capitán América',
    power: 'Droga'
}

// Declaración de las variables sin destructuración

/*
let name = avenger.name;
let key = avenger.key;
let power = avenger.power;
*/

// Declaración de las variables con destructuración

let { name:alias, key, power } = avenger;

console.log(alias, key, power);

// Destructuración de un arreglo

let avengers:string[]  = ['thor', 'steve', 'tony'];

let [ thor, capi, ironman ] = avengers;

console.log(thor, capi, ironman);
