var x = 4,y ='4';

console.log(`x == y`);
console.log(x == y);
console.log('');
console.log(`x === y`);
console.log(x === y);
console.log('');

var persona = {
    nombre: 'Luis',
    apellido: 'Rangel'
};

var otraPersona = {
    nombre: 'Luis',
    apellido: 'Rangel'
};

var auxPersona = persona;

var nuevaPersona = {
    ...persona
};

var tt = {...persona};

auxPersona.apellido = 'Castro';

console.log(`persona == otraPersona`);
console.log(persona == otraPersona);
console.log('');
console.log(`persona === otraPersona`);
console.log(persona === otraPersona);
console.log('');

console.log(`persona == auxPersona`);
console.log(persona == auxPersona);
console.log('');
console.log(`persona === auxPersona`);
console.log(persona === auxPersona);
console.log('');
