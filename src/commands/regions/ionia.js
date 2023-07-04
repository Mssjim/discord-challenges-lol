const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'ionia',
    aliases: [],
    description: 'Exibe campeões de **Ionia**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Só no Wuju')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Ionia`)
            .setColor(colors.primary)
            .setImage(images.ionia)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}