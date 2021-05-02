const Commando = require('discord.js-commando')
module.exports = class fortuneCookieCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'fortunecookie',
            aliases: ['cookie'],
            group: 'misc',
            memberName: 'misc',
            description: 'Gives a random fortune from the fortune cookie of doom cuz why not'
        })
    }


    // runs the command
    async run(message){

        // random number generator
        var rating = Math.floor(Math.random() * 10) + 1;
        var fortune
        //will pick a random number between 1 and 10

        if(rating == 1){ fortune = ('Lots of cookies is good'); }
        else if(rating == 2){ fortune = ('Something new is learnt with every passing day'); }
        else if(rating == 3){ fortune = ("Courtesy is contagious."); }
        else if(rating == 4){ fortune = ('Follow da cookie for good luck'); }
        else if(rating == 5){ fortune = ('Congratulations! You won a free cookie coupon.'); }
        else if(rating == 6){ fortune = ('The early bird gets the worm, but the second mouse gets the cheese.'); }
        else if(rating == 7){ fortune = ('Nothing is impossible to a willing heart.'); }
        else if(rating == 8){ fortune = ('The wise man is the one that makes you think that he is dumb.'); }
        else if(rating == 9){ fortune = ('He who throws mud loses ground.'); }
        else if(rating == 10){ fortune = ('Cookies are best enjoyed with more cookies'); }

        // sends fortune from fortune cookie
        var userUsername = message.author.username
        message.channel.send(`${userUsername} opens a fortune cookie 🥠`);
        message.channel.send(`Your fortune reads: "${fortune}"`);

    }
}