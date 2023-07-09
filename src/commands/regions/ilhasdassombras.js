const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");
const data = require("../../resources/champions.json");

module.exports = {
    name: 'ilhasdassombras',
    aliases: ['ilha', 'ids', 'is', 'sombras', 'ilhas'],
    description: 'Exibe campeões das **Ilha das Sombras**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const champs = data.regioes['Ilhas das Sombras'];
        const embed = new EmbedBuilder()
            .setTitle('Viu Aquele Vulto?!')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões das Ilha das Sombras`)
            .setColor(colors.primary)
            .setImage(images.ilhasdassombras)
            .setTimestamp()
            .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()});
        
        for(compName in data.comps) {
            const comp = data.comps[compName];
            if(compName == "Variedade") {
                for(className in comp.champs) {
                    const similarChamps = comp.champs[className].filter(champ => champs.includes(champ));
                    if(similarChamps.length >= comp.min) {
                        embed.addFields([{
                            name: `__${className}__`, value: "`" + similarChamps.join("` `") + "`"
                        }])
                    }
                }
            } else {
                const similarChamps = comp.champs.filter(champ => champs.includes(champ));
                if(similarChamps.length >= comp.min) {
                    embed.addFields([{
                        name: compName, value: "`" + similarChamps.join("` `") + "`", inline: true
                    }])
                }
            }
        }
        
        msg.channel.send({embeds: [embed], content: msg.author.toString()});
    }
}