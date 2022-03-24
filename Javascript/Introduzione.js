function sum(a, b) {
    return a + b;
}

console.log("un messaggio da visualizzare a console");

//Dichiarazione di variabili
let x;
var y;

console.log(x);

//assegnazione
x = 5;

//inizializzazione
let z = 7;
z = "7";

const costante = 10;
//costante = 90; ERRORE


//ARRAY

let primoArray = [1, 2, 3];
primoArray = [1, 'Renata', 2, true, 4.5];

let primoElemento = primoArray[0];
console.log(primoElemento);

console.log("----------------------")
for (let i = 0; i < primoArray.length; i++) {
    console.log(primoArray[i]);
}

primoArray.push("prova", "inserimento");
console.log("----------------------")
for (let i = 0; i < primoArray.length; i++) {
    console.log(primoArray[i]);
}

primoArray.pop();//eliminare l'ultimo elemento;
console.log("----------------------")
for (let i = 0; i < primoArray.length; i++) {
    console.log(primoArray[i]);
}

primoArray.splice(0,2); //(n,m) parte dalla posizione n ed elimina m elementi
console.log("----------------------")
for (let i = 0; i < primoArray.length; i++) {
    console.log(primoArray[i]);
}
console.log("----------------------")
let food = ["uova", "pane", "pasta", "frutta"];

//recuperare il primo elemento che rispetta una condizione
let foodWithP = food.find((item) => item.startsWith("p"));
console.log(foodWithP);

let itemsWithP = food.filter((item) => item.startsWith("p"))

console.log("----------------------")
for (let i = 0; i < itemsWithP.length; i++) {
    console.log(itemsWithP[i]);
}

//ordinamento
food.sort();
console.log("----------------------")
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

food.reverse();
console.log("----------------------")
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

console.log("----------------------")

class Persona {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //setter
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }

    //getter
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

let pers = new Persona("Mario", "Rossi");
console.log(pers.getFullName());
console.log(pers.firstName + ' ' + pers.lastName);

let p = new Object({
    nome: "Renata",
    cognome: "Carriero"
});
console.log(p.nome + ' ' + p.cognome);

p.nome = "Antonia";
p.cognome = "Sacchitella";
console.log(p.nome + ' ' + p.cognome);



//utilizzo di == (valore) vs === (valore e tipo)
let r = 4;
let t = "4";
let q = 4;

console.log(r == t); //true
console.log(r === t); //false
console.log(q === r); //true
