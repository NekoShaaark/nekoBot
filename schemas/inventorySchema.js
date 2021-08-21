const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true }

const reqNum = {
    type: Number,
    default: 0 }

const reqBool = {
    type: Boolean,
    default: false }


const inventorySchema = mongoose.Schema({
    guildId: reqString,
    userId: reqString,
    fish: {
        commonFish: reqNum,
        rareFish: reqNum,
        epicFish: reqNum
    },
    rods: { 
        commonRod: reqBool,
        rareRod: reqBool,
        epicRod: reqBool,
        ultraRod: reqBool,
        equippedRod: reqString
    }
})

module.exports = mongoose.model('inventory', inventorySchema)