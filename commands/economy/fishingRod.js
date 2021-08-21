const Commando = require('discord.js-commando')
module.exports = class fishingRodCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'fishing.rod', // change this name
            aliases: ['fd', 'rod', 'rods'],
            group: 'economy',
            memberName: 'fishing.rod',
            description: "Equip a different rarity of fishing rod",
            examples: ['a.rods -equip <rarity>'],
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

        const equipArray = ['equip', '-equip']
        //const obtainArray = ['obtain', '-obtain'] !!(testing-only)!!

        const messageContent = (message.content).toLowerCase()
        const userUsername = message.author.username

        const rod = await inventory.getRod(guildId, userId)
        
        var rodRarity
        var hasRod = false //default false


        //rarity settings
        if(messageContent.includes('common')){ rodRarity = 'common'
            if(rod.commonRod == true){ hasRod = true }}

        else if(messageContent.includes('rare')){ rodRarity = 'rare'
            if(rod.rareRod == true){ hasRod = true }}

        else if(messageContent.includes('epic')){ rodRarity = 'epic'
            if(rod.epicRod == true){ hasRod = true }}

        else if(messageContent.includes('ultra')){ rodRarity = 'ultra'
            if(rod.ultraRod == true){ hasRod = true }}


        //equip rod
        if(equipArray.some(aliases => messageContent.includes(aliases))){
            if(!rodRarity){ message.channel.send('Pwease specify a rarity to equip (common, rare, epic, ultra ...)'); return }
            else if(rod.equippedRod == rodRarity){ message.channel.send("Ya already have dat rod equipped, pwease specify a rod dat isn't equipped~"); return }

            else{ //check if user has the rod to equip
                if(hasRod == true){
                await message.channel.send(`Equipping ${rodRarity} rod...`)
                .then(message => {
                    setTimeout(function() {
                        inventory.equipRod(guildId, userId, rodRarity)
                        message.edit(`${userUsername} equipped ${rodRarity} rod!`)}, 1000 * 5)} //5 second delay
                        )
                    }
                else{ message.channel.send("Sowwy, ya don't have dat rod, pwease try equipping a rod dat ya own."); return }
                }
            }


        //obtain rod !!(testing-only)!!
        // else if(obtainArray.some(aliases => messageContent.includes(aliases))){
        //     if(!rodRarity){ message.channel.send('Pwease specify a rarity to obtain (common, rare, epic, ultra ...)'); return }

        //     else{ //check if user doesn't have the rod to obtain
        //         if(hasRod == false){
        //         await message.channel.send(`Obtaining ${rodRarity} rod...`)
        //         .then(message => {
        //             setTimeout(function() {
        //                 inventory.obtainRod(guildId, userId, rodRarity)
        //                 message.edit(`${userUsername} obtained ${rodRarity} rod!`)}, 1000 * 5)} //5 second delay
        //                 )
        //             }
        //         else{ message.channel.send("Sowwy, ya already have dat rod, pwease try obtaining a rod dat ya don't own."); return }
        //         }
        //     }


        else{ message.channel.send('Please specify what (equip ...)') }
  }
}