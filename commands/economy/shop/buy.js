module.exports = async(message) => {

    const inventory = require('../../../misc/inventory')
    const economy = require('../../../misc/economy')

    const guildId = message.guild.id
    const userId = message.author.id
    const coinsOwned = await economy.getCoins(guildId, userId)

    var coinsRequired

    const userContent = message.content.split(' ')
    const fishBuying = userContent[2] //how many to buy
    const fishRarity = userContent[3] //which rarity to buy


    //coin calculation
    if(fishRarity.toLowerCase() == 'common'){ coinsRequired = 5 * fishBuying }
    else if(fishRarity.toLowerCase() == 'rare'){ coinsRequired = 18 * fishBuying }
    else if(fishRarity.toLowerCase() == 'epic'){ coinsRequired = 30 * fishBuying }

    const coinsAmount = coinsRequired - (coinsRequired * 2) //how much to take away from user when buys


    //main code
    message.reply(`Do ya wanna buy ${fishBuying} ${fishRarity} fish for ${coinsRequired} coins?`)
    .then(sentMessage => {
        sentMessage.react('✅')
        sentMessage.react('❎')



    //reply method
    const reactionEmojis = ['✅', '❎']
    const filter = (reaction, user) => { return reactionEmojis.includes(reaction.emoji.name) && user.id === message.author.id }
    const collector = sentMessage.createReactionCollector(filter, { time: 10000, maxEmojis: 1 })

    collector.on('collect', (reaction, user) => {
        const reactionName = reaction.emoji.name
      

        if(reactionName === '✅') {

            if(coinsOwned > coinsRequired - 1){ //minus 1 so can get coinsOwned down to 0
                inventory.addFish(guildId, userId, fishRarity, fishBuying)
                economy.addCoins(guildId, userId, coinsAmount)
                message.reply(`Bought ${fishBuying} ${fishRarity} fish for ${coinsRequired} amount of coins`)
                return; }

            else{
                message.channel.send("Sowwy, ya don't have enough monies to buy dat many fish")
                return; }
            }

        else{ return; }
      })
    })//end
}