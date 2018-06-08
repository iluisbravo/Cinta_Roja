
//Funcion no anonima 
function suma(a,b){ 
    return a+b;
}

//Funcion anonima asignada en una variable suma1
var suma1 = function(a,b){
    return a+b;
}

//Funcion anonima asignada en una variable suma2 con parametros
var suma2 = (a,b) => a + b;

//Funcion anonima asignada en una variable suma2 con cuerpo de funcion con parametros
var suma2 = (a,b) => {
    a + b
};

//Funcion anonima asignada en una variable suma2 con cuerpo de funcion con parametro
var suma2 = (b) => {
    b*2
};

//Funcion anonima asignada en una variable suma2 con cuerpo de funcion sin parametros
var suma2 = () => {
    0
};

var x =  suma1(6,6);
console.log(x);
