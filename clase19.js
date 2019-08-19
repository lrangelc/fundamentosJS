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


for (var i = 0; i < personas.length; i++) {
    console.log(`${personas[i].nombre} mide ${personas[i].altura}`);
}

// const pasarAlturaACms = persona => {
//     persona.altura *= 100;
//     return persona;
// };

// const pasarAlturaACms = persona => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     };
// };

const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
    });

var personasCms = personas.map(pasarAlturaACms);

console.log(personas);
console.log(personasCms);