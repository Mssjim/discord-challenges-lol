const { EmbedBuilder } = require("discord.js");
const colors = require("../../resources/colors.json");
const emojis = require("../../resources/emojis.json");
const pagination = require("../../pagination");
const { titleCase } = require("../../functions");

module.exports = {
    name: 'help',
    aliases: ['h', 'ajuda', '?'],
    description: 'Exibe os comandos do bot',
    category: 'core',

    run: async(client, msg, args) => {
        const pages = [];
        const categories = Array.from(client.categories.keys());
        categories.push(categories.splice(categories.indexOf('core'), 1)[0]);

        categories.forEach(category => {
            if(!client.categories.get(category) || !client.categories.get(category)[0]) return;
            const commands = client.categories.get(category);
            category = titleCase(category);
            let fields = [];

            commands.forEach(command => {
                command = client.commands.get(command);
                fields.push({
                    name: `\`${client.prefix}${command.name}\``,
                    value: `${command.description || "..."}`
                });
            });

            pages.push(
                new EmbedBuilder()
                    .setTitle(`${emojis.icon} Comandos de **${category}**`)
                    .addFields(fields)
                    .setColor(colors.primary)
                    .setTimestamp()
                    .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()})
            );
        });

        pagination(msg, pages, ['◀️', '▶️']);
    }
}