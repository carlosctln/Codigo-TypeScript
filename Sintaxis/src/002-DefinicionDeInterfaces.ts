interface Usuario{
    nombreUsuario:string;
    password:string;
    confirmarPassword?:string; //El signo de interogacion indica que el atributo es opcional
}

let usuario1:Usuario = {nombreUsuario: 'Carlos', password: '123', confirmarPassword: '123'};

console.log(usuario1);
console.log(usuario1.nombreUsuario);

interface Abordar{
    abordarTransporte():void
}

let avion: Abordar = {
    abordarTransporte: function(){
        console.log('Abordando');
    }
}

avion.abordarTransporte();