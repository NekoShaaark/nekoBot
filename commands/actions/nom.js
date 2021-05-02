const Commando = require('discord.js-commando')
module.exports = class nomCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'nom',
            aliases: ['bite'],
            group: 'actions',
            memberName: 'nom',
            description: 'Nom the ping or non-pinged user'
        })
    }


    // runs the command
    async run(message){

        // random number generator
        var rating = Math.floor(Math.random() * 14) + 1;
        var nomNum
        var nomMessageEnding
        var userMentioned
        //will pick a random number between 1 and 14

        // number determining what nom will be shown
        if(rating == 1){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/835480385659076618/nom1.gif') }
        else if(rating == 2){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/835480411529805834/nom2.gif'); }
        else if(rating == 3){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/835480428470468608/nom3.gif'); }
        else if(rating == 4){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836536404485079090/nom4.gif'); }
        else if(rating == 5){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836537541338333224/nom5.gif'); }
        else if(rating == 6){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836537833970991174/nom6.gif'); }
        else if(rating == 7){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836538381658882068/nom7.gif'); }
        else if(rating == 8){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836538654490230784/nom8.gif'); }
        else if(rating == 9){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836538934577201212/nom9.gif'); }
        else if(rating == 10){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836545280231866368/nom10.gif'); }
        else if(rating == 11){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836545682814271518/nom11.gif'); }
        else if(rating == 12){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836546528269172756/nom12.gif'); }
        else if(rating == 13){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836559986888015952/nom13.gif'); }
        else if(rating == 14){ nomNum = ('https://cdn.discordapp.com/attachments/835480340364656652/836577264610705424/senkoNom.gif'); } //senkoNom


        // random number generator
        var nomRating = Math.floor(Math.random() * 5) + 1;
        //will pick a random number between 1 and 5

        // number determining what nom will be shown
        if(nomRating == 1){ nomMessageEnding = ('! yummy'); }
        else if(nomRating == 2){ nomMessageEnding = ('! *nom*'); }
        else if(nomRating == 3){ nomMessageEnding = ('! *nom*'); }
        else if(nomRating == 4){ nomMessageEnding = ('! *nom*'); }
        else if(nomRating == 5){ nomMessageEnding = ('! yummy'); }


        // determines if user was pinged or not
        if(message.mentions.users.first()){
            userMentioned = message.mentions.users.first().username }
                    
        else{ 
            var nomPrefix = 'a.nom '
            userMentioned = message.content.slice(nomPrefix.length); }



        // embed for nom
        const Discord = require('discord.js');
        const nomEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(message.author.username + ' noms ' + userMentioned + nomMessageEnding, message.author.displayAvatarURL())
        .setImage(nomNum)

        message.channel.send(nomEmbed);

    }
}