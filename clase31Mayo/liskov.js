class Largometraje{
    constructor(tiempo){
        this.tiempo = tiempo;
    }

    getTiempo(){
        return this.tiempo;
    }
}

class Pelicula extends Largometraje{
    constructor(tiempo,genero){
        super(tiempo);
        this.genero = genero;
    }
}

class Documental extends Largometraje{
    constructor(tiempo, director){
        super(tiempo);
        this.director = director;
    }
}

class Cine{
    constructor(largometraje){
        this.largometraje = largometraje;
    }

    reproducir(){
    return "Reproduciendo..." + this.largometraje.getTiempo();
    }
}

var doc = new Documental("90 min", "Petter");
var peli = new Pelicula("120 min", "Accion");

var cine = new Cine(peli);
console.log(cine.reproducir());