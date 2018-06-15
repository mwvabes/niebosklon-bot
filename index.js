const commando = require('discord.js-commando');
const bot = new commando.Client();

const token = process.env.token;



bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('arki', 'Arki');
bot.registry.registerGroup('basics', 'Basics');
bot.registry.registerGroup('about', 'about');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");



bot.login(token);

console.log('Ready and steady!');