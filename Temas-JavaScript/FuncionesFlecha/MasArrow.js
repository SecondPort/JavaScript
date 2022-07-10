const sumar = (a, b) => a + b;
const saludar = () => console.log("saludo");
const regresaOBJ = () => ({ nombre: "Juan", edad: 30 });
const regresaArr = () => ["Juan", "Pedro", "Maria"];
const regresaFunc = () => (a, b) =>{
    let r = a + b;
    return `${a} + ${b} = ${r}`;
}


saludar();
console.log(sumar(2, 3));

console.log(regresaOBJ());

console.log(regresaArr());

console.log(regresaFunc()(4,5));