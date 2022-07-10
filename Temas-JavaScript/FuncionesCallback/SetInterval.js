let reloj = () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let horaFormateada = `${hora}:${minutos}:${segundos}`;
    return console.log(horaFormateada);
}
setInterval(reloj, 1000);