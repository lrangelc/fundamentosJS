var luis = {
    nombre: 'Luis',
    apellido: 'Rangel',
    altura: 1.75,
    cantidadDeLibros: 357
};

var nestor = {
    nombre: 'Nestor',
    apellido: 'Alvarado',
    altura: 1.70,
    cantidadDeLibros: 100
};

var sindy = {
    nombre: 'Sindy',
    apellido: 'Jimenez',
    altura: 1.65,
    cantidadDeLibros: 58
};

var karla = {
    nombre: 'Karla',
    apellido: 'Palencia',
    altura: 1.43,
    cantidadDeLibros: 95
}

var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Gonzalez',
    altura: 1.71,
    cantidadDeLibros: 182
}

var personas = [
    luis, nestor, sindy, karla, gabriel
];

for (var i = 0; i < personas.length; i++) {
    console.log(`${personas[i].nombre} mide ${personas[i].altura} y tiene ${personas[i].cantidadDeLibros} Libros`);
}

const reducer = (acum, persona) => acum + persona.cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer,0);

console.log(totalDeLibros);
