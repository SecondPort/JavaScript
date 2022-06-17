var nombre = "Pepe"

console.log(typeof nombre)

//var objeto

var object = {
    nombre: "Pepe",
    apellido: "Perez",
    edad: 30
}

console.log(object)

nombre = 3,141592
console.log(typeof nombre)


//bool

var flag = true;
console.log(typeof flag)
console.log(flag)

//tipo de datos funciones
function sumar(a, b){
    return a + b
}

console.log(sumar(1,2))

//symbol
var simbolo = Symbol("simbolo")
console.log(typeof simbolo)

//clases son funciones
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

Persona.nombre = "Pepe"
Persona.apellido = "Perez"
Persona.edad = 30

console.log(typeof Persona)
console.log(Persona)

//tipo undefined
var x;
console.log(typeof x);

//null ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//arrays

var autos = ["Ford", "Chevrolet", "Fiat"];
console.log(autos);
console.log(typeof autos);
console.log(autos[0]);

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

//cadena vacia
var z = "";
console.log(z);
console.log(typeof z);