
  
   
const Discord = require("discord.js");
module.exports = {
    name: 'help',
    description: "commands",
    execute(message, args){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#875fe6')
        .setTitle('Commands')
        .setDescription('Poseidon Bot Commands')
        .addFields(
        {
            name:'kick (@user)' , 

            value: 'Kicks a user '
         },
         {
             name:'ban (@user)',
            value:'Bans a user'
        },
        {
        name:'warn (@user) <reason>',
        value: 'Warns a user'},
        
        {name:'clear <amount of messages>' , value:'Clears messages'},
        {name:'info' , value:'information about the server'},
        {name:'botinfo' , value:'Information about the bot'},
        {name:'user-info (@user)' , value:'Information about a user'},
        {name:'welcome',value:'Welcome a person to the server'},
        {name:'pegasus' , value:'A message from the bot owner'}

        )
        .setTimestamp()
        .setFooter('Made by FieryPegasus#6457 ')
        message.channel.send(newEmbed);
    }

  
   
}