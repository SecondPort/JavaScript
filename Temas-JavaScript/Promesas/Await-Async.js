async function PromesaAwait(){
    let miPromesa = new Promise((resolve) => {
        resolve('Hola con await');
    });
    let respuesta = await miPromesa;
    console.log(respuesta);
}

PromesaAwait();