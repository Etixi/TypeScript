/*
 * Copyright (c) - All Rights Reserved
 */


let stringArr = ['one', 'hey', 'Dave'] // Déclaration d'un tableau de chaînes de caractères
let guitars = ['strat', 'Les Paul', 5150] // Déclaration d'un tableau pouvant contenir des chaînes de caractères ou des nombres
let mixedData = ['EVH', 1984, true] // Déclaration d'un tableau pouvant contenir des chaînes de caractères, des nombres ou des booléens

stringArr[0] = 'John'; // Modification d'un élément du tableau
stringArr.push('hey'); // Ajout d'un élément à la fin du tableau
console.log(stringArr);

guitars[0] = '1994'; // Modification d'un élément du tableau (pour correspondre au type déclaré)
guitars.unshift('Jim'); // Ajout d'un élément au début du tableau
console.log(guitars);

let test = []; // Déclaration d'un tableau de type any (accepte n'importe quel type)
let bands: string[]= []; // Déclaration d'un tableau de chaînes de caractères
bands.push('Van Halen'); // Ajout d'une chaîne de caractères au tableau


// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

myTuple[1] = 42

// Objects

let myObj: object
myObj = []
console.log(typeof(myObj))
myObj = bands
myObj = {}

const exampleObj = {
    prop1 : 'Dave',
    prop2 : true,
}

console.log(exampleObj)

exampleObj.prop1 = 'John'

// type Guitarist = {
interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

console.log(evh.name, evh.active, evh.albums)

let jp: Guitarist = {
    // name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
    
}

console.log(greetGuitarist(jp))


// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)


