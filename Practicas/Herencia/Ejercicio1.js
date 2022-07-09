
class Persona {
    constructor(nombre, apellido, edad) {
        this._idPersona = ++ContPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get edad() {
        return this._edad;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return "Persona[idPersona=" + this._idPersona + ", nombre=" + this._nombre + ", apellido=" + this._apellido + ", edad=" + this._edad + "]";
    }
    
}

class Empleado extends Persona {
    constructor(nombre, apellido, edad, salario) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++ContEmpleado;
        this._salario = salario;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    toString() {
        return "Empleado[idEmpleado=" + this._idEmpleado + ", salario=" + this._salario + ", " + super.toString() + "]";
    }
}

class Cliente extends Persona{
    constructor(nombre, apellido, edad, deuda) {
        super(nombre, apellido, edad);
        this._idCliente = ++ContCliente;
        this._deuda = deuda;
    }
    get idCliente() {
        return this._idCliente;
    }
    get deuda() {
        return this._deuda;
    }
    set deuda(deuda) {
        this._deuda = deuda;
    }
    toString() {
        return "Cliente[idCliente=" + this._idCliente + ", deuda=" + this._deuda + ", " + super.toString() + "]";
    }
}
let ContPersona = 0;
let ContEmpleado = 0;
let ContCliente = 0;

//objetos
let persona1 = new Persona("Juan", "Perez", 30);
let persona2 = new Persona("Pedro", "Gomez", 40);

console.log(persona1.toString());
console.log(persona2.toString());


let empleado1 = new Empleado("Pepe", "Perez", 30, 1000);
let empleado2 = new Empleado("Raul", "Gomez", 40, 2000);

console.log(empleado1.toString());
console.log(empleado2.toString());

let empleado3 = new Empleado("Juan", "Perez", 30, 1000);
let empleado4 = new Empleado("Pedro", "Gomez", 40, 2000);
console.log(empleado4.toString());

let cliente1 = new Cliente("Juan", "Perez", 30, 1000);
let cliente2 = new Cliente("Pedro", "Gomez", 40, 2000);
console.log(cliente1.toString());
console.log(cliente2.toString());