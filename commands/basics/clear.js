const commando = require('discord.js-commando');
const bot = new commando.Client();

class ClearCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            group: 'basics',
            memberName: 'clear',
            description: 'Czyści okno czatu',
            userPermissions: 'clear'
        });
    }
    
    
    
    async run(message, args) {
        
            message.delete(); //Delete first message
        
            // Variables - Variables make it easy to call things, since it requires less typing.
            let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
            let sender = message.author; // This variable takes the message, and finds who the author is.

    
            /*message.delete(); */// Let's delete the command message, so it doesn't interfere with the messages we are going to delete.



            const fetched = await message.channel.fetchMessages({limit: 100}); // This grabs the last number(args1) of messages in the channel.

/*            message.channel.sendMessage("\n \n \n \n  ```--------------------------------------");
            message.channel.sendMessage("**Usuwam " + fetched.size + " wiadomości...**");
            message.channel.sendMessage("\n--------------------------------------``` \n \n \n \n  ");*/
        
            message.channel.sendMessage(
                "\n \n \n \n  -------------------------------------- \n       ** Usuwam " + fetched.size + " wiadomości... ** \n-------------------------------------- \n \n \n \n  "
                );
        
            const fetched_new = await message.channel.fetchMessages({limit: 100}); // This grabs the last number(args1) of messages in the channel.
            console.log(fetched_new.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting
        
        setTimeout(function(){
        
            // Deleting the messages
            message.channel.bulkDelete(fetched_new)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
        
            /*message.channel.sendMessage("Wyczyszczono czat.");*/

            }, 2000);
    
    }
}

module.exports = ClearCommand;