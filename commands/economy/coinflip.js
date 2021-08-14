const Commando = require('discord.js-commando')
module.exports = class coinflipCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'coinflip',
            aliases: ['coin', 'flip', 'cf', 'bet', 'gamble'],
            group: 'economy',
            memberName: 'coinflip',
            description: 'Gambling',
            throttling: {
                usages: 1,
                duration: 5
            },
            examples: ['a.coinflip <amount> <heads/tails>']
        })
    }

    // runs the command
    async run(message){

        //variables
        const economy = require('../../misc/economy')
        
        const userContent = message.content.split(' ')
        const coinsGambled = userContent[1]
        const sideChosen = userContent[2]

        const target = message.author
        const guildId = message.guild.id
        const userId = target.id


        //coins calculations
        const coins = await economy.getCoins(guildId, userId)
        const rating = Math.floor(Math.random() * 2) + 1

        const coinsNeeded = coins - coinsGambled
        const coinsLost = coinsGambled - (coinsGambled * 2)
        var coinsWon
        

        //check if user has entered number (of coins) to gamble
        if(!coinsGambled){ message.channel.send('Pwease input da amount of coins ya wanna gamble'); return }

        //checks if user has entered side (heads or tails) to bet on
        if(!sideChosen){ message.channel.send('Pwease input which side ya wanna bet on (heads or tails)'); return }

        //determines if user gained or lost coins (based off-of which side is bet on)
        if(rating == 1){ //heads
            if(sideChosen == 'heads'){ coinsWon = coinsGambled }
            else{ coinsWon = coinsLost }}

        else if(rating == 2){ //tails
            if(sideChosen == 'tails'){ coinsWon = coinsGambled }
            else{ coinsWon = coinsLost }}


            
        //endings
        if(rating == 1){
            if(sideChosen == 'heads'){ //heads
                if(coinsNeeded > -1){
                    await message.channel.send(`${message.author.username} flipped a coin for ${coinsGambled}... Yay! It landed on **Heads**! Nyah won ${coinsWon * 2} coins! <:nekosharkCoin:874230937385324544>`)
                    await economy.addCoins(guildId, userId, coinsWon); return}
                else{ message.channel.send("Sowwy but ya don't have enough coins to gamble dat amount")}}

            else{ await message.channel.send(`${message.author.username} flipped a coin for ${coinsGambled}... Awww it landed on **Heads**, Sowwy but ya didn't win any coins~`)
                await economy.addCoins(guildId, userId, coinsWon); return}}


        else if(rating == 2){
            if(sideChosen == 'tails'){ //tails
                if(coinsNeeded > -1){
                    await message.channel.send(`${message.author.username} flipped a coin for ${coinsGambled}... Yay! It landed on **Tails**! Nyah won ${coinsWon * 2} coins! <:nekosharkCoin:874230937385324544>`)
                    await economy.addCoins(guildId, userId, coinsWon); return}
                else{ message.channel.send("Sowwy but ya don't have enough coins to gamble dat amount")}}

            else{ await message.channel.send(`${message.author.username} flipped a coin for ${coinsGambled}... Awww it landed on **Tails**, Sowwy but ya didn't win any coins~`)
                await economy.addCoins(guildId, userId, coinsWon); return}}
    }
}