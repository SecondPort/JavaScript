/*Realizar la programacion de 6 clases que representaran a una computadora, el sitema estara compuesto por una clase computadora la cual tendra su id unico, nombre,monitor,teclado y raton, con sus respectivos metodos get y set, la clase monuitor contendra su id, marca, dimensiones y sus recpectivos metodos get y set, la clase orden contendra su id, las computadoras que esten dentro de esa orden con sus respectivos metodos get y set, y ademas tendra los metodos agregar computadora y mostrar orden, la clase dispositivo de entrada tendra el tipo de entrada y la marca del mismo con sus respectivos metodos get y set y tendra dos clases hijas, una sera la clase raton la cual tendra su id y la clase teclado que tambien tendra su id. realizar el codigo en javascript*/

class Computadora{
    constructor(id,nombre,monitor,teclado,raton){
        this.id=id;
        this.nombre=nombre;
        this.monitor=monitor;
        this.teclado=teclado;
        this.raton=raton;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    getMonitor(){
        return this.monitor;
    }
    setMonitor(monitor){
        this.monitor=monitor;
    }
    getTeclado(){
        return this.teclado;
    }
    setTeclado(teclado){
        this.teclado=teclado;
    }
    getRaton(){
        return this.raton;
    }
    setRaton(raton){
        this.raton=raton;
    }
}

class Monitor{
    constructor(id,marca,dimensiones){
        this.id=id;
        this.marca=marca;
        this.dimensiones=dimensiones;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
    getMarca(){
        return this.marca;
    }
    setMarca(marca){
        this.marca=marca;
    }
    getDimensiones(){
        return this.dimensiones;
    }
    setDimensiones(dimensiones){
        this.dimensiones=dimensiones;
    }
}

class Orden{
    constructor(id){
        this.id=id;
        this.computadoras=[];
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
    getComputadoras(){
        return this.computadoras;
    }
    setComputadoras(computadoras){
        this.computadoras=computadoras;
    }
    agregarComputadora(computadora){
        this.computadoras.push(computadora);
    }
    mostrarOrden(){
        console.log(`Orden: ${this.id}`);
        this.computadoras.forEach(computadora => {
            console.log(`Computadora: ${computadora.getNombre()}`);
            console.log(`Monitor: ${computadora.getMonitor().getMarca()}`);
            console.log(`Teclado: ${computadora.getTeclado().getMarca()}`);
            console.log(`Raton: ${computadora.getRaton().getMarca()}`);
        });
    }
}

class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this.tipoEntrada=tipoEntrada;
        this.marca=marca;
    }
    getTipoEntrada(){
        return this.tipoEntrada;
    }
    setTipoEntrada(tipoEntrada){
        this.tipoEntrada=tipoEntrada;
    }
    getMarca(){
        return this.marca;
    }
    setMarca(marca){
        this.marca=marca;
    }
}

class Raton extends DispositivoEntrada{
    constructor(id,tipoEntrada,marca){
        super(tipoEntrada,marca);
        this.id=id;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
}

class Teclado extends DispositivoEntrada{
    constructor(id,tipoEntrada,marca){
        super(tipoEntrada,marca);
        this.id=id;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
}

let computadora1=new Computadora(1,"HP",new Monitor(1,"LG",15),new Teclado(1,"USB","Logitech"),new Raton(1,"USB","Logitech"));
let computadora2=new Computadora(2,"Lenovo",new Monitor(2,"Samsung",17),new Teclado(2,"USB","Logitech"),new Raton(2,"USB","Logitech"));
let computadora3=new Computadora(3,"Dell",new Monitor(3,"LG",19),new Teclado(3,"USB","Logitech"),new Raton(3,"USB","Logitech"));
let computadora4=new Computadora(4,"Acer",new Monitor(4,"LG",21),new Teclado(4,"USB","Logitech"),new Raton(4,"USB","Logitech"));
let computadora5=new Computadora(5,"Asus",new Monitor(5,"LG",23),new Teclado(5,"USB","Logitech"),new Raton(5,"USB","Logitech"));
let computadora6=new Computadora(6,"Toshiba",new Monitor(6,"LG",25),new Teclado(6,"USB","Logitech"),new Raton(6,"USB","Logitech"));


let orden1=new Orden(1);
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);
orden1.mostrarOrden();

let orden2=new Orden(2);
orden2.agregarComputadora(computadora4);
orden2.agregarComputadora(computadora5);
orden2.agregarComputadora(computadora6);
orden2.mostrarOrden();
console.log(orden1.getComputadoras());