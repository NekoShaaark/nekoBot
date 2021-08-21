const mongo = require('./mongo')
const inventorySchema = require('../schemas/inventorySchema')

// fish
//add fish
module.exports.addFish = async (guildId, userId, fishRarity, fishCaught) => {
    return await mongo().then(async (mongoose) => {

        //common fish add  //FIX THE ELSE IF STATEMENT MESS HERE PWEASSSSSSE
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


//get fish
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



// fishing rods
//equip rod
module.exports.equipRod = async (guildId, userId, rodRarity) => {
    return await mongo().then(async (mongoose) => {

        //common rod equip //FIX THE ELSE IF STATEMENT MESS HERE PWEASSSSSSE
        if(rodRarity == 'common'){
        try {
            console.log('Running findOneAndUpdate()')

            const result = await inventorySchema.findOneAndUpdate({
                guildId,
                userId,
            }, {
                guildId,
                userId,
                "$set": {
                    "rods.equippedRod": "common"
                }
            }, {
                upsert: true,
                new: true
            })

            console.log('RESULT:', result)

            return result.rods
        } finally {
            mongoose.connection.close()
        }}

        //rare rod equip
        else if(rodRarity == 'rare'){
        try {
            console.log('Running findOneAndUpdate()')
            const result = await inventorySchema.findOneAndUpdate({
                guildId, userId }, { guildId, userId, "$set": { "rods.equippedRod": "rare" }}, { upsert: true, new: true })
            console.log('RESULT:', result)
            return result.rods
        } finally {
            mongoose.connection.close()
        }}

        //epic rod equip
        else if(rodRarity == 'epic'){
        try {
            console.log('Running findOneAndUpdate()')
            const result = await inventorySchema.findOneAndUpdate({
                guildId, userId }, { guildId, userId, "$set": { "rods.equippedRod": "epic" }}, { upsert: true, new: true })
            console.log('RESULT:', result)
            return result.rods
        } finally {
            mongoose.connection.close()
        }}

        //ultra rod equip
        else if(rodRarity == 'ultra'){
            try {
                console.log('Running findOneAndUpdate()')
                const result = await inventorySchema.findOneAndUpdate({
                    guildId, userId }, { guildId, userId, "$set": { "rods.equippedRod": "ultra" }}, { upsert: true, new: true })
                console.log('RESULT:', result)
                return result.rods
            } finally {
                mongoose.connection.close()
            }}
    })
}


//obtain rod
module.exports.obtainRod = async (guildId, userId, rodObtained) => {
    return await mongo().then(async (mongoose) => {

        //common rod obtain //FIX THE ELSE IF STATEMENT MESS HERE PWEASSSSSSE
        if(rodObtained == 'common'){
        try {
            console.log('Running findOneAndUpdate()')

            const result = await inventorySchema.findOneAndUpdate({
                guildId,
                userId,
            }, {
                guildId,
                userId,
                "$set": {
                    "rods.commonRod": true, 
                }
            }, {
                upsert: true,
                new: true
            })

            console.log('RESULT:', result)

            return result.rods
        } finally {
            mongoose.connection.close()
        }}

        //rare rod obtain
        else if(rodObtained == 'rare'){
        try {
            console.log('Running findOneAndUpdate()')
            const result = await inventorySchema.findOneAndUpdate({
                guildId, userId }, { guildId, userId, "$set": { "rods.rareRod": true }}, { upsert: true, new: true })
            console.log('RESULT:', result)
            return result.rods
        } finally {
            mongoose.connection.close()
        }}

        //epic rod obtain
        else if(rodObtained == 'epic'){
        try {
            console.log('Running findOneAndUpdate()')
            const result = await inventorySchema.findOneAndUpdate({
                guildId, userId }, { guildId, userId, "$set": { "rods.epicRod": true }}, { upsert: true, new: true })
            console.log('RESULT:', result)
            return result.rods
        } finally {
            mongoose.connection.close()
        }}

        //ultra rod obtain
        else if(rodObtained == 'ultra'){
            try {
                console.log('Running findOneAndUpdate()')
                const result = await inventorySchema.findOneAndUpdate({
                    guildId, userId }, { guildId, userId, "$set": { "rods.ultraRod": true }}, { upsert: true, new: true })
                console.log('RESULT:', result)
                return result.rods
            } finally {
                mongoose.connection.close()
            }}
    })
}


//get rod
module.exports.getRod = async (guildId, userId) => {
    return await mongo().then(async mongoose => {
        try {
            console.log('Running findOne()')

            const result = await inventorySchema.findOne({
                guildId,
                userId
            })
            console.log('RESULT:', result)

            let rods = {
                commonRod: true,
                rareRod: false,
                epicRod: false,
                ultraRod: false,
                equippedRod: "common" //default is common
            }
            if(result) {
                rods = {
                commonRod: result.rods.commonRod,
                rareRod: result.rods.rareRod,
                epicRod: result.rods.epicRod,
                ultraRod: result.rods.ultraRod,
                equippedRod: result.rods.equippedRod }
            } else {
                console.log('Inserting a document')
                await new inventorySchema({
                    guildId,
                    userId,
                    rods
                }).save()
            }

            return rods
        } finally {
            mongoose.connection.close()
        }
    })
}