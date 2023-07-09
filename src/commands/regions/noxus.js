const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const images = require("../../resources/images.json");
const data = require("../../resources/champions.json");

module.exports = {
    name: 'noxus',
    aliases: [],
    description: 'Exibe campeões de **Noxus**',
    category: 'regiões',

    run: async(client, msg, args) => {
        const champs = data.regioes['Noxus'];
        const embed = new EmbedBuilder()
            .setTitle('Força Acima de Tudo')
            .setDescription(`Em uma equipe predefinida de 5 pessoas, vença uma partida somente com campeões de Noxus`)
            .setColor(colors.primary)
            .setImage(images.noxus)
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