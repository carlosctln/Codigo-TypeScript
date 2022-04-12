let Sumar = function(a:number, b:number){
    return a + b;
}

console.log(Sumar(5,3));

let sumaFlecha =(a:number, b:number) => {
    return a + b;
}

console.log(sumaFlecha(2,3));

let obtenerNombre = function(){
    return 'Carlos';
}

let obtenerNombreFlecha = () => 'Carlos';

console.log(obtenerNombreFlecha());