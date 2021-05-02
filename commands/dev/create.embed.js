const Commando = require('discord.js-commando')
module.exports = class embedCreationCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'create.embed',
            group: 'dev',
            memberName: 'create.embed',
            description: 'Embedded message creation command',
            throttling: {
                usages: 1,
                duration: 5
            }
        })
    }


    // runs the command
    async run(message){

        //first collector
        const filter = m1 => m1.content.includes('#') && m1.author.id === message.author.id;
        const collector1 = message.channel.createMessageCollector(filter, { max: 1 });
        message.channel.send('What color (hex code) would you like?')
        collector1.on('collect', m1 => {
	        console.log(`Collected ${m1.content} for colorEmbed`);
            var colorEmbed = `${m1.content}`;


            //second collector
            const filter = m2 => m2.content.includes('') && m2.author.id === message.author.id;
            const collector2 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('What title would you like?');
            collector2.on('collect', m2 => {
                console.log(`Collected ${m2.content} for titleEmbed`);
                var titleEmbed = `${m2.content}`;


            //third collector
            const filter = m3 => m3.content.includes('') && m3.author.id === message.author.id;
            const collector3 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('What description would you like? (little text under title)');
            collector3.on('collect', m3 => {
	            console.log(`Collected ${m3.content} for descriptionEmbed`);
                var descriptionEmbed = `${m3.content}`;


                    
            //forth_part1 collector
            const filter = m4_part1 => m4_part1.content.includes('') && m4_part1.author.id === message.author.id;
            const collector4_part1 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('For Fields, which Name would you like?');
            collector4_part1.on('collect', m4_part1 => {
	            console.log(`Collected ${m4_part1.content} for name1Embed`);
                var name1Embed = `${m4_part1.content}`;

            //forth_part2 collector
            const filter = m4_part2 => m4_part2.content.includes('') && m4_part2.author.id === message.author.id;
            const collector4_part2 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('For Fields, which Value (small text under name) would you like?');
            collector4_part2.on('collect', m4_part2 => {
	            console.log(`Collected ${m4_part2.content} for name2Embed`);
                var name2Embed = `${m4_part2.content}`;



            //fifth collector
            const filter = m5 => m5.content.includes('https://') && m5.author.id === message.author.id;
            const collector5 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('What image would you like? (Please provide a URL)');
            collector5.on('collect', m5 => {
	            console.log(`Collected ${m5.content} for imageEmbed`);
                var imageEmbed = `${m5.content}`;

            //sixth collector
            const filter = m6 => m6.content.includes('') && m6.author.id === message.author.id;
            const collector6 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('What footer would you like? (Will show at the bottom of the image)');
            collector6.on('collect', m6 => {
	            console.log(`Collected ${m6.content} for footerEmbed`);
                var footerEmbed = `${m6.content}`;




        //final result of collectors in collectors
        const Discord = require('discord.js');
        const newEmbed = new Discord.MessageEmbed()
        .setColor(colorEmbed)
        .setTitle(titleEmbed)
        .setDescription(descriptionEmbed)
        .addFields(
            {name: name1Embed , value: name2Embed},
        )
        .setImage(imageEmbed)
        .setFooter(footerEmbed);

        message.channel.send(newEmbed);


                        });
                    });
                });//part1
                });//part2
            });
        });
    });
    }
}