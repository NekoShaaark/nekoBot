const Commando = require('discord.js-commando')

module.exports = class guraCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'gura',
            aliases: ['wink'],
            group: 'misc',
            memberName: 'gura',
            description: 'Gura wink gif'
        })
    }

    // runs the command
    async run(message){

        message.channel.send('https://tenor.com/view/gawr-gura-wink-gif-18773599')

    }
}