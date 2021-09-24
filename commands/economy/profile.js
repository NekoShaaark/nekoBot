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
        const inventory = require('../../misc/inventory')
        const Discord = require('discord.js')

        const userMentioned = message.mentions.users.first()
        const target = userMentioned || message.author

        const guildId = message.guild.id
        const userId = target.id


        //dynamic method
        const profileObject = {
            currency: () => economy.getCurrency(guildId, userId),
            rod: () => inventory.getRod(guildId, userId)
        }

        //method variables
        var rod
        const currency = await profileObject['currency']().then(rod = await profileObject['rod']());
        const coins = currency.coins
        const cookies = currency.cookies //possibility of topology overlapping causing error (FIX THIS)


        //rod equipped
        //capitize first Letter function
        function capitalizeFirstLetter(string) { return string.charAt(0).toUpperCase() + string.slice(1) }
        const rodRarity = `${capitalizeFirstLetter(rod.equippedRod)} Rod`


        
        //profile
        const profileEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(`${target.username}'s Profile`, target.displayAvatarURL())
        .addFields(
            {name: 'Coins <:nekosharkCoin:874230937385324544>', value: coins, inline: true},
            {name: 'Cookies :cookie:', value: cookies, inline: true},
            {name: 'Equipped Fishing Rod :fishing_pole_and_fish:', value: rodRarity}
        )
        .setFooter(`User ID: ${userId}`)
        
        message.channel.send(profileEmbed)
  }
}