"use strict"
let result = "a";

try{
    //z = 10;
    if( isNaN(result) ){
        throw "El resultado no es un numero";
    }else if(result === ""){
        throw "El resultado es una cadena vacia";
    }else if(result >= 0 ){
        throw "El resultado es positivo";
    }else if(result < 0 ){
        throw "El resultado es negativo";
    }

}
catch(error){
    console.log(error);
/*     console.log(error.name);
    console.log(error.message); */
}