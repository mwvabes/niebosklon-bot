const commando = require('discord.js-commando');

class CreditsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'about',
            memberName: 'about',
            description: 'Shows info about Nieboskłon Bot'
        });
    }
    
    async run(message, args) {
        message.channel.sendMessage(
            "`Pod Nieboskłonem cienia \n \n \nver 1.0.0`"
        );

    }
}

module.exports = CreditsCommand;