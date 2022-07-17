function Saludar(target:Function):void{
    target.prototype.saludos = function():void{
        console.log("Hola desde decorator");
    }
}
@Saludar
class Hola{
    constructor(){}
}

let hola1 = new Hola();
hola1.saludos();