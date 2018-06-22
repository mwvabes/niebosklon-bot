const commando = require('discord.js-commando');

class ArekCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'arek',
            group: 'arki',
            memberName: 'arki',
            description: 'Zamienia Cię w Arka'
        });
    }
    
    async run(message, args) {
        message.channel.sendMessage("Zaczynam...");
            
            setTimeout(function(){
                message.reply("zostałeś Arkiem! Gratulacje! :trophy: :trophy: ");
            }, 1000);
        
    }
}


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

module.exports = ArekCommand;
module.exports = FeedCommand;