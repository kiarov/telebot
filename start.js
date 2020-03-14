const TelegramBot = require('node-telegram-bot-api');
const firebase = require('firebase');

const token = '1124165516:AAHosZyNJC1NLJOEzEoMJVnxCJ1SIIHbM30';
const bot = new TelegramBot(token, { polling: true });


const firebaseConfig = {
    apiKey: "AIzaSyDniuA9Zu0BHSosL2fL4w3U19jL39Uy6iU",
    authDomain: "urlgrabber-8a3b3.firebaseapp.com",
    databaseURL: "https://urlgrabber-8a3b3.firebaseio.com",
    projectId: "urlgrabber-8a3b3",
    storageBucket: "urlgrabber-8a3b3.appspot.com",
    messagingSenderId: "15643244641",
    appId: "1:15643244641:web:c212802ad77f10d298d220"
};

firebase.initializeApp(firebaseConfig);

// Get a database reference to our blog
const db = firebase.database();
const ref = db.ref("database");


bot.on('message', (msg) => {

    var timestamp = Date.now();
    const urlsRef = ref.child("urls/" + timestamp + '/');

    if (msg) {
        console.log(msg)
        if (msg.entities && msg.entities[0].type === 'url') {
            urlsRef.set(msg, function (error) {
                if (error) {
                    bot.sendMessage(msg.chat.id, "Hubo un error");
                } else {
                    bot.sendMessage(msg.chat.id, "Datos Recibidos");
                }
            })
        } else {
            bot.sendMessage(msg.chat.id, "Solamente puedo recibir URLS");
        }
    }
})