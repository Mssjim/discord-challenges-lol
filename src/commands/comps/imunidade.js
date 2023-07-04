const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'imunidade',
    aliases: ['zumbi', 'ressuscitacao', 'reza', 'ressuscitar', 'imune'],
    description: 'Exibe campeões com **Imunidade**',
    category: 'comps',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Eles... Nunca... MORREM!')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida em que **3** ou mais campeões tenham Habilidades de Ressuscitação, Imunidade ou Zumbi`)
            .setColor(colors.primary)
            .setImage(images.imunidade)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}