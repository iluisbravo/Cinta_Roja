var lista = [1,3,2,5,4,6,8,9,0,7]
lista.map((x,y,z) => {
    //console.log(y);
});

var obj = [
    {nombre:"luis", data:"HOla"},
    {nombre:"luis", data:"HOla"},
    {nombre:"luis", data:"HOla"}
]

var tasks = [
    {
        name :"act1",
        duration : 60
    },
    {
        name :"act2",
        duration : 80
    },
    {
        name :"act3",
        duration : 160
    }
]

let nuevaLista = tasks.filter((x,y,z) => {
    return x.duration > 90
});

console.log(nuevaLista);
