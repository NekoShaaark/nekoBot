const Commando = require('discord.js-commando')

module.exports = class debuggingCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'debugging',
            aliases: ['bugs', 'debugginglist', 'debugging.list', 'todolist', 'todo'],
            group: 'dev',
            memberName: 'debugging',
            description: 'List of stuff that needs to be done'
        })
    }

    // runs the command
    async run(message){

        const Discord = require('discord.js');
        const debuggingEmbed = new Discord.MessageEmbed()
        .setColor('#67a4fd')
        .setTitle('Things to be done:')
        .addFields(
            {name: 'Thumbnail function', value: 'Allow the user to add a thumbnail during embed creation'},
            {name: 'Blank Areas function', value: 'Allow the user to leave fields blank during embed creation'},
            {name: 'Illustration for Embed Creation', value: 'Display an Illustration for what a complete embed will look like'},
            {name: 'Better Embed Creator', value: 'Make better user experience and make code look little bit neater'},
            {name: 'Cooldown System', value: 'Cooldown for commands'},
            //{name: '​\u200b', value: '​\u200b'}, makes the line blank
            {name: 'Syntax Implementation', value: 'If user sends wrong/invalid command/syntax of command, tell user what command Syntax is (as shown below)'}
        )
        .setImage('https://cdn.discordapp.com/attachments/835483065819725834/835513619009503242/Syntax_implementation.png')
        .setFooter('Created by Shark Co. 🦈')

        message.channel.send(debuggingEmbed);
        
    }
}