const express = require('express');
var app = express();
const bodyParser = require('body-parser');

const Alumno = require('./mongooseClient');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Crear estudiantes
app.post('/api/v1/user/create',(req,res) =>{
    const {nombre, apellidos, edad} = req.body;

    let nuevoAlumno = Alumno({
        nombre,
        apellidos,
        edad
    })

    nuevoAlumno.save((error,success) =>{ //success es el formato json que se guardo
        if(error) throw error;
        res.status(201).send(success);
    });

});

//Obtener lista de alumnos
app.get('/api/v1/alumnos/', (req,res) => {
    Alumno.find().exec().then(alumnos => {  //exec significa que se trata de una promesa
        res.status(200).send(alumnos);
    }).catch(err => {
        res.send(err);
    });
});

//Obtener alumno por id
app.get('/api/v1/alumnos/:uid',(req,res) => {
    const {uid} = req.params;
    Alumno.findById(uid).exec().then(alumno => {
        res.status(200).send(alumno);
    }).catch(error => {
        res.status(404).send(error);
    });
});

//Eliminar estudiante por id
app.delete('/api/v1/alumnos/:uid',(req,res) => {
    const {uid} = req.params;
    Alumno.findByIdAndRemove(uid).exec().then(alumno => {
        res.status(200).send(alumno);
    }).catch(error => {
        res.status(404).send(error);
    });
});

//Actualiza datos de los estudiantes
app.put('/api/v1/alumnos/:uid',(req,res) =>{
    const {uid} = req.params;

    const {nombre, apellidos, edad, email, city} = req.body;
    
    let nuevoAlumno = {
        nombre,
        apellidos,
        edad,
        email,
        city
    };

    Alumno.findByIdAndUpdate(uid,nuevoAlumno,{new: true}).exec().then(alumno => {  //{new: true} Retorna el estudiante actualizado, si se lo quitamos el parametro regresa el mismo sin ningun cambio pero si actualiza
        res.status(200).send(alumno);
    }).catch(error => {
        res.status(404).send(error);
    });

});

app.listen(3000,() => {
    console.log('Server on 3000');
});
