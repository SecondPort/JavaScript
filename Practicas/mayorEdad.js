//definir si una persona es mayor de edad o no
const adulto = 20;
function esMayor(edad){
    if(edad >= adulto){
        return true;
    }else{
        return false;
    }
}

console.log(esMayor(18));

