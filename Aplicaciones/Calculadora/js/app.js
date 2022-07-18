let a = document.getElementById("operandoA");
let b = document.getElementById("operandoB");

/**
 * The function sumar() takes the values of the input fields a and b, converts them to integers, adds
 * them together, and displays the result in the element with the id resultado.
 * 
 * If the values of a and b are not numbers, the function displays a message in the element with the id
 * resultado.
 */
function sumar() {
    let resultado = parseInt(a.value) + parseInt(b.value);
    document.getElementById("resultado").innerHTML = "Resultado:" + resultado;
    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML = "Los elementos no son numericos";
    }
}