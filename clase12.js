var luis = {
    nombre: 'Luis',
    apellido: 'Rangel',
    edad: 39,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
};

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

const MAYORIA_DE_EDAD = 18;

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);
    if (persona.ingeniero) {
        console.log('Ingeniero');
    }

    if (persona.cocinero) {
        console.log('Cocinero');
    }

    if (persona.cantante) {
        console.log('Cantante');
    }

    if (persona.dj) {
        console.log('DJ');
    }

    if (persona.guitarrista) {
        console.log('Guitarrista');
    }

    if (persona.drone) {
        console.log('Piloto de Drones');
    }
}


// function esMayorDeEdad(persona) {
//     return (persona.edad >= MAYORIA_DE_EDAD);
// }

//funcion anonima
//se cambia var por const para indicar que es una funcion y no una variable
const esMayorDeEdad = function(persona) {
    return (persona.edad >= MAYORIA_DE_EDAD);
}

//arrow function
const esMayorDeEdad2 = (persona) => {
    return (persona.edad >= MAYORIA_DE_EDAD);
}

//arrow function
//si solo tiene un parametro se puede quitar los parentesis
const esMayorDeEdad3 = persona => {
    return (persona.edad >= MAYORIA_DE_EDAD);
}

//arrow function
//sin return
const esMayorDeEdad4 = persona => persona.edad >= MAYORIA_DE_EDAD;

//arrow function
//desestructurado
const esMayorDeEdad5 = ({edad}) => edad >= MAYORIA_DE_EDAD;


// function imprimirSiEsMayorDeEdad(persona) {
//     if (esMayorDeEdad5(persona)) {
//         console.log(`${persona.nombre} es mayor de Edad.`);
//     } else {
//         console.log(`${persona.nombre} es menor de Edad.`);
//     }
// }

const imprimirSiEsMayorDeEdad = function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad5(persona)) {
        console.log(`${persona.nombre} es mayor de Edad.`);
    } else {
        console.log(`${persona.nombre} es menor de Edad.`);
    }
}

const imprimirSiEsMayorDeEdad2 = (persona) => {
    if (esMayorDeEdad5(persona)) {
        console.log(`${persona.nombre} es mayor de Edad.`);
    } else {
        console.log(`${persona.nombre} es menor de Edad.`);
    }
}

const imprimirSiEsMayorDeEdad3 = ({nombre,edad}) => {
    if (edad >= MAYORIA_DE_EDAD) {
        console.log(`${nombre} es mayor de Edad.`);
    } else {
        console.log(`${nombre} es menor de Edad.`);
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad5(persona)) {
        console.log('ACCESO DENEGADO');
    } else {
        console.log('ACCESO PERMITIDO');
    }
    return null;
}

imprimirProfesiones(luis);

imprimirSiEsMayorDeEdad(luis);
imprimirSiEsMayorDeEdad(juan);

imprimirSiEsMayorDeEdad3(luis);
imprimirSiEsMayorDeEdad3(juan);

console.log(Date.now());