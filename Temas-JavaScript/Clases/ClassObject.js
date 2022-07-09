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
    mostrar() {
        return `${this._marca} ${this._modelo} ${this._color}`;
    }
    //sobreescribimos el toString de la clase Object
    toString() {
        return `${this.mostrar()}`;
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
    mostrar() {
        return `${super.mostrar()} ${this._puertas} puertas`;
    }
}

let Vehiculo1 = new Vehiculo("Fiat", "500", "Rojo", "5");
console.log(Vehiculo1.toString());

let auto1 = new Auto("Ford", "Mustang", "Rojo", 5);
console.log(auto1.mostrar());
let nombre = auto1._marca;
console.log(nombre);
//se aplica polimorismo ya que el metodo mostrar() de la clase padre se sobreescribe
//y el metodo toString utiliza ese metodo
console.log(auto1.toString());