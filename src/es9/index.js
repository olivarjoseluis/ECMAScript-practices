const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-09-23');
console.log(matchers);
console.table(matchers);

const user = { username: 'jolivar', age: 29, country: 'CO' };
const { username, ...values } = user;
console.log(username);
console.log(values);
/************************************************************/
/************************************************************/
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) { resolve('Éxito') } else { reject('Mal') }
    })
}

anotherFunction()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('Finaly'));
/************************************************************/
/************************************************************/
async function* generator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
    yield await Promise.resolve(4);
}

const other = generator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Marker');