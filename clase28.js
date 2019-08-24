const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeURL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true };

$.get(lukeURL, opts, function (luke) {
    console.log(luke);
    console.log(`Hi my name is ${luke.name}`);
    console.log(arguments);
});

function character(data) {
    console.log(`Hi! my name is ${data.name}`);
}

$.get(lukeURL, opts, character);

console.log('Hi');