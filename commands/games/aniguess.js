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

        // variables
        const guessInfo = require('../jsonFolder/games/aniguessInfo.json');
        const item = guessInfo[Math.floor(Math.random() * guessInfo.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };
        
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

    }
}