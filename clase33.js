const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(url, opts, function (data) {
            resolve(data);
        })
            .fail(() => reject(id))
    });
}

function onError(id) {
    console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`);
}

obtenerPersonaje(1)
    .then(data1 => {
        console.log(`Hi! my name is ${data1.name} with id: 1`);
        return obtenerPersonaje(2);
    })
    .then(data2 => {
        console.log(`Hi! my name is ${data2.name} with id: 2`);
        return obtenerPersonaje(3);
    })
    .then(data3 => {
        console.log(`Hi! my name is ${data3.name} with id: 3`);
        return obtenerPersonaje(4);
    })
    .then(data4 => {
        console.log(`Hi! my name is ${data4.name} with id: 4`);
        return obtenerPersonaje(5);
    })
    .then(data5 => {
        console.log(`Hi! my name is ${data5.name} with id: 5`);
        return obtenerPersonaje(6);
    })
    .then(data6 => {
        console.log(`Hi! my name is ${data6.name} with id: 6`);
        return obtenerPersonaje(7);
    })
    .then(data7 => {
        console.log(`Hi! my name is ${data7.name} with id: 7`);
    })
    .catch(onError);

console.log('Hi');


const API_URL2 = 'https://swapi.co/api/people/';

async function obtenerPersonaje2(id) {
    const url = `${API_URL2}${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(`Hola, yo soy ${data.name}`)
}

obtenerPersonaje2(1)
    .then(() => obtenerPersonaje2(2))
    .then(() => obtenerPersonaje2(3))
    .then(() => obtenerPersonaje2(4))
    .then(() => obtenerPersonaje2(5))
    .then(() => obtenerPersonaje2(6))
    .then(() => obtenerPersonaje2(7))
    .then(() => obtenerPersonaje2(8))
    .then(() => obtenerPersonaje2(9))
    .then(() => obtenerPersonaje2(10))
    .catch(onError);