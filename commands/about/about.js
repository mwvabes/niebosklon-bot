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
        
        
        
        var msg = "Pod Nieboskłonem cienia \n \n \n Śmigam na Heroku! | ver 1.0.0";
        
        message.channel.send({embed: {
          color: 3447003,
          description: msg
        }});
        
/*        var embed = new commando.RichEmbed().setDescription(msg);
        message.channel.sendEmbed(embed);*/
        

    }
}

module.exports = AboutCommand;