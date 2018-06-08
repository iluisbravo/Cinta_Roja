const request = require("request");

request.get('http://pokeapi.co/api/v2/pokemon/18', 
(error,response,body) => {

    console.log('Error :' + error);
    console.log('Response :' + response);
    console.log('Body :' + JSON.parse(body));

    var json = JSON.parse(body);
    var status_code = response.statusCode;

    if(status_code == 200){
        console.log("Petición Exitosa.");
        console.log(json.name);

        var moves = json.moves;

        for(let x = 0; x < moves.length; x++){
            console.log("Move :" + moves[x].move.name);
        }

        //WITH MAP (NO LO HEMOS VISTO AUN)
        moves = moves.map(function(elem,ix){
            return elem.move.name;
        });
        
        console.log(moves);
    }
    else{
        console.log("Pokemón no encontrado.");
    }
});