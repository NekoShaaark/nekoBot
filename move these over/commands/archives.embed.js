module.exports = 
{
    name: 'archives.embed',
    description: "embed example",
    execute(client, message, args)
    {
        const Discord = require('discord.js');
        const archiveEmbed = new Discord.MessageEmbed()
        .setColor('#39007D')
        .setTitle('Archived Embed')
        .setURL('https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g')
        .setDescription('cookies are still nice')
        .setThumbnail('https://i.pinimg.com/originals/f3/93/0e/f3930ec169271ab48fd7771e85c55c4f.jpg')
        .addFields(
            {name: 'Test thingy 1', value: 'Cookies are also nice'},
            {name: 'Test thingy 2', value: 'Cookies are also also nice'},
            {name: 'Test thingy 3', value: 'Cookies are also also also nice'},
        )
        .setImage('https://assets.puzzlefactory.pl/puzzle/305/098/original.jpg')
        .setFooter('This can also maybe be testy?');
        //https://discordjs.guide/popular-topics/embeds for more information

        message.channel.send(archiveEmbed);
    }
}