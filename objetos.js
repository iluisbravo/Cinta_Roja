class Perro{

    constructor(color,pelaje,raza,tamano){
        //Atributos 
        console.log("Se ejecuto el metodo");
        this.color = color;
        this.pelaje = pelaje;
        this.raza = raza;
        this.tamano = tamano;
    }


    //Metodos
    nacer(){
        console.log("Ya naci");  
    }

    ladrar(){
        console.log(this.raza + " esta ladrando.");
    }

    getColor(){
        console.log(this.color);
    }

    setColor(color){
        this.color = color;
        console.log(this.color);
    }
}

var fido = new Perro("Negro","Largo","Pug","Chiquito");
fido.ladrar();
console.log(fido);
fido.getColor();
fido.setColor("Verde");
fido.color = "Blanco";
console.log(fido.color);