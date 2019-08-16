var nombre = 'Luis'
    ,apellido = 'Rangel';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido}`.toUpperCase();

var str = nombre.substr(1,2);

var desafio = nombre.charAt(nombre.length - 1);
console.log(desafio);