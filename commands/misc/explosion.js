const Commando = require('discord.js-commando')
module.exports = class explosionCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'explosion',
            aliases: ['boom'],
            group: 'misc',
            memberName: 'explosion',
            description: 'Explooooosion!',
            throttling: {
                usages: 1,
                duration: 3
            }
        })
    }


    // runs the command
    async run(message){

        //explosion picker
        const explosionLinks = require('../../jsonFolder/misc/explosion.json')
        const rating = explosionLinks[Math.floor(Math.random() * explosionLinks.length)]
        
        //explosion embed
        const Discord = require('discord.js');
        const explosiveEmbed = new Discord.MessageEmbed()
        .setColor('#C20909')
        .setTitle('Explooooosion!')
        .setImage(rating.explosion)

        message.channel.send(explosiveEmbed);

    }
}