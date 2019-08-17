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

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de Edad.`);
    } else {
        console.log(`${persona.nombre} es menor de Edad.`);
    }
}