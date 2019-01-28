const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Im ready my leader');
});
client.on('message', message => {
	if (message.content === 'help') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send(`https://discord.gg/t4yqy26`);

    };
});
client.login('INSERT BOT TOKEN');
