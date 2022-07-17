"use strict";
let suma = function (a, b) {
    return a + b;
};
let sumaFlecha = (a, b) => a + b;
console.log(suma(5, 2));
console.log(sumaFlecha(10, 2));
let a = 0;
console.log(a);
let modif = () => {
    a = 5;
};
modif();
console.log(a);
class Persona {
    constructor(nombre, apellido) {
        this.setNombre = (nombre) => {
            this.nombre = nombre;
        };
        this.setApellido = (apellido) => {
            this.apellido = apellido;
        };
        this.getNombre = () => {
            return this.nombre;
        };
        this.getApellido = () => {
            return this.apellido;
        };
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
}
console.log("\n");
let persona1 = new Persona("Juan", "Perez");
persona1.setNombre("Lucas");
persona1.setApellido("Gonzalez");
console.log(Persona);
