function Persona(nombre = "Juan",apellido = "Perez",edad = 20){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreC = function(){
        return this.nombre + " " + this.apellido;
    }
    this.NombreCArrow = () => {
        return this.nombre + " " + this.apellido;
    }
}

//agrega prpiedades al objeto
Persona.prototype.tel = "123456789";

let padre = new Persona("Lucas","Moyano",20);
padre.tel = "123456711";
console.log(padre.tel);

let hijo = new Persona();
console.log(hijo.tel);

hijo.tel = "123456711";
console.log(hijo.tel);
