var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDNlcqrBTbR6rgkzeS0as4sy43yg9fVn1Y',
    Promise: Promise
  });

//   googleMapsClient.geocode({
//     address: 'San Melesio 4'
//   }, (err, response) => {
//     if (!err) {
//         console.log(response.json.results[0]);
//     }
//     else{
//         console.log(err);
//     }
//   });

  googleMapsClient.geocode({address: 'San Melesio 4'})
  .asPromise()
  .then((response) => {
    console.log(response.json.status);
    console.log(response.json);
  })
  .catch((err) => {
    console.log(err);
  });
  