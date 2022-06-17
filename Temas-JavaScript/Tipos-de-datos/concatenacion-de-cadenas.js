var nombre = "Pepe"
var apellido = "Perez"

var nombre_completo = nombre + " " + apellido
console.log(nombre_completo)

var nombre_completo2 = "pepe" + " " + "perez"
console.log(nombre_completo2)


//toma prioridad el tipo de dato de la izquierda
var x = nombre + " " + (2 + 4);
console.log(x);

x = 2 + 4 + " " + "pepe"
console.log(x);