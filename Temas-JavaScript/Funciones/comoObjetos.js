function sumar(a, b) {
    //saber cuantos argumentos tiene la funcion(se debe llamar desde dentro de la funcion)
    console.log(arguments.length);
    return a + b;
}

console.log(typeof sumar);

let r = sumar(4, 6);
console.log(r);

//funcion text
let sumarTexto = sumar.toString();
console.log(sumarTexto);