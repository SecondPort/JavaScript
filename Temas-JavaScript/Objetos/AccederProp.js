//otras formas de acceder a las propiedades de un objeto
//1. objeto.propiedad
//2. objeto['propiedad']
//3. objeto.propiedad.subpropiedad
//4. objeto['propiedad'].subpropiedad
//5. objeto.propiedad['subpropiedad']
//6. objeto['propiedad']['subpropiedad']
//7. objeto.propiedad.subpropiedad.subsubpropiedad

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}
let n1 = persona['nombre'];
console.log(n1);

let n2 = persona.nombre.replace('Juan', 'Lucas');
console.log(n2);

let n3 = persona['nombre'].replace('Juan', 'Pepe');
console.log(n3);

//for in
for(propiedades in persona){
    console.log(propiedades);
    console.log(persona[propiedades]);
}