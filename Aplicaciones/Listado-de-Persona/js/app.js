const personas = [
    new Persona('Juan','Perez'),
    new Persona('Pedro','Perez')
];

function mostrarPersonas(){
    console.log("ejecutando");
    let texto = "";
    for(let i = 0; i < personas.length; i++){
        texto += `<li> ${personas[i].nombre} ${personas[i].apellido} </li>`;
        console.log(texto);
    }
    document.getElementById("personas").innerHTML = texto;
}

/**
 * It takes the values from the form and pushes them into the array.
 */
function agregarPersona(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    personas.push(new Persona(nombre,apellido));
    mostrarPersonas();
    document.getElementById("forma").reset();
}