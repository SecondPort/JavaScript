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

//uso de call para utilizar la funcion nombreC de persona
console.log(persona.nombreC.call(persona2,"ING","123456111"));