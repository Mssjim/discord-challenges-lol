const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");
const data = require("../../resources/champions.json");

module.exports = {
    name: 'ultimate',
    aliases: ['ult'],
    description: 'Exibe campeões com **Ultimate**',
    category: 'comps',

    run: async(client, msg, args) => {
        const embed = new EmbedBuilder()
            .setTitle('"Ultimate" Já Diz Tudo')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida em que **3** ou mais campeões tenham Ultimates com grande área de ação`)
            .setColor(colors.primary)
            .setImage(images.ultimate)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()});

        const comp = data.comps['Ultimate'];
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