//almacena una referencia de este objeto
const Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}
console.log(Persona);

function cambiarNombre(persona){
    persona.nombre = 'Pedro';
}
function cambiarEdad(persona){
    persona.edad = 30;
}

//paso por referencia
cambiarNombre(Persona);
cambiarEdad(Persona);
console.log(Persona);