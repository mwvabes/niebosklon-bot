const commando = require('discord.js-commando');

class TimeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'time',
            group: 'basics',
            memberName: 'time',
            description: 'Wyświetla aktualny czas.'
        });
    }
    
    async run(message, args) {
        
        var h;
        var m;
        
        var dd = new Date();
        h = dd.getHours();
        m = dd.getMinutes();
        
        
        message.channel.sendMessage("Aktualna godzina to: " + h + ":" + m);
        
    }
}

module.exports = TimeCommand;