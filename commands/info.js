const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "info",
    execute(message ,args,){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have the permissions.") 
        let region;
        switch (message.guild.region) {
            case "europe":
                region = 'πͺπΊ Europe';
                break;
            case "us-east":
                region = 'πΊπΈ us-east'
                break;
            case "us-west":
                region = 'πΊπΈ us-west';
                break;
            case "us-south":
                region = 'πΊπΈ us-south'
                break;
            case "us-central":
                region = 'πΊπΈ us-central'
                break;
        }

        const newEmbed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#875fe6')
            .setTitle(`${message.guild.name} server stats`)
            .addFields(
                {
                    name: "β¨ Owner: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "β­ Members: ",
                    value: `There are ${message.guild.memberCount} users!`,
                    inline: true
                },
                {
                    name: "π Members Online: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,
                    inline: true
                },
                {
                    name: "π€ Total Bots: ",
                    value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "π¨ Creation Date: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "π‘ Roles Count: ",
                    value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                    inline: true,
                },
                {
                    name: `πΊ Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `βοΈVerified: `,
                    value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                    inline: true
                },
                {
                    name: 'πBoosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                    inline: true
                },
                {
                    name: "πEmojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis' ,
                    inline: true
                }
            )
            .setTimestamp()
            .setFooter(`Info About ${message.guild.name} `)
            message.channel.send(newEmbed);
    }
}

