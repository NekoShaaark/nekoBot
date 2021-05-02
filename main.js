require('dotenv').config();
const fs = require('fs');
const path = require('path')
const Commando = require('discord.js-commando');


// commando framework import
const client = new Commando.CommandoClient({
    owner: process.env.OWNER,
    commandPrefix: process.env.PREFIX })

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