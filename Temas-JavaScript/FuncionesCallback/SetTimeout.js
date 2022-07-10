//llamadas asincronas con uso setTimeout
function mifuncion(){
    console.log("Saludo asincrono despues de 3 seg");
}
setTimeout(mifuncion,3000);

setTimeout(function(){console.log("Saludo asincrono despues de 4 seg")},4000);

setTimeout(()=>{console.log("Saludo asincrono despues de 5 seg")},5000);