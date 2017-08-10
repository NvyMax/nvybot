/*/      Script for NVY BOT     /*/
/*/             By Nvy.io             /*/  
/*/       Discord.jd v 11.101      /*/


/*
  Basic needs: A bot that welcomes new guild members when they join
*/
// Reminder - client = nvybot

const Discord = require('discord.js');
const nvybot = new Discord.Client(); //client
const token = require('./settings.json');

nvybot.on('ready', () => {
  console.log('Prepare to be nvy\'d!');
});

nvybot.on('message', message => {
  if (message.content === 'test') {
    message.reply('Ready to work baby!');
  }
});

nvybot.login('token');