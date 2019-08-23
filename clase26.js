class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) {
        var { nombre, apellido } = this;

        console.log(`Hi! My name is ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido);
        }
    }

    soyAlto() {
        return this.altura > 1.8;
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar(fn) {
        var { nombre, apellido } = this;

        console.log(`Hi! My name is ${nombre} ${apellido} and I am Developer!!!`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}


class Estudiante extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        console.log(`Hi! My name is ${this.nombre}${this.apellido} and I am student.`)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Good day ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mira, no sabia que eras desarrollador/a`);
    }
}

var luis = new Desarrollador('Luis', 'Rangel', 1.75);
var mariana = new Persona('Mariana', 'Obando', 1.65)
var fabio = new Estudiante('Fabito', 'Obando', 1.92)
var andres = new Persona('Jhoan', 'Camilo', 1.72)

luis.saludar(responderSaludo);
mariana.saludar();
fabio.saludar(responderSaludo);
andres.saludar(responderSaludo);

console.log(luis.soyAlto());