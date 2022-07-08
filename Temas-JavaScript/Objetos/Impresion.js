const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}

//concatenar aca valor de cada propiedad
let n1 = persona.nombre + ' ' + persona.apellido;
console.log(n1);

//for in
for(propiedades in persona){
    console.log(propiedades);
    console.log(persona[propiedades]);
}

let personaArray = Object.values(persona)
console.log(personaArray);

Object.values(persona).forEach(function(valor){
    console.log(valor);
}
);

let personaString = JSON.stringify(persona);
console.log(personaString);