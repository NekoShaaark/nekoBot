const Commando = require('discord.js-commando')
module.exports = class ConversationCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'conversation',
            aliases: ['con'],
            group: 'dev',
            memberName: 'conversation',
            description: 'Work in progress command using CleverBot API (maybe)'
        })
    }

    
    // runs the command
    async run(message){

        message.delete({ timeout: 1000 });
        message.channel.send("a");
        //message.channel.send("")
        //message.channel.send("<:emoji_4:778187341881802764>");

    }
}