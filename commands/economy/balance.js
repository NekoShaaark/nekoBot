const Commando = require('discord.js-commando')
const economy = require('../../misc/economy')
module.exports = class balanceCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'balance',
            aliases: ['bal', 'gold'],
            group: 'economy',
            memberName: 'balance',
            description: 'Check balance for coins'
        })
    }


    // runs the command
    async run(message){

        // variables
        const userMentioned = message.mentions.users.first()
        const target = userMentioned || message.author

        const guildId = message.guild.id
        const userId = target.id
        
        const coins = await economy.getCoins(guildId, userId)

        // coin amount
        //determines if user was pinged or not
        if(userMentioned){
            message.channel.send(`${userMentioned} has ${coins} coins <:nekosharkCoin:874230937385324544>`) }

        else{
            message.channel.send(`Ya have ${coins} amount of coins <:nekosharkCoin:874230937385324544>`) }

    }
}