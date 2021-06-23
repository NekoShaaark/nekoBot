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

        //rare occurance
        var rareRating = Math.floor(Math.random() * 50)
        var ultraRareRating = Math.floor(Math.random() * 200)

        //rare collector
        if(rareRating == 1){


        //--------------------------------------------------------------------------------------------------
        //rare or ultra rare
        var guessInfoRare
        if(ultraRareRating == 1){ guessInfoRare = require('../jsonFolder/games/aniguessInfoUltraRare.json') }
        else{ guessInfoRare = require('../jsonFolder/games/aniguessInfoRare.json') }

        // filter
        const itemRare = guessInfoRare[Math.floor(Math.random() * guessInfoRare.length)];
        const filter = response => {
            return itemRare.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase())}

        // embed
        const Discord = require('discord.js');
        const aniguessRareEmbed = new Discord.MessageEmbed()
        .setColor('#FFD700')
        .setAuthor('Guess the character', message.author.displayAvatarURL())
        .setTitle('**RARE CHARACTER APPEARS**')
        .setDescription('8 seconds is all ya get! Hurry, Hurry!')
        .setImage(itemRare.character)
        message.channel.send(aniguessRareEmbed).then(() => {

            // start timer
            const callTime = Math.floor(Date.now() / 1000);


            // collectors
            message.channel.awaitMessages(filter, { max: 1, time: 8000, errors: ['time'] })
                .then(async collected => {

                    //calculate how much time is left
                    const endTime = Math.floor((8-(((new Date()).getTime() / 1000) - callTime)) * 3)

                    //variables
                    const guildId = message.guild.id
                    const userId = collected.first().author.id
                    const coins = endTime
                    const newCoins = await economy.addCoins(guildId, userId, coins)

                    message.channel.send(`Yay! ${collected.first().author} got the correct answer! Here is ${coins} coins answering correctly!`)

                })
                .catch(collected => {
                    message.channel.send('Awww hope someone gets the answer next time~');
                });
        })}
        //--------------------------------------------------------------------------------------------------


        //normal collector
        else{

        // main variables
        const guessInfo = require('../jsonFolder/games/aniguessInfo.json');
        const item = guessInfo[Math.floor(Math.random() * guessInfo.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase())};
        
        // embed
        const Discord = require('discord.js');
        const aniguessEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor('Guess the character', message.author.displayAvatarURL())
        .setDescription('15 seconds is all ya get! Hurry, Hurry!')
        .setImage(item.character)
        message.channel.send(aniguessEmbed).then(() => {

            // start timer
            const callTime = Math.floor(Date.now() / 1000);


            // collectors
            message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
                .then(async collected => {

                    //calculate how much time is left
                    const endTime = Math.round(15-(((new Date()).getTime() / 1000) - callTime))

                    //variables
                    const guildId = message.guild.id
                    const userId = collected.first().author.id
                    const coins = endTime
                    const newCoins = await economy.addCoins(guildId, userId, coins)

                    message.channel.send(`Yay! ${collected.first().author} got the correct answer! Here is ${coins} coins answering correctly!`)

                })
                .catch(collected => {
                    message.channel.send('Awww hope someone gets the answer next time~');
                });
        }); 

    } //else end
    }
}