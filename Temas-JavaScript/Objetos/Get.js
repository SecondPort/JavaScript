const persona = {
    nombre: 'Lucas',
    apellido: 'Moyano',
    edad: 20,
    get nombreC () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreC);

