let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    nombreC: function(){
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre: "Lucas",
    apellido: "Moyano",
    edad: 20
}

//uso de call para utilizar la funcion nombreC de persona
console.log(persona.nombreC.call(persona2));