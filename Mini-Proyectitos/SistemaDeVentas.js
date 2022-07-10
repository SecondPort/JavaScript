/*Realizar la programacion de dos clases para un sistema de ventas, en el cual la clase Producto cuanta con un id unico para cada producto que se agrega, un nombre y su precio, cada uno con sus respectivos metodos get y set. La clase orden contendra un id orden unico por cada orden que se agrega, un metodo para agregar productos, otro para calcular el total de la orden y luego para mostrar la orden*/

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    getId() {
        return this.id;
    }
    getNombre() {
        return this.nombre;
    }
    getPrecio() {
        return this.precio;
    }
    setId(id) {
        this.id = id;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
}

class Orden {
    constructor(id) {
        this.id = id;
        this.productos = [];
    }
    getId() {
        return this.id;
    }
    getProductos() {
        return this.productos;
    }
    setId(id) {
        this.id = id;
    }
    setProductos(productos) {
        this.productos = productos;
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.productos.length; i++) {
            total += this.productos[i].getPrecio();
        }
        return total;
    }
    mostrarOrden() {
        let orden = "";
        for (let i = 0; i < this.productos.length; i++) {
            orden += `${this.productos[i].getNombre()} $${this.productos[i].getPrecio()}\n`;
        }
        return orden;
    }
}

let producto1 = new Producto(1, "Papas", 10);
let producto2 = new Producto(2, "Coca-Cola", 5);
let producto3 = new Producto(3, "Hamburguesa", 15);
let producto4 = new Producto(4, "Pollo", 20);

let orden1 = new Orden(1);
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);

console.log(orden1.mostrarOrden());
console.log(orden1.calcularTotal());