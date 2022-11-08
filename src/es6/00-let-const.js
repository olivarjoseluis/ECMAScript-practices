/* var lastName = 'Jose Luis';
console.log(lastName);

function newUser(name, age, country) {
    var name = name || 'user';
} */

import greet from "./module.js";
greet();

//arrays

/* let fruits = ['Apple', 'Orange', 'Banana', 'Strawberry', 'Berry'];
let [a, b, c, d, f] = fruits;
console.log(b);
console.log(c);
console.log(d);
console.log(f);

let user = { username: 'j.olivar', age: 29 };
let { username, age } = user;
console.log(username, age); */

//Spread operator
let user = { username: 'j.olivar', age: 29 };
let country = 'CO';
let sports = ['Soccer', 'Pool'];

let data = { ...user, country, sports };
console.log(data);
//rest
function sum(num, ...values) {
    console.log(values);
    return num + values[0];
}

console.log(sum(1, 9, 3, 4, 5));

function solution(json1, json2 = { age: 12, color: "Blanco" }) {
    let { age, color } = json2;
    let { name, food } = json1;
    let output = { name, food, age, color };
    return output;
}

console.log(solution({ name: "Bigotes", food: "Pollito" }));

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) { resolve('Éxito') } else { reject('Mal') }
    })
}

anotherFunction()
    .then(res => console.log(res))
    .catch(err => console.log(err));


function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Jose', 'Luis', 'Toña', 'José']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

function* getId() {
    for (let i = 0; true; i++) {
        yield i + 1;

    }
}

const id = getId()
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
