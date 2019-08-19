var luis = {
    nombre: 'Luis',
    apellido: 'Rangel',
    edad: 39,
    peso: 120
}

console.log(`Al Inicio del year ${luis.nombre} pesa ${luis.peso}Kg.`);

const CAMBIO_PESO = 0.200;
const DIAS_YEAR = 365;
const aumentarDePeso = persona => persona.peso += CAMBIO_PESO;
const bajarDePeso = persona => persona.peso -= CAMBIO_PESO;


for (var i = 1;i <= DIAS_YEAR;i++) {
    var random = Math.random();
    luis.peso -= random;
    if (random < 0.25) {
        aumentarDePeso(luis);
    } else if (random < 0.5) {
        bajarDePeso(luis);
    }
}

console.log(`Al Final del year ${luis.nombre} pesa ${luis.peso.toFixed(2)}Kg.`);