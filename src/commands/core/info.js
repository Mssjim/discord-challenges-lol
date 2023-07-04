const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const emojis = require("../../resources/emojis.json");

module.exports = {
    name: 'info',
    aliases: [],
    description: 'Mostra informações sobre o bot',
    category: 'core',

    run: async(client, msg, args) => {

        const embed = new EmbedBuilder()
            .setTitle(`${emojis.icon} Challenges LOL`)
            .setDescription(`Bot com informações sobre desafios do League of Legends\n\n Digite \`${client.prefix}help\` para obter lista de comandos!`)
            .setColor(colors.primary)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}