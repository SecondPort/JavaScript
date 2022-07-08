//formas de crear objetos

    //1. new Object()
    //2. Object.create()
    //3. Object.assign()
    //4. Object.defineProperty()
    //5. Object.defineProperties()
    //6. Object.freeze()
    //7. Object.seal()
    //8. Object.prototype.toString()
    //9. Object.prototype.valueOf()
    //10. Object.prototype.hasOwnProperty()

let persona2 = new Object();
persona2.nombre = 'Juan';
persona2.apellido = 'Perez';
persona2.edad = 20;
console.log(persona2);
console.log(persona2.nombre);
