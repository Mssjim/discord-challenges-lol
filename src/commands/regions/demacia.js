const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'demacia',
    aliases: [],
    description: 'Exibe campeões de **Demacia**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Por Demacia')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Demacia`)
            .setColor(colors.primary)
            .setImage(images.demacia)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}