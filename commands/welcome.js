const Discord = require("discord.js");
module.exports = {
    name: 'welcome',
    description: "welcome to the server",
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#875fe6')
        .setTitle(`Welcome To ${message.guild.name} `)
      
        message.channel.send(newEmbed);
    }

  
   
}