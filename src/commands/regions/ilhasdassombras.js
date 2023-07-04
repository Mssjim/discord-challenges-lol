const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'ilhasdassombras',
    aliases: ['ilha', 'ids', 'is', 'sombras', 'ilhas'],
    description: 'Exibe campeões das **Ilha das Sombras**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Viu Aquele Vulto?!')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões das Ilha das Sombras`)
            .setColor(colors.primary)
            .setImage(images.ilhasdassombras)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}