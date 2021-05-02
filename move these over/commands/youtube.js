module.exports = 
{
    name: 'youtube',
    description:"Sends the youtube link!",
    execute(client, message, args)
    {
        //if(message.member.roles.cache.has('823105988965826581')){
            message.channel.send('https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g');
        //}

        //else
        //{
        //    message.channel.send('Error! Insufficient Permissions Detected!!');
        //}
    }
}