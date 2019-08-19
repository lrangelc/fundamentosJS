var luis = {
    nombre: 'Luis',
    apellido: 'Rangel',
    altura: 1.75
};

var nestor = {
    nombre: 'Nestor',
    apellido: 'Alvarado',
    altura: 1.70
};

var sindy = {
    nombre: 'Sindy',
    apellido: 'Jimenez',
    altura: 1.65
};

var karla = {
    nombre: 'Karla',
    apellido: 'Palencia',
    altura: 1.43
} 

var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Gonzalez',
    altura: 1.71
}

var personas = [
    luis, nestor, sindy, karla, gabriel
];

console.log(personas[0].altura);
console.log(personas[0]['altura']);

for (var i = 0;i < personas.length;i++) {
    console.log(`${personas[i].nombre} mide ${personas[i].altura}`);
}

const esAlta = persona => persona.altura > 1.70;
// const esAlta = ({altura}) => altura > 1.70;

const esBaja = ({altura}) => altura < 1.60;

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.70
// });

console.log(personas);
console.log(personasAltas);
console.log(personasBajas);