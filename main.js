require('dotenv').config();
const fs = require('fs');
const path = require('path')
const Commando = require('discord.js-commando');
const { MongoClient } = require('mongodb')
const { MongoDBProvider } = require('commando-provider-mongo')


// commando framework import
const client = new Commando.CommandoClient({
    owner: process.env.OWNER,
    commandPrefix: process.env.PREFIX })

    client.setProvider(
        MongoClient.connect(process.env.MONGOPATH)
        .then(client => {
            return new MongoDBProvider(client, 'nekoBot')
        })
        .catch((error) => {
            console.error(error)
        })
    )

// bot is online
client.on('ready', async () => {
    console.log('Shark is here to take over da world!')

    // registry settings
    client.registry
    .registerGroups([
        ['actions', 'Actions'],
        ['misc', 'Misc'],
        ['dev', 'Development Stuff'],
        ['archives', 'Archives']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'))

})



// login with token from .env
client.login(process.env.DISCORD_TOKEN);