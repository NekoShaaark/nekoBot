const Commando = require('discord.js-commando')
const economy = require('../../misc/economy')
module.exports = class exeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'add.balance',
            aliases: ['addbal'],
            group: 'economy',
            memberName: 'add.balance',
            description: 'Add to @user account of coins (admin-only)',
            ownerOnly: true
        })
    }


    // runs the command
    async run(message){

        const mention = message.mentions.users.first()

        if(!mention){
            message.reply('Mention user to add coins to or nu coins')
            return
        }

        const coins = arguments[1].trim().split(/\s+/g)[1] //[1] refers to argument placement for coins
        if(isNaN(coins)){
            message.reply('Say how many coins ya wanna give, silly~')
            console.log(arguments[1].trim().split(/\s+/g))
            return
        }

        const guildId = message.guild.id
        const userId = mention.id
        const userMentioned = message.mentions.users.first()

        const newCoins = await economy.addCoins(guildId, userId, coins)

        message.reply(`Ya gave ${userMentioned} ${coins} coin(s)! Yay! The user now has ${newCoins} coin(s)!`)
    }
}