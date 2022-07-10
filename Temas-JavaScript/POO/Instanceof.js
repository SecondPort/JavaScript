class Empleado{
    constructor(nombre,sueldo){
        this._nombre=nombre;
        this._sueldo=sueldo;
    }
    obtenerDetalles(){
        return `Nombre: ${this._nombre} | Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this._departamento=departamento;
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()} | Departamento: ${this._departamento}`;
    }
}

//polimorfismo: multiples formas de hacer una misma accion(llamar a una funcion,
//que la puede llamar el padre o el hijo y se ejecuta segun quien la llame)
function DeterminarTipo(clase){
    console.log(clase.obtenerDetalles());
    if(clase instanceof Gerente){
        //solo responde ante clases hijas
        console.log("Es un objeto de clase Gerente");
        console.log(clase._departamento);
    }
    else if(clase instanceof Empleado){
        console.log("Es un objeto de clase Empleado");
        console.log(clase.departamento);
    }
}

let empleado1 = new Empleado("Jose",1000);
let gerente1 = new Gerente("Carlos",1000,"Ventas");

DeterminarTipo(empleado1);
DeterminarTipo(gerente1);
