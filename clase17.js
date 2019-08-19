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

var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Gonzalez',
    altura: 1.71
}

var personas = [
    luis, nestor, sindy, gabriel
];

console.log(personas[0].altura);
console.log(personas[0]['altura']);

for (var i = 0;i < personas.length;i++) {
    console.log(`${personas[i].nombre} mide ${personas[i].altura}`);
}