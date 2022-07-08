//funcion constructora de objetos de tipo persona
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

let padre = new Persona("Lucas","Moyano",20);
let hijo = new Persona();

console.log(padre.nombreC());
console.log(padre.NombreCArrow());

//Arow functions
console.log(hijo.nombreC());
console.log(hijo.NombreCArrow());