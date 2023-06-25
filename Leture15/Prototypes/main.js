const person = {
    name: "Pulkit",

    age : 24,

    idAdult: true,

    favCars : ["Mercedes", "pagani", "fortuner", "scorpio"]


}

// const p1 = {
//     __proto__: person
// }

const p1 = Object.create(person);       // taking reference 
const p2 = Object.create(p1);