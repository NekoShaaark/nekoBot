const mongo = require('./mongo')
const profileSchema = require('../schemas/profileSchema')


//get currency (coins AND cookies)
module.exports.getCurrency = async (guildId, userId) => {
    return await mongo().then(async mongoose => {
        try {
            console.log('Running findOne()')

            const result = await profileSchema.findOne({
                guildId,
                userId
            })
            console.log('RESULT:', result)

            let currency = {
                coins: 0,
                cookies: 0
            }
            if (result) {
                currency = {
                    coins: result.currency.coins,
                    cookies: result.currency.cookies }
            } else {
                console.log('Inserting a document')
                await new profileSchema({
                    guildId,
                    userId,
                    currency
                }).save()
            }

            return currency
        } finally {
            mongoose.connection.close()
        }
    })
}


//add currency (coins AND cookies)
module.exports.addCurrency = async (guildId, userId, coinAmount, cookieAmount) => {
    return await mongo().then(async (mongoose) => {
            try {
                console.log('Running findOneAndUpdate()')
                
                const result = await profileSchema.findOneAndUpdate({
                    guildId, 
                    userId 
                }, { 
                    guildId, 
                    userId, 
                    "$inc": {
                        "currency.coins": coinAmount,
                        "currency.cookies": cookieAmount
                    }
                }, { 
                    upsert: true, 
                    new: true 
                })

                console.log('RESULT:', result)
                return result.currency
            } finally {
                mongoose.connection.close()
            }
        })
}