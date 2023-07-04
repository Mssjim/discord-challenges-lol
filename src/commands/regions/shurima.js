const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'shurima',
    aliases: [],
    description: 'Exibe campeões de **Shurima**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('O Disco Solar Nunca se Põe')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Shurima`)
            .setColor(colors.primary)
            .setImage(images.shurima)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}