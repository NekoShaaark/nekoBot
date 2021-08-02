const Commando = require('discord.js-commando')
module.exports = class googleSheetsCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'google.sheets',
            aliases: ['gs'],
            group: 'dev',
            memberName: 'google.sheets',
            description: 'Neko sheets nom',
            details: 'View or append the specified google sheets sheet using the googlesheetsapi',
            examples: ['a.google.sheets <view> <sheet-name>', 'a.google.sheets <append> <sheet-name>']
        })
    }


    // runs the command
    async run(message){

      //variables
      const messageContent = (message.content).toLowerCase()

      const viewArray = ['view', '-v',]
      const appendArray = ['append', '-a', 'add', '-add']

      const sheetsView = require('./sheets/view')
      const sheetsAppend = require('./sheets/append')


      // action picker
      if(viewArray.some(aliases => messageContent.includes(aliases))){ sheetsView(message) }
      else if(appendArray.some(aliases => messageContent.includes(aliases))){ sheetsAppend(message) }

      else{ message.channel.send('Please specify what (view, append ...)') }

    }     
}