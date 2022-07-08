const autos = ['Ford', 'Chevrolet', 'Toyota', 'Honda'];

console.log(autos[0]);
console.log(autos[1]);

//recorrer todo el array
autos.forEach(function(auto, index){
    console.log(`${index + 1}. ${auto}`);
}
);

for(let i = 0; i < autos.length; i++){
    console.log(`${i + 1}. ${autos[i]}`);
}