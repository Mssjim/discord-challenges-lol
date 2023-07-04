const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");

module.exports = {
    name: 'ping',
    aliases: ['checkping', 'checkms'],
    description: 'Ping',
    category: 'core',

    run: async(client, msg, args) => {
        const pingMsg = await msg.channel.send(`${msg.author.toString()} :ping_pong: Pinging...`);

        const embed = new EmbedBuilder()
            .setTitle(':ping_pong: Pong!')
            .setDescription(`${client.ws.ping} ms`)
            .setColor(colors.primary)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        pingMsg.edit({embeds: [embed], content: msg.author.toString()});
    }
}