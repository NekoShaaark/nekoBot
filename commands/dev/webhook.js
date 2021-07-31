const Commando = require('discord.js-commando')
module.exports = class exeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'webhook',
            aliases: ['wh'],
            group: 'dev',
            memberName: 'webhook',
            description: 'Creates a webhook of the author and sends to the current channel'
        })
    }


    // runs the command
    async run(message){

        //variables
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        	.setTitle('Cooki is nom')
        	.setColor('#0099ff')

        const userContent = message.content.split(' ')
        const prefix = userContent[0] + ' '
        const messageContent = message.content.slice(prefix.length)

        const webhooks = await message.channel.fetchWebhooks()
        const webhook = webhooks.first()

        
        //webhook sending
        try {
        	await webhook.send(messageContent, {
        		username: message.author.username,
        		avatarURL: message.author.displayAvatarURL(),
        		//embeds: [embed],
        	});
        } catch (error) {
        	console.error(error) }
  }
}