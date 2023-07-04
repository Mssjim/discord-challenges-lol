const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'ixtal',
    aliases: [],
    description: 'Exibe campeões de **Ixxtal**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Elemental, Meu Caro Watson')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Ixtal`)
            .setColor(colors.primary)
            .setImage(images.ixtal)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}