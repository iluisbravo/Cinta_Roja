const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",(req,res) =>{
    res.send("HOLA DESDE EXPRESS");
});

app.get('/user',(req,res) => {
    res.send({message:"Rute de user"})
})

app.get('/user/:uid',(req,res) => {
    console.log(req.params); 
    let {uid} = req.params;  //  let {uid} = req.params => let uid = req.params.uid
    res.send({message:"el id que escribiste fue: "+ uid});
})

app.get('/busqueda',(req,res) => {
    console.log(req.query);
    let  {q, nombre} = req.query;
    res.send({q, nombre}); //{q: q, nombre: nombre} => {q, nombre}
});

// Crear la ruta /suma que reciba como path dos numeros y retorne la suma de ellos
app.get('/suma/:numero1/:numero2',(req,res) => {
    console.log(req.query);
    let  {numero1, numero2} = req.query;
    res.send({message: "La suma es de: " + (Number(numero1) + Number(numero2))}); //{q: q, nombre: nombre} => {q, nombre}
});
// Crear la ruta /multiplicacion que reciba como query dos numeros y retorne la
// multiplicacion de ellos
app.get('/multiplicacion',(req,res) => {
    console.log(req.query);
    let  {numero1, numero2} = req.query;
    res.send({message: "La multiplicacion es de: " + (parseInt(numero1) * parseInt(numero2))}); //{q: q, nombre: nombre} => {q, nombre}
});

app.post('/create/user/',(req,res) => {
    let {nombre,apellido} = req.body;
    res.status(201).send({nombre,apellido});
});



app.listen(3000,() => {
    console.log('Server on 3000');
});