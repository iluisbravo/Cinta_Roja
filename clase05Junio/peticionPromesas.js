const request = require('request');


function peticionPromesa(){
   return new Promise((resolve,reject) => {
        request.get("https://swapi.co/api/people/8", (error,response,body) => {
            // if(response.statusCode == 200){
            //     resolve(JSON.parse(body));
            // }
            // else{
            //     reject('Error en la peticion');
            // }

            response.statusCode == 200 ? resolve(JSON.parse(body)) : reject('Error en la peticion');

        });
    });
}

function peticionPromesa2(url){
    return new Promise((resolve,reject) => {
         request.get(url, (error,response,body) => {
             // if(response.statusCode == 200){
             //     resolve(JSON.parse(body));
             // }
             // else{
             //     reject('Error en la peticion');
             // }
 
             response.statusCode == 200 ? resolve(JSON.parse(body)) : reject('Error en la peticion');
 
         });
     });
 }
 

peticionPromesa()
                .then((result) => {
                    console.log("Primera promesa resuelta!");
                    console.log(result.name);
                    return peticionPromesa2(result.films[0]);
                })
                .then((result) => {
                    console.log("Segunda promesa resuelta!");
                    console.log(result.title);
                })
                .catch((error) => {
                    console.log(error);
                });