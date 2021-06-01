const Discord = require("discord.js");
module.exports = {
    name: 'pegasus',
    description: "custom command for pegasus",
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#86b9dd')
        .setTitle('Pegasus')
        .setDescription('Thank you for using this bot. Love you all <3')
      
        message.channel.send(newEmbed);
    }

  
   
}