module.exports = 
{
    name: 'explosion',
    description: "explooooosion!",
    aliases: ['boom'],
    execute(client, message, args)
    {
        const Discord = require('discord.js');
        const archiveEmbed = new Discord.MessageEmbed()
        .setColor('#C20909')
        .setTitle('Explooooosion!')
        .setImage('https://cdn.discordapp.com/attachments/834071853659586560/834074639402795038/MeguminExplosion.gif')

        message.channel.send(archiveEmbed);
    }
}