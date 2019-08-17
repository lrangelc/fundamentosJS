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

const MAYORIA_DE_EDAD = 1;

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

imprimirProfesiones(luis);

imprimirSiEsMayorDeEdad(luis);
imprimirSiEsMayorDeEdad(juan);

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de Edad.`);
    } else {
        console.log(`${persona.nombre} es menor de Edad.`);
    }
}

function esMayorDeEdad(persona) {
    return (persona.edad >= MAYORIA_DE_EDAD);
}