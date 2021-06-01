const Discord = require("discord.js");
module.exports = {
    name: 'botinfo',
    description: "infromation about this server",
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#875fe6')
        .setTitle('Bot Information')
        .addFields(
            {name:'Bot Owner' , value:'FieryPegasus#6457'},
            {name:'Bot Creation Date' , value: '4/11/2021'},
            {name:'Invite', value:' https://discord.com/oauth2/authorize?client_id=830715030248226828&scope=bot&permissions=8'},
            {name:'Support Server', value: 'https://discord.gg/dZEpx4zsjF'}
         
        
        )
        message.channel.send(newEmbed);
    }

  
   
}
