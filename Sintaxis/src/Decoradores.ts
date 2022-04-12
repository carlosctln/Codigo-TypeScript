function saludar(target:Function): void {
    target.prototype.saludos1 = function():void{
        console.log('Hola desde decoradores');
    }
}
@saludar
class Hola1{
    constructor(){

    }
}

let hola1 = new Hola1();
hola1.saludos1();
