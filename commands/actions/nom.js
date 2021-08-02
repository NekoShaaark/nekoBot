const Commando = require('discord.js-commando')
module.exports = class nomCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'nom',
            aliases: ['bite'],
            group: 'actions',
            memberName: 'nom',
            description: 'Nom the ping or non-pinged user',
            throttling: {
                usages: 1,
                duration: 3
            },
            examples: ['a.nom <user>']
        })
    }


    // runs the command
    async run(message){

        //variables
        var userMentioned
        var nomPrefix
        const userContent = message.content.split(' ')


        //nom link
        const nomLinks = require('../../jsonFolder/actions/nom/nomLinks.json')
        const nomNum = nomLinks[Math.floor(Math.random() * nomLinks.length)];
        
        //nom ending
        const nomEndings = require('../../jsonFolder/actions/nom/nomEndings.json')
        const nomMessageEnding = nomEndings[Math.floor(Math.random() * nomEndings.length)];


        //determines if user was pinged or not
        if(message.mentions.users.first()){
            userMentioned = message.mentions.users.first().username }
              
        //check for string after prefix
        else{
            if(userContent[1]){

            //string after prefix
            nomPrefix = userContent[0] + ' '
            userMentioned = message.content.slice(nomPrefix.length)}

            //no string after prefix
            else{ userMentioned = 'a cookie' }}


        // embed for nom
        const Discord = require('discord.js');
        const nomEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(message.author.username + ' noms ' + userMentioned + nomMessageEnding.ending, message.author.displayAvatarURL())
        .setImage(nomNum.nom)

        message.channel.send(nomEmbed);

    }
}