// Crear la clase construcción que hereda a otras dos clases “casa” y “edificio”
// Sus atributos son: num puertas,num ventanas ,  num piso, direccion, altura,largo y ancho del tereno
// Cada uno tiene un metodo que regresa los metros cuadrados 
// Un metodo que regrese su direccion 
// Un metodo que permita modificar su direccion

class Construcion{
    constructor(num_puertas, num_ventanas, num_pisos, direccion, altura, largo, ancho){
        this.num_puertas = num_puertas;
        this.num_ventanas = num_ventanas;
        this.num_pisos = num_pisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo ;
        this.ancho = ancho;
    }

    metrosCuadrados(){
        return "Metros cuadrados: " + this.largo * this.ancho;
    }

    getDireccion(){
        return "Direccion: " + this.direccion;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }
}

class Casa extends Construcion{
    constructor(num_puertas, num_ventanas, num_pisos, direccion, altura, largo, ancho){
        super(num_puertas, num_ventanas, num_pisos, direccion, altura, largo, ancho);
    }
}

class Edificio extends Construcion{
    constructor(num_puertas, num_ventanas, num_pisos, direccion, altura, largo, ancho){
        super(num_puertas, num_ventanas, num_pisos, direccion, altura, largo, ancho);
    }
}

var casa = new Casa(4,2,1,"Direccion 1", 4,5,1);
var edificio = new Edificio(8,4,2,"Direccion 2", 8,8,5);

console.log(casa.metrosCuadrados());
console.log(casa.getDireccion());
casa.setDireccion("Direccion nuevo 1");
console.log(casa.getDireccion());

console.log(edificio.metrosCuadrados());
console.log(edificio.getDireccion());
edificio.setDireccion("Direccion nuevo 2");
console.log(edificio.getDireccion());