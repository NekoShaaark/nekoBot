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

        //random number generator
        var rating = Math.floor(Math.random() * 3) + 1;
        var explosionNum
        // will pick a random number between 3 and 25

        //number determining what explosion will be shown
        if(rating == 1){ explosionNum = ('https://cdn.discordapp.com/attachments/839881156592795659/839881353943842896/MeguminExplosion.gif') }
        else if(rating == 2){ explosionNum = ('https://cdn.discordapp.com/attachments/839881156592795659/839881415927922698/MeguminExplosion2.gif'); }
        else if(rating == 3){ explosionNum = ('https://cdn.discordapp.com/attachments/839881156592795659/839881439016517653/MeguminExplosion3.gif'); }

        const Discord = require('discord.js');
        const explosiveEmbed = new Discord.MessageEmbed()
        .setColor('#C20909')
        .setTitle('Explooooosion!')
        .setImage(explosionNum)

        message.channel.send(explosiveEmbed);

    }
}