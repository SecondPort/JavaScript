let mes = 12;
let estacion = "";

switch (mes) {
    case 1: case 2: case 3:
        estacion = "invierno";
        break;
    case 4: case 5: case 6:
        estacion = "primavera";
        break;
    case 7: case 8: case 9:
        estacion = "verano";
        break;
    case 10: case 11: case 12:
        estacion = "otonio";
        break;
    default:
        estacion = "valor desconocido";
}

console.log(estacion);