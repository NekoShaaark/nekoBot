const Commando = require('discord.js-commando')
module.exports = class webhookCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'webhook',
            aliases: ['wh'],
            group: 'dev',
            memberName: 'webhook',
            description: 'Creates a webhook of the author and sends to the current channel',
            examples: ['a.webhook <message>']
        })
    }


    // runs the command
    async run(message){

        //variables
        const userContent = message.content.split(' ')
        const prefix = userContent[0] + ' '
        const messageContent = message.content.slice(prefix.length)

        const webhooks = await message.channel.fetchWebhooks()
        const webhook = webhooks.first()


        //check if webhook exists (if not create one)
        if(!webhook){
            message.channel.createWebhook('Sleepy Shark')
            console.log('Created new webhook')
            return; }


        //webhook sending
        if(!messageContent){ message.channel.send('Pwease type message after command.') 
        return; }

        else if(messageContent){
        try {
        	await webhook.send(messageContent, {
        		username: message.author.username,
        		avatarURL: message.author.displayAvatarURL(),
        	});
            message.delete()
            
        } catch (error) {
        	console.error(error) }
    }
  }
}