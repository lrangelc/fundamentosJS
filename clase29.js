const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function character(data) {
    console.log(`Hi! my name is ${data.name}`);
    //console.log(arguments);
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, character);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);

for (var i = 1; i < 50; i++) {
    obtenerPersonaje(i);
}
console.log('Hi');