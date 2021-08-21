const Commando = require('discord.js-commando')
module.exports = class shopCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'shop',
            aliases: ['shop'],
            group: 'economy',
            memberName: 'shop',
            description: 'Shop functions',
            details: 'Collection of functions that can be accessed via the correct syntax (see examples)',
            examples: ['a.shop -view', 'a.shop -sell <quantity> <rarity>', '', 'a.shop -buy fish <quantity> <rarity>', 'a.shop -buy rod <rarity>'],
            throttling: {
                usages: 1,
                duration: 5
            }
        })
    }


    // runs the command
    async run(message){

        //variables
        const messageContent = (message.content).toLowerCase()

        const viewArray = ['view', '-view']
        const sellArray = ['sell', '-sell']
        const buyArray = ['buy', '-buy']

        const shopView = require('./shop/view')
        const shopSell = require('./shop/sell')
        const shopBuy = require('./shop/buy')


        // action picker
        if(viewArray.some(aliases => messageContent.includes(aliases))){ shopView(message) }
        else if(sellArray.some(aliases => messageContent.includes(aliases))){ shopSell(message) }
        else if(buyArray.some(aliases => messageContent.includes(aliases))){ shopBuy(message) }

        else{ message.channel.send('Please specify what (view, sell, buy ...)') }
    }
}