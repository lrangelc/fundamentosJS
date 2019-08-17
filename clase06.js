var luis = {
    nombre: 'Luis',
    apellido: 'Rangel',
    edad: 39
};

var david = {
    nombre: 'David',
    apellido: 'Castro',
    edad: 25
};

function imprimiNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase());
}

function imprimiNombreEnMayusculas2({nombre}) {
    console.log(nombre.toUpperCase());
}

imprimiNombreEnMayusculas(luis);
imprimiNombreEnMayusculas(david);

imprimiNombreEnMayusculas2(luis);
imprimiNombreEnMayusculas2(david);

imprimiNombreEnMayusculas2({nombre:'Pepito'});

console.log(Date.now());