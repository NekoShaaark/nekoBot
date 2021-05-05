const Commando = require('discord.js-commando')
const axios = require('axios')

module.exports = class catCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cat',
            group: 'misc',
            memberName: 'cat',
            description: 'Random cat cuz cats are nice',
            throttling: {
                usages: 1,
                duration: 3
            }
        })
    }


    // runs the command
    async run(message){

        axios.get('https://api.thecatapi.com/v1/images/search')
        .then((result) => {
            console.log('RESULT:', result.data[0].url)
            message.channel.send(result.data[0].url)
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })

    }
}