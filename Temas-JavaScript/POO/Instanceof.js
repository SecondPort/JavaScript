"use strict";
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

class Vacio{
    constructor(){
        this._nombre="";
        this._sueldo=0;
    }
    obtenerDetalles(){
        return `Nombre: ${this._nombre} | Sueldo: ${this._sueldo}`;
    }
}

//polimorfismo: multiples formas de hacer una misma accion(llamar a una funcion,
//que la puede llamar el padre o el hijo y se ejecuta segun quien la llame)
function imprimir(clase){
    console.log(clase.obtenerDetalles());
    if(clase instanceof Gerente){
        //solo responde ante clases hijas
        console.log("Es un objeto de tipo Gerente");
    }
    if(clase instanceof Empleado){
        console.log("Es un objeto de tipo Empleado");
    }
}

let empleado1 = new Empleado("Jose",1000);
let gerente1 = new Gerente("Carlos",1000,"Ventas");
imprimir(empleado1);
imprimir(gerente1);
