const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'vazio',
    aliases: [],
    description: 'Exibe campeões do **Vazio**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('(Sons Desumanos Estridentes)')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões do Vazio`)
            .setColor(colors.primary)
            .setImage(images.vazio)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}