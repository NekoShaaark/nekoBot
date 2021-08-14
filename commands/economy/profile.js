const Commando = require('discord.js-commando')
module.exports = class profileCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'profile',
            aliases: ['p'],
            group: 'economy',
            memberName: 'profile',
            description: "Shows the user's profile",
        })
    }


    // runs the command
    async run(message){

        //variables
        const economy = require('../../misc/economy')
        const Discord = require('discord.js')

        const userMentioned = message.mentions.users.first()
        const target = userMentioned || message.author

        const guildId = message.guild.id
        const userId = target.id

        const coins = await economy.getCoins(guildId, userId)

        
        //embed
        const profileEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(`${target.username}'s Profile`, target.displayAvatarURL())
        .addFields(
            {name: 'Gold <:nekosharkCoin:874230937385324544>', value: coins, inline: true},
            {name: 'Cookies :cookie:', value: 'ALL DA COOKIES', inline: true}
        )
        .setFooter(`User ID: ${userId}`)

        message.channel.send(profileEmbed)

  }
}