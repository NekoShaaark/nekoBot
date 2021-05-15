const Commando = require('discord.js-commando')
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
                duration: 15
            }
        })
    }


    // runs the command
    async run(message){

        const guessInfo = require('../jsonFolder/games/aniguessInfo.json');
        const item = guessInfo[Math.floor(Math.random() * guessInfo.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };
        
        const Discord = require('discord.js');
        const aniguessEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor('Guess the character', message.author.displayAvatarURL())
        .setDescription('15 seconds is all ya get! Hurry, Hurry!')
        .setImage(item.character)
        
        message.channel.send(aniguessEmbed).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} got the correct answer!`);
                })
                .catch(collected => {
                    message.channel.send('Looks like nobody got the answer this time.');
                });
        }); 

    }
}