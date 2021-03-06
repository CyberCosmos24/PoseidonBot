module.exports = {
    name: 'clear',
    description: "Clear messages!",
   async  execute(message, args) {   
       {
          if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send("You cant use this command");
          if (!isNaN(message.content.split(' ')[1])) {
            let amount = 0;
            if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
              amount = 1;
            } else {
              amount = message.content.split(' ')[1];
              if (amount > 100) {
                amount = 100;
              }
            }
            await message.channel.bulkDelete(amount, true).then((_message) => {
              message.channel.send(`${message.author} cleared \`${_message.size}\` messages `).then((sent) => {
                setTimeout(function () {
                  sent.delete();
                }, 4000);
              });
            });
          } else {
            message.channel.send('enter the amount of messages that you would like to clear').then((sent) => {
              setTimeout(function () {
                sent.delete();
              }, 4000);
            });
          }
        }
        }
    }
    