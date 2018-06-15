const commando = require('discord.js-commando');

class AboutCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'about',
            memberName: 'about',
            description: 'Shows info about Nieboskłon Bot'
        });
    }
    
    async run(message, args) {
        
        
        
        var msg = "Pod Nieboskłonem cienia \n \n \nJestem Bot Nieboskłon, śmigam na Heroku! \n&copy; 2018 by vabes.pl | ver 1.0.0";
        
        message.channel.send({embed: {
          color: 3447003,
          description: msg
        }});
        

    }
}

module.exports = AboutCommand;