for(i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        continue;//ir a la siguinte iteracion
    }
    else{
        console.log(`${i} es par`);
    }
}