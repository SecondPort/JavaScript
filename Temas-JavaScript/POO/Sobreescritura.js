class Empleado{
    constructor(nombre,sueldo){
        this._nombre=nombre;
        this._sueldo=sueldo;
    }
    obtenerDetaller(){
        return `Nombre: ${this._nombre} | Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento=departamento;
    }
    obtenerDetaller(){
        return `${super.obtenerDetaller()} | Departamento: ${this._departamento}`;
    }
}

let gerente1 = new Gerente("Carlos",1000,"Ventas");
console.log(gerente1);
console.log(gerente1.obtenerDetaller());