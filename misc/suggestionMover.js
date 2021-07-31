const Discord = require('discord.js');
module.exports = async(message) => {

    const webhookClient = new Discord.WebhookClient(process.env.WEBHOOKID, process.env.WEBHOOKTOKEN) //can be pulled from new [user] created webhook

    webhookClient.send(message.content, {
        username: message.author.username,
        avatarURL: message.author.displayAvatarURL(),
    })}