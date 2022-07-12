const reloj = () => {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    let reloj_Div = document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;
}
const formatoHora = (hora) => {
    if (hora < 10) {
        hora = `0${hora}`;
    }
    return hora;
}

setInterval(reloj, 1000);

const fecha = () => {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let año = fecha.getFullYear();
    let fecha_completa = `${dia}/${mes}/${año}`;
    console.log(fecha_completa);
    let fecha_Div = document.getElementById('fecha').innerHTML = `${dia}/${mes}/${año}`;
}

setInterval(fecha, 1000);