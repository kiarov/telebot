const TelegramBot = require('node-telegram-bot-api');
const token = '1124165516:AAHosZyNJC1NLJOEzEoMJVnxCJ1SIIHbM30';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hola gg");
    }

    var nobullshit = 'boludo';
    if (msg.text.toString().toLowerCase().indexOf(nobullshit) === 0) {
        bot.sendMessage(msg.chat.id, "Chupame un huevo cara de pija");
        console.log('Esto esta pasando ahora')
    }


});