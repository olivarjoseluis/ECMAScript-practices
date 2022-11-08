const soccerTeams = { cali: ['América de Cali', 'Deportivo Cali'], medellin: ['Naciopan', 'Independiente'], barranquilla: 'Burrior' };
//console.log(Object.entries(soccerTeams));
console.log(Object.values(soccerTeams));

const message = 'Hola';
console.log(message.padStart(6, '-'));
console.log(message.padEnd(6, '-'));

let arreglo = [1, 2, 3];
console.log(arreglo.length)
arreglo[99] = 8;
console.log(arreglo.length)

const asyncFuntion = () => {
    return new Promise((resolve, reject) => {
        true ?
            setTimeout(() => { resolve('Async!') }, 2000)
            :
            reject(new Error('Error!'))
    });
}

const callFunction = async () => {
    const something = await asyncFuntion();
    console.log(something);
    console.log('Greet')
}

console.log('Before');
callFunction();
console.log('After');