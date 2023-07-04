const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'noxus',
    aliases: [],
    description: 'Exibe campeões de **Noxus**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Força Acima de Tudo')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Noxus`)
            .setColor(colors.primary)
            .setImage(images.noxus)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}