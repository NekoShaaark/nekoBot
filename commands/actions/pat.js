const Commando = require('discord.js-commando')
module.exports = class patCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            aliases: ['headpat'],
            group: 'actions',
            memberName: 'pat',
            description: 'Give the ping or non-pinged user a pat',
            throttling: {
                usages: 1,
                duration: 3
            }
        })
    }


    // runs the command
    async run(message){

        //variables
        var userMentioned


        //pat link
        const patLinks = require('../../jsonFolder/actions/pat/patLinks.json')
        const patNum = patLinks[Math.floor(Math.random() * patLinks.length)];
        
        //pat ending
        const patEndings = require('../../jsonFolder/actions/pat/patEndings.json')
        const patMessageEnding = patEndings[Math.floor(Math.random() * patEndings.length)];


        //determines if user was pinged or not
        if(message.mentions.users.first()){
            userMentioned = message.mentions.users.first().username }
            
        else{ 
            const patPrefix = 'a.pat '
            userMentioned = message.content.slice(patPrefix.length); }


        // embed for pat
        const Discord = require('discord.js');
        const patEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(message.author.username + ' gives ' + userMentioned + patMessageEnding.ending, message.author.displayAvatarURL())
        .setImage(patNum.pat)

        message.channel.send(patEmbed);

    }
}