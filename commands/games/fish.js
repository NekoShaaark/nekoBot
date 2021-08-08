const Commando = require('discord.js-commando')
module.exports = class fishCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'fish',
            group: 'games',
            memberName: 'fish',
            description: 'Fish for all da fishies',
            details: "Chance to get different types of fish that will be added to the user's personal inventory",
            throttling: {
                usages: 1,
                duration: 10
            }
        })
    }


    // runs the command
    async run(message){

        //variables
        const commonRating = Math.floor(Math.random() * 3) //33% chance
        const rareRating = Math.floor(Math.random() * 4) //25% chance
        const epicRating = Math.floor(Math.random() * 20) //5% chance

        var fishRarity
        var fishCaught = 1 //default

        const inventory = require('../../misc/inventory')

        const guildId = message.guild.id
        const userId = message.author.id
        await inventory.getFish(guildId, userId)

        //rarity
        if(epicRating == 1){  //epic
            fishRarity = "epic"
        }

        else if(rareRating == 1){  //rare
            fishRarity = "rare"
        }

        else if(commonRating == 1){  //common
            fishRarity = "common"
        } 

        else{  //nothing
            message.channel.send(`Awww ${message.author.username} didn't catch anything dis time, better luck next time~`)
            return;
        }


        //ending
        await message.channel.send(`${message.author.username} went fishing and gat a **${fishRarity}** fishy! 🎣`)
        inventory.addFish(guildId, userId, fishRarity, fishCaught)
  }
}