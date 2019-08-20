function Persona(nombre, apellido,altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    console.log('Me ejecutaron');
}

Persona.prototype.saludar = function () {
    console.log(`Hi! My name is ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function() {
    if (this.altura > 1.8) {
        console.log('Soy Alto!!!');
    } else {
        console.log('Soy Enano :)');
    }
}

var luis = new Persona('Luis','Rangel',1.75);
luis.saludar();