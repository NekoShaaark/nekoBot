module.exports = async(message) => {

    //variables
    const inventory = require('../../../misc/inventory')
    const economy = require('../../../misc/economy')

    const guildId = message.guild.id
    const userId = message.author.id
    const fish = await inventory.getFish(guildId, userId)

    var coins

    const userContent = message.content.split(' ')
    const fishSelling = userContent[2] //how many to sell
    const fishRarity = userContent[3] //which rarity to sell

    //checks if user has specified amount and rarity of fish to sell
    if(!fishSelling){ message.channel.send('Pwease specify how many fish ya wanna buy.'); return }
    if(!fishRarity){ message.channel.send('Pwease specify da rarity of fish ya wanna buy.'); return }
    
    const fishAmount = userContent[2] - (userContent[2] * 2) //how much to take away from user when sold
    var fishSold //how many fish are left after specified amount is sold


    //coin calculation
    if(fishRarity.toLowerCase() == 'common'){ coins = 3 * fishSelling, fishSold = fish.commonFish - fishSelling }
    else if(fishRarity.toLowerCase() == 'rare'){ coins = 12 * fishSelling, fishSold = fish.rareFish - fishSelling }
    else if(fishRarity.toLowerCase() == 'epic'){ coins = 20 * fishSelling, fishSold = fish.epicFish - fishSelling }


    //main code
    message.reply(`Do ya wanna sell ${fishSelling} ${fishRarity} fish?`)
    .then(sentMessage => {
        sentMessage.react('✅')
        sentMessage.react('❎')



    //reply method
    const reactionEmojis = ['✅', '❎']
    const filter = (reaction, user) => { return reactionEmojis.includes(reaction.emoji.name) && user.id === message.author.id }
    const collector = sentMessage.createReactionCollector(filter, { time: 1000 * 10, maxEmojis: 1 }) // 10 seconds

    collector.on('collect', (reaction, user) => {
        const reactionName = reaction.emoji.name
      

        if(reactionName === '✅') {

            if(fishSold > -1){ //if was > 0 wouldn't allow fish to be sold until 0, would stop at 1
                inventory.addFish(guildId, userId, fishRarity, fishAmount)
                economy.addCurrency(guildId, userId, coins)
                message.reply(`Sold ${fishSelling} ${fishRarity} fish for ${coins} amount of coins!`)
                return; }

            else{
                message.channel.send("Sowwy, ya don't have dat many fish~") 
                return; }
            }

        else{ return; }
      })
    })//end
}