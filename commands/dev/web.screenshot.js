const Commando = require('discord.js-commando')
module.exports = class webscreenshotCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'web.screenshot',
            aliases: ['sc', 'screenshot'],
            group: 'dev',
            memberName: 'web.screenshot',
            description: 'Scrapes website pages'
        })
    }


    // runs the command
    async run(message){

        //variables
        const puppeteer = require('puppeteer');
        const fs = require('fs');

        const userContent = message.content.split(' ')
        var prefixSplit
        var userURL


        //determines if url argument is present or not
        if(userContent[1]){

            //string after prefix
            prefixSplit = userContent[0] + ' '
            userURL = message.content.slice(prefixSplit.length)}

        //no string after prefix
        else{ message.channel.send('Please specify a website URL to screenshot~') 
        return; }


        //generate/scrap image from given website
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(`${userURL}`);
            await page.screenshot({ path: 'image.png' });
            await browser.close();
            console.log('File generated')

            //send image
            await message.channel.send({ files: [ "./image.png" ] })
            console.log('File sent')

            //remove image
            const path = './image.png'
            fs.unlinkSync(path)
            console.log('File removed')            
        })();
  }
}