//async indica que una funcion regresa una promesa
async function MiFuncion() {
    return "Hola async";
}

miFuncion().then(function(resultado) {
    console.log(resultado);
});   //el resultado de la promesa se pasa a la funcion
