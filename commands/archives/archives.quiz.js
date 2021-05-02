const Commando = require('discord.js-commando')
module.exports = class ArchivedQuiz extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'archives.quiz',
            group: 'archives',
            memberName: 'archives.quiz',
            description: 'Archived quiz system'
        })
    }


    // runs the command
    async run(message){
 
        const quiz = require('./quiz.json');
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = response => {
            return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };
        
        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
                .then(collected => {
                    message.channel.send(`${collected.first().author} got the correct answer!`);
                })
                .catch(collected => {
                    message.channel.send('Looks like nobody got the answer this time.');
                });
        });       

    }
}