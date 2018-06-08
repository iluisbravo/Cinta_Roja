class Animal {
    constructor(nombre,peso){
        this.nombre = nombre;
        this.peso = peso;
    }

    getNombre(){
        return this.nombre;
    }

    comer(comida){
        return 'Esta comiendo ' + comida;
    }
}

class Perro extends Animal{
    constructor(nombre,peso,raza,color){
        super(nombre,peso);
        this.raza = raza;
        this.color = color;
    }

    ladrar(){
        return 'Woow';
    }
}

var fido = new Perro("Kazan",10,"Husky","Blanco");
console.log(fido);
console.log(fido.getNombre());
console.log(fido.comer("croquetas"));

