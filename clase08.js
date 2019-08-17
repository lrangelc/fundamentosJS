var luis = {
    first_name: 'Luis',
    last_name: 'Rangel',
    age: 39
};

var david = {
    first_name: 'David',
    last_name: 'Castro',
    age: 25
};

function imprimirNombreYEdad(persona) {
	var {first_name, age } = persona;
	console.log(`Hello, my name is ${first_name} and I'm ${age} years old.`);
}

imprimirNombreYEdad(luis);
imprimirNombreYEdad(david);

function cumpleyear(persona) {
    return {
        ...persona,
        age: persona.age + 1
    };
}


console.log(Date.now());