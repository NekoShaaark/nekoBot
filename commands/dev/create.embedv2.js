const Commando = require('discord.js-commando')
module.exports = class embedCreationv2Command extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'create.embedv2',
            group: 'dev',
            memberName: 'create.embedv2',
            description: 'Embedded message creation command version 2',
            throttling: {
                usages: 1,
                duration: 6
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


            //forth collector
            const filter = m4 => m4.content.includes('') && m4.author.id === message.author.id;
            const collector4 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('What thumbnail would you like? (little image in top right)');
            collector4.on('collect', m4 => {
	            console.log(`Collected ${m4.content} for thumbnailEmbed`);
                var thumbnailEmbed = `${m4.content}`;


                    
            //fifth_part1 collector
            const filter = m5_part1 => m5_part1.content.includes('') && m5_part1.author.id === message.author.id;
            const collector5_part1 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('For Fields, which Name would you like?');
            collector5_part1.on('collect', m5_part1 => {
	            console.log(`Collected ${m5_part1.content} for name1Embed`);
                var name1Embed = `${m5_part1.content}`;

            //fifth_part2 collector
            const filter = m5_part2 => m5_part2.content.includes('') && m5_part2.author.id === message.author.id;
            const collector5_part2 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('For Fields, which Value (small text under name) would you like?');
            collector5_part2.on('collect', m5_part2 => {
	            console.log(`Collected ${m5_part2.content} for name2Embed`);
                var name2Embed = `${m5_part2.content}`;
            


            //sixth collector
            const filter = m6 => m6.content.includes('https://') && m6.author.id === message.author.id;
            const collector6 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('What image would you like? (Please provide a URL)');
            collector6.on('collect', m6 => {
	            console.log(`Collected ${m6.content} for imageEmbed`);
                var imageEmbed = `${m6.content}`;

            //seventh collector
            const filter = m7 => m7.content.includes('') && m7.author.id === message.author.id;
            const collector7 = message.channel.createMessageCollector(filter, { max: 1 });
            message.channel.send('What footer would you like? (Will show at the bottom of the image)');
            collector7.on('collect', m7 => {
	            console.log(`Collected ${m7.content} for footerEmbed`);
                var footerEmbed = `${m7.content}`;

            var ending
            if(titleEmbed && descriptionEmbed && name1Embed && name2Embed && imageEmbed && footerEmbed !== 'n/a'){ ending = 'all' 
            console.log('Ending 1 has been chosen') }

            if(titleEmbed == 'n/a'){ ending = 'no title' }
            else if(descriptionEmbed == 'n/a'){ ending = 'no description'}
            else if(thumbnailEmbed == 'n/a'){ ending = 'no thumbnail'}
            else if(name1Embed == 'n/a'){ ending = 'no fields'}
            else if(name2Embed == 'n/a'){ ending = 'no fields'}
            else if(imageEmbed == 'n/a'){ ending = 'no image'}
            else if(footerEmbed == 'n/a'){ ending = 'no footer'}




        // final result of collectors in collectors

        //all
        if(ending == 'all'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no title
        else if(ending == 'no title'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no description
        else if(ending == 'no description'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no thumbnail
        if(ending == 'no thumbnail'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no fields
        else if(ending == 'no fields'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .setImage(imageEmbed)
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no image
        else if(ending == 'no image'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setFooter(footerEmbed);
            message.channel.send(newEmbed); }

        //no footer
        else if(ending == 'no footer'){
            const Discord = require('discord.js');
            const newEmbed = new Discord.MessageEmbed()
            .setColor(colorEmbed)
            .setTitle(titleEmbed)
            .setDescription(descriptionEmbed)
            .setThumbnail(thumbnailEmbed)
            .addFields( {name: name1Embed , value: name2Embed} )
            .setImage(imageEmbed)
            message.channel.send(newEmbed); }




                            });
                        });
                    })
                });//part1 
                });//part2
            });
        });
    });
    }
}