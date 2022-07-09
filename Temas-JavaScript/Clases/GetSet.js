class Persona {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let persona1 = new Persona("Juan", "Perez", 20);
console.log(persona1.nombre);


persona1.nombre = "Lucas";
console.log(persona1.nombre);