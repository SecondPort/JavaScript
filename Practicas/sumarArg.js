let r = sumarTodo(4,4,1,5,1,1,100);
console.log(r);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}