const commando = require('discord.js-commando');

class FeedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            group: 'arki',
            memberName: 'feed',
            description: 'Karmi bota'
        });
    }
    
    async run(message, args) {
        message.channel.sendMessage("Om nom nom nom nom...");
        
    }
}

module.exports = FeedCommand;
