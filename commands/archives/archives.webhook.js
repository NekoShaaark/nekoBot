const Commando = require('discord.js-commando')
module.exports = class exeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'archives.webhook',
            group: 'archives',
            memberName: 'archives.webhook',
            description: 'Archived webhook example'
        })
    }


    // runs the command
    async run(message){

        //single-server webhook (can send webhooks to any channel is current server/guild)
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        	.setTitle('Cooki is nom')
        	.setColor('#0099ff')

        const userContent = message.content.split(' ')
        const prefix = userContent[0] + ' '
        const messageContent = message.content.slice(prefix.length)

        const webhooks = await message.channel.fetchWebhooks()
        const webhook = webhooks.first()

        try {
        	await webhook.send(messageContent, {
        		username: message.author.username,
        		avatarURL: message.author.displayAvatarURL(),
        		//embeds: [embed], //can send up to 10 embeds at once
        	});
        } catch (error) {
        	console.error(error) }










        //client/multi-server webhook (can send webhooks to any channel outside of the current server/guild IF given the webhook info)
        const webhookClient = new Discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN)

        webhookClient.send(messageContent, {
        	username: message.author.username,
        	avatarURL: message.author.displayAvatarURL(),
        	//embeds: [embed], //can send up to 10 embeds at once
        })
  }
}