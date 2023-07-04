const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");

module.exports = {
    name: 'aguasdesentina',
    aliases: ['aguas', 'sentina', 'as', 'ads'],
    description: 'Exibe campeões de **Águas de Sentina**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Toda a Ajuda Possível')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Águas de Sentina`)
            .setColor(colors.primary)
            .setImage(images.aguasdesentina)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}