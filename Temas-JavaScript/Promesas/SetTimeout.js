let miPromesa = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Todo bien');
    }, 2000);
});

//uso de setTimeout
miPromesa.then(valor => console.log(valor));