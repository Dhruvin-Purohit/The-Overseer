  
const { Command } = require('discord-akairo')
const { MessageEmbed } = require('discord.js')

module.exports = class Ping extends Command{
    constructor() {
        super("binary", {
            aliases: ["bnr"],
            editable: false,
            typing: true,
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Encode or decode a text in binary."
            }
        })
    }

    async exec(message) {

if (!args[0]) return message.channel.send("Unknown parameter. Please choose the method first, either decode or encode it.");

    let choice = ["encode", "decode"];
    if (!choice.includes(args[0].toLowerCase())) return message.channel.send("Choose to encode or either deode :)");

    let text = args.slice(1).join(" ");

    if (!text) return message.channel.send("Please gimme some text :)");


    if (text.length > 1024) return message.channel.send("That is way too much. The maximum character is 1,024 :/");

    function encode(char) {
        return char.split("").map(str => {
            const converted = str.charCodeAt(0).toString(2);
            return converted.padStart(8, "0");
        }).join(" ")
    };

    function decode(char) {
        return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
    };

    if (args[0].toLowerCase() === "encode") {
        const encodeEmbed = new MessageEmbed()
        .setTitle('Encoded text successfully!')
        .addField('Input', `${text}`)
        .addField('Output', `${encode(text)}`)
        return message.channel.send(encodeEmbed);
    } else if (args[0].toLowerCase() === "decode") {
        if (args[0].toLowerCase() === "encode") {
        const encodeEmbed = new MessageEmbed()
        .setTitle('Decoded text successfully!')
        .addField('Input', `${text}`)
        .addField('Output', `${decode(text)}`)
        return message.channel.send(decode(text));
    }
    }
}
