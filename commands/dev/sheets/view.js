const {google} = require('googleapis');
const sheets = google.sheets('v4');

module.exports = async(message) => {


// variables
const messageContent = (message.content).toLowerCase()
var responseRequest
var responseName

//main function
async function main() {
const authClient = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });

    const request = {
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: '',  //range of request
      auth: authClient,
    };
    const name = {
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: '',  //range of name
      auth: authClient,
    };

// sheet picker
    //sheet1
    if(messageContent.includes('sheet1')){ 
        request.range = 'Sheet1!1:1'
        name.range = 'Sheet1!2:2'
        responseRequest = (await sheets.spreadsheets.values.get(request)).data.values[0];
        responseName = (await sheets.spreadsheets.values.get(name)).data.values[0];}
        
    //sheet2
    else if(messageContent.includes('sheet2')){
        request.range = 'Sheet2!A:A'
        name.range = 'Sheet2!B:B'
        responseRequest = (await sheets.spreadsheets.values.get(request)).data.values;
        responseName = (await sheets.spreadsheets.values.get(name)).data.values; }

    //else none
    else{ message.channel.send('Please specify a sheet or nu data nom.') 
        return; }
            

    try {

    //------embed------
    const { MessageEmbed } = require('discord.js')
    var embed = new MessageEmbed();

    for (let i = 0; i < responseRequest.length; i++) 
    { embed.addField(responseRequest[i], responseName[i], false) }

    message.channel.send(embed)
    //-----------------


    } catch (err) { console.error(err); }}
    main()}