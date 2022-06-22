let num = "20";
console.log(typeof num);
/*--------------------------------------- */
const mayor = "18";
let edad = Number(mayor);
console.log(typeof edad);

if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

let EsMayor = (edad >= mayor) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(EsMayor);