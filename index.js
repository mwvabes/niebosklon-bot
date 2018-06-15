const Discord = require('discord.js');
//const commando = require('discord.js-commando');
//const bot = new commando.Client();
const client = new Discord.Client();
const token = process.env.token;

console.log('Start!');

/*bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('arki', 'Arki');
bot.registry.registerGroup('basics', 'Basics');
bot.registry.registerGroup('about', 'about');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");



bot.login(token);*/

client.login(token).catch(err => console.log(err));