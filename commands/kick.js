const Discord = require("discord.js");
module.exports = {
    name: 'kick',
    description: "This command kicks a member",
    execute(message, args){
        if (!message.guild) return;

        // If the message content starts with "!kick"
        if (message.content.startsWith('p?kick')) {
          // Assuming we mention someone in the message, this will return the user
          // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
          const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
          // If we have a user mentioned
          if (user) {
            // Now we get the member from the user
            const member = message.guild.members.resolve(user); 
            // If the member is in the guild
            if (member) {
              /**
               * Kick the member
               * Make sure you run this on a member, not a user!
               * There are big differences between a user and a member
               */
              member
                .kick('Optional reason that will display in the audit logs')
                .then(() => {
                  // We let the message author know we were able to kick the person
                  message.channel.send(`Successfully kicked ${user.tag}`);
                })
                .catch(err => {
                  // An error happened
                  // This is generally due to the bot not being able to kick the member,
                  // either due to missing permissions or role hierarchy
                  message.channel.send('I was unable to kick the member');
                  // Log the error
                  console.error(err);
                });
            } else {
              // The mentioned user isn't in this guild
              message.channel.send("That user isn't in this guild!");
            }
            // Otherwise, if no user was mentioned
          } else {
            message.channel.send("You didn't mention the user to kick!");
          }
        }
    }}