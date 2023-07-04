
const { Events } = require('discord.js');

module.exports = client => {
    client.on(Events.ClientReady, () => {
        console.log(`\x1b[36m====================================\x1b[0m`);
        console.log(`${client.user.tag} Ready!`);
    });
}
