const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");
const data = require("../../resources/champions.json");

module.exports = {
    name: 'zaun',
    aliases: ['quimtec'],
    description: 'Exibe campeões de **Zaun**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const champs = data.regioes['Zaun'];
        const embed = new EmbedBuilder()
            .setTitle('Camaradas Quimtec')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Zaun`)
            .setColor(colors.primary)
            .setImage(images.zaun)
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