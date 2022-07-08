const Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
/*     nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    }, */
    NombreC: (a) => {
        return `${a.nombre} ${a.apellido}`;
    }
}

const Persona2 = {
    nombre: 'Lucas',
    apellido: 'Moyano',
    edad: 20,
}

/* let nombreC = Persona.nombreCompleto();
console.log(nombreC);
 */
let nombreC = Persona.NombreC(Persona);
console.log(nombreC);

let nombreC2 = Persona.NombreC(Persona2);
console.log(nombreC2);