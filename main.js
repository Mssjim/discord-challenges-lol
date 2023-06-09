require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const keepalive = require('./server.js');

// Code
console.log('Starting...');
console.log(`\x1b[36m====================================\x1b[0m`);

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMessageReactions
  ]});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = new Discord.Collection();

// Handlers
fs.readdirSync('./src/handlers/').forEach(async(handler) => {
    await require(`./src/handlers/${handler}`)(client);
});

client.login(process.env.TOKEN);
keepalive();