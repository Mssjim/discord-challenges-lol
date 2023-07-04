const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'bandopolis',
    aliases: ['yordle', 'yordles', 'bp'],
    description: 'Exibe campeões de **Bandópolis**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('5 Sob 5 Palmos')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Bandópolis`)
            .setColor(colors.primary)
            .setImage(images.bandopolis)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}