// Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del 
//empleado que más gana.
class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    getNombre(){
        return this.nombre;
    }

    getSueldo(){
        return this.sueldo;
    }
}

var listaEmpleado = [];

for(let x = 1; x <= 8; x++){
    var empleado = new Empleado("Empleado"+x,10000 * x);
    listaEmpleado.push(empleado);
}

var empleadoMasGana = (Empleados) => {
    var empleado = "";
    var sueldo = 0;

    for(let i = 0; i < Empleados.length; i++){
        if(Empleados[i].getSueldo() > sueldo){
            sueldo = Empleados[i].getSueldo();
            empleado = Empleados[i].getNombre();
        }
    }

    console.log("El empleado que mas gana es: " + empleado + " con un suedo de :" + sueldo);
    
}

empleadoMasGana(listaEmpleado);

// Guardar en un array los 20 primeros números pares.

var numerosPares = (numero) => {
    var numeros_pares = [];
    for(let x = 1; x <= numero; x++){
        if(numeros_pares.length <= 20){
            if(x % 2 == 0)
            numeros_pares.push(x);
        }
        else{
            return numeros_pares;
        }    
    }
}

console.log(numerosPares(100));

// Hacer una funcion que calcule el tiempo necesario para que un automóvil que se mueve 
//con una velocidad de 73000 m/h recorra una distancia de 120 km. (TIEMPO = d/v)



// Hacer los primeros 10 dígitost de serie Fibbonacci

var fibbonacci = () => {
    var serie = [];


    for(let x = 0; x < 10 ; x++){

        if(serie.length == 0){
            serie.push(0);
        }
        else{
            if(serie[x-1] == 0){
                serie.push(1);
            }
            else{
                var f = serie[x-1] + serie[x-2];
                serie.push(f);
            }
        }

    }

    return serie;
}
console.log(fibbonacci());
// Crear una funcion que reciba como parametro una oración y defina si es palindromo.

var palindromo = (palabra) => {
    var palabraSplit = palabra.split("");
    var palabraSplitReverse = palabraSplit.reverse();
    var palabraJoin = palabraSplitReverse.join("");

   var isPalindromo = palabra == palabraJoin ?  "Es un palindromo" :  "No es palindromo";

   return isPalindromo;
}

console.log(palindromo("ANALO"));