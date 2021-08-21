const Commando = require('discord.js-commando')
module.exports = class inventoryCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'inventory',
            aliases: ['inv'],
            group: 'economy',
            memberName: 'inventory',
            description: "Shows the user's inventory",
            details: 'Shows all items that the user as in their personal inventory',
        })
    }


    // runs the command
    async run(message){

        //variables
        const inventory = require('../../misc/inventory')
        const Discord = require('discord.js')

        const guildId = message.guild.id
        const userId = message.author.id

        var currentPage
        var rod

        const fish = await inventory.getFish(guildId, userId)
        .then(rod = await inventory.getRod(guildId, userId)) //using .then(function) because topology will close otherwise


        //check if user has rods
        var rareRodHas = 'Does not own'
        var epicRodHas = 'Does not own'
        var ultraRodHas = 'Does not own'

        if(rod.rareRod == true){ rareRodHas = 'Owns' }
        if(rod.epicRod == true){ epicRodHas = 'Owns' }
        if(rod.ultraRod == true){ ultraRodHas = 'Owns' }

    
        //rod equipped
        //capitize first Letter function
        function capitalizeFirstLetter(string) { return string.charAt(0).toUpperCase() + string.slice(1) }
        const rodEquipped = `${capitalizeFirstLetter(rod.equippedRod)} Rod`

        
        //inventory
        //page 1
        currentPage = 'page 1'
        const page1Embed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(`${message.author.username}'s Inventory`, message.author.displayAvatarURL())
        .setDescription('All da fishy ya caught are here! 🐟')
        .addFields(
            {name: 'Common Fish', value: fish.commonFish, inline: true},
            {name: 'Rare Fish', value: fish.rareFish, inline: true},
            {name: 'Epic Fish', value: fish.epicFish, inline: true})
        .setFooter('Page 1 of 2')

        message.channel.send(page1Embed)
        .then(sentMessage => {
            sentMessage.react('⬅️')
            sentMessage.react('➡️')
    
    
    
        //reply method
        const reactionEmojis = ['⬅️', '➡️']
        const filter = (reaction, user) => { return reactionEmojis.includes(reaction.emoji.name) && user.id === message.author.id }
        const collector = sentMessage.createReactionCollector(filter, { time: 1000 * 10 }) //10 seconds
    
        collector.on('collect', (reaction, user) => {
            const reactionName = reaction.emoji.name
          
    
            if(reactionName === '⬅️') { //if left arrow, will move to page 1
                if(currentPage == 'page 2'){ sentMessage.edit(page1Embed) }}
     
                
            else if(reactionName === '➡️'){ //if right arrow, will move to page 2
    
                //page 2
                currentPage = 'page 2'
                const page2Embed = new Discord.MessageEmbed(page1Embed)
                    .setColor('#0F52A3')
                    .setAuthor(`${message.author.username}'s Inventory`, message.author.displayAvatarURL())
                    .setDescription('All da fishing rods ya own are here! 🎣')
                    .spliceFields(0, 3, [ //remove the previous 3 fields starting with an index of 0
                        {name: 'Common Rod', value: 'Owns', inline: true},
                        {name: 'Rare Rod', value: rareRodHas, inline: true},
                        {name: 'Epic Rod', value: epicRodHas, inline: true},
                        {name: 'Ultra Rod', value: ultraRodHas, inline: true},
                        {name: 'Equipped Fishing Rod', value: rodEquipped}])
                    .setFooter('Page 2 of 2')
                    
                    sentMessage.edit(page2Embed)
             }
          })
        })//end
    }
}