interface Usuario {
    nombre:string;
    password:string;
    confirmarPassword?:string;
    //atributo opcional
}

let usuario:Usuario = {
    nombre:"Juan",
    password:"123456",
    confirmarPassword:"123456"
}

console.log(usuario);
console.log(usuario.nombre);

interface Abordar{
    abordar():void;
}

let avion:Abordar = {
    abordar(){
        console.log("Abordando");
    }
}

avion.abordar();