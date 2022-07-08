class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
}

let persona1 = new Persona("Juan", "Perez", 20);
console.log(persona1);


let persona2 = new Persona("Lucas", "Moyano", 20);
console.log(persona2);