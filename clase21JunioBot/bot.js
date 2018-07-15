const BootBot = require('bootbot');
const bot = new BootBot({
    accessToken: "EAAYGwvPKNOoBAP4RDGVvshImTQO85ZC0NPxDWsx03hvfgT4tKZCbZCRJ3rrKwUzZBeCcg52EBWK1O53FbqfuoVGVbhLDM3VZCnkqnhI0qNKMSCPVQCjoCPTrZCRZCrAdy9ahsC7fIavb9Q6DOZAppcI2ZAtcaYOwgIAaFEPqYExmNqwZDZD",
    verifyToken: "tokenchilo",
    appSecret: "dca7b1ac5da7b7ad963ec2db55a3b4fb"
});
// bot.on('message',(payload,chat) => {
//     console.log(payload);
//     console.log(chat);

//     chat.say("Hola usuario")
// });

// { sender: { id: '1388263507940724' },
//   recipient: { id: '1854456344851164' },
//   timestamp: 1529720668715,
//   message:
//    { mid: 'mid.$cAAaWngD0I1VqW7pKK1kKgdFpCRmk',
//      seq: 205429,
//      text: 'Hola' } }

//por postman para recibir mensajes 
//hacemos post a: https://graph.facebook.com/v2.6/me/messages?access_token=EAAYGwvPKNOoBAP4RDGVvshImTQO85ZC0NPxDWsx03hvfgT4tKZCbZCRJ3rrKwUzZBeCcg52EBWK1O53FbqfuoVGVbhLDM3VZCnkqnhI0qNKMSCPVQCjoCPTrZCRZCrAdy9ahsC7fIavb9Q6DOZAppcI2ZAtcaYOwgIAaFEPqYExmNqwZDZD
// {
// 	"recipient":{
// 		"id":"1388263507940724"
// 	},
// 	"message":{
// 		"text":"</3"
// 	}
// }

//escuchar saludos
bot.hear(['Hola','Saludos','Que onda'],(payload,chat) => {
    console.log(payload);
    chat.say("Hola humano")
});

//escuchar despedidas
bot.hear(['adios','bye','hasta luego'],(payload,chat) => {
    chat.say("Adios humano")
})

//escuchar despedidas
bot.hear(['adios','bye','hasta luego'],(payload,chat) => {
    chat.say("Adios humano")
});

//Enviar mensaje con botones
bot.hear(['ayuda'],(payload,chat) => {
    chat.say({
        text:'En que puedo ayudarte?',
        buttons:[
            {type:'postback',title:'Ayuda',payload:"Help"},
            {type:'postback',title:'FAQ',payload:"Help_faq"},
            {type:'postback',title:'Hablar con un humano',payload:"Help_talk"}
        ]
    });
});

bot.hear('comida',(payload,chat) => {
    chat.say({
        text:'que quieres de comer?',
        quickReplies:['Tacos','Dogos','Burritos','Hamburguesas','Pizzas','Sushi','Comida China']
    });
})

bot.on('postback',(payload,chat) =>{
    console.log(payload)
    //chat.say('puchaste un boton')
    let postback = payload.postback.payload;

    switch(postback){
        case "Help": chat.say("En que te puedo ayudar pues dime..."); break;
        case "Help_faq": chat.say("hablame mas sobre el problema..."); break;
        case "Help_talk": chat.say("En un momento te atendemos..."); break;
    }
})


bot.start();


