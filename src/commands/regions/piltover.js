const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");
const data = require("../../resources/champions.json");

module.exports = {
    name: 'piltover',
    aliases: [],
    description: 'Exibe campeões de **Piltover**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const champs = data.regioes['Piltover'];
        const embed = new EmbedBuilder()
            .setTitle('Tudo Calculado')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Piltover`)
            .setColor(colors.primary)
            .setImage(images.piltover)
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