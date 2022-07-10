let miPromesa = new Promise((resolve, reject) => {
    let expresion = true;
    if (expresion) {
        resolve('Todo bien');
    }
    else {
        reject('Todo mal');
    }
});

/* miPromesa.then(valor => console.log(valor),
    error => console.log(error)); */

miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));