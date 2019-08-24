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

function imprimirPersonaje(data) {
    console.log(`Hi! my name is ${data.name}`);
}

// obtenerPersonaje(1)
//     .then(imprimirPersonaje)
//     .catch(onError);

for (var i = 1; i < 20; i++) {
    obtenerPersonaje(i)
        .then(imprimirPersonaje)
        .catch(onError);
}

console.log('Hi');