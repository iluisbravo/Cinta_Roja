const request = require('request');

function getDirection(direccion){
    return new Promise((resolve, reject) => {
        let direccionQuery = direccion.replace(" ","+");
        request.get("https://maps.googleapis.com/maps/api/geocode/json?address="+direccionQuery+"&key=AIzaSyDNlcqrBTbR6rgkzeS0as4sy43yg9fVn1Y",
        (error,response,body) => {
            response.statusCode == 200 ? resolve(JSON.parse(body)) : reject('Eror en la peticion');
        });
    });
}

getDirection("San Melessio 4")
.then((result) => {
    console.log(result.status);
    console.log(result);
})
.catch((error) => {console.log(error)})
