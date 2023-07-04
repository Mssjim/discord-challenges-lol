const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'zaun',
    aliases: ['quimtec'],
    description: 'Exibe campeões de **Zaun**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Camaradas Quimtec')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Zaun`)
            .setColor(colors.primary)
            .setImage(images.zaun)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}