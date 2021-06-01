const Discord = require('discord.js');
const mongoose = require('mongoose')






const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Welcome Back Pegasus`);
  console.log(`Pegasus is dadddy`);

  setInterval(() => {
    const statuses = [
    ' over you']
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setActivity(status, { type: "WATCHING" })
    }, 12000)
});
 
  
 


  const prefix = 'p?';

  const fs = require('fs');


  client.commands = new Discord.Collection();

  const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
  for(const file of commandFiles){
        const command = require(`./commands/${file}`);

        client.commands.set(command.name, command);
  
    } 

    client.on('message', message => { 

        if (!message.content.startsWith(prefix) || message.author.bot) return;
        
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
        
        if(command === 'kick'){
          client.commands.get('kick').execute(message, args);
          
        }else if(command == 'welcome'){
            client.commands.get('welcome').execute(message , args);
        }
         if(command === 'help'){
            client.commands.get('help').execute(message , args);
        }else if(command == 'info'){
            client.commands.get('info').execute(message , args);
        }
        if(command === 'botinfo'){
            client.commands.get('botinfo').execute(message , args);
        }
        if(command === 'ban'){
            client.commands.get('ban').execute(message , args);
        }else if(command == 'dm'){
            client.commands.get('dm').execute(message ,args);
        }
        if(command == 'ping'){
            client.commands.get('ping').execute(message ,args)
        }else if(command === 'hades'){
            client.commands.get('hades').execute(message ,args,)
        }
        if(command === 'pegasus'){
            client.commands.get('pegasus').execute(message , args);
        }else if(command == 'user-info'){
            client.commands.get('user-info').execute(message ,args,Discord);
        }
        if(command === 'clear'){
            client.commands.get('clear').execute(message,args)
        }else if(command == 'warn'){
            client.commands.get('warn').execute(message ,args)
        }
        if(command === 'test'){
            client.commands.get('test').execute(message ,args)
        }else if(command == ''){
            client.commands.get('').execute(message ,args)
        }
        if(command === 'warning'){
            client.commands.get('warning').execute(message ,args)
        }else if(command == 'mute'){
            client.commands.get('mute').execute(message , args);
        }
    });

    

















    client.login(TOKEN)
