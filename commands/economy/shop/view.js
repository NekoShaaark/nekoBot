module.exports = async(message) => {

    const Discord = require('discord.js')
    const shopEmbed = new Discord.MessageEmbed()
    .setColor('#0F52A3')
    .setAuthor('Fishy Shop')
    .setDescription('See all da latest prices for fishy sales')
    .addFields(
        {name: 'Common Fish', value: ['Sell: 3 coins', 'Buy: 5 coins'], inline: true},
        {name: 'Rare Fish', value: ['Sell: 12 coins ', 'Buy: 18 coins'], inline: true},
        {name: 'Epic Fish', value: ['Sell: 20 coins', 'Buy: 30 coins'], inline: true})

    message.channel.send(shopEmbed)
}