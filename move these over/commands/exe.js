module.exports = 
{
    name: 'exe',
    description: "???",
    execute(client, message, args)
    {

        message.author.send('Testy')
        message.channel.send('Is Testy command')
        message.delete({ timeout: 500 })

    }
}