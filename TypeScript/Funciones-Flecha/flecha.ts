let suma = function (a: number, b: number): number {
    return a + b;
}
let sumaFlecha = (a: number, b: number): number => a + b;

console.log(suma(5, 2));
console.log(sumaFlecha(10, 2));

let a:number = 0;
console.log(a);
let modif = ():void => {
    a = 5;
}
modif();
console.log(a);

class Persona {
    nombre: string;
    apellido: string;
    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    setNombre = (nombre: string):void => {
        this.nombre = nombre;
    }
    setApellido = (apellido: string):void => {
        this.apellido = apellido;
    }
    getNombre = ():string => {
        return this.nombre;
    }
    getApellido = ():string => {
        return this.apellido;
    }
}

console.log("\n");
let persona1 = new Persona("Juan", "Perez");
persona1.setNombre("Lucas");
persona1.setApellido("Gonzalez");
console.log(Persona);