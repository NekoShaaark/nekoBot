const Commando = require('discord.js-commando')
module.exports = class embedCreationv3Command extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'create.embedv3',
            group: 'dev',
            memberName: 'create.embedv3',
            description: 'Embedded message creation command version 3',
            throttling: {
                usages: 1,
                duration: 6
            }
        })
    }


    // runs the command
    async run(message){

        //variables
        var ending
        var colorEmbed
        var titleEmbed
        var descriptionEmbed
        var thumbnailEmbed
        var name1Embed
        var name2Embed
        var imageEmbed
        var footerEmbed
        var messageSliced
        var messageSliced2

        const messageContent = message.content.split(' ')
        const messageContent2 = message.content.split('|')

        var prefix = messageContent[0] + ' '
        var prefix2 = messageContent2[0] + ' '

        messageSliced = message.content.slice(prefix.length)
        messageSliced2 = messageSliced.slice(prefix2.length)

        message.channel.send(`nu prefix content: ${messageSliced}`)
        message.channel.send(`new content: ${messageSliced2}`)




        // determined ending
        
        ending = 'all'
        // if(titleEmbed == 'n/a'){ ending = 'no title'}
        // else if(descriptionEmbed =='n/a'){ ending = 'no description'}
        // else if(thumbnailEmbed == 'n/a'){ ending = 'no thumbnail'}
        // else if(name1Embed || name2Embed == 'n/a'){ ending = 'no fields'}
        // else if(imageEmbed == 'n/a'){ ending = 'no image'}
        // else if(footerEmbed == 'n/a'){ ending = 'no footer'}





        // final result of collectors in collectors

        //all
        return;
        if(ending == 'all'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no title
        else if(ending == 'no title'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no description
        else if(ending == 'no description'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no thumbnail
        if(ending == 'no thumbnail'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no fields
        else if(ending == 'no fields'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no image
        else if(ending == 'no image'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no footer
        else if(ending == 'no footer'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            message.channel.send(newEmbed); }


            //multi endings // title endings
            else if(ending == 'no title + description'){
                const Discord = require('discord.js');
                const newEmbed = new Discord.MessageEmbed()
                .setColor(colorEmbed)
                .setThumbnail(thumbnailEmbed)
                .addFields( {name: name1Embed , value: name2Embed} )
                .setImage(imageEmbed)
                .setFooter(footerEmbed);
                message.channel.send(newEmbed); }

            else if(ending == 'no title + description + thumbnail'){
                const Discord = require('discord.js');
                const newEmbed = new Discord.MessageEmbed()
                .setColor(colorEmbed)
                .addFields( {name: name1Embed , value: name2Embed} )
                .setImage(imageEmbed)
                .setFooter(footerEmbed);
                message.channel.send(newEmbed); }
                
            else if(ending == 'no title + description + thumbnail + fields'){
                const Discord = require('discord.js');
                const newEmbed = new Discord.MessageEmbed()
                .setColor(colorEmbed)
                .setImage(imageEmbed)
                .setFooter(footerEmbed);
                message.channel.send(newEmbed); }

            else if(ending == 'no title + description + thumbnail + fields + image'){
                const Discord = require('discord.js');
                const newEmbed = new Discord.MessageEmbed()
                .setColor(colorEmbed)
                .setFooter(footerEmbed);
                message.channel.send(newEmbed); }


            //multi endings // description endings

            else if(ending == 'no description + thumbnail'){
                const Discord = require('discord.js');
                const newEmbed = new Discord.MessageEmbed()
                .setColor(colorEmbed)
                .setTitle(titleEmbed)
                .addFields( {name: name1Embed , value: name2Embed} )
                .setImage(imageEmbed)
                .setFooter(footerEmbed);
                message.channel.send(newEmbed); }

            else if(ending == 'no description + thumbnail + fields'){
                const Discord = require('discord.js');
                const newEmbed = new Discord.MessageEmbed()
                .setColor(colorEmbed)
                .setTitle(titleEmbed)
                .setImage(imageEmbed)
                .setFooter(footerEmbed);
                message.channel.send(newEmbed); }

            else if(ending == 'no description + thumbnail + fields + image'){
                const Discord = require('discord.js');
                const newEmbed = new Discord.MessageEmbed()
                .setColor(colorEmbed)
                .setTitle(titleEmbed)
                .setFooter(footerEmbed);
                message.channel.send(newEmbed); }

            }
}