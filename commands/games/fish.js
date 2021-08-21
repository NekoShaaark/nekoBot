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
                duration: 5
            }
        })
    }


    // runs the command
    async run(message){

        //variables
        const inventory = require('../../misc/inventory')

        const guildId = message.guild.id
        const userId = message.author.id

        const rod = await inventory.getRod(guildId, userId)
        var rodEquipped = rod.equippedRod


        //rod rarity and chances
        var epicCatchChance
        var rareCatchChance
        var commonCatchChance
        
        //ultra rod
        if(rodEquipped == 'ultra'){ 
            epicCatchChance = 4 //25% chance
            rareCatchChance = 3 //33% chance
            commonCatchChance = 2 //50% chance
        }

        //epic rod
        else if(rodEquipped == 'epic'){ 
            epicCatchChance = 5 //20% chance
            rareCatchChance = 3 //33% chance
            commonCatchChance = 2 //50% chance
        }

        //rare rod
        else if(rodEquipped == 'rare'){ 
            epicCatchChance = 10 //10% chance
            rareCatchChance = 3 //33% chance
            commonCatchChance = 2 //50% chance
        }

        //common rod
        else{ 
            epicCatchChance = 20 //5% chance
            rareCatchChance = 4 //25% chance
            commonCatchChance = 3 //33% chance
        }


        //rarity chance
        const epicRating = Math.floor(Math.random() * epicCatchChance)
        const rareRating = Math.floor(Math.random() * rareCatchChance)
        const commonRating = Math.floor(Math.random() * commonCatchChance)

        var fishRarity
        var fishCaught = 1 //default


        //rarity picker
        if(epicRating == 1){ fishRarity = "epic" } //epic
        else if(rareRating == 1){ fishRarity = "rare" } //rare
        else if(commonRating == 1){ fishRarity = "common" } //common

        else{ message.channel.send(`Awww ${message.author.username} didn't catch anything dis time, better luck next time~`); return } //none


        //ending
        await message.channel.send(`${message.author.username} went fishing and gat a **${fishRarity}** fishy! 🎣`)
        inventory.addFish(guildId, userId, fishRarity, fishCaught)
  }
}