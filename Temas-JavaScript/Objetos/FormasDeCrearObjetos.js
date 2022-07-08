function Persona(nombre = "Juan",apellido = "Perez",edad = 20){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreC = function(){
        return this.nombre + " " + this.apellido;
    }
    this.NombreCArrow = () => {
        return this.nombre + " " + this.apellido;
    }
}

let miObjeto = new Object();
let miObjeto2 = {};//lo mas recomendable

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";//lo mas recomendable

let miNumero = new Number(10);
let miNumero2 = 10;//lo mas recomendable

let miBooleano = new Boolean(true);
let miBooleano2 = true;//lo mas recomendable

let miArray = new Array();
let miArray2 = [];//lo mas recomendable

let miFuncion = new Function();
let miFuncion2 = function(){};//lo mas recomendable