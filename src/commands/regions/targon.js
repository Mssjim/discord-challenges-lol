const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'targon',
    aliases: [],
    description: 'Exibe campeões de **Targon**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Pico de Desempenho')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Targon`)
            .setColor(colors.primary)
            .setImage(images.targon)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}