const text = 'Vivamus magna justo, lacinia eget justo sed, convallis at tellus. Curabitur arcu erat, justo id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.';
const replace = text.replaceAll('justo', 'JOSE');
console.log(replace);

const primise1 = new Promise((resolve, reject) => reject('Reject'));
const primise2 = new Promise((resolve, reject) => resolve('Resolve'));
const primise3 = new Promise((resolve, reject) => resolve('Resolve 2'));
Promise.any([primise1, primise2, primise3])
    .then(response => console.log(response))