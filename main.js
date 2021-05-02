// const Discord = require('discord.js');
require('dotenv').config();
// const client = new Discord.Client();
const fs = require('fs');
const path = require('path')
const Commando = require('discord.js-commando');


// commando framework import
const client = new Commando.CommandoClient({
    owner: process.env.OWNER,
    commandPrefix: process.env.PREFIX })

// bot is online
client.on('ready', async () => {
    console.log('Shark is online')

    // registry settings
    client.registry
    .registerGroups([
        ['misc', 'misc commands'],
        ['moderation', 'moderation commands'] ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))

})



// client.commands = new Discord.Collection();
// client.events = new Discord.Collection();

// ['command_handler', 'event_handler'].forEach(handler =>{
//     require(`./handlers/${handler}`)(client, Discord);
// })



// login with token from .env
client.login(process.env.DISCORD_TOKEN);