let hora = 10;
let mensaje;

if(hora >=6 && hora <=11){
    mensaje = "Buenos dias";
    console.log(mensaje);
}
else if(hora >=12 && hora <=17){
    mensaje = "Buenas tardes";
    console.log(mensaje);
}
else if(hora >=18 && hora <=23){
    mensaje = "Buenas noches";
    console.log(mensaje);
}
else if ( hora >= 0 && hora < 6){
    mensaje = "Durmiendo";
    console.log(mensaje);
}