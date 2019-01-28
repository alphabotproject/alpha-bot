const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Im ready my leader');
	client.music = require("discord.js-musicbot-addon");

client.music.start(client, {
youtubeKey: "AIzaSyB3yMFEIoUiCDy9hqUDhF6evukIOetV6Ms"
});
client.on('message', message => {
	if (message.content === 'help') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send(`https://discord.gg/t4yqy26`);
        
    };
});
client.login('INSERT BOT TOKEN');
