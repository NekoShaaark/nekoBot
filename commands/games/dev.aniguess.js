const Discord = require('discord.js');
const Commando = require('discord.js-commando')
const economy = require('../../misc/economy')
module.exports = class animeGameCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'aniguessv3',
            aliases: ['ag3', 'dev.aniguess', 'dev.ag', 'dev.ag3'],
            group: 'games',
            memberName: 'aniguessv3',
            description: 'Guess the correct anime character within the time limit',
            throttling: {
                usages: 1,
                duration: 5
            },
            examples: ['a.aniguess <anime-name>']
        })
    }


    // runs the command
    async run(message){


        //variables
        const rareRating = Math.floor(Math.random() * 25) //4% chance
        const ultraRareRating = Math.floor(Math.random() * 250) //0.2% chance

        message.channel.send(`ultra: ${ultraRareRating}`)
        message.channel.send(`rare: ${rareRating}`)

        var guessInfo
        var embedColor
        var embedTitle
        var embedDescription
        const aniguessEmbed = new Discord.MessageEmbed()

        var timeLimit
        var timeSeconds
        var pointsMultipler
        const callTime = Math.floor(Date.now() / 1000)

        
        //anime picker
        var animePath
        const animeArray = ['sword-art-online', 'konosuba']
        const animePicked = Math.floor(Math.random() * animeArray.length)
        const messageContent = (message.content).toLowerCase()

        if(messageContent.includes('sword-art-online')){ animePath = 'sword-art-online' } //sword art online
        else if(messageContent.includes('konosuba')){ animePath = 'konosuba' } //konosuba
        // if(null){ animePath = '' }
        // if(null){ animePath = '' }
        // if(null){ animePath = '' }
        else{ animePath = animeArray[animePicked] //random pick
            message.channel.send('Please Note: Not specifying a name of an anime will result in a random anime pick.')
            message.channel.send('To specify an anime, use dashes between spaces (eg. *a.aniguess sword-art-online*).') }
        message.channel.send(`path: ${animePath}`)


        //rarity
        if(ultraRareRating == 1){  //ultraRare
            guessInfo = require(`../../jsonFolder/games/aniguess/${animePath}/aniguessInfoUltraRare.json`) 
            embedColor = '#7202DF'
            embedTitle = 'ULTRA RARE CHARACTER APPEARS'
            embedDescription = '8 seconds is all ya get! Hurry, Hurry!'
            timeLimit = 11000
            timeSeconds = 11
            pointsMultipler = 5
        }


        else if(rareRating == 1){  //rare
            guessInfo = require(`../../jsonFolder/games/aniguess/${animePath}/aniguessInfoRare.json`) 
            embedColor = '#FFD700'
            embedTitle = 'RARE CHARACTER APPEARS'
            embedDescription = '8 seconds is all ya get! Hurry, Hurry!'
            timeLimit = 11000
            timeSeconds = 11
            pointsMultipler = 3
        }


        else{  //normal
            guessInfo = require(`../../jsonFolder/games/aniguess/${animePath}/aniguessInfo.json`) 
            embedColor = '#0F52A3'
            embedTitle = 'Character Appears!'
            embedDescription = '15 seconds is all ya get! Hurry, Hurry!'
            timeLimit = 18000
            timeSeconds = 18
            pointsMultipler = 1
        }


        //filter
        const item = guessInfo[Math.floor(Math.random() * guessInfo.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase())}


        //------------------------------------------------------------------------------------------------------------------------

        //embed
        aniguessEmbed
        .setColor(embedColor)
        .setAuthor('Guess the character', message.author.displayAvatarURL())
        .setTitle(embedTitle)
        .setDescription(embedDescription)
        .setImage(item.character)
        message.channel.send(aniguessEmbed).then(() => {

            // collector
            message.channel.awaitMessages(filter, { max: 1, time: timeLimit, errors: ['time'] }) //--three extra seconds added to help system process
                .then(async collected => {

                    //calculate how much time is left
                    const endTime = Math.floor((timeSeconds-((new Date().getTime() / 1000) - callTime)) * pointsMultipler)
                    message.channel.send(`time inside collector: ${Math.floor((timeSeconds-((new Date().getTime() / 1000) - callTime)))}`)
                    message.channel.send(`points multiplied: ${pointsMultipler}`)
                    message.channel.send(`endTime: ${endTime}`)

                    //variables
                    const guildId = message.guild.id
                    const userId = collected.first().author.id
                    const coins = endTime
                    await economy.addCurrency(guildId, userId, coins, 0)

                    //ending
                    message.channel.send(`Yay! ${collected.first().author} got the correct answer! Here is ${coins} coins answering correctly!`)})

                .catch(collected => {
                    message.channel.send('Awww hope someone gets the answer next time~');
                });

                message.channel.send(`time: ${Math.floor((timeSeconds-(((new Date()).getTime() / 1000) - callTime)))}`)

        })}
}