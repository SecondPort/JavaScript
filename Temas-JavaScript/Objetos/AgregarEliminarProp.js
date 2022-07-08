let persona = Object.create(Object.prototype);
persona.nombre = 'Lucas';
persona.apellido = 'Moyano';
persona.edad = 20;
console.log(persona);

//se agrega una nueva propiedad al obejeto
persona.nom = "luc";
console.log(persona);

delete persona.nom;
console.log(persona);