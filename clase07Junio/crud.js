const request = require('request')
const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1/";

function getAllAuthors(){
    const URI = 'authors/';
    let URL = URL_BASE + URI;

    return new Promise((resolve,reject) => {
        request.get(URL, (err,status,body) => {
            status.statusCode == 200 
            ? resolve(JSON.parse(body))
            : reject('Error en la petición');
        });
    });
};

function getAuthorById(id_author){
    const URI = 'authors/';
    let URL = URL_BASE + URI + id_author;

    return new Promise((resolve,reject) => {
        request.get(URL, (err,status,body) => {
            status.statusCode == 200 
            ? resolve(JSON.parse(body))
            : reject('Error en la petición');
        });
    });
};

function createAuthor(nombre,apellido,biografia,genero,edad){
    const URI = 'authors/';
    let URL = URL_BASE + URI;

    let jsonSend = {
        "name": nombre,
        "last_name": apellido,
        "nacionalidad": "MX",
        "biography": biografia,
        "gender": genero,
        "age": edad 
      }

      return new Promise((resolve,reject) => {
          request.post({url:URL, form:jsonSend}, (err, response, body) => {
            response.statusCode == 201 
                ? resolve(JSON.parse(body))
                : reject('Error en la creación');
          });
      });

}

function updateAuthor(id,nombre,apellido,biografia,genero,edad,esta_vivo){
    const URI = 'authors/';
    let URL = URL_BASE + URI + id + '/';

    let jsonSend = {
        "id": id,
        "name": nombre,
        "last_name": apellido,
        "nacionalidad": "MX",
        "biography": biografia,
        "gender": genero,
        "age": edad,
        "is_alive": esta_vivo
      }

      return new Promise((resolve,reject) => {
          request.put({url:URL, form:jsonSend}, (err, response, body) => {
            response.statusCode == 200 
                ? resolve(JSON.parse(body))
                : reject('Error en la actualización');
          });
      });

}

// getAllAuthors()
//                 .then(result => console.log(result))
//                 .catch(err => console.log(err));

// createAuthor("Nuevo","Usuario Prueba","Biografia de usuario prueba","M",25)
// .then(result => console.log(result))
// .catch(err => console.log(err))

// updateAuthor(779,"Luis","Bravo","nace el mes de junio el 1992 Oriundo de hermosillo sonora","M",25, false)
// .then(result => console.log(result))
// .catch(err => console.log(err))

// getAuthorById(779)
//                 .then(result => console.log(result))
//                 .catch(err => console.log(err));
//var author = {};
// createAuthor("ultima prueba","cinta roja","biografia nueva cinta roja","M",99)
// .then(result => {console.log(result,"SE CREA"); 
//                 getAuthorById(result.id)
//                 .then(result => { console.log(result,"OBTENEMOS AUTOR");  
//                                 updateAuthor(result.id,"ultima prueba update","cinta roja","biografia nueva cinta roja","M",99,true)
//                                 .then(result => console.log(result,"VERFICAMOS QUE REVIVE"))
//                                 .catch(err => console.log(err))
//                     })
//                 .catch(err => console.log(err))
//             })
// .catch(err => console.log(err))


//THEEEEEN
createAuthor("ultima prueba","cinta roja","biografia nueva cinta roja","M",99)
.then(data => {
    console.log(data)
    return getAuthorById(data.id)
})
.then(data => {
    console.log(data)
    return updateAuthor(data.id,"ultima prueba edit","cinta roja edit","biografia nueva cinta roja edit","M",99,true)
})
.then((result) => {
    console.log(result);
})
.catch(err => console.log(err));