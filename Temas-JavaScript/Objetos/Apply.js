let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    nombreC: function(titulo,tel){
        return titulo + " " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let persona2 = {
    nombre: "Lucas",
    apellido: "Moyano",
    edad: 20
}

console.log(persona.nombreC("LIC","124546543"));

//uso de call para utilizar la funcion nombreC de persona
let arg = ["ING","124546111"];
console.log(persona.nombreC.apply(persona2,arg));