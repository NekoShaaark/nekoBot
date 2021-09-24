module.exports = async(message) => {


    //variables
    const inventory = require('../../../misc/inventory')
    const economy = require('../../../misc/economy')

    const guildId = message.guild.id
    const userId = message.author.id

    var coinsRequired
    const currency = await economy.getCurrency(guildId, userId)  //console
    const coinsOwned = currency.coins

    const userContent = message.content.split(' ')
    const itemBuying = userContent[2] //which item to buy (fish/rod)
    const itemRarity = userContent[3] //which rarity to buy

    const fishBuying = userContent[3] //how many fish to buy
    const fishRarity = userContent[4] //which rarity to buy


    //check if user has specified either fish or rod
    if(!itemBuying){ message.channel.send('Pwease specify wat ya wanna buy (fish, rod ...)'); return }


    //check if user has specified rarity of rod to buy
    if(itemBuying == 'rod'){
        if(!itemRarity){ message.channel.send('Pwease specify which rarity of rod ya wanna buy.'); return }
    
        //coin calculation (rod)
        if(itemRarity.toLowerCase() == 'rare'){ coinsRequired = 250 }
        else if(itemRarity.toLowerCase() == 'epic'){ coinsRequired = 600 }
        else if(itemRarity.toLowerCase() == 'ultra'){ coinsRequired = 1000 }}


    //check if user has specified amount and rarity of fish to buy
    else if(itemBuying == 'fish'){
        if(!fishBuying){ message.channel.send('Pwease specify how many fish ya wanna buy.'); return }
        else if(!fishRarity){ message.channel.send('Pwease specify which rarity of fish ya wanna buy.'); return }
    
        //coin calculation (fish)
        if(fishRarity.toLowerCase() == 'common'){ coinsRequired = 5 * fishBuying }
        else if(fishRarity.toLowerCase() == 'rare'){ coinsRequired = 18 * fishBuying }
        else if(fishRarity.toLowerCase() == 'epic'){ coinsRequired = 30 * fishBuying }}


    //how much to take away from user when buys
    const coinsAmount = coinsRequired - (coinsRequired * 2)



    //main code (fish)
    if(itemBuying == 'fish'){
    message.reply(`Do ya wanna buy ${fishBuying} ${fishRarity} fish for ${coinsRequired} coins?`)
    .then(sentMessage => {
        sentMessage.react('✅')
        sentMessage.react('❎')



    //reply method
    const reactionEmojis = ['✅', '❎']
    const filter = (reaction, user) => { return reactionEmojis.includes(reaction.emoji.name) && user.id === message.author.id }
    const collector = sentMessage.createReactionCollector(filter, { time: 1000 * 10, maxEmojis: 1 }) //10 seconds

    collector.on('collect', (reaction, user) => {
        const reactionName = reaction.emoji.name
      

        if(reactionName === '✅') {

            if(coinsOwned > coinsRequired - 1){ //minus 1 so can get coinsOwned down to 0
                inventory.addFish(guildId, userId, fishRarity, fishBuying)
                economy.addCurrency(guildId, userId, coinsAmount, 0)
                message.reply(`Bought ${fishBuying} ${fishRarity} fish for ${coinsRequired} amount of coins!`)
                return; }

            else{
                message.channel.send("Sowwy, ya don't have enough monies to buy dat many fish~")
                return; }
            }

        else{ return; }
      })
    })//end
}


    //main code (rod/item)
    else if(itemBuying == 'rod'){ 
    message.reply(`Do ya wanna buy ${itemBuying} ${itemRarity} fish for ${coinsRequired} coins?`)
    .then(sentMessage => {
        sentMessage.react('✅')
        sentMessage.react('❎')



    //reply method
    const reactionEmojis = ['✅', '❎']
    const filter = (reaction, user) => { return reactionEmojis.includes(reaction.emoji.name) && user.id === message.author.id }
    const collector = sentMessage.createReactionCollector(filter, { time: 1000 * 10, maxEmojis: 1 }) //10 seconds

    collector.on('collect', (reaction, user) => {
        const reactionName = reaction.emoji.name
      

        if(reactionName === '✅') {

            if(coinsOwned > coinsRequired - 1){ //minus 1 so can get coinsOwned down to 0
                inventory.obtainRod(guildId, userId, itemRarity)
                economy.addCurrency(guildId, userId, coinsAmount, 0)
                message.reply(`Bought ${itemBuying} ${itemRarity} fish for ${coinsRequired} amount of coins!`); return }

            else{ message.channel.send("Sowwy, ya don't have enough monies to buy dat fishing rod~"); return }}

        else{ return; }
      })
    })//end
}}