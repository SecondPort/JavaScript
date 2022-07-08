const persona = {
    nombre: 'Lucas',
    apellido: 'Moyano',
    edad: 20,
    idioma : 'es_ar',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang (idioma) {
        this.idioma = idioma.toUpperCase();
    },
    get nombreC () {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreC);
console.log(persona.lang);

//-------------------------//
persona.lang = 'en_us';
console.log(persona.lang);
console.log(persona.idioma);

