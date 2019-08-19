var luis = {
    nombre: 'Luis',
    apellido: 'Rangel',
    edad: 39,
    peso: 120
}

console.log(`Al Inicio del year ${luis.nombre} pesa ${luis.peso}Kg.`);

const CAMBIO_PESO = 0.3;
const DIAS_YEAR = 365;
const aumentarDePeso = persona => persona.peso += CAMBIO_PESO;
const bajarDePeso = persona => persona.peso -= CAMBIO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
const META = luis.peso - 3;
var dias = 0;

while (luis.peso > META) {
    debugger
    if (comeMucho()) {
        aumentarDePeso(luis);
    }

    if (realizaDeporte()) {
        bajarDePeso(luis);
    }
    dias++;
}

console.log(`Pasaron ${dias} dias hasta que ${luis.nombre} adelgazo 3kg;`);
console.log(`Al Final del year ${luis.nombre} pesa ${luis.peso.toFixed(2)}Kg.`);