module.exports = async(message) => {

    //variables
    var currentPage


    //page 1
    currentPage = 'page 1'
    const Discord = require('discord.js')
    const page1Embed = new Discord.MessageEmbed()
    .setColor('#0F52A3')
    .setAuthor('Fishy Shop')
    .setDescription('See all da latest prices for fishy sales')
    .addFields(
        {name: 'Common Fish', value: ['Sell: 3 coins', 'Buy: 5 coins'], inline: true},
        {name: 'Rare Fish', value: ['Sell: 12 coins ', 'Buy: 18 coins'], inline: true},
        {name: 'Epic Fish', value: ['Sell: 20 coins', 'Buy: 30 coins'], inline: true})
    .setFooter('Page 1 of 2')

    message.channel.send(page1Embed)
    .then(sentMessage => {
        sentMessage.react('⬅️')
        sentMessage.react('➡️')



    //reply method
    const reactionEmojis = ['⬅️', '➡️']
    const filter = (reaction, user) => { return reactionEmojis.includes(reaction.emoji.name) && user.id === message.author.id }
    const collector = sentMessage.createReactionCollector(filter, { time: 1000 * 10 }) //10 seconds

    collector.on('collect', (reaction, user) => {
        const reactionName = reaction.emoji.name
      

        if(reactionName === '⬅️') { //if left arrow, will move to page 1
            if(currentPage == 'page 2'){ sentMessage.edit(page1Embed) }}
 
            
        else if(reactionName === '➡️'){ //if right arrow, will move to page 2

            //page 2
            currentPage = 'page 2'
            const page2Embed = new Discord.MessageEmbed(page1Embed)
                .setColor('#0F52A3')
                .setAuthor('Fishing Rod Shop')
                .setDescription('See all da latest prices for fishing rod sales')
                .spliceFields(0, 3, [ //remove the previous 3 fields starting with an index of 0
                    {name: 'Rare Rod', value: 'Buy: 250 coins', inline: true},
                    {name: 'Epic Rod', value: 'Buy: 600 coins', inline: true},
                    {name: 'Ultra Rod', value: 'Buy: 1000 coins', inline: true}])
                .setFooter('Page 2 of 2')
                
                sentMessage.edit(page2Embed)
         }
      })
    })//end
}