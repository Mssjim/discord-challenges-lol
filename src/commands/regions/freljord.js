const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'freljord',
    aliases: [],
    description: 'Exibe campeões de **Freljord**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Tá Pronto o Sorvetinho')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Freljord`)
            .setColor(colors.primary)
            .setImage(images.freljord)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}