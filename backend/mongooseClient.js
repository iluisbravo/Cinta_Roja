const mongoose = require('mongoose')
mongoose.connect('mongodb://admin-prueba:myapp123@ds255930.mlab.com:55930/cintarojadb')
//console.log(mongoose.connection.readyState)

const Schema = mongoose.Schema,
    objectId = Schema.ObjectId


const alumnoSchema = new Schema({
    alumno: objectId,
    nombre: String,
    apellidos: String,
    edad: Number,
    email: String,
    city: String 
});

var Alumno = mongoose.model('Alumno',alumnoSchema);

module.exports = Alumno;