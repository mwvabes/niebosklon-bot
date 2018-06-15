const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'losu',
            group: 'random',
            memberName: 'losu',
            description: 'Robi losu losu'
        });
    }
    
    async run(message, args) {
        message.channel.sendMessage("Losu losu losu losu...");
            
            setTimeout(function(){
                var roll = Math.floor(Math.random() * 6) + 1;
                message.reply("Wylosowałeś " + roll + "!");
            }, 1000);
        
    }
}

module.exports = DiceRollCommand;