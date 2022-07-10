funcion2();
funcion1();

function funcion1(){
    console.log("funcion1");
}
function funcion2(){
    console.log("funcion2");
}

//funcion de tipo callback
function imprimir(mensaje){
    console.log("Resultado " + mensaje);
}

function sumar(a, b, CallBack){
    var resultado = a+b;
    CallBack(resultado);
}

sumar(4,6,imprimir);