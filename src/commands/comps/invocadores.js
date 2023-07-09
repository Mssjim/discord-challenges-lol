const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");
const data = require("../../resources/champions.json");

module.exports = {
    name: 'invocadores',
    aliases: ['invocador', 'mascote', 'mascotes'],
    description: 'Exibe campeões com **Invocações/Mascotes**',
    category: 'comps',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('Invocadores no Rift')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida em que **TODOS** os campeões tenham Invocações ou Mascotes`)
            .setColor(colors.primary)
            .setImage(images.invocadores)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()});

        const comp = data.comps['Invocadores'];
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