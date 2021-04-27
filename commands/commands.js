module.exports = 
{
    name: 'commands',
    description: "list of commands",
    aliases: ['list', 'help'],
    execute(client, message, args)
    {
        const Discord = require('discord.js');
        const commandList = new Discord.MessageEmbed()
        .setColor('#1E90FF')
        .setTitle('Commands:')
        .addFields(
            {name: 'pat', value: 'Random Pat (25 different variants)'},
            {name: 'nom', value: 'Random Nom (14 different variants)'},
            {name: 'ping', value: 'Simple pong reply'},
            {name: 'youtube', value: 'Link to shark youtube channel'},
            {name: 'explosion', value: 'Boooom'},
            {name: 'gura', value: 'Gura wink gif'},
            {name: 'conversation', value: 'WIP'},
            {name: 'wink', value: 'Venti wink emoji'},
            {name: 'create.embed', value: 'Create embedded message'},
            {name: 'help', value: 'Lists all commands'},
            {name: 'exe', value: 'E̸͇̊r̸̛̰r̶̨̍o̵̗̕r̶͍̂'}
            //{name: '', value: ''},
        )
        .setFooter('Use a. as prefix');

        message.channel.send(commandList);
    }
}