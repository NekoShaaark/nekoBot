const Commando = require('discord.js-commando')
module.exports = class inventoryCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'inventory',
            aliases: ['inv'],
            group: 'economy',
            memberName: 'inventory',
            description: "Shows the user's inventory",
            details: 'Shows all items that the user as in their personal inventory',
        })
    }


    // runs the command
    async run(message){

        //variables
        const inventory = require('../../misc/inventory')
        const Discord = require('discord.js')

        const guildId = message.guild.id
        const userId = message.author.id

        const fish = await inventory.getFish(guildId, userId)

        
        //inventory
        const fishEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(`${message.author.username}'s Inventory`, message.author.displayAvatarURL())
        .addFields(
            {name: 'Common Fish', value: fish.commonFish},
            {name: 'Rare Fish', value: fish.rareFish},
            {name: 'Epic Fish', value: fish.epicFish},
        )

        message.channel.send(fishEmbed)

  }
}