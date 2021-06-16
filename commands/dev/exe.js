const Commando = require('discord.js-commando')
module.exports = class exeCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'exe',
            group: 'dev',
            memberName: 'exe',
            description: 'Quick way to test stuff'
        })
    }


    // runs the command
    async run(message){

      // variables
      const {google} = require('googleapis');
      const sheets = google.sheets('v4');

      //main function
      async function main () {
      const authClient = new google.auth.GoogleAuth({
          keyFile: 'credentials.json',
          scopes: 'https://www.googleapis.com/auth/spreadsheets'
          });

        const request = {
          spreadsheetId: process.env.SPREADSHEET_ID,
          range: 'Sheet1!A1:J1', //range of request
          auth: authClient,
        };
        const name = {
          spreadsheetId: process.env.SPREADSHEET_ID,
          range: 'Sheet1!A2:J2',  //range of name
          auth: authClient,
        };
    

        try {
          // response 1
          const response = (await sheets.spreadsheets.values.get(request)).data.values[0];
          //console.log(JSON.stringify(response, null, 2));

          //response 2
          const response2 = (await sheets.spreadsheets.values.get(name)).data.values[0];
          //console.log(JSON.stringify(response2, null, 2));


          //------embed------
          const { MessageEmbed } = require("discord.js")
          var embed = new MessageEmbed();
                    
          for (let i = 0; i < response.length; i++) 
          { embed.addField(response[i], response2[i], false) }
          
          message.channel.send(embed)
          //-----------------


        } catch (err) { console.error(err); }
      }
      main();
  }
}