const request = require('request');
// // Hacer una funcion que haga una peticion(Ejemplo: peticionLibro(“i robot”);http://openlibrary.org/search.json?q=i+robot) buscar un libro y traer el o los autores
// function Libro(libro){
//     return new Promise((resolve, reject) => {
//         var libroQuery = libro.replace(" ", "+");
//         request.get("http://openlibrary.org/search.json?q="+libroQuery,(error, response, body) => {
//             response.statusCode == 200 
//             ? resolve(JSON.parse(body)) 
//             : reject('Error peticion incorrecta.');
//         });

//     });
// }

// Libro("i root")
//             .then((result) => {
//                 var docs = result.docs;
//                 var books = docs.map((elem,ix) => {
//                     return {
//                         book: elem.title_suggest, 
//                         author: Array(elem.author_name).join()
//                     };
//                 });

//                 console.log(books);
//             })
//             .catch((error) => console.log(error));







// // Hacer una petición por autor y devolver la lista de sus libros (http://openlibrary.org/search.json?author=asimov)
// function getBooksByAuthor(author){
//     return new Promise((resolve, reject) => {
//         var authorQuery = author.replace(" ","+");
//         request.get("http://openlibrary.org/search.json?author="+authorQuery,(error, response, body) => {
//                 response.statusCode == 200 
//                 ? resolve(JSON.parse(body)) 
//                 : reject('Error peticion incorrecta.');
//         })
//     });
// }

// getBooksByAuthor("asimov")
//                         .then((result) => {
//                             var docs = result.docs;

//                             var books = docs.map((book) => {
//                                 return book.title_suggest;
//                             });

//                             console.log(books);
//                         })
//                         .catch((error) => {
//                             console.log('Error en la peticion.')
//                         });




// // Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) y devolver el género de la banda deseada





// Devolver los asteroides que sean potencialmente peligrosos para la tierra de la semana pasada hasta hoy. 

function getAsteroides(){
    return new Promise((resolve,reject)=> {
        request.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-05-28&end_date=2018-06-03&api_key=q8Dgjdt6rbDBbCnrs0aN2GI5C4qgFu5nT6z58Edb",(error,response,body) => {
            response.statusCode == 200 
            ? resolve(JSON.parse(body))
            : reject('Error en la peticion');
        })
    })
}

getAsteroides()
                .then((result) => {
                    var near_objects = result.near_earth_objects;
                    // console.log(near_objects);
                    var ob_d = [];
                    // for(let x = 0; x < near_objects.length; x++){
                        
                    //     for(let i = 0; i < near_objects[x].length; i++){
                    //        var ob = near_objects[x][i];
                    //        console.log(ob,"obj");
                    //         if(ob.is_potentially_hazardous_asteroid){
                    //             ob_d.push(ob.name);
                    //         }
                    //     }
                    // }
                    var x = 0;
                    for(value in near_objects){
                        x++;
                        var ne_ob = near_objects[x];
                        for(let i = 0; i < near_objects[x].length; i++){
                           var ob = near_objects[x][i];
                           console.log(ob,"obj");
                            if(ob.is_potentially_hazardous_asteroid){
                                ob_d.push(ob.name);
                            }
                        }
                    }



                    console.log(ob_d);
                })
                .catch((error) => {
                    console.log(error)
                })