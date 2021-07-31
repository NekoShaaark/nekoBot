const Commando = require('discord.js-commando')
module.exports = class shicretCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'shicret',
            group: 'misc',
            memberName: 'shicret',
            description: 'shicret',
            hidden: 'true'
        })
    }


    // runs the command
    async run(message){

        message.channel.send('shhh is shicret command');

    }
}