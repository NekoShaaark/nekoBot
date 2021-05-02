module.exports = 
{
    name: 'conversation',
    description: "DONT USE",
    aliases: ['con'],
    execute(client, message, args)
    {
        message.delete({ timeout: 1000 });
        message.channel.send("a");
        //message.channel.send("")
        //message.channel.send("<:emoji_4:778187341881802764>");
    }
}