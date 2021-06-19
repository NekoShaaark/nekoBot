require('dotenv').config();
const path = require('path');
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
        ['games', 'Games'],
        ['economy', 'Economy stuff'],
        ['misc', 'Misc'],
        ['dev', 'Development Stuff'],
        ['archives', 'Archives']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'))

    // user presence
    client.user.setPresence({  
        status: 'available', 
        activity: {
        name: 'Shark Simulator',
        type: 'PLAYING'
        }});
})



// login with token from .env
client.login(process.env.DISCORD_TOKEN);