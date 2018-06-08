// 1.- Crear un objeto de tipo Figura que herede de tipo triangulo y rectangulo y que compartan caracteristicas.
class Figura{
    constructor(nombre,lados){
        this.lados = lados;
        this.nombre = nombre;
    }

    getLados(){
        return this.lados;
    }

    setLados(lados){
        this.lados = lados;
    }
}

class Triangulo extends Figura{
    constructor(nombre,lados){
        super(nombre,lados);
    }
}

class Rectangulo extends Figura{
    constructor(nombre,lados){
        super(nombre,lados);
    }
}

var triangulo = new Triangulo("Triangulo",3);
console.log(triangulo.getLados());

var rectangulo = new Rectangulo("Rectangulo",4);
console.log(rectangulo.getLados());




// 2.-Crearemos una supeclase llamada Electrodomestico con las siguientes características:
// 	Sus atributos son precio, color, consumo energético y peso.
// 	El constructor debe de pedir precio, color y peso.
class Electrodomestico {
    constructor(precio, color, peso){
        this.precio = precio;
        this.color = color;
        this.peso = peso;
        this.consumo_energetico = null;
    }

    setConsumoEnergetico(consumo_energetico){
        this.consumo_energetico = consumo_energetico;
        return this.consumo_energetico;
    }
}

class Lavadora extends Electrodomestico {
    constructor(ropa_kg,precio,color,peso){
        super(precio,color,peso);
        this.ropa_kg = ropa_kg;
    }

    precioFinal(){

    }
}

// 3.- Crearemos una subclase llamada Lavadora con las siguientes características:
// Su atributo es carga(kg de ropa), ademas de los atributos heredados.
// Crear el metodo precioFinal() (El precio de el consumo energético por la carga)