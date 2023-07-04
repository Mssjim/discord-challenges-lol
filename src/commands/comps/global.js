const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'global',
    aliases: [],
    description: 'Exibe campeões com **Habilidade Global**',
    category: 'comps',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('"Ultimate" Já Diz Tudo')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida em que **3** ou mais campeões tenham Habilidades Globais`)
            .setColor(colors.primary)
            .setImage(images.ultimate)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}