class Vehiculo {
    constructor(marca, modelo, color) {
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    set color(color) {
        this._color = color;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, color, puertas) {
        super(marca, modelo, color);//llamada al constructor de la clase padre
        this._puertas = puertas;
    }
    get puertas() {
        return this._puertas;
    }
    set puertas(puertas) {
        this._puertas = puertas;
    }
}

let auto1 = new Auto("Ford", "Mustang", "Rojo", 5);
let nombre = auto1._marca;
console.log(nombre);