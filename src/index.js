const { REST } = require("@discordjs/rest"); // Define REST.
const { Routes } = require("discord-api-types/v9"); // Define Routes.
const fs = require("fs"); // Define fs (file system).
const { Client, Intents, Collection } = require("discord.js"); // Define Client, Intents, and Collection.
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
}); // Connect to our discord bot.
////
client.on(`ready` , ()=>{
console.log(`Up Up Up!!`);
})

client.on(`messageCreate`, async message =>{
if(message.author.bot) return;
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
message.channel.send(uptime);
})
////
client.login(token); // Login to the bot client via the defined "token" string.
