"use strict";
const operaciones = ["sumar", "multiplicar", "dividir"];
const calculator = (a, b, c) => {
    /*     if(operaciones.includes(c)){
            switch(c){
                case "sumar":
                    console.log(a + b);
                    break;
                case "multiplicar":
                    console.log(a * b);
                    break;
                case "dividir":
                    if(b === 0){
                        console.log("No se puede dividir por 0");
                    }
                    console.log(a / b);
                    break;
            }
        } */
    if (!operaciones.includes(c)) {
        console.log("Operacion no valida");
    }
    if (c === "sumar") {
        console.log(a + b);
    }
    if (c === "multiplicar") {
        console.log(a * b);
    }
    if (c === "dividir") {
        if (b === 0) {
            console.log("No se puede dividir por 0");
        }
        console.log(a / b);
    }
};
calculator(1, 3, "multiplicar");
//todo se realiza en tiempo de builde
const calculatorCleanCode = (a, b, c) => {
    if (c === "sumar") {
        console.log("El resultado de la suma es: ", a + b);
    }
    if (c === "multiplicar") {
        console.log("El resultado de la multiplicacion es: ", a * b);
    }
    if (c === "dividir") {
        if (b === 0) {
            console.log("No se puede dividir por 0");
        }
        console.log("El resultado de la division es: ", a / b);
    }
};
calculatorCleanCode(1, 3, "sumar");
const calculatorCleanCode2 = (a, b, c) => {
    if (!operaciones.includes(c)) {
        console.log("Operacion no valida");
    }
    if (c === "sumar") {
        console.log("El resultado de la suma es: ", a + b);
    }
    if (c === "multiplicar") {
        console.log("El resultado de la multiplicacion es: ", a * b);
    }
    if (c === "dividir") {
        if (b === 0) {
            console.log("No se puede dividir por 0");
        }
        console.log("El resultado de la division es: ", a / b);
    }
};
