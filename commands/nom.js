module.exports = 
{
    name: 'nom',
    description: "Is da nom command!",
    aliases: ['bite'],
    cooldown: 2, //cooldown of two seconds
    execute(client, message, args)
    {
        //random number generator
        var rating = Math.floor(Math.random() * 3) + 1;
        // will pick a random number between 1 and 3

        //number determining what nom will be shown
        if(rating == 1){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/835480385659076618/nom1.gif') }
        else if(rating == 2){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/835480411529805834/nom2.gif'); }
        else if(rating == 3){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/835480428470468608/nom3.gif'); }
        else if(rating == 4){ nomNum = (''); }
        else if(rating == 5){ nomNum = (''); }
        else if(rating == 6){ nomNum = (''); }
        else if(rating == 7){ nomNum = (''); }
        else if(rating == 8){ nomNum = (''); }
        else if(rating == 9){ nomNum = (''); }
        else if(rating == 10){ nomNum = (''); }
        else if(rating == 11){ nomNum = (''); }
        else if(rating == 12){ nomNum = (''); }
        else if(rating == 13){ nomNum = (''); }
        else if(rating == 14){ nomNum = (''); }
        else if(rating == 15){ nomNum = (''); }
        else if(rating == 16){ nomNum = (''); }
        else if(rating == 17){ nomNum = (''); }
        else if(rating == 18){ nomNum = (''); }
        else if(rating == 19){ nomNum = (''); }
        else if(rating == 20){ nomNum = (''); }
        else if(rating == 21){ nomNum = (''); }
        else if(rating == 22){ nomNum = (''); }
        else if(rating == 23){ nomNum = (''); }
        else if(rating == 24){ nomNum = (''); }
        else if(rating == 25){ nomNum = (''); }


        // random number generator
        var nomRating = Math.floor(Math.random() * 5) + 1;
        // will pick a random number between 1 and 5

        //number determining what nom will be shown
        if(nomRating == 1){ nomMessageEnding = (' *nom*'); }
        else if(nomRating == 2){ nomMessageEnding = (' *nom*'); }
        else if(nomRating == 3){ nomMessageEnding = (' *nom*'); }
        else if(nomRating == 4){ nomMessageEnding = (' *nom*'); }
        else if(nomRating == 5){ nomMessageEnding = (' *nom*'); }

        // determines if user was pinged or not
        if(message.mentions.users.first()){
            userMentioned = message.mentions.users.first().username }
                    
        else{ 
            nomPrefix = 'a.nom '
            userMentioned = message.content.slice(nomPrefix.length); }


        // embed for nom
        const Discord = require('discord.js');
        const nomEmbed = new Discord.MessageEmbed()
        .setColor('#39007D')
        .setAuthor(message.author.username + ' noms ' + userMentioned + nomMessageEnding, message.author.displayAvatarURL())
        .setImage(nomNum)

        message.channel.send(nomEmbed);
    }
}