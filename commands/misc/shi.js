const Commando = require('discord.js-commando')
module.exports = class shiCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'shi',
            group: 'misc',
            memberName: 'shi',
            description: 'shi'
        })
    }


    // runs the command
    async run(message){

        message.channel.send('Is shi command');

    }
}