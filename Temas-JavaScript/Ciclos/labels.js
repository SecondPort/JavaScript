//continue
inicio:
for(i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        continue inicio;//ir a la siguinte iteracion
    }
    else{
        console.log(`${i} es par`);
    }
}

//break
inicio:
for(i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        break inicio;//ir a la siguinte iteracion
    }
    else{
        console.log(`${i} es par`);
    }
}