const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const FacebookService = require('./config');
const botRaul = require('./botRaul');


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// { 'hub.mode': 'subscribe',
//   'hub.challenge': '1089090906',
//   'hub.verify_token': 'tokenchilo' }

app.post('/webhook',(req,res) => {
    console.log(req.body.entry[0].messaging[0].message.nlp.entities.intent);
    const bot = new botRaul(FacebookService.accessToken);
    const senderId = req.body.entry[0].messaging[0].sender.id;

    bot.getUserProfile(senderId).then(profile => {
       // console.log(profile);
        //bot.sendTextMessage(senderId,'Hola ' + profile.first_name +' '+ profile.last_name + ' soy un bot :*')
        let user = profile.first_name +' '+ profile.last_name;
        let intent = req.body.entry[0].messaging[0].message.nlp.entities.intent;

        if(intent !== undefined){
            let confidence = intent[0].confidence;
            let value = intent[0].value;
            console.log(confidence,value)
            if(confidence > 0.65){
                switch(value){
                    case 'saludo': bot.sendTextMessage(senderId,'Hola, como estas? ' + user); break;
                    case 'hora': 
                    var date = new Date;
                    var seconds = date.getSeconds();
                    var minutes = date.getMinutes();
                    var hour = date.getHours();
                    bot.sendTextMessage(senderId,'son las ' + hour + ':'+ minutes + ' ' + user);
                    break;
                    case 'animo': 
                    bot.sendTextMessage(senderId,'muy bien y tu? ' + user);
                    break;
                    case 'triste': 
                    bot.sendTextMessage(senderId,'no estes trite :( ' + user);
                    break;
                    case 'feliz': 
                    bot.sendTextMessage(senderId,'que bien por ti :) ' + user);
                    break;
                    case 'hambre': 
                    bot.sendTextMessage(senderId,'tienes hambre? 🐷 ' + user);
                    break;
                }
    
            }
            else{
                bot.sendTextMessage(senderId,'No te entiendo neta :/ ' + user);
            }
        }
        else{
            bot.sendTextMessage(senderId,'No te entiendo neta :/ ' + user);
        }
    })
    
    res.send('ok')
});

app.get('/webhook',(req,res) =>{
    console.log(req.query)
    if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === FacebookService.verifyToken) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }
})

app.listen(3000,() => {
    console.log('Server on ' + 3000);
});