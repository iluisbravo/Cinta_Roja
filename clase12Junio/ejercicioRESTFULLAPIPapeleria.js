// Crea una 	REST FULL API que tenga para una papelería:
// Los artículos tienes los siguientes elementos:
// 	- Nombre
// 	- Precio
// 	- Existencia
// 	- Descripcion
// Crear el CRUD completo para los artículos de la palera
const express = require('express');
var app = express();
const bodyParser = require('body-parser');

const gralSchema = require('./mongooseClientPapeleria');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//CREATE
app.post('/api/v1/articulo',(req,res) => {
    const {nombre,precio,existencia,descripcion} = req.body;

    let nuevoArticulo = gralSchema.Articulo({
        nombre,
        precio,
        existencia,
        descripcion
    });

    nuevoArticulo.save((error,success) => {
        if(error) throw error;
        res.status(201).send(success);
    });
});

//READ ALL
app.get('/api/v1/articulos/', (req,res) => {
    gralSchema.Articulo.find().exec().then(articulos => {
            res.send(articulos);
    }).catch(error => {
        res.status(404).send(error)
    });
});

//READ BY ID
app.get('/api/v1/articulos/:uid', (req,res) => {
    const {uid} = req.params;
    gralSchema.Articulo.findById(uid).exec().then(articulo => {
            res.send(articulo);
    }).catch(error => {
        res.status(404).send(error)
    });
});

//UPDATE
app.put('/api/v1/articulos/:uid',(req,res) => {
    const {uid} = req.params;

    const {nombre, precio,existencia, descripcion}  = req.body;

    let updateArticulo = {
        nombre,
        precio,
        existencia,
        descripcion
    }
    gralSchema.Articulo.findByIdAndUpdate(uid,updateArticulo,{new:true}).exec().then(articulo => {
        res.status(200).send(articulo);
    }).catch(error => {
        res.status(404).send(error);
    });
});

//DELETE
app.delete('/api/v1/articulos/:uid',(req,res) => {
    const {uid} = req.params;
    
    gralSchema.Articulo.findByIdAndRemove(uid).exec().then(articulo => {
        res.status(200).send(articulo);
    }).catch(error => {
        res.status(404).send(error);
    })
});

// Crear el modelo Factura con los siguiente elementos:
// 	- RFC
// 	- Articulos Comprados
// 	- Sub total
// 	- iva 
// 	- total
// Crear el CRUD completo para la factura (subTotal,iva y total se inician en 0)
// Crear un endpoint para calcularl el subtotal, iva y total de la compra


//CREATE FACTURAS
app.post('/api/v1/facturas/', (req,res) =>{
    const {rfc,articulos_comprados, subtotal,iva,total} = req.body;

    let nuevaFactura = gralSchema.Factura({
        rfc,
        articulos_comprados,
        subtotal : 0,
        iva : 0,
        total :0
    });

    nuevaFactura.save((error,success) => {
        if(error) throw error;
        res.status(200).send(success);
    });

});

//READ ALL FACTURAS
app.get('/api/v1/facturas',(req,res) => {
    gralSchema.Factura.find().exec().then(facturas => {
        res.status(200).send(facturas);
    }).catch(error => {
        res.status(404).send(error);
    });
});

//READ BY ID FACTURAS
app.get('/api/v1/facturas/:uid', (req,res) => {
    const {uid} = req.params;
    gralSchema.Factura.findById(uid).exec().then(factura => {
        res.status(200).send(factura);
    }).catch(error => {
        res.status(404).send(error);
    });
});

//UPDATE FACTURAS
app.put('/api/v1/facturas/:uid',(req,res) => {
    const {uid} = req.params;

    let {rfc,articulos_comprados,subtotal,iva,total} = req.body;

    let updateFactura = { rfc,articulos_comprados,subtotal,iva,total }

    gralSchema.Factura.findByIdAndUpdate(uid, updateFactura,{new:true}).exec().then().catch();
});

//DELETE FACTURAS
app.delete('/api/v1/facturas/:uid',(req, res) => {
    const {uid} = req.params;
    
    gralSchema.Factura.findByIdAndRemove(uid).exec().then(factura => {
        res.status(200).send(factura);
    }).catch(error => {
        res.status(404).send(error);
    });
});

//CREAR COMPRA
app.put('/api/v1/facturas/compra/:uid', (req,res) =>{
    const {uid} = req.params;

    let subtotal = 0, iva = 0, total = 0;

    gralSchema.Factura.findById(uid).exec().then(factura => { 
        
        factura.articulos_comprados.map( elem => {
        gralSchema.Articulo.findById(elem).exec().then(articulo => {
            subtotal = subtotal + articulo.precio;
        }).catch(error => {return error});
         
      });

        iva  = 0.16*subtotal;
        total = subtotal + iva;
    
        let facturaCalculada = {
        subtotal : subtotal,
        iva : iva,
        total : total
         };

         gralSchema.Factura.findByIdAndUpdate(uid, facturaCalculada, {new: true}).exec().then(factura => {
             res.status(200).send(factura);
         }).catch(error => { res.status(404).send(error) });

    }).catch( error => {res.status(404).send(error)});
  
});

app.listen(3000,() => {
    console.log('Server on 3000');
});



