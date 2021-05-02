module.exports = 
{
    name: 'archives.collector',
    description: "collector example",
    execute(client, message, args)
    {
        // `m` is a message object that will be passed through the filter function
        const filter = m => m.content.includes('') && m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 10000 });

        //starts collector
        collector.on('collect', m => {
	        console.log(`Collected ${m.content}`);

            //show what messages were collected
            const messagesCollected = `${m.content}`;
            message.channel.send('Messages collected: ' + messagesCollected);
        });

        //end collector (not required if has time)
        collector.on('end', collected => {
	        console.log(`Collected ${collected.size} items`);

            //show the amount messages collected
            const messageSizeCollected = `${collected.size}`;
            message.channel.send('Message size collected: ' + messageSizeCollected);
        });

        message.channel.send('Messages collected testy: ' + messagesCollected)

    }
}