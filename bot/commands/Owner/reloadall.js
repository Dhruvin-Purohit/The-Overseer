const { Command, Argument } = require('discord-akairo')
const dmd = require('discord-md-tags')
const emojis = require('../../utils/emojis.json')

module.exports = class Reloadall extends Command {
    constructor() {
        super('reloadall', {
            aliases: ['reloadall'],
            ownerOnly: true,
            typing: true,
            clientPermissions: ['SEND_MESSAGES', 'ADD_REACTIONS', 'USE_EXTERNAL_EMOJIS'],
            description: {
                content: 'Reload every listener, command & inhibitor'
            }
        })
    }
    async exec(message) {
        try{
            await this.client.InhibitorHandler.reloadAll()
            await this.client.CommandHandler.reloadAll()
            await this.client.ListenerHandler.reloadAll()
            message.react(emojis.discord.CheckMark)
        }
        catch(err){
            const embed = new MessageEmbed()
            .addField(`Error Reloading Everything`, dmd.codeblock('powershell') `${err}`)
            await message.util.send(embed)
        }
    }
}