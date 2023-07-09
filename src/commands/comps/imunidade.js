const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");
const data = require("../../resources/champions.json");

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
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()});

        const comp = data.comps['Imunidade'];
        const champs = comp.champs;
        for(regionName in data.regioes) {
            const region = data.regioes[regionName];
            const similarChamps = region.filter(champ => champs.includes(champ));
            if(similarChamps.length >= comp.min) {
                embed.addFields([{
                    name: regionName, value: "`" + similarChamps.join("` `") + "`", inline: true
                }])
            }
        }
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}