const mongo = require('./mongo')
const inventorySchema = require('../schemas/inventorySchema')

module.exports.addFish = async (guildId, userId, fishRarity, fishCaught) => {
    return await mongo().then(async (mongoose) => {

        //common fish add  //FIX THIS MESS HERE PWEASSSSSSE
        if(fishRarity == 'common'){
        try {
            console.log('Running findOneAndUpdate()')

            const result = await inventorySchema.findOneAndUpdate({
                guildId,
                userId
            }, {
                guildId,
                userId,
                "$inc": {
                    "fish.commonFish": fishCaught
                }
            }, {
                upsert: true,
                new: true
            })

            console.log('RESULT:', result)

            return result.fish
        } finally {
            mongoose.connection.close()
        }}

        //rare fish add
        else if(fishRarity == 'rare'){
        try {
            console.log('Running findOneAndUpdate()')
            const result = await inventorySchema.findOneAndUpdate({
                guildId, userId }, { guildId, userId, "$inc": { "fish.rareFish": fishCaught }}, { upsert: true, new: true })
            console.log('RESULT:', result)
            return result.fish
        } finally {
            mongoose.connection.close()
        }}

        //epic fish add
        else if(fishRarity == 'epic'){
        try {
            console.log('Running findOneAndUpdate()')
            const result = await inventorySchema.findOneAndUpdate({
                guildId, userId }, { guildId, userId, "$inc": { "fish.epicFish": fishCaught }}, { upsert: true, new: true })
            console.log('RESULT:', result)
            return result.fish
        } finally {
            mongoose.connection.close()
        }}
    })
}


module.exports.getFish = async (guildId, userId) => {
    return await mongo().then(async mongoose => {
        try {
            console.log('Running findOne()')

            const result = await inventorySchema.findOne({
                guildId,
                userId
            })
            console.log('RESULT:', result)

            let fish = {
                commonFish: 0,
                rareFish: 0,
                epicFish: 0
            }
            if (result) {
                fish = {
                commonFish: result.fish.commonFish,
                rareFish: result.fish.rareFish,
                epicFish: result.fish.epicFish }
            } else {
                console.log('Inserting a document')
                await new inventorySchema({
                    guildId,
                    userId,
                    fish
                }).save()
            }

            return fish
        } finally {
            mongoose.connection.close()
        }
    })
}