const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true }

const reqNum = {
    type: Number,
    default: 0 }


const profileSchema = mongoose.Schema({
    guildId: reqString,
    userId: reqString,
    currency: {
        coins: reqNum,
        cookies: reqNum
    }
})

module.exports = mongoose.model('profiles', profileSchema)