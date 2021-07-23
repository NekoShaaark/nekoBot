const {google} = require('googleapis');
const sheets = google.sheets('v4');

module.exports = async(message) => {


// variables
const messageContent = (message.content).toLowerCase()
var responseRequest
var responseName

var determinedRange
var determinedDimension

var prefix
const userContent = message.content.split(' ')


//main function
async function main() {
const authClient = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });


// sheet picker
    //sheet1
    if(messageContent.includes('sheet1')){
        message.channel.send('Sowwy, Sheet1 does not work.') //fix this
        return;
        }
        
    //sheet2
    else if(messageContent.includes('sheet2')){
        determinedRange = "Sheet2!A:A"
        determinedDimension = "ROWS"
        }

    //else none
    else{ message.channel.send('Please specify a sheet or nu data nom.') 
        return; }

        
    //array/string to append
    prefix = userContent[0] + userContent[1] + userContent[2] + '   ' //three spaces due to spaces between three words
    userMentioned = message.content.slice(prefix.length)


    //append values//RENAME
    const request = {
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: determinedRange,
        valueInputOption: 'USER_ENTERED',
        resource: {
          "range": determinedRange,
          "majorDimension": determinedDimension,
          "values": [
            [`${userMentioned}`, `${message.author.username}`], //inputted value along with user that inputted the value 
          ]
        },
        auth: authClient,
      };


    try {

    //------append------

    const response = (await sheets.spreadsheets.values.append(request)).data;
    console.log(JSON.stringify(response, null, 2));
    
    message.channel.send('Request submitted! <:rainbowAwoo:861578124751405076>')

    //------------------


    } catch (err) { console.error(err) }} 
    main()}