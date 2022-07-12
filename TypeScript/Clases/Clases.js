"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
}
let persona1 = new Persona("Juan");
let persona2 = new Persona("Pedro");
console.log(persona1.getNombre());
