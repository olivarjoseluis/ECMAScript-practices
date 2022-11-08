const arreglo = [1, 2, 3, 4, 5, [1, 2, 3, 4, [3, 4, 6, 7, 8, [2, 3, 4, 5]]]];
console.log(arreglo.flat(3));

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.flatMap(v => [v, v * 10]));

const primise1 = new Promise((resolve, reject) => reject('Reject'));
const primise2 = new Promise((resolve, reject) => resolve('Resolve'));
const primise3 = new Promise((resolve, reject) => resolve('Resolve 2'));
Promise.allSettled([primise1, primise2, primise3])
    .then(response => console.log(response));

const regex = /\b(jose)+\b/g
const fruit = "Jose Luis, Banana, Kiwi, Apple, jose  Nieto de José Orange, Joseanselmo etc. etc. etc. Jose lo"
// Tranformación del iterable retornado a array
const array = [...fruit.matchAll(regex)]
console.log(array)