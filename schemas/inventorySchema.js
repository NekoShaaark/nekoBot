const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const reqFish = {
    type: Number,
    default: 0
}

const inventorySchema = mongoose.Schema({
    guildId: reqString,
    userId: reqString,
    fish: {
        commonFish: reqFish,
        rareFish: reqFish,
        epicFish: reqFish
    }
})

module.exports = mongoose.model('inventory', inventorySchema)