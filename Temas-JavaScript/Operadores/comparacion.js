let a = 3, b = 2, c = "3";

let z = a == b;//se revisa el valor sin importar el tipo de dato
console.log(z);

z = a == c;//se revisa el valor sin importar el tipo de dato
console.log(z);

z = a === c;//revisa si los valores son iguales y tambien los tipos
console.log(z);