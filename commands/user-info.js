const { MessageEmbed } = require('discord.js');



module.exports = {
    name: "user-info",
    category: "extra",
    execute(message ,args,Discord)  {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const newEmbed = new Discord.MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor(`#875fe6`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "👤 Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name:  '🖼 Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
        
            )
            .setTimestamp()
            .setFooter(`Info About ${user.user.username}`)

            message.channel.send(newEmbed);
          
    }
}