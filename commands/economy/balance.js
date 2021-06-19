const Commando = require('discord.js-commando')
const economy = require('../../misc/economy')
module.exports = class exeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'balance',
            aliases: ['bal'],
            group: 'economy',
            memberName: 'balance',
            description: 'Check balance for coins'
        })
    }


    // runs the command
    async run(message){

        // variables
        const target = message.mentions.users.first() || message.author
        const guildId = message.guild.id

        const userId = target.id
        const coins = await economy.getCoins(guildId, userId)

        // coin amount
        message.reply(`That user has ${coins} coins`)

    }
}