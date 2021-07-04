const Commando = require('discord.js-commando')
module.exports = class hugCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            aliases: ['cuddle'],
            group: 'actions',
            memberName: 'hug',
            description: 'Hug the ping or non-pinged user',
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
        var hugPrefix
        const userContent = message.content.split(' ')


        //hug link
        const hugLinks = require('../../jsonFolder/actions/hug/hugLinks.json')
        const hugNum = hugLinks[Math.floor(Math.random() * hugLinks.length)];
        
        //hug ending
        const hugEndings = require('../../jsonFolder/actions/hug/hugEndings.json')
        const hugMessageEnding = hugEndings[Math.floor(Math.random() * hugEndings.length)];


        //determines if user was pinged or not
        if(message.mentions.users.first()){
            userMentioned = message.mentions.users.first().username }
             
        //check for string after prefix
        else{
            if(userContent[1]){

            //string after prefix
            hugPrefix = userContent[0] + ' '
            userMentioned = message.content.slice(hugPrefix.length)}

            //no string after prefix
            else{ userMentioned = 'everyone' }}


        // embed for hug
        const Discord = require('discord.js');
        const hugEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(message.author.username + ' hugs ' + userMentioned + hugMessageEnding.ending, message.author.displayAvatarURL())
        .setImage(hugNum.hug)

        message.channel.send(hugEmbed);

    }
}