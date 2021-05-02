const Commando = require('discord.js-commando')

module.exports = class ArchivesCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'archives',
            group: 'misc',
            memberName: 'archives',
            description: 'shows the archives',
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