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
        
        message.channel.sendMessage("`");
        
        message.channel.sendMessage(
            "Pod Nieboskłonem cienia \n \n \n Śmigam na Heroku! | ver 1.0.0"
        );
        
        message.channel.sendMessage("`");

    }
}

module.exports = AboutCommand;