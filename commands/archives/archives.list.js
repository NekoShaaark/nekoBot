const Commando = require('discord.js-commando')

module.exports = class ArchivesList extends Commando.Command {
    constructor(client){
        super(client, {
            name: 'archives.list',
            aliases: ['archives', 'archiveslist', 'archivedcommands', 'archived.commands'],
            group: 'archives',
            memberName: 'archives.list',
            description: 'Shows a list of archived commands'
        })
    }

    // runs the command
    async run(message){
        const Discord = require('discord.js');
        const archivesList = new Discord.MessageEmbed()
        .setColor('#1E90FF')
        .setTitle('Archives')
        .addFields(
            {name: 'archives.embed', value: 'Archived embed'},
            {name: 'archives.collector', value: 'Archived collector'},
            {name: 'archives.quiz', value: 'Archived quiz system'},
            //{name: '', value: ''},
        )
        .setFooter('Archived commands');

        message.channel.send(archivesList);
    }
}