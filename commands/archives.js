module.exports = 
{
    name: 'archives',
    description: "list of archived commands",
    execute(client, message, args)
    {
        const Discord = require('discord.js');
        const archivesList = new Discord.MessageEmbed()
        .setColor('#1E90FF')
        .setTitle('Archives')
        .addFields(
            {name: 'archives.embed', value: 'Archived embed'},
            {name: 'archives.collector', value: 'Archived collector'},
            //{name: '', value: ''},
        )
        .setFooter('Archived commands');

        message.channel.send(archivesList);
    }
}