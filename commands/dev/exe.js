const Commando = require('discord.js-commando')

module.exports = class exeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'exe',
            group: 'dev',
            memberName: 'exe',
            description: 'Quick way to test stuff',
        })
    }

    // runs the command
    async run(message){

        message.author.send('Testy')
        message.channel.send('Is Testy command')
        message.delete({ timeout: 500 })

    }
}