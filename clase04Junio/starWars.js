const request = require("request");

request.get('https://swapi.co/api/people/1', 
(error,response,body) => {

    if(response.statusCode == 200){
        console.log("Petición Exitosa!");

        var json = JSON.parse(body);
        console.log("Personaje: " + json.name);

        var films = json.films;

        if(films.length > 0){
            request.get(films[0],
            (errir,response,body) => {
                
                if(response.statusCode == 200){
                    var jsonFilms = JSON.parse(body);
                    console.log("El primer film es: " + jsonFilms.title);
                }
                else{
                    console.log("No se encontro el film :(");
                }

            });
        }

        
    }
    else{
        console.log("No se encontro el personaje :(");
    }

});

var getFilmsByChapter = (id_chapter) => {
    request.get('https://swapi.co/api/people/'+id_chapter,
    (error,response,body) => {
        if(response.statusCode == 200){
            var json = JSON.parse(body);
            return json;
        }
        else{
            return null;
        }
    });
}

var getNameByFilm = (film) => {
    request.get(film,
        (error,response,body) => {
            if(response.statusCode == 200){
                var jsonFilms = JSON.parse(body);
                return jsonFilms[0].title;
            }
            else{
                return null;
            }
        });
}

