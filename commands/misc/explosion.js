const Commando = require('discord.js-commando')

module.exports = class explosionCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'explosion',
            aliases: ['boom'],
            group: 'misc',
            memberName: 'explosion',
            description: 'Explooooosion!'
        })
    }

    // runs the command
    async run(message){

        const Discord = require('discord.js');
        const archiveEmbed = new Discord.MessageEmbed()
        .setColor('#C20909')
        .setTitle('Explooooosion!')
        .setImage('https://cdn.discordapp.com/attachments/834071853659586560/834074639402795038/MeguminExplosion.gif')

        message.channel.send(archiveEmbed);

    }
}