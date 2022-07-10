//promesas await, async, setTimeout

async function PromesaAwait(){
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Hola con await'), 3000);
    });
    console.log(await miPromesa);
    console.log('Fin de la promesa');
}

PromesaAwait();