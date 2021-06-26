const Discord = require('discord.js');
const Commando = require('discord.js-commando')
const economy = require('../../misc/economy')
module.exports = class animeGameCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'aniguess',
            aliases: ['ag'],
            group: 'games',
            memberName: 'aniguess',
            description: 'Guess the correct anime character within the time limit',
            throttling: {
                usages: 1,
                duration: 5
            }
        })
    }


    // runs the command
    async run(message){


        //variables
        var rareRating = Math.floor(Math.random() * 50) //2% chance
        var ultraRareRating = Math.floor(Math.random() * 500) //0.2% chance

        var guessInfo
        var embedColor
        var embedTitle
        var embedDescription
        const aniguessEmbed = new Discord.MessageEmbed()

        const callTime = Math.floor(Date.now() / 1000)
        var timeLimit
        var timeSeconds
        var pointsMultipler


        //rarity
        if(ultraRareRating == 1){  //ultraRare
            guessInfo = require('../../jsonFolder/games/aniguessInfoUltraRare.json') 
            embedColor = '#7202DF'
            embedTitle = 'ULTRA RARE CHARACTER APPEARS'
            embedDescription = '8 seconds is all ya get! Hurry, Hurry!'
            timeLimit = 11000
            timeSeconds = 11
            pointsMultipler = 5
        }


        else if(rareRating == 1){  //rare
            guessInfo = require('../../jsonFolder/games/aniguessInfoRare.json') 
            embedColor = '#FFD700'
            embedTitle = 'RARE CHARACTER APPEARS'
            embedDescription = '8 seconds is all ya get! Hurry, Hurry!'
            timeLimit = 11000
            timeSeconds = 11
            pointsMultipler = 3
        }


        else{  //normal
            guessInfo = require('../../jsonFolder/games/aniguessInfo.json') 
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

                    //variables
                    const guildId = message.guild.id
                    const userId = collected.first().author.id
                    const coins = endTime
                    await economy.addCoins(guildId, userId, coins)

                    //ending
                    message.channel.send(`Yay! ${collected.first().author} got the correct answer! Here is ${coins} coins answering correctly!`)})

                .catch(collected => {
                    message.channel.send('Awww hope someone gets the answer next time~');
                });
        })}
}