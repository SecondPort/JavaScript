//funcion constructora de objetos de tipo persona
function Persona(nombre = "Juan",apellido = "Perez",edad = 20){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

let padre = new Persona('Lucas','Moyano',50);
let hijo = new Persona();
console.log(padre);
console.log(hijo);

let madre = new Persona('Maria','Perez',40);
console.log(madre);
