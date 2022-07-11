let a = document.getElementById("operandoA");
let b = document.getElementById("operandoB");

function sumar() {
    let resultado = parseInt(a.value) + parseInt(b.value);
    document.getElementById("resultado").innerHTML = "Resultado:" + resultado;
    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML = "Los elementos no son numericos";
    }
}