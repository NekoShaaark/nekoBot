module.exports = 
{
    name: 'ping',
    aliases: ['pong'],  //doesn't require IF statements instead could just be used as aliases
    cooldown: 10,   //10 second cooldown
    description: "This is a ping command!",
    execute(client, message, cmd, args)
    {
        if(cmd === 'ping'){ message.channel.send('pong!'); }

        if(cmd === 'pong'){ message.channel.send('ping!'); }
        }
    }