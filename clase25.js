class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hi! My name is ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        return this.altura > 1.8;
    }
}




class Desarrollador extends Persona {
    constructor (nombre, apellido,altura) {
        super(nombre,apellido,altura);
    }

    saludar = function () {
        console.log(`Hi! My name is ${this.nombre} ${this.apellido} y soy desarrollador!!!`);
    }
}

var luis = new Desarrollador('Luis', 'Rangel', 1.75);
luis.saludar();

console.log(luis.soyAlto());