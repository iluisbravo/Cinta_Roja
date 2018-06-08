// Crear un objeto de tipo triangulo con atributos base y altura y tener el metodo  area y perimetro.
class Triangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    area(){
        console.log(this.base * this.altura / 2 + " Es el area del triángulo.")
    }

    perimetro(){
        console.log(3 * this.altura + " Es el perimetro del triángulo.")

    }
}

var triangulo = new Triangulo(3,3);
triangulo.area()
triangulo.perimetro();

// Crear un objeto tipo cuadrado y obtener el perimetro y area.
class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }

    perimetro(){
        console.log(4 * this.lado + " Es el perimetro del cuadrado.");
    }

    area(){
        console.log(this.lado * this.lado + " Es el area del cuadrado.")
    }
}

var cuadrado = new Cuadrado(5);
cuadrado.area();
cuadrado.perimetro();


// Crear un objeto tipo rectangulo y obtener el perimetro y area.
class Rectagulo{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }

    perimetro(){
        console.log((2 * this.base) * (2 * this.altura) + " Es el perimetro del rectangulo.");
    }

    area(){
        console.log(this.base * this.altura + " Es el area del rectangulo.");
    }

}

var rectangulo = new Rectagulo(4, 8);
rectangulo.perimetro();
rectangulo.area();



// Haz una clase llamada Persona que siga las siguientes condiciones:
// Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// calcularIMC()
// esMayorDeEdad()
// El constructor pide nombre, edad,sexo,peso y altura
// Generar el RFC a partir de el nombre, edad y sexo

class Persona{
    constructor(nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(){
        console.log("IMC es :" + this.peso / this.altura);
    }
    
    esMayorDeEdad(){
        if(this.edad >= 18){
            console.log("Es mayor de edad.");
        }
        else{
            console.log("Es menor de edad.");
        }
        
    }

    calculaRFC(){
        console.log("RFC es :" + this.nombre + this.edad + this.sexo);
    }
}

var eduardo = new Persona("Eduardo",25,"M", 88, 1.79);
eduardo.calculaIMC();
eduardo.esMayorDeEdad();
eduardo.calculaRFC();


// Crear un objeto Cuenta que tenga los siguientes atributos y metodos:
// Titular y cantidad
// ingresar(cantidad)
// retirar(cantidad)
// Hacer las validaciones previas

class Cuenta{
    constructor(titular){
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(cantidad){
        console.log("Se ingreso la cantidad de: " + cantidad);
        this.saldo = cantidad + this.saldo;

        console.log("El saldo actual es de: " + this.saldo);

    }

    retirar(cantidad){
        if(this.saldo > 0 && this.saldo >= cantidad){
            console.log("Se retiro la cantidad de: " + cantidad);
            this.saldo  = this.saldo - cantidad;
            console.log("El saldo actual es de: " + this.saldo);
        }
        else{
            console.log("El saldo actual no es suficiente para realizar el retiro de: "+ cantidad +", su saldo es de: " + this.saldo);
        }
    }
}

var cuenta = new Cuenta("Luis Bravo");
cuenta.ingresar(500);
cuenta.ingresar(100);
cuenta.retirar(200);
cuenta.retirar(500);