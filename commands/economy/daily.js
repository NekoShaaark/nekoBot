const Commando = require('discord.js-commando')
const mongo = require('../../misc/mongo')
const dailySchema = require('../../schemas/dailySchema')
const economy = require('../../misc/economy')


// cache
let claimedCache = []

const clearCache = () => {
    claimedCache = []
    setTimeout(clearCache, 1000 * 60 * 10) //clears every 10 minutes
}
clearCache();


// command constructor
module.exports = class dailyCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'daily',
            group: 'economy',
            memberName: 'daily',
            description: 'Claim rewards daily (can only be used once per 24 hours)',
        })
    }


    // runs the command
    async run(message){

        //variables
        const guildId = message.guild.id
        const userId = message.author.id

        const alreadyClaimed = 'Daily has already been claimed, try again later~'
        const { guild, member } = message
        const { id } = member
        const obj = {
            guildId: guild.id,
            userId: id
        }


        //returns from cache (if is in cache)
        if(claimedCache.includes(id)){
            console.log('Returing from Cache')
            message.reply(alreadyClaimed)
            return;
        }


        //daily claim
        console.log('Fetching from Mongo')
        await mongo().then(async mongoose => {
            try{
                const results = await dailySchema.findOne(obj)
                console.log('RESULTS:', results)

                if(results){
                    const then = new Date(results.updatedAt).getTime()
                    const now = new Date().getTime()
                    
                    const diffTime = Math.abs(now - then)
                    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)) //24 hours

                    if(diffDays <= 1){
                        claimedCache.push(id)
                        message.reply(alreadyClaimed)
                        return;
                    } 
                }

                await dailySchema.findOneAndUpdate(obj, obj, { upsert: true })
                claimedCache.push(id)

                await economy.addCurrency(guildId, userId, 5, 1) //(guildId, userId, coinAmount, cookieAmount)
                message.reply('Claimed daily! woo')


            } finally {
                mongoose.connection.close()
            }
      })
    }
}