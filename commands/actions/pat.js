const Commando = require('discord.js-commando')
module.exports = class patCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            aliases: ['headpat'],
            group: 'actions',
            memberName: 'pat',
            description: 'Give the ping or non-pinged user a pat',
            throttling: {
                usages: 1,
                duration: 3
            }
        })
    }


    // runs the command
    async run(message){

        //random number generator
        var rating = Math.floor(Math.random() * 25) + 1;
        var patNum
        var patMessageEnding
        var userMentioned
        // will pick a random number between 1 and 25

        //number determining what pat will be shown
        if(rating == 1){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834083402114138183/pat1.gif') }
        else if(rating == 2){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834091611747123260/pat2.gif'); }
        else if(rating == 3){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834091385941655572/pat3.gif'); }
        else if(rating == 4){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834091396138401852/pat4.gif'); }
        else if(rating == 5){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834091115069833306/pat5.gif'); }
        else if(rating == 6){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834091070727520336/pat6.gif'); }
        else if(rating == 7){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834084162176417792/pat7.gif'); }
        else if(rating == 8){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834084661751185418/pat8.gif'); }
        else if(rating == 9){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834084746522656808/pat9.gif'); }
        else if(rating == 10){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834091244031442954/pat10.gif'); }
        else if(rating == 11){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834091284247216128/pat11.gif'); }
        else if(rating == 12){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834084833923825664/pat12.gif'); }
        else if(rating == 13){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093075239272448/pat13.gif'); }
        else if(rating == 14){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834094274197848084/pat14.gif'); }
        else if(rating == 15){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093165408419870/pat15.gif'); }
        else if(rating == 16){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093735477641246/pat16.gif'); }
        else if(rating == 17){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093783951605790/pat17.gif'); }
        else if(rating == 18){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093824871628890/pat18.gif'); }
        else if(rating == 19){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834094278769901618/pat19.gif'); }
        else if(rating == 20){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834094217743302676/pat20.gif'); }
        else if(rating == 21){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093252302340166/pat21.gif'); }
        else if(rating == 22){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834094199217061898/pat22.gif'); }
        else if(rating == 23){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093831476609025/pat23.gif'); }
        else if(rating == 24){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093804000378900/pat24.gif'); }
        else if(rating == 25){ patNum = ('https://cdn.discordapp.com/attachments/834081966423801886/834093220090216468/pat25.gif'); }


        // random number generator
        var patRating = Math.floor(Math.random() * 5) + 1;
        // will pick a random number between 1 and 5

        // number determining what pat will be shown
        if(patRating == 1){ patMessageEnding = (' pat! Cuz pats are nice'); }
        else if(patRating == 2){ patMessageEnding = (' pat! *pat pat*'); }
        else if(patRating == 3){ patMessageEnding = (' pat! Kawaii~'); }
        else if(patRating == 4){ patMessageEnding = (' pat!'); }
        else if(patRating == 5){ patMessageEnding = (' pats! Cuz cookie is nom'); }


        // determines if user was pinged or not
        if(message.mentions.users.first()){
            userMentioned = message.mentions.users.first().username }
            
        else{ 
            var patPrefix = 'a.pat '
            userMentioned = message.content.slice(patPrefix.length); }


        // embed for pat
        const Discord = require('discord.js');
        const patEmbed = new Discord.MessageEmbed()
        .setColor('#0F52A3')
        .setAuthor(message.author.username + ' gives ' + userMentioned + patMessageEnding, message.author.displayAvatarURL())
        .setImage(patNum)

        message.channel.send(patEmbed);

    }
}