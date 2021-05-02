const Commando = require('discord.js-commando')
module.exports = class coinflipCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            aliases: ['coin', 'flip', 'cf'],
            group: 'misc',
            memberName: 'coinflip',
            description: 'Flips a coin and provides the output'
        })
    }

    // runs the command
    async run(message){

        // random number generator
        var rating = Math.floor(Math.random() * 2) + 1;
        //will pick a random number between 1 and 2

        if(rating == 1){ message.channel.send('Da coin spins... And it lands on **Heads**!') }
        else if(rating == 2){ message.channel.send('Da coin spins... And it lands on **Tails**!') }

    }
}